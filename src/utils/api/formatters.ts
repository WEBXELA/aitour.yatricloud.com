import { SurveyData } from './types';

export const formatSurveyResponse = (data: SurveyData) => ({
  email: data.email,
  first_name: data.firstName,
  last_name: data.lastName,
  profession: data.profession,
  organization: data.organization,
  linkedin_profile: data.linkedinProfile,
  special_request: data.specialRequest || null,
});