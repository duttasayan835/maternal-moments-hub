
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-background p-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">
                {activeTab === 'login' ? 'Login' : 'Sign Up'}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

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

            {activeTab === 'login' ? (
              <LoginForm onClose={onClose} />
            ) : (
              <SignupForm onClose={onClose} />
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
