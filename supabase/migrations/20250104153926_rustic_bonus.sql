/*
  # Add phone number field
  
  1. Changes
    - Add phone_number column to survey_responses table
    
  2. Purpose
    - Store phone numbers for WhatsApp group updates
*/

ALTER TABLE survey_responses
ADD COLUMN IF NOT EXISTS phone_number text NOT NULL;