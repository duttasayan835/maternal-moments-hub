
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

interface SignupFormProps {
  onClose: () => void;
}

export default function SignupForm({ onClose }: SignupFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (password !== confirmPassword) {
      toast({
        title: 'Passwords do not match',
        description: 'Please make sure your passwords match',
        variant: 'destructive',
      });
      setIsLoading(false);
      return;
    }

    try {
      // Create authentication user first
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });

      if (authError) throw authError;

      if (authData.user) {
        // Now create the user profile in our users table
        const { error: profileError } = await supabase
          .from('users')
          .insert({
            name,
            email,
            password_hash: 'stored_in_auth', // We don't actually store the password here since Supabase Auth handles it
            role: 'patient', // Default role
          });

        if (profileError) throw profileError;

        toast({
          title: 'Account created!',
          description: 'You have successfully signed up.',
        });
        
        onClose();
      }
    } catch (error: any) {
      toast({
        title: 'Signup failed',
        description: error.message || 'There was an error creating your account',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignup} className="space-y-3">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a password"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          required
        />
      </div>
      <Button 
        type="submit" 
        className="w-full mt-6 bg-maternal-600 hover:bg-maternal-700"
        disabled={isLoading}
      >
        {isLoading ? 'Creating account...' : 'Sign Up'}
      </Button>
    </form>
  );
}
