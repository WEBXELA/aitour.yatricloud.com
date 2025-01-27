import React from 'react';
import { FooterProps } from '../types/survey';
import { Linkedin } from 'lucide-react';

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const handleLinkedInClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open('https://linkedin.com/company/yatri-cloud', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className={`w-full py-6 px-4 border-t border-github-border ${className}`}>
    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
      <p className="text-sm text-gray-400 text-center">
        © 2025 Yatri Cloud. All rights reserved.
      </p>
        {/* <button
          onClick={handleLinkedInClick}
          className="flex items-center gap-2 px-4 py-2 bg-[#0a66c2] hover:bg-[#0a66c2]/90 text-white rounded-lg transition-colors duration-300"
        >
          <Linkedin size={20} />
          <span>Follow on LinkedIn</span>
        </button> */}
      </div>
    </footer>
  );
};