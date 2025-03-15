
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Upload, Image, MessageSquare, FileText, Calendar } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const DashboardPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
      
      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="images">Medical Images</TabsTrigger>
          <TabsTrigger value="chat">Chatbot</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upload Medical Image</CardTitle>
                <Upload className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <Button variant="outline" className="w-full h-32 border-dashed">
                    <div className="flex flex-col items-center">
                      <Image className="h-8 w-8 mb-2 text-maternal-600" />
                      <span>Upload an image for AI analysis</span>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recent Analysis</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold">No recent analysis</p>
                <p className="text-xs text-muted-foreground">
                  Upload a medical image to get started with AI analysis
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Chat with AI</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold">Ask health questions</p>
                <p className="text-xs text-muted-foreground">
                  Our AI assistant can help answer your healthcare questions
                </p>
                <Button className="w-full mt-4 bg-maternal-600 hover:bg-maternal-700">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="images" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Medical Images</CardTitle>
              <CardDescription>
                Upload and manage your medical images for AI analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="bg-maternal-50 dark:bg-maternal-900/30 p-8 rounded-lg text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-maternal-600 dark:text-maternal-400" />
                  <h3 className="text-lg font-medium mb-2">No images uploaded yet</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Upload your first medical image to get analysis from our AI system
                  </p>
                  <Button className="bg-maternal-600 hover:bg-maternal-700">
                    Upload Image
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Additional tab contents would be defined here */}
        <TabsContent value="chat" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Healthcare Chatbot</CardTitle>
              <CardDescription>
                Ask questions about your health and get instant responses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 text-center">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-maternal-600 dark:text-maternal-400" />
                <h3 className="text-lg font-medium mb-2">Chatbot coming soon</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our AI chatbot will be available to answer your healthcare questions
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Medical Reports</CardTitle>
              <CardDescription>
                View and manage your medical reports and analysis results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 text-center">
                <FileText className="h-12 w-12 mx-auto mb-4 text-maternal-600 dark:text-maternal-400" />
                <h3 className="text-lg font-medium mb-2">No reports yet</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  After you upload medical images and receive analysis, your reports will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appointments" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Appointments</CardTitle>
              <CardDescription>
                Schedule and manage your medical appointments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-maternal-600 dark:text-maternal-400" />
                <h3 className="text-lg font-medium mb-2">No appointments scheduled</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Schedule your first appointment with a healthcare provider
                </p>
                <Button className="bg-maternal-600 hover:bg-maternal-700">
                  Schedule Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default DashboardPage;
