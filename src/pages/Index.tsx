import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { isSupabaseConfigured } from '@/lib/supabase';
import { AlertTriangle } from 'lucide-react';
import AuthModal from '@/components/auth/AuthModal';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('signup');
  const supabaseConfigured = isSupabaseConfigured();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-maternal-100 to-maternal-200"
    >
      <Card className="w-full max-w-4xl bg-white/90 backdrop-blur-sm shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-display bg-clip-text text-transparent bg-gradient-to-r from-maternal-600 to-maternal-800">
            Welcome to Maternal Moments
          </CardTitle>
          
          {!supabaseConfigured && (
            <div className="mt-2 p-2 rounded-md bg-amber-50 text-amber-700 text-sm flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>Demo Mode: Authentication and database features are not fully functional. Set Supabase environment variables to enable all features.</span>
            </div>
          )}
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Your Journey Starts Here</h2>
              <p className="text-gray-600">
                Join our community for expert guidance through your pregnancy and parenting journey. 
                Access personalized care, medical insights, and connect with professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  className="bg-maternal-600 hover:bg-maternal-700"
                  size="lg"
                  onClick={() => {
                    setActiveTab('signup');
                    setIsAuthModalOpen(true);
                  }}
                >
                  Register Now
                </Button>
                <Button 
                  variant="outline" 
                  className="border-maternal-200"
                  size="lg"
                  onClick={() => {
                    setActiveTab('login');
                    setIsAuthModalOpen(true);
                  }}
                >
                  Login
                </Button>
              </div>
            </div>
            <div className="bg-maternal-100 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Why Join Us?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-maternal-600">✓</span>
                  <span>Personalized pregnancy tracking and guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-maternal-600">✓</span>
                  <span>Connect with qualified healthcare professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-maternal-600">✓</span>
                  <span>Schedule appointments and consultations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-maternal-600">✓</span>
                  <span>Upload and analyze medical images</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-maternal-600">✓</span>
                  <span>Access expert parenting resources and community</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </motion.div>
  );
};

export default Index;
