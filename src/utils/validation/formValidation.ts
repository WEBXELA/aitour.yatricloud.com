import { SurveyData } from '../api/types';
import { ValidationError } from '../api/errors';
import {
  validateEmail,
  validateName,
  validateLinkedInUrl,
  validateUrl,
  validateReview,
  validateProfession,
  validatePhoneNumber
} from './validators';

interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const validateFormData = (data: SurveyData): ValidationResult => {
  const errors: Record<string, string> = {};

  // Required fields validation
  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  const firstNameError = validateName(data.firstName, 'First name');
  if (firstNameError) errors.firstName = firstNameError;

  const lastNameError = validateName(data.lastName, 'Last name');
  if (lastNameError) errors.lastName = lastNameError;

  const phoneError = validatePhoneNumber(data.phoneNumber);
  if (phoneError) errors.phoneNumber = phoneError;

  const professionError = validateProfession(data.profession);
  if (professionError) errors.profession = professionError;

  // Optional fields validation
  const linkedInError = validateLinkedInUrl(data.linkedinProfile);
  if (linkedInError) errors.linkedinProfile = linkedInError;

  const reviewError = validateReview(data.review);
  if (reviewError) errors.review = reviewError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateSurveyData = (data: SurveyData): void => {
  const { isValid, errors } = validateFormData(data);
  
  if (!isValid) {
    const errorMessages = Object.entries(errors)
      .map(([field, error]) => `${field}: ${error}`)
      .join('; ');
    throw new ValidationError(errorMessages);
  }
};