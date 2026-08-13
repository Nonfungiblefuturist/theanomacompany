import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";

type AuthorizationDetails = {
  client?: { name?: string; client_name?: string; redirect_uri?: string } | null;
  scope?: string | null;
  redirect_url?: string | null;
  redirect_to?: string | null;
};

type OAuthNamespace = {
  getAuthorizationDetails: (id: string) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
  approveAuthorization: (id: string) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
  denyAuthorization: (id: string) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
};

const oauth = () => (supabase.auth as unknown as { oauth: OAuthNamespace }).oauth;

const SCOPE_LABELS: Record<string, string> = {
  openid: "Confirm who you are",
  email: "Share your email address",
  profile: "Share your basic profile",
};

export default function OAuthConsent() {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<AuthorizationDetails | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) {
        setError("Missing authorization_id in the request.");
        return;
      }
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        window.location.href = "/login?next=" + encodeURIComponent(next);
        return;
      }
      if (!active) return;
      setAccount(sess.session.user.email ?? null);
      const { data, error } = await oauth().getAuthorizationDetails(authorizationId);
      if (!active) return;
      if (error) {
        setError(error.message);
        return;
      }
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) {
        window.location.href = immediate;
        return;
      }
      setDetails(data);
    })();
    return () => { active = false; };
  }, [authorizationId]);

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const { data, error } = approve
      ? await oauth().approveAuthorization(authorizationId)
      : await oauth().denyAuthorization(authorizationId);
    if (error) {
      setBusy(false);
      setError(error.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("No redirect returned by the authorization server.");
      return;
    }
    window.location.href = target;
  }

  const clientName = details?.client?.name ?? details?.client?.client_name ?? "this app";
  const scopes = (details?.scope ?? "").split(" ").filter(Boolean);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6 py-16">
      <Helmet>
        <title>Authorize access — The Anoma Company</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="w-full max-w-md rounded-[20px] border border-border bg-card p-8">
        {error ? (
          <>
            <h1 className="text-2xl font-medium text-foreground">Authorization failed</h1>
            <p className="mt-3 text-sm text-muted-foreground">{error}</p>
          </>
        ) : !details ? (
          <p className="text-sm text-muted-foreground">Loading authorization request…</p>
        ) : (
          <>
            <h1 className="text-2xl font-medium text-foreground">
              Connect {clientName} to The Anoma Company
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              {clientName} will be able to call this app's enabled tools while you are signed in.
            </p>
            {account && (
              <p className="mt-4 text-sm text-muted-foreground">
                Signed in as <span className="text-foreground">{account}</span>
              </p>
            )}
            {details.client?.redirect_uri && (
              <p className="mt-2 break-all text-xs text-muted-foreground">
                Redirects to {details.client.redirect_uri}
              </p>
            )}
            {scopes.length > 0 && (
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {scopes.map((s) => (
                  <li key={s}>• {SCOPE_LABELS[s] ?? `Additional permission requested: ${s}`}</li>
                ))}
              </ul>
            )}
            <p className="mt-6 text-xs text-muted-foreground">
              This does not bypass this app's permissions or backend policies.
            </p>
            <div className="mt-8 flex gap-3">
              <button
                type="button"
                disabled={busy}
                onClick={() => decide(true)}
                className="flex-1 min-h-[44px] rounded-full bg-primary px-6 text-base font-medium text-primary-foreground disabled:opacity-50"
              >
                {busy ? "Working…" : "Approve"}
              </button>
              <button
                type="button"
                disabled={busy}
                onClick={() => decide(false)}
                className="flex-1 min-h-[44px] rounded-full border border-border px-6 text-base text-foreground disabled:opacity-50"
              >
                Cancel connection
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
