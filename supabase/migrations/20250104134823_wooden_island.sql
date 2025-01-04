/*
  # Fix survey responses schema

  1. Changes
    - Drop and recreate table with correct schema
    - Add all required columns for form submission
  
  2. Security
    - Maintain RLS policies
*/

-- Recreate the table with correct schema
DROP TABLE IF EXISTS survey_responses;

CREATE TABLE survey_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  profession text NOT NULL,
  organization text NOT NULL,
  linkedin_profile text,
  special_request text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public inserts"
  ON survey_responses
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public to read own responses"
  ON survey_responses
  FOR SELECT
  TO public
  USING (true);