
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service_interest TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public contact form)
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- No one can read/update/delete via the API
CREATE POLICY "No public read access"
  ON public.contact_submissions
  FOR SELECT
  USING (false);

CREATE POLICY "No public update access"
  ON public.contact_submissions
  FOR UPDATE
  USING (false);

CREATE POLICY "No public delete access"
  ON public.contact_submissions
  FOR DELETE
  USING (false);
