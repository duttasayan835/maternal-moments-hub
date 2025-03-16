
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const { toast } = useToast();

  const handleOAuthSignIn = async (provider: 'google' | 'github') => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: `${window.location.origin}/home`,
        },
      });

      if (error) {
        console.error('OAuth sign-in error:', error);
        toast({
          title: 'OAuth Sign-In Failed',
          description: error.message || 'An error occurred during OAuth sign-in.',
          variant: 'destructive',
        });
      }
    } catch (error: any) {
      console.error('OAuth sign-in error:', error);
      toast({
        title: 'OAuth Sign-In Failed',
        description: error.message || 'An unexpected error occurred.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{activeTab === "login" ? "Login" : "Create an account"}</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue={activeTab} className="space-y-4" onValueChange={(value) => setActiveTab(value as "login" | "signup")}>
          <TabsList>
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm onClose={onClose} />
          </TabsContent>
          <TabsContent value="signup">
            <SignupForm onClose={onClose} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
