
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, User, MapPin, FileText, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import PageTransition from '@/components/PageTransition';

// Define appointment type based on how it would be stored in the database
interface Appointment {
  id: number;
  patient_id: string;
  doctor_name: string;
  appointment_date: string;
  appointment_time: string;
  location: string;
  reason: string;
  notes?: string;
  status: 'scheduled' | 'completed' | 'canceled';
}

const appointmentSchema = z.object({
  doctor_name: z.string().min(2, { message: 'Please enter a doctor name' }),
  appointment_date: z.string().min(1, { message: 'Please select a date' }),
  appointment_time: z.string().min(1, { message: 'Please select a time' }),
  location: z.string().min(2, { message: 'Please enter a location' }),
  reason: z.string().min(5, { message: 'Please enter a reason for the appointment' }),
  notes: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

const AppointmentsPage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      doctor_name: '',
      appointment_date: '',
      appointment_time: '',
      location: '',
      reason: '',
      notes: '',
    },
  });

  useEffect(() => {
    // Mock data for now, would be replaced with actual Supabase query
    const fetchAppointments = async () => {
      if (!user) return;

      setIsLoading(true);
      try {
        // This is mocked data since we don't have the appointments table yet
        // In a real app, this would be a Supabase query
        const mockAppointments: Appointment[] = [
          {
            id: 1,
            patient_id: user.id,
            doctor_name: 'Dr. Sarah Johnson',
            appointment_date: '2025-03-25',
            appointment_time: '10:30 AM',
            location: 'Maternal Health Clinic, Room 304',
            reason: 'Pregnancy Checkup - Second Trimester',
            notes: 'Bring previous ultrasound reports',
            status: 'scheduled',
          },
          {
            id: 2,
            patient_id: user.id,
            doctor_name: 'Dr. Michael Chen',
            appointment_date: '2025-04-15',
            appointment_time: '2:00 PM',
            location: 'Women\'s Health Center, Floor 2',
            reason: 'Ultrasound Scan',
            status: 'scheduled',
          },
        ];

        setAppointments(mockAppointments);
      } catch (error) {
        console.error('Error fetching appointments:', error);
        toast({
          title: 'Error',
          description: 'Failed to load appointments',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchAppointments();
  }, [user, toast]);

  const onSubmit = async (values: AppointmentFormValues) => {
    if (!user) return;

    try {
      // Mock submission for now
      // In a real app, this would insert into a Supabase table
      const newAppointment: Appointment = {
        id: appointments.length + 1,
        patient_id: user.id,
        doctor_name: values.doctor_name,
        appointment_date: values.appointment_date,
        appointment_time: values.appointment_time,
        location: values.location,
        reason: values.reason,
        notes: values.notes,
        status: 'scheduled',
      };

      setAppointments([...appointments, newAppointment]);
      setOpenDialog(false);
      form.reset();

      toast({
        title: 'Appointment Scheduled',
        description: 'Your appointment has been scheduled successfully.',
      });
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      toast({
        title: 'Scheduling Failed',
        description: 'There was an error scheduling your appointment. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p>Please sign in to view your appointments.</p>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Your Appointments</h1>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button className="bg-maternal-600 hover:bg-maternal-700">
                Schedule Appointment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle>Schedule New Appointment</DialogTitle>
                <DialogDescription>
                  Fill out the form below to schedule an appointment with a doctor.
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="doctor_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Doctor Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter doctor's name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="appointment_date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="appointment_time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Time</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter appointment location" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reason for Visit</FormLabel>
                        <FormControl>
                          <Input placeholder="Why are you seeing the doctor?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Add any additional information the doctor should know"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <DialogFooter>
                    <Button type="submit">Schedule Appointment</Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-maternal-600"></div>
          </div>
        ) : appointments.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Calendar className="h-16 w-16 text-maternal-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">No Appointments Scheduled</h3>
              <p className="text-muted-foreground mb-6 text-center max-w-md">
                You don't have any appointments scheduled. Click the button above to schedule your first appointment.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>
                  View and manage your scheduled appointments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Doctor</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {appointments.map((appointment) => (
                      <TableRow key={appointment.id}>
                        <TableCell className="font-medium">
                          {appointment.doctor_name}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>{formatDate(appointment.appointment_date)}</span>
                            <span className="text-sm text-muted-foreground">{appointment.appointment_time}</span>
                          </div>
                        </TableCell>
                        <TableCell>{appointment.location}</TableCell>
                        <TableCell>{appointment.reason}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            appointment.status === 'scheduled' 
                              ? 'bg-blue-100 text-blue-800' 
                              : appointment.status === 'completed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                            <Button variant="destructive" size="sm">
                              Cancel
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default AppointmentsPage;
