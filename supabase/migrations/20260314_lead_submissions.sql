-- Add new columns to existing lead_submissions table for apprapid.ro onboarding forms
-- The table already exists from the CRM with columns: id, name, business_name, email, phone,
-- service_interest, budget_range, message, source, honeypot_filled, submission_time_ms, processed, created_at, agency_id

ALTER TABLE public.lead_submissions ADD COLUMN IF NOT EXISTS product TEXT;
ALTER TABLE public.lead_submissions ADD COLUMN IF NOT EXISTS industry TEXT;
ALTER TABLE public.lead_submissions ADD COLUMN IF NOT EXISTS contact_name TEXT;
ALTER TABLE public.lead_submissions ADD COLUMN IF NOT EXISTS timeline TEXT;
ALTER TABLE public.lead_submissions ADD COLUMN IF NOT EXISTS budget TEXT;
ALTER TABLE public.lead_submissions ADD COLUMN IF NOT EXISTS details JSONB DEFAULT '{}';

-- Index for querying by product and date
CREATE INDEX IF NOT EXISTS idx_lead_submissions_product ON public.lead_submissions(product);
CREATE INDEX IF NOT EXISTS idx_lead_submissions_created ON public.lead_submissions(created_at DESC);

-- RLS policies (skip if already enabled)
ALTER TABLE public.lead_submissions ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'lead_submissions' AND policyname = 'Allow public inserts') THEN
    CREATE POLICY "Allow public inserts" ON public.lead_submissions FOR INSERT TO anon WITH CHECK (true);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'lead_submissions' AND policyname = 'Allow service role full access') THEN
    CREATE POLICY "Allow service role full access" ON public.lead_submissions FOR ALL TO service_role USING (true) WITH CHECK (true);
  END IF;
END $$;
