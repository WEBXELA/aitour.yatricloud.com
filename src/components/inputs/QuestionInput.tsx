import React from 'react';
import { SurveyQuestion } from '../../types/survey';

interface Props {
  question: SurveyQuestion;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  error?: string;
}

export const QuestionInput: React.FC<Props> = ({ 
  question, 
  value, 
  onChange, 
  onSubmit,
  error 
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && value.trim() !== '' && !error && question.type !== 'textarea') {
      onSubmit();
    }
  };

  const inputClasses = `w-full p-4 text-xl bg-white text-gray-900 border border-gray-200 outline-none rounded focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all
    ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`;

  const renderError = () => {
    if (!error) return null;
    return (
      <p className="mt-2 text-sm text-red-500">
        {error}
      </p>
    );
  };

  switch (question.type) {
    case 'email':
    case 'text':
    case 'url':
      return (
        <div>
          <input
            type={question.type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={question.placeholder}
            className={inputClasses}
            autoFocus
          />
          {renderError()}
        </div>
      );
    case 'select':
      return (
        <div>
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${inputClasses} appearance-none`}
          >
            <option value="" className="text-gray-400">
              Select an option
            </option>
            {question.options?.map((option) => (
              <option 
                key={option} 
                value={option}
                className="text-gray-900"
              >
                {option}
              </option>
            ))}
          </select>
          {renderError()}
        </div>
      );
    case 'textarea':
      return (
        <div>
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={question.placeholder}
            className={`${inputClasses} min-h-[150px] resize-y`}
            autoFocus
          />
          {renderError()}
        </div>
      );
    case 'checkbox':
      return (
        <div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={value === 'true'}
              onChange={(e) => onChange(e.target.checked ? 'true' : 'false')}
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-xl text-gray-900">Yes, I want to join</span>
          </label>
          {renderError()}
        </div>
      );
    default:
      return null;
  }
};