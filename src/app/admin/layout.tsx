
'use client';

import { useUser } from '@/firebase/auth/use-user';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lock, ArrowLeft } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const adminEmails = useMemo(() => (process.env.NEXT_PUBLIC_ADMIN_EMAILS || '')
    .toLowerCase()
    .split(',')
    .filter(Boolean), []);

  const isAuthorized = useMemo(() => {
    return user && user.email && adminEmails.includes(user.email.toLowerCase());
  }, [user, adminEmails]);
  
  const isSubPage = useMemo(() => {
    const pathSegments = pathname.split('/').filter(Boolean);
    // A sub-page has more segments than just '/admin', e.g., '/admin/users'
    return pathSegments.length > 1;
  }, [pathname]);


  useEffect(() => {
    if (!isUserLoading && !isAuthorized) {
      router.replace('/');
    }
  }, [user, isUserLoading, isAuthorized, router]);

  if (isUserLoading || !isAuthorized) {
    return (
        <div className="flex items-center justify-center h-full">
            {isUserLoading ? (
                 <div className="flex flex-col gap-4 w-full max-w-md">
                    <Skeleton className="h-10 w-48" />
                    <Skeleton className="h-6 w-64" />
                    <Skeleton className="h-40 w-full" />
                 </div>
            ) : (
                <Card className="m-4 text-center">
                    <CardHeader>
                        <Lock className="h-12 w-12 text-destructive mx-auto mb-4"/>
                        <CardTitle>Access Denied</CardTitle>
                        <CardDescription>You do not have permission to view this page. Redirecting...</CardDescription>
                    </CardHeader>
                </Card>
            )}
        </div>
    );
  }

  return (
    <div className={cn("container mx-auto px-4 py-8", isSubPage ? "max-w-4xl" : "max-w-7xl")}>
        {isSubPage && (
            <Button asChild variant="outline" className="mb-8">
                <Link href="/admin">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Admin Dashboard
                </Link>
            </Button>
        )}
        {children}
    </div>
  );
}
