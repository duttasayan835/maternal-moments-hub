
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: number;
          name: string;
          email: string;
          password_hash: string;
          role: 'patient' | 'doctor' | 'admin';
          phone_number?: string;
          date_of_birth?: string;
          gender?: 'female' | 'male' | 'other';
          address?: string;
          pregnancy_status?: 'pregnant' | 'non-pregnant';
          emergency_contact?: string;
          medical_history?: string;
          blood_type?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
          allergies?: string;
          chronic_conditions?: string;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          email: string;
          password_hash: string;
          role: 'patient' | 'doctor' | 'admin';
          phone_number?: string;
          date_of_birth?: string;
          gender?: 'female' | 'male' | 'other';
          address?: string;
          pregnancy_status?: 'pregnant' | 'non-pregnant';
          emergency_contact?: string;
          medical_history?: string;
          blood_type?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
          allergies?: string;
          chronic_conditions?: string;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          email?: string;
          password_hash?: string;
          role?: 'patient' | 'doctor' | 'admin';
          phone_number?: string;
          date_of_birth?: string;
          gender?: 'female' | 'male' | 'other';
          address?: string;
          pregnancy_status?: 'pregnant' | 'non-pregnant';
          emergency_contact?: string;
          medical_history?: string;
          blood_type?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
          allergies?: string;
          chronic_conditions?: string;
          created_at?: string;
        };
      };
      medical_images: {
        Row: {
          id: number;
          user_id: number;
          image_path: string;
          upload_date: string;
          status: 'pending' | 'analyzed' | 'reviewed' | 'failed';
          modality: 'Ultrasound' | 'X-ray' | 'MRI' | 'CT';
          ai_analysis_status: boolean;
          scan_details?: string;
          image_format?: string;
          resolution?: string;
          scan_notes?: string;
        };
        Insert: {
          id?: number;
          user_id: number;
          image_path: string;
          upload_date?: string;
          status?: 'pending' | 'analyzed' | 'reviewed' | 'failed';
          modality: 'Ultrasound' | 'X-ray' | 'MRI' | 'CT';
          ai_analysis_status?: boolean;
          scan_details?: string;
          image_format?: string;
          resolution?: string;
          scan_notes?: string;
        };
        Update: {
          id?: number;
          user_id?: number;
          image_path?: string;
          upload_date?: string;
          status?: 'pending' | 'analyzed' | 'reviewed' | 'failed';
          modality?: 'Ultrasound' | 'X-ray' | 'MRI' | 'CT';
          ai_analysis_status?: boolean;
          scan_details?: string;
          image_format?: string;
          resolution?: string;
          scan_notes?: string;
        };
      };
      analysis_results: {
        Row: {
          id: number;
          image_id: number;
          diagnosis: string;
          confidence_score: number;
          generated_at: string;
          ai_model_version: string;
          additional_notes?: string;
          doctor_verified: boolean;
          follow_up_recommendation?: string;
        };
        Insert: {
          id?: number;
          image_id: number;
          diagnosis: string;
          confidence_score: number;
          generated_at?: string;
          ai_model_version: string;
          additional_notes?: string;
          doctor_verified?: boolean;
          follow_up_recommendation?: string;
        };
        Update: {
          id?: number;
          image_id?: number;
          diagnosis?: string;
          confidence_score?: number;
          generated_at?: string;
          ai_model_version?: string;
          additional_notes?: string;
          doctor_verified?: boolean;
          follow_up_recommendation?: string;
        };
      };
      doctor_reviews: {
        Row: {
          id: number;
          image_id: number;
          doctor_id?: number;
          comments?: string;
          verified_at: string;
          severity: 'low' | 'moderate' | 'high';
          recommended_tests?: string;
          follow_up_required: boolean;
          additional_recommendations?: string;
        };
        Insert: {
          id?: number;
          image_id: number;
          doctor_id?: number;
          comments?: string;
          verified_at?: string;
          severity: 'low' | 'moderate' | 'high';
          recommended_tests?: string;
          follow_up_required?: boolean;
          additional_recommendations?: string;
        };
        Update: {
          id?: number;
          image_id?: number;
          doctor_id?: number;
          comments?: string;
          verified_at?: string;
          severity?: 'low' | 'moderate' | 'high';
          recommended_tests?: string;
          follow_up_required?: boolean;
          additional_recommendations?: string;
        };
      };
      chatbot_conversations: {
        Row: {
          id: number;
          user_id: number;
          message: string;
          response: string;
          timestamp: string;
          session_id?: string;
          chatbot_version?: string;
        };
        Insert: {
          id?: number;
          user_id: number;
          message: string;
          response: string;
          timestamp?: string;
          session_id?: string;
          chatbot_version?: string;
        };
        Update: {
          id?: number;
          user_id?: number;
          message?: string;
          response?: string;
          timestamp?: string;
          session_id?: string;
          chatbot_version?: string;
        };
      };
      // Additional tables would follow the same pattern
    };
  };
}
