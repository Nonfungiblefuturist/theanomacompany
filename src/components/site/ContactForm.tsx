import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — connect to backend later
    console.log("Contact form submitted:", form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-4">
      <input
        type="text"
        placeholder="Name"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full rounded-lg border border-[hsl(0_0%_15%)] bg-[hsl(0_0%_5%)] px-4 py-3 font-inter text-sm text-[hsl(0_0%_96%)] placeholder:text-[hsl(0_0%_40%)] outline-none transition-colors focus:border-[hsl(193_100%_43%)]"
        aria-label="Name"
      />
      <input
        type="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full rounded-lg border border-[hsl(0_0%_15%)] bg-[hsl(0_0%_5%)] px-4 py-3 font-inter text-sm text-[hsl(0_0%_96%)] placeholder:text-[hsl(0_0%_40%)] outline-none transition-colors focus:border-[hsl(193_100%_43%)]"
        aria-label="Email"
      />
      <textarea
        placeholder="Message"
        required
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full resize-none rounded-lg border border-[hsl(0_0%_15%)] bg-[hsl(0_0%_5%)] px-4 py-3 font-inter text-sm text-[hsl(0_0%_96%)] placeholder:text-[hsl(0_0%_40%)] outline-none transition-colors focus:border-[hsl(193_100%_43%)]"
        aria-label="Message"
      />
      <button
        type="submit"
        className="w-full rounded-lg bg-[hsl(0_0%_96%)] px-6 py-3 font-inter text-sm font-medium text-[hsl(0_0%_3%)] transition-colors hover:bg-gradient-to-r hover:from-[hsl(330_85%_52%)] hover:to-[hsl(193_100%_43%)] hover:text-[hsl(0_0%_100%)]"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
