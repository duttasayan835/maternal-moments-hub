
import { useState } from 'react';
import { LogIn, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthModal from './AuthModal';

export default function AuthButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button 
        variant="outline" 
        className="border-maternal-200 hover:bg-maternal-50 dark:border-maternal-800 dark:hover:bg-maternal-900"
        onClick={() => setIsModalOpen(true)}
      >
        <LogIn className="mr-2 h-4 w-4" />
        Login / Signup
      </Button>
      
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
