
'use client';

import { useState } from 'react';
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
import { useAuth } from '@/firebase/provider';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';

interface AuthSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthSheet({ open, onOpenChange }: AuthSheetProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const auth = useAuth();
  const { toast } = useToast();

  const handleAuthSuccess = () => {
    toast({
      title: 'Success!',
      description: isSignUp ? 'Account created.' : 'Signed in.',
    });
    onOpenChange(false);
    resetForm();
  };

  const handleAuthError = (err: any) => {
    console.error('Authentication Error:', err);
    let message = 'An unexpected error occurred.';
    if (err.code === 'auth/popup-closed-by-user') {
      message = 'The sign-in window was closed before completing. Please try again.';
    } else if (err.code === 'auth/email-already-in-use') {
      message = 'This email is already in use. Please sign in or use a different email.';
    } else if (err.code) {
      message = err.message;
    }
    setError(message);
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    setError(null);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        handleAuthSuccess();
      })
      .catch((err) => {
        handleAuthError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleEmailPasswordAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    const authPromise = isSignUp
      ? createUserWithEmailAndPassword(auth, email, password)
      : signInWithEmailAndPassword(auth, email, password);

    authPromise
      .then(() => {
        handleAuthSuccess();
      })
      .catch((err) => {
        handleAuthError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setFullName('');
    setError(null);
    setIsLoading(false);
  };
  
  const toggleForm = () => {
      setIsSignUp(!isSignUp);
      resetForm();
  }

  const renderForm = () => (
     <form onSubmit={handleEmailPasswordAuth} className="space-y-6">
        <div className="space-y-4">
          {isSignUp && (
             <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" placeholder="John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              </div>
          )}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Button>
      </form>
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full max-w-md p-0 overflow-y-auto card-glass"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="p-8 md:p-12">
            <SheetHeader className="text-left mb-6">
                <SheetTitle className="text-3xl font-bold">{isSignUp ? 'Create an Account' : 'Welcome Back'}</SheetTitle>
                <SheetDescription>{isSignUp ? 'Get started with SilzeyPOS today' : 'Sign in to access your account'}</SheetDescription>
            </SheetHeader>

            {renderForm()}

            <Separator className="my-6 bg-white/10" />

            <Button variant="outline" className="w-full bg-white/10 border-white/20 hover:bg-white/20" onClick={handleGoogleSignIn} disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <GoogleIcon className="mr-2 h-5 w-5" />}
                {isSignUp ? 'Sign up with Google' : 'Sign in with Google'}
            </Button>
            
            <p className="mt-4 text-center text-sm text-muted-foreground">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button onClick={toggleForm} className="font-semibold text-primary hover:underline">
                    {isSignUp ? 'Sign in' : 'Sign up'}
                </button>
            </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
