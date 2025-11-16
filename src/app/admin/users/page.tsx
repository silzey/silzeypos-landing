
'use client';

import { useMemo } from 'react';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection } from 'firebase/firestore';
import { 
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';
import { User as UserIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function AdminUsersPage() {
    const firestore = useFirestore();
    const { user: authUser, isUserLoading: isAuthUserLoading } = useUser();

    // Read the admin emails from environment variables for the check.
    const adminEmails = useMemo(() => (process.env.NEXT_PUBLIC_ADMIN_EMAILS || '')
        .toLowerCase()
        .split(',')
        .filter(Boolean), []);

    const isAuthorizedAdmin = useMemo(() => {
        // Ensure authUser and its email property exist before checking.
        return authUser?.email && adminEmails.includes(authUser.email.toLowerCase());
    }, [authUser, adminEmails]);

    const usersQuery = useMemoFirebase(() => {
        // Stricter check: ensure auth is loaded AND user is authorized before creating the query.
        if (isAuthUserLoading || !isAuthorizedAdmin) {
            return null;
        }
        // Firestore must be available as well
        if (!firestore) {
            return null;
        }
        return collection(firestore, 'users');
    }, [firestore, isAuthUserLoading, isAuthorizedAdmin]);
    
    const { data: users, isLoading: isUsersLoading } = useCollection(usersQuery);

    // Combine auth loading and users loading state
    const isLoading = isAuthUserLoading || (isAuthorizedAdmin && isUsersLoading);

    return (
        <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Manage Users</h1>
                    <p className="text-muted-foreground mt-2">
                        View and manage all user accounts in the system.
                    </p>
                </div>
            </div>
            {/* Mobile View */}
            <div className="md:hidden space-y-4">
                 {isLoading && Array.from({ length: 4 }).map((_, i) => (
                    <Card key={i}><CardHeader><Skeleton className="h-20 w-full" /></CardHeader></Card>
                 ))}
                 {users?.map(user => (
                    <Card key={user.id} className="card-glass">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={user.photoURL} />
                                    <AvatarFallback>{user.firstName?.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="text-lg">{user.firstName} {user.lastName}</CardTitle>
                                    <CardDescription>{user.email}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="text-sm space-y-2">
                             <p><span className="font-semibold">Signed Up:</span> {user.signUpDate?.seconds ? format(new Date(user.signUpDate.seconds * 1000), 'PPP') : 'N/A'}</p>
                            <div>
                                <Badge variant={adminEmails.includes(user.email.toLowerCase()) ? 'default' : 'outline'}>
                                    {adminEmails.includes(user.email.toLowerCase()) ? 'Admin' : 'User'}
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>
                 ))}
            </div>

            {/* Desktop View */}
            <div className="hidden md:block border rounded-lg card-glass">
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>User</TableHead>
                            <TableHead className="hidden md:table-cell">Email</TableHead>
                            <TableHead className="hidden lg:table-cell">Sign Up Date</TableHead>
                            <TableHead className="text-right">Role</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && Array.from({ length: 5 }).map((_, i) => (
                            <TableRow key={i}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Skeleton className="h-10 w-10 rounded-full" />
                                        <div className="space-y-1">
                                            <Skeleton className="h-4 w-24" />
                                            <Skeleton className="h-3 w-32" />
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="hidden md:table-cell"><Skeleton className="h-4 w-40" /></TableCell>
                                <TableCell className="hidden lg:table-cell"><Skeleton className="h-4 w-24" /></TableCell>
                                <TableCell className="text-right"><Skeleton className="h-6 w-16 ml-auto" /></TableCell>
                            </TableRow>
                        ))}
                        {!isLoading && users && users.map(user => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar>
                                            <AvatarImage src={user.photoURL} />
                                            <AvatarFallback>
                                                {user.firstName ? user.firstName.charAt(0) : <UserIcon className="h-4 w-4" />}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-medium">{user.firstName} {user.lastName}</div>
                                            <div className="text-sm text-muted-foreground">{user.id}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">{user.email}</TableCell>
                                <TableCell className="hidden lg:table-cell">
                                    {user.signUpDate?.seconds ? format(new Date(user.signUpDate.seconds * 1000), 'PPP') : 'N/A'}
                                </TableCell>
                                <TableCell className="text-right">
                                     <Badge variant={adminEmails.includes(user.email.toLowerCase()) ? 'default' : 'outline'}>
                                        {adminEmails.includes(user.email.toLowerCase()) ? 'Admin' : 'User'}
                                     </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                         {!isLoading && (!users || users.length === 0) && (
                            <TableRow>
                                <TableCell colSpan={4} className="h-24 text-center">
                                    {isAuthorizedAdmin ? 'No users found.' : 'You are not authorized to view users.'}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
