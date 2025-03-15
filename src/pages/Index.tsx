
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AuthModal from '@/components/auth/AuthModal';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('signup');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-maternal-100 to-maternal-200 dark:from-maternal-900 dark:to-maternal-800"
    >
      <Card className="w-full max-w-4xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-display bg-clip-text text-transparent bg-gradient-to-r from-maternal-600 to-maternal-800 dark:from-maternal-400 dark:to-maternal-600">
            Welcome to Maternal Moments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Your Journey Starts Here</h2>
              <p className="text-gray-600 dark:text-gray-300">
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
                  className="border-maternal-200 dark:border-maternal-800"
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
            <div className="bg-maternal-100 dark:bg-maternal-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Why Join Us?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-maternal-600 dark:text-maternal-400">✓</span>
                  <span>Personalized pregnancy tracking and guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-maternal-600 dark:text-maternal-400">✓</span>
                  <span>Connect with qualified healthcare professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-maternal-600 dark:text-maternal-400">✓</span>
                  <span>Schedule appointments and consultations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-maternal-600 dark:text-maternal-400">✓</span>
                  <span>Upload and analyze medical images</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-maternal-600 dark:text-maternal-400">✓</span>
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
