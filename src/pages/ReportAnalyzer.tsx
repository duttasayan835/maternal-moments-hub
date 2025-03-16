
import { useState } from 'react';
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileUploader } from "@/components/FileUploader";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, BarChart2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ReportAnalyzer = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [reportText, setReportText] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');
  const { toast } = useToast();

  const handleAnalyzeReport = async () => {
    try {
      setIsAnalyzing(true);
      
      // Placeholder for AI/ML analysis - would connect to an edge function
      // that calls a language model API like OpenAI
      setTimeout(() => {
        const mockAnalysis = `
# Report Analysis Summary

## Key Findings
- Normal blood pressure readings: 120/80 mmHg
- Hemoglobin levels within expected range for pregnancy
- Iron levels slightly below recommended range - consider supplements

## Recommendations
- Continue with regular prenatal check-ups
- Discuss iron supplementation with your healthcare provider
- Maintain balanced nutrition with focus on iron-rich foods
- Stay hydrated and maintain moderate physical activity

## Additional Notes
This analysis is based on common medical guidelines for maternal health. Always consult with your healthcare provider before making any changes to your healthcare routine.
        `;
        
        setAnalysisResult(mockAnalysis);
        setIsAnalyzing(false);
        
        toast({
          title: "Analysis Complete",
          description: "Your medical report has been analyzed successfully.",
        });
      }, 2000);
      
    } catch (error) {
      console.error('Error analyzing report:', error);
      setIsAnalyzing(false);
      toast({
        title: "Analysis Failed",
        description: "There was an error analyzing your report. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-maternal-800">Medical Report Analyzer</h1>
        <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
          Upload your medical reports or enter report text for AI-powered analysis and personalized insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                <span>Input Your Report</span>
              </CardTitle>
              <CardDescription>
                Enter your report text or upload a document
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea 
                placeholder="Paste your medical report text here..."
                className="min-h-[200px]"
                value={reportText}
                onChange={(e) => setReportText(e.target.value)}
              />
              
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">Or upload a report file:</p>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                  <FileText className="h-10 w-10 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-4">
                    PDF, DOCX, or JPG (max 10MB)
                  </p>
                  <Button variant="outline" disabled className="w-full">
                    Choose File
                    <span className="text-xs text-gray-400 ml-2">(Coming Soon)</span>
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-maternal-600 hover:bg-maternal-700"
                onClick={handleAnalyzeReport}
                disabled={isAnalyzing || !reportText.trim()}
              >
                {isAnalyzing ? "Analyzing..." : "Analyze Report"}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5" />
                <span>Analysis Results</span>
              </CardTitle>
              <CardDescription>
                AI-powered insights from your medical reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              {analysisResult ? (
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ 
                    __html: analysisResult.split('\n').map(line => {
                      if (line.startsWith('# ')) {
                        return `<h1 class="text-xl font-bold mt-4 mb-2">${line.replace('# ', '')}</h1>`;
                      } else if (line.startsWith('## ')) {
                        return `<h2 class="text-lg font-semibold mt-3 mb-1">${line.replace('## ', '')}</h2>`;
                      } else if (line.startsWith('- ')) {
                        return `<li class="ml-4">${line.replace('- ', '')}</li>`;
                      } else if (line.trim() === '') {
                        return '<br/>';
                      } else {
                        return `<p class="my-1">${line}</p>`;
                      }
                    }).join('')
                  }} />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[400px] text-center">
                  <BarChart2 className="h-12 w-12 text-gray-300 mb-4" />
                  <p className="text-gray-500">Analysis results will appear here</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Enter your report details and click "Analyze Report"
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
};

export default ReportAnalyzer;
