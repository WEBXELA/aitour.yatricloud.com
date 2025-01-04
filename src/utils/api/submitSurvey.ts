import { getSupabaseClient } from '../../config/supabase';
import { SurveyData } from './types';
import { validateSurveyData } from './validation';
import { ApiError, ValidationError } from './errors';
import { formatSurveyResponse } from './formatters';
import toast from 'react-hot-toast';

export async function submitSurvey(data: SurveyData): Promise<boolean> {
  const supabase = getSupabaseClient();
  
  if (!supabase) {
    toast.error('Please connect to Supabase before submitting.');
    return false;
  }

  try {
    validateSurveyData(data);
    const formattedData = formatSurveyResponse(data);

    const { error } = await supabase
      .from('survey_responses')
      .insert([formattedData]);

    if (error) {
      console.error('Supabase error:', error);
      if (error.code === '23505') {
        throw new ValidationError('This email has already been registered');
      }
      throw new ApiError(error.message);
    }

    return true;
  } catch (error) {
    if (error instanceof ValidationError || error instanceof ApiError) {
      throw error;
    }
    console.error('Submission error:', error);
    throw new ApiError('Failed to submit survey');
  }
}