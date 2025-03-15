
import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/database.types';

// Get the environment variables with better error handling
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Log configuration status 
if (!supabaseUrl || !supabaseKey) {
  console.warn(
    'Supabase credentials missing. To enable authentication and database features, please set:\n' +
    '- VITE_SUPABASE_URL\n' +
    '- VITE_SUPABASE_ANON_KEY\n' +
    'in your environment variables.'
  );
} else {
  console.log('Supabase client initialized successfully.');
}

// Create the Supabase client
export const supabase = createClient<Database>(
  supabaseUrl || 'https://example.supabase.co',  // Placeholder that will never work
  supabaseKey || 'example-key'                   // Placeholder that will never work
);

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = (): boolean => {
  return Boolean(supabaseUrl && supabaseKey && 
    supabaseUrl !== 'https://example.supabase.co' && 
    supabaseKey !== 'example-key');
};
