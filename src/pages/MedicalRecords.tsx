
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, Image, FileCheck, FileWarning, Download, Eye, Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import PageTransition from '@/components/PageTransition';

// Define the types for different medical records
interface MedicalImage {
  id: number;
  user_id: string;
  image_path: string;
  upload_date: string;
  status: 'pending' | 'analyzed' | 'reviewed' | 'failed';
  modality: string;
  ai_analysis_status: boolean;
  scan_details?: string;
}

interface AnalysisResult {
  id: number;
  image_id: number;
  diagnosis: string;
  confidence_score: number;
  generated_at: string;
  ai_model_version: string;
  doctor_verified: boolean;
}

interface DoctorReview {
  id: number;
  image_id: number;
  doctor_name: string;
  comments?: string;
  verified_at: string;
  severity: 'low' | 'moderate' | 'high';
  recommended_tests?: string;
  follow_up_required: boolean;
}

const MedicalRecordsPage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('images');
  const [isLoading, setIsLoading] = useState(true);
  const [medicalImages, setMedicalImages] = useState<MedicalImage[]>([]);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult[]>([]);
  const [doctorReviews, setDoctorReviews] = useState<DoctorReview[]>([]);

  useEffect(() => {
    // Mock data for now, would be replaced with actual Supabase queries
    const fetchMedicalRecords = async () => {
      if (!user) return;

      setIsLoading(true);
      try {
        // This is mocked data since we don't have the real data in the database yet
        // In a real app, these would be Supabase queries
        
        // Mock medical images
        const mockMedicalImages: MedicalImage[] = [
          {
            id: 1,
            user_id: user.id,
            image_path: '/placeholder.svg',
            upload_date: '2025-03-10T14:30:00Z',
            status: 'reviewed',
            modality: 'Ultrasound',
            ai_analysis_status: true,
            scan_details: 'First trimester pregnancy scan',
          },
          {
            id: 2,
            user_id: user.id,
            image_path: '/placeholder.svg',
            upload_date: '2025-03-18T10:15:00Z',
            status: 'analyzed',
            modality: 'Ultrasound',
            ai_analysis_status: true,
            scan_details: 'Second trimester anomaly scan',
          },
        ];
        
        // Mock analysis results
        const mockAnalysisResults: AnalysisResult[] = [
          {
            id: 1,
            image_id: 1,
            diagnosis: 'Normal pregnancy, 12 weeks gestational age',
            confidence_score: 0.95,
            generated_at: '2025-03-10T14:45:00Z',
            ai_model_version: 'MaternalAI 2.3',
            doctor_verified: true,
          },
          {
            id: 2,
            image_id: 2,
            diagnosis: 'Normal pregnancy, 20 weeks gestational age, all measurements within normal range',
            confidence_score: 0.92,
            generated_at: '2025-03-18T10:30:00Z',
            ai_model_version: 'MaternalAI 2.3',
            doctor_verified: false,
          },
        ];
        
        // Mock doctor reviews
        const mockDoctorReviews: DoctorReview[] = [
          {
            id: 1,
            image_id: 1,
            doctor_name: 'Dr. Emily Rodriguez',
            comments: 'Normal fetal development. All measurements appropriate for gestational age.',
            verified_at: '2025-03-11T09:20:00Z',
            severity: 'low',
            recommended_tests: 'None at this time, continue with standard prenatal care',
            follow_up_required: false,
          },
        ];

        setMedicalImages(mockMedicalImages);
        setAnalysisResults(mockAnalysisResults);
        setDoctorReviews(mockDoctorReviews);
      } catch (error) {
        console.error('Error fetching medical records:', error);
        toast({
          title: 'Error',
          description: 'Failed to load medical records',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchMedicalRecords();
  }, [user, toast]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'analyzed':
        return 'bg-blue-100 text-blue-800';
      case 'reviewed':
        return 'bg-green-100 text-green-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityBadgeColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getAnalysisForImage = (imageId: number) => {
    return analysisResults.find(result => result.image_id === imageId);
  };

  const getDoctorReviewForImage = (imageId: number) => {
    return doctorReviews.find(review => review.image_id === imageId);
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p>Please sign in to view your medical records.</p>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Medical Records</h1>

        <Tabs defaultValue={activeTab} className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="images">Medical Images</TabsTrigger>
            <TabsTrigger value="analyses">AI Analyses</TabsTrigger>
            <TabsTrigger value="reviews">Doctor Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="images" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Image className="mr-2 h-5 w-5" />
                  Medical Images
                </CardTitle>
                <CardDescription>
                  Your uploaded medical images and scans
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-maternal-600"></div>
                  </div>
                ) : medicalImages.length === 0 ? (
                  <div className="text-center py-12">
                    <Image className="mx-auto h-16 w-16 text-maternal-500 mb-4" />
                    <h3 className="text-xl font-medium mb-2">No Medical Images</h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      You haven't uploaded any medical images yet. Upload your first image to get AI analysis.
                    </p>
                    <Button className="bg-maternal-600 hover:bg-maternal-700">
                      Upload Image
                    </Button>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Preview</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Upload Date</TableHead>
                        <TableHead>Details</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {medicalImages.map((image) => (
                        <TableRow key={image.id}>
                          <TableCell>
                            <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                              <img 
                                src={image.image_path} 
                                alt={`Medical scan ${image.id}`} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </TableCell>
                          <TableCell className="font-medium">{image.modality}</TableCell>
                          <TableCell>{formatDate(image.upload_date)}</TableCell>
                          <TableCell>{image.scan_details || 'No details available'}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(image.status)}`}>
                              {image.status.charAt(0).toUpperCase() + image.status.slice(1)}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analyses" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileCheck className="mr-2 h-5 w-5" />
                  AI Analysis Results
                </CardTitle>
                <CardDescription>
                  Automated analysis results for your medical images
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-maternal-600"></div>
                  </div>
                ) : analysisResults.length === 0 ? (
                  <div className="text-center py-12">
                    <FileCheck className="mx-auto h-16 w-16 text-maternal-500 mb-4" />
                    <h3 className="text-xl font-medium mb-2">No Analysis Results</h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      There are no AI analysis results available yet. Upload medical images to get AI analysis.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {analysisResults.map((result) => {
                      const image = medicalImages.find(img => img.id === result.image_id);
                      return (
                        <Card key={result.id} className="bg-gray-50">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-lg">
                                  {image?.modality} Analysis
                                </CardTitle>
                                <CardDescription>
                                  Generated on {formatDate(result.generated_at)}
                                </CardDescription>
                              </div>
                              <div>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  result.doctor_verified 
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {result.doctor_verified ? 'Verified by Doctor' : 'Awaiting Verification'}
                                </span>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div>
                                <p className="text-sm font-medium text-gray-500">AI Diagnosis</p>
                                <p className="mt-1">{result.diagnosis}</p>
                              </div>
                              <div className="flex items-center">
                                <p className="text-sm font-medium text-gray-500 mr-2">Confidence Score:</p>
                                <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5">
                                  <div 
                                    className="bg-blue-600 h-2.5 rounded-full" 
                                    style={{ width: `${result.confidence_score * 100}%` }}
                                  ></div>
                                </div>
                                <span className="ml-2 text-sm font-medium">
                                  {Math.round(result.confidence_score * 100)}%
                                </span>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-500">AI Model</p>
                                <p className="mt-1 text-sm">{result.ai_model_version}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Doctor Reviews
                </CardTitle>
                <CardDescription>
                  Professional medical reviews from healthcare providers
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-maternal-600"></div>
                  </div>
                ) : doctorReviews.length === 0 ? (
                  <div className="text-center py-12">
                    <FileText className="mx-auto h-16 w-16 text-maternal-500 mb-4" />
                    <h3 className="text-xl font-medium mb-2">No Doctor Reviews</h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      There are no doctor reviews available yet. Doctor reviews will appear here after your images have been evaluated by a healthcare professional.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {doctorReviews.map((review) => {
                      const image = medicalImages.find(img => img.id === review.image_id);
                      const analysis = getAnalysisForImage(review.image_id);
                      return (
                        <Card key={review.id} className="bg-gray-50">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-lg">
                                  {image?.modality} Review by {review.doctor_name}
                                </CardTitle>
                                <CardDescription>
                                  Reviewed on {formatDate(review.verified_at)}
                                </CardDescription>
                              </div>
                              <div>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityBadgeColor(review.severity)}`}>
                                  {review.severity.charAt(0).toUpperCase() + review.severity.slice(1)} Severity
                                </span>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              {analysis && (
                                <div>
                                  <p className="text-sm font-medium text-gray-500">AI Diagnosis (Verified)</p>
                                  <p className="mt-1">{analysis.diagnosis}</p>
                                </div>
                              )}
                              
                              <div>
                                <p className="text-sm font-medium text-gray-500">Doctor's Comments</p>
                                <p className="mt-1">{review.comments || 'No comments provided'}</p>
                              </div>
                              
                              {review.recommended_tests && (
                                <div>
                                  <p className="text-sm font-medium text-gray-500">Recommended Tests</p>
                                  <p className="mt-1">{review.recommended_tests}</p>
                                </div>
                              )}
                              
                              <div className="pt-2">
                                <p className="text-sm font-medium text-gray-500">Follow-up Required</p>
                                <p className="mt-1">
                                  {review.follow_up_required ? 'Yes, follow-up appointment recommended' : 'No follow-up needed at this time'}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  );
};

export default MedicalRecordsPage;
