
import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/database.types';

// Use empty strings as fallbacks if environment variables are not set
// This prevents the app from crashing, though Supabase features won't work
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Log a warning but don't throw an error
if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase credentials missing. Authentication features will not work until environment variables are set.');
}

// Create a mocked or limited client when credentials are missing
export const supabase = createClient<Database>(
  supabaseUrl || 'https://placeholder-url.supabase.co',
  supabaseKey || 'placeholder-key'
);
