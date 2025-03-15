
import { useState } from 'react';
import { LogIn, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthModal from './AuthModal';
import { useToast } from '@/hooks/use-toast';

export default function AuthButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const handleAuthClick = () => {
    // Check if Supabase credentials are set
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      toast({
        title: "Configuration Required",
        description: "Supabase credentials are not set. Please configure the environment variables.",
        variant: "destructive"
      });
      console.warn("Supabase credentials missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment variables.");
      return;
    }

    setIsModalOpen(true);
  };

  return (
    <>
      <Button 
        variant="outline" 
        className="border-maternal-200 hover:bg-maternal-50 dark:border-maternal-800 dark:hover:bg-maternal-900"
        onClick={handleAuthClick}
      >
        <LogIn className="mr-2 h-4 w-4" />
        Login / Signup
      </Button>
      
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
