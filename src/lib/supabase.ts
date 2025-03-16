
import { supabase } from '@/integrations/supabase/client';

/**
 * Check if Supabase is properly configured by testing the connection
 * @returns boolean indicating if Supabase is properly configured
 */
export const isSupabaseConfigured = async (): Promise<boolean> => {
  try {
    const { error } = await supabase.from('users').select('id').limit(1);
    return !error;
  } catch (error) {
    console.error('Supabase configuration check failed:', error);
    return false;
  }
};
