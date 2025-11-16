
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Sparkles, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useFirestore } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { personalizeDemoRequest } from '@/app/actions/personalize-demo-flow';

const demoRequestSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  emailAddress: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z.string().min(10, { message: "Phone number must be at least 10 digits." }).optional().or(z.literal('')),
  businessDescription: z.string().min(10, { message: "Please describe your business in at least 10 characters." }),
});

type DemoRequestFormValues = z.infer<typeof demoRequestSchema>;

type AiResponseType = { suggestedConfigurations: string; suggestedServices: string; };

export function DemoRequestForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<AiResponseType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const firestore = useFirestore();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<DemoRequestFormValues>({
    resolver: zodResolver(demoRequestSchema),
  });

  const onSubmit: SubmitHandler<DemoRequestFormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setAiResponse(null);

    if (!firestore) {
        setError("Could not connect to the database. Please try again later.");
        setIsLoading(false);
        return;
    }

    try {
      // First, save the demo request to Firestore
      const demoRequestsCollection = collection(firestore, 'demo_requests');
      await addDoc(demoRequestsCollection, {
        ...data,
        id: uuidv4(),
        requestDate: serverTimestamp(),
        status: 'new',
      });

      // Then, get AI personalization
      const result = await personalizeDemoRequest({ businessDescription: data.businessDescription });
      setAiResponse(result);

      toast({
        title: "Demo Request Submitted!",
        description: "Our team will be in touch shortly. Check out your personalized suggestions below.",
        variant: "default",
      });
      reset(); 
    } catch (e) {
      console.error("Submission Error:", e);
      setError("Failed to submit your demo request. Please try again.");
      toast({
        title: "Error",
        description: "There was an issue submitting your request.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold font-headline">Request a Free Demo</CardTitle>
        <CardDescription>Experience our Futuristic Consumer Inspired Interface.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" {...register("fullName")} placeholder="John Doe" />
              {errors.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>}
            </div>

            <div>
              <Label htmlFor="emailAddress">Email Address</Label>
              <Input id="emailAddress" type="email" {...register("emailAddress")} placeholder="you@example.com" />
              {errors.emailAddress && <p className="text-sm text-destructive mt-1">{errors.emailAddress.message}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="phoneNumber">Phone Number (Optional)</Label>
            <Input id="phoneNumber" type="tel" {...register("phoneNumber")} placeholder="(555) 123-4567" />
            {errors.phoneNumber && <p className="text-sm text-destructive mt-1">{errors.phoneNumber.message}</p>}
          </div>

          <div>
            <Label htmlFor="businessDescription">Tell us about your business...</Label>
            <Textarea
              id="businessDescription"
              {...register("businessDescription")}
              placeholder="Describe your business, needs, and what you're looking for in a POS system."
              rows={4}
            />
            {errors.businessDescription && <p className="text-sm text-destructive mt-1">{errors.businessDescription.message}</p>}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Demo Request
                <Sparkles className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        {error && (
          <Alert variant="destructive" className="mt-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {aiResponse && (
          <div className="mt-8 p-6 rounded-lg border bg-secondary/50">
            <h3 className="text-xl font-semibold font-headline mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-primary mr-2" />
              Personalized Suggestions For You!
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-primary">Suggested Configurations:</h4>
                <p className="text-sm text-muted-foreground">{aiResponse.suggestedConfigurations}</p>
              </div>
              <div>
                <h4 className="font-medium text-primary">Suggested Services:</h4>
                <p className="text-sm text-muted-foreground">{aiResponse.suggestedServices}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
