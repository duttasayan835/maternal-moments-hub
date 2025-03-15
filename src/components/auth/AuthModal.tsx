
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { isSupabaseConfigured } from '@/lib/supabase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [supabaseReady, setSupabaseReady] = useState<boolean>(false);
  
  useEffect(() => {
    // Check if Supabase is configured
    setSupabaseReady(isSupabaseConfigured());
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={isOpen => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {activeTab === 'login' ? 'Login' : 'Sign Up'}
          </DialogTitle>
          {!supabaseReady && (
            <DialogDescription className="text-amber-600 dark:text-amber-400">
              Backend services are in demo mode. For full functionality, Supabase configuration is required.
            </DialogDescription>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 rounded-full"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </DialogHeader>
        
        <div className="mb-6 flex space-x-2 border-b">
          <button
            className={`py-2 px-4 ${
              activeTab === 'login'
                ? 'border-b-2 border-maternal-600 font-semibold'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === 'signup'
                ? 'border-b-2 border-maternal-600 font-semibold'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>

        <div className="py-2">
          {activeTab === 'login' ? (
            <LoginForm onClose={onClose} />
          ) : (
            <SignupForm onClose={onClose} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
