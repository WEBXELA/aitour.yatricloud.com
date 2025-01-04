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
        <motion.img
          src="https://dev.yatricloud.com/assets/img/yatricloud.png"
          alt="Yatri Cloud Logo"
          className="w-48 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl font-bold mb-8 text-gradient"
        >
          Microsoft AI Tour Bengaluru
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-700 mb-12 max-w-2xl"
        >
          Are you coming?
          <br />
          If Yes, Let's meet with our Yatri Cloud team together on 7th January 2025 & Get a chance to win Gifts🎉
        </motion.p>

        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStart}
          className="relative px-12 py-4 bg-blue-500 hover:bg-blue-600 text-white text-xl rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span className="relative z-10">Start Here</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 flex items-center gap-2 text-gray-600"
        >
          <Timer size={16} />
          <span>Takes 15 sec</span>
        </motion.div>
      </motion.div>

      <Footer className="z-10" />
    </Background>
  );
};