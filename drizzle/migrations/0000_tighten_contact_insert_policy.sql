DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;
CREATE POLICY "Anyone can submit valid contact form"
  ON public.contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(btrim(name)) BETWEEN 1 AND 100
    AND char_length(email) BETWEEN 3 AND 255
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND char_length(btrim(message)) BETWEEN 1 AND 5000
    AND (phone IS NULL OR char_length(phone) <= 50)
    AND (company IS NULL OR char_length(company) <= 200)
    AND (service_interest IS NULL OR char_length(service_interest) <= 300)
  );