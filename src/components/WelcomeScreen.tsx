import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';
import React from 'react';
import { Footer } from './Footer';
import { Background } from './ui/Background';
import { isSupabaseConfigured } from '../config/supabase';
import toast from 'react-hot-toast';

interface Props {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<Props> = ({ onStart }) => {
  const handleStart = () => {
    if (!isSupabaseConfigured()) {
      toast.error('Please connect to Supabase before starting the survey.');
      return;
    }
    onStart();
  };

  return (
    <Background gradientPosition={0}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative flex-1 flex flex-col items-center justify-center p-4 text-center z-10 min-h-screen"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col items-center"
        >
          {/* Company Logos */}
          <div className="flex items-center gap-4 sm:gap-6 mb-8">
            <img
              src="https://i.ibb.co/XWwMNtx/yatricloud.png"
              alt="Yatri Cloud Logo"
              className="w-28 sm:w-40 h-auto"
            />
            <div className="h-8 sm:h-12 w-px bg-gray-300" />{' '}
            {/* Vertical divider */}
            <img
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
              alt="Microsoft Logo"
              className="w-28 sm:w-40 h-auto"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-bold text-gray-900 mb-8"
        >
          Microsoft AI Tour Bengaluru
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-12 max-w-2xl"
        >
          Are you coming?
          <br />
          If Yes, Let's meet with our Yatri Cloud team together on 7th January
          2025 & Get a chance to win Gifts🎉
        </motion.p>

        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStart}
          className="relative px-8 sm:px-12 py-3 sm:py-4 bg-blue-500 hover:bg-blue-600 text-white text-lg sm:text-xl rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span className="relative z-10">Start Here</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 sm:mt-6 flex items-center gap-2 text-gray-600"
        >
          <Timer size={16} />
          <span>Takes 15 sec</span>
        </motion.div>
      </motion.div>

      <Footer className="z-10" />
    </Background>
  );
};
