import { createClient } from '@supabase/supabase-js';
import toast from 'react-hot-toast';

let supabaseInstance: ReturnType<typeof createClient> | null = null;

export const initSupabase = () => {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!url || !key) {
    toast.error('Please connect to Supabase to continue');
    return null;
  }

  try {
    supabaseInstance = createClient(url, key);
    return supabaseInstance;
  } catch (error) {
    console.error('Supabase initialization error:', error);
    toast.error('Failed to connect to Supabase');
    return null;
  }
};

export const getSupabaseClient = () => {
  if (!supabaseInstance) {
    return initSupabase();
  }
  return supabaseInstance;
};

export const isSupabaseConfigured = (): boolean => {
  return !!getSupabaseClient();
};