
import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/database.types';

// Set the environment variables with the provided values
const supabaseUrl = 'https://wimparnnhujiegubnxaq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbXBhcm5uaHVqaWVndWJueGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwNDU1NDcsImV4cCI6MjA1NzYyMTU0N30.udsvTSm48xOuvhqut8weKrqssyW8nc3rUvMR7KOIi0Y';

// Log configuration status
console.log('Supabase client initialized successfully with provided credentials.');

// Create the Supabase client
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = (): boolean => {
  return Boolean(supabaseUrl && supabaseKey);
};
