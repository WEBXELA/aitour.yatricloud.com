/*
  # Update survey responses schema

  1. Changes
    - Remove unused columns
    - Add required columns for form submission
  
  2. Security
    - Maintains existing RLS policies
*/

-- Remove unused columns safely
DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'survey_responses' AND column_name = 'state'
  ) THEN
    ALTER TABLE survey_responses DROP COLUMN state;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'survey_responses' AND column_name = 'country'
  ) THEN
    ALTER TABLE survey_responses DROP COLUMN country;
  END IF;
END $$;

-- Add or modify columns to match form fields
ALTER TABLE survey_responses
  ADD COLUMN IF NOT EXISTS profession text,
  ADD COLUMN IF NOT EXISTS organization text,
  ADD COLUMN IF NOT EXISTS special_request text;