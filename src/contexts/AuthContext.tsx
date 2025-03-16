
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Session, User } from '@supabase/supabase-js';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // This function ensures a user record exists in the public users table
  const ensureUserExists = async (user: User) => {
    try {
      // Check if user exists
      const { data, error } = await supabase
        .from('users')
        .select('id')
        .eq('id', user.id);
      
      if (error) {
        console.error('Error checking if user exists:', error);
        return;
      }
      
      // If user doesn't exist, create a new record
      if (!data || data.length === 0) {
        const userName = user.user_metadata?.name || '';
        const userEmail = user.email || '';
        
        const { error: insertError } = await supabase
          .from('users')
          .insert({ 
            id: user.id,
            name: userName,
            email: userEmail
          });
        
        if (insertError) {
          console.error('Error creating user record:', insertError);
        } else {
          console.log('Created new user record');
        }
      }
    } catch (err) {
      console.error('Error in ensureUserExists:', err);
    }
  };

  useEffect(() => {
    async function getInitialSession() {
      try {
        setIsLoading(true);
        
        // Get session from supabase
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error getting session:', error);
          throw error;
        }
        
        setSession(session);
        setUser(session?.user ?? null);
        
        // If user is logged in, ensure user record exists
        if (session?.user) {
          await ensureUserExists(session.user);
        }
      } catch (error: any) {
        console.error('Auth initialization error:', error);
        toast({
          title: 'Authentication Error',
          description: 'Failed to initialize authentication. Please try again later.',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    }

    getInitialSession();

    // Set up the auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log(`Auth event: ${event}`);
        setSession(session);
        setUser(session?.user ?? null);
        
        // When user signs in, ensure user record exists
        if (event === 'SIGNED_IN' && session?.user) {
          await ensureUserExists(session.user);
        }
      }
    );

    // Clean up the subscription
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [toast]);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: 'Signed out',
        description: 'You have been successfully signed out.',
      });
    } catch (error: any) {
      console.error('Sign out error:', error);
      toast({
        title: 'Sign Out Failed',
        description: error.message || 'An error occurred during sign out.',
        variant: 'destructive',
      });
    }
  };

  const value = {
    user,
    session,
    isLoading,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
