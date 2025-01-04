export const questions = [
  {
    id: 'email',
    question: 'What is your email address?',
    type: 'email' as const,
    placeholder: 'name@example.com',
  },
  {
    id: 'firstName',
    question: 'What is your first name?',
    type: 'text' as const,
    placeholder: 'First Name',
  },
  {
    id: 'lastName',
    question: 'What is your last name?',
    type: 'text' as const,
    placeholder: 'Last Name',
  },
  {
    id: 'phoneNumber',
    question: 'What is your WhatsApp number?',
    type: 'tel' as const,
    placeholder: '+91 XXXXX XXXXX',
    description: 'We\'ll add you to our WhatsApp group for meetup updates',
  },
  {
    id: 'profession',
    question: 'What is your profession?',
    type: 'text' as const,
    placeholder: 'Enter your profession',
  },
  {
    id: 'organization',
    question: 'Where do you study/work?',
    type: 'text' as const,
    placeholder: 'Enter your college/company name',
  },
  {
    id: 'location',
    question: 'Where are you located?',
    type: 'text' as const,
    placeholder: 'City, Country',
  },
  // {
  //   id: 'linkedinProfile',
  //   question: 'Your LinkedIn Profile URL',
  //   type: 'url' as const,
  //   placeholder: 'https://linkedin.com/in/your-profile',
  //   description: 'Please provide your LinkedIn profile URL',
  // },
  {
    id: 'specialRequest',
    question: 'Any special request for us?',
    type: 'textarea' as const,
    placeholder: 'Share your thoughts or requests...',
  },
];