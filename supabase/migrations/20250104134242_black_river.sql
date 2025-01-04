/*
  # Update survey_responses table schema

  1. Changes
    - Remove unused columns (contact_number, gender, address)
    - Add new columns for job information and special requests
    
  2. New Columns
    - job_role (text)
    - profession (text)
    - organization (text)
    - location (text)
    - special_request (text)

  3. Security
    - Maintain existing RLS policies
*/

-- Add new columns
ALTER TABLE survey_responses 
  ADD COLUMN IF NOT EXISTS job_role text,
  ADD COLUMN IF NOT EXISTS profession text,
  ADD COLUMN IF NOT EXISTS organization text,
  ADD COLUMN IF NOT EXISTS location text,
  ADD COLUMN IF NOT EXISTS special_request text;

-- Remove unused columns safely
DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'survey_responses' AND column_name = 'contact_number'
  ) THEN
    ALTER TABLE survey_responses DROP COLUMN contact_number;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'survey_responses' AND column_name = 'gender'
  ) THEN
    ALTER TABLE survey_responses DROP COLUMN gender;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'survey_responses' AND column_name = 'address'
  ) THEN
    ALTER TABLE survey_responses DROP COLUMN address;
  END IF;
END $$;