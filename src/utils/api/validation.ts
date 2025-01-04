import { SurveyData } from './types';
import { ValidationError } from './errors';

export const validateSurveyData = (data: SurveyData): void => {
  if (!data.email || !data.email.includes('@')) {
    throw new ValidationError('Invalid email address');
  }

  if (!data.firstName?.trim()) {
    throw new ValidationError('First name is required');
  }

  if (!data.lastName?.trim()) {
    throw new ValidationError('Last name is required');
  }

  if (!data.profession?.trim()) {
    throw new ValidationError('Please select your profession');
  }

  if (!data.organization?.trim()) {
    throw new ValidationError('Organization name is required');
  }

  if (!data.location?.trim()) {
    throw new ValidationError('Location is required');
  }

  if (data.linkedinProfile && !data.linkedinProfile.includes('linkedin.com')) {
    throw new ValidationError('Invalid LinkedIn profile URL');
  }
};