
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { GoogleIcon } from '@/components/icons/GoogleIcon';
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useAuth } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const { user, isUserLoading } = useUser();

  const adminEmails = (process.env.NEXT_PUBLIC_ADMIN_EMAILS || '')
    .toLowerCase()
    .split(',')
    .filter(Boolean);

  useEffect(() => {
    if (!isUserLoading && user) {
      if (user.email && adminEmails.includes(user.email.toLowerCase())) {
        router.replace('/admin');
      } else {
        // If a non-admin user is logged in and hits this page, send them to their dashboard
        router.replace('/dashboard');
      }
    }
  }, [user, isUserLoading, router, adminEmails]);

  const handleAuthSuccess = (loggedInUser: any) => {
    toast({
      title: 'Success!',
      description: 'Signed in successfully.',
    });
    // The useEffect above will handle redirection.
  };

  const handleAuthError = (err: any) => {
    console.error('Authentication Error:', err);
    let message = 'An unexpected error occurred.';
    if (err.code) {
      message = err.message;
    }
    setError(message);
    setIsLoading(false);
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    setError(null);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        if (result.user.email && !adminEmails.includes(result.user.email.toLowerCase())) {
            auth.signOut();
            setError('This account is not authorized for admin access.');
            setIsLoading(false);
            return;
        }
        handleAuthSuccess(result.user);
      })
      .catch((err) => {
        handleAuthError(err);
      })
      .finally(() => {
        // Don't set loading to false if a valid admin is signing in,
        // as the useEffect will handle redirection.
        if (error) setIsLoading(false);
      });
  };

  const handleEmailPasswordAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminEmails.includes(email.toLowerCase())) {
        setError('This email is not authorized for admin access.');
        return;
    }
    setIsLoading(true);
    setError(null);
    
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        handleAuthSuccess(result.user);
      })
      .catch((err) => {
        handleAuthError(err);
      });
  };

  if (isUserLoading || user) {
      return (
          <div className="flex h-screen w-screen items-center justify-center">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
      );
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md card-glass">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Admin Sign In</CardTitle>
          <CardDescription>Enter your credentials to access the admin dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleEmailPasswordAuth} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="admin@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign In
            </Button>
          </form>

          <Separator className="my-6 bg-border" />

          <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <GoogleIcon className="mr-2 h-5 w-5" />}
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
