
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FileUploaderProps {
  onFileUpload: (file: File) => void;
  acceptedFileTypes?: string;
  maxSizeMB?: number;
}

export const FileUploader = ({
  onFileUpload,
  acceptedFileTypes = ".pdf,.docx,.jpg,.jpeg,.png",
  maxSizeMB = 10
}: FileUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();
  
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      validateAndSetFile(files[0]);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      validateAndSetFile(files[0]);
    }
  };
  
  const validateAndSetFile = (file: File) => {
    // Check file size
    if (file.size > maxSizeBytes) {
      toast({
        title: "File too large",
        description: `File size exceeds the maximum limit of ${maxSizeMB}MB.`,
        variant: "destructive",
      });
      return;
    }
    
    // Check file type
    const fileType = file.name.split('.').pop()?.toLowerCase();
    const acceptedTypes = acceptedFileTypes.split(',').map(type => 
      type.trim().replace('.', '').toLowerCase()
    );
    
    if (fileType && !acceptedTypes.includes(fileType)) {
      toast({
        title: "Invalid file type",
        description: `Please upload a file with one of these formats: ${acceptedFileTypes.replace(/\./g, '')}`,
        variant: "destructive",
      });
      return;
    }
    
    setSelectedFile(file);
    onFileUpload(file);
    
    toast({
      title: "File selected",
      description: `${file.name} has been selected.`,
    });
  };
  
  return (
    <div 
      className={`border-2 border-dashed rounded-md p-6 text-center transition-colors 
        ${isDragging ? 'border-maternal-600 bg-maternal-50' : 'border-gray-300'}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Upload className="h-10 w-10 mx-auto text-gray-400 mb-2" />
      
      <p className="text-sm text-gray-500 mb-1">
        {selectedFile ? selectedFile.name : `Drag and drop or click to upload`}
      </p>
      <p className="text-xs text-gray-400 mb-4">
        {acceptedFileTypes.replace(/\./g, '')} (max {maxSizeMB}MB)
      </p>
      
      <input
        type="file"
        accept={acceptedFileTypes}
        onChange={handleFileChange}
        className="hidden"
        id="file-upload"
      />
      
      <label htmlFor="file-upload">
        <Button 
          variant="outline" 
          className="w-full cursor-pointer"
          type="button"
          asChild
        >
          <span>Browse Files</span>
        </Button>
      </label>
    </div>
  );
};
