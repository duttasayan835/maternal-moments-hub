
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
      // Additional tables from the schema would be defined here
    };
  };
}
