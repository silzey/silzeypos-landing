
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase/auth/use-user';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { User as UserIcon, Mail, LayoutGrid, Cog, Repeat, Award, Heart, Shield, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  // Admin check is now done on the admin layout, this is for UI rendering only.
  // To avoid pulling in server-side process.env and breaking client components.
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // If loading is finished and there's no user, redirect to home
    if (!isUserLoading && !user) {
      router.push('/');
    }
    // This is a client-side check for rendering the admin button.
    // It's not for security, as that's handled by the admin layout and Firestore rules.
    if (user && user.email) {
        const adminEmails = (process.env.NEXT_PUBLIC_ADMIN_EMAILS || '').toLowerCase().split(',').filter(Boolean);
        setIsAdmin(adminEmails.includes(user.email.toLowerCase()));
    }
  }, [user, isUserLoading, router]);

  const quickLinks = [
    { icon: LayoutGrid, label: "Client Portal", href: "/dashboard/client-portal" },
    { icon: Cog, label: "My Account", href: "/dashboard/my-account" },
    { icon: Repeat, label: "Subscriptions", href: "/dashboard/subscriptions" },
    { icon: Award, label: "Membership", href: "/dashboard/membership" },
    { icon: Heart, label: "Donations", href: "/dashboard/donations" },
  ];

  if (isAdmin) {
    quickLinks.splice(2, 0, { icon: Shield, label: "Admin", href: "/admin" });
  }

  if (isUserLoading || !user) {
    return (
      <div className="flex flex-col gap-8 max-w-2xl mx-auto">
        <Card>
          <CardHeader className="items-center text-center">
            <Skeleton className="h-24 w-24 rounded-full" />
            <div className="w-full space-y-2 mt-4">
                <Skeleton className="h-8 w-3/4 mx-auto" />
                <Skeleton className="h-4 w-1/2 mx-auto" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
             <div className="flex items-center gap-4">
                <Skeleton className="h-6 w-6" />
                <Skeleton className="h-6 flex-grow" />
            </div>
             <div className="flex items-center gap-4">
                <Skeleton className="h-6 w-6" />
                <Skeleton className="h-6 flex-grow" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  const profileUser = { name: "John Doe", email: "john@example.com", phone: "(123) 456-7890" };


  return (
    <div className="flex flex-col gap-8 max-w-2xl mx-auto">
       <Card className="shadow-lg">
        <CardHeader>
            <h2 className="text-3xl font-bold">My Profile</h2>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user.photoURL ?? ''} />
                <AvatarFallback className="text-3xl">{user.displayName?.charAt(0) ?? user.email?.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-xl text-center sm:text-left">{user.displayName ?? profileUser.name}</h3>
                <p className="text-muted-foreground text-center sm:text-left">{user.email ?? profileUser.email}</p>
                <p className="text-muted-foreground text-center sm:text-left">{user.phoneNumber ?? profileUser.phone}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button asChild className="w-full sm:w-auto"><Link href="/dashboard/my-account">Edit Profile</Link></Button>
              <Button asChild variant="outline" className="w-full sm:w-auto"><Link href="/dashboard/my-account">Change Password</Link></Button>
            </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
        {quickLinks.map(({ icon: Icon, label, href }) => (
          <Link href={href} key={label} className="flex flex-col items-center gap-2 text-foreground hover:text-primary transition-colors group">
            <div className="h-16 w-16 rounded-full border-2 border-border bg-card flex items-center justify-center group-hover:border-primary group-hover:bg-accent/50 transition-all duration-300">
              <Icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="text-xs font-medium text-center">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
