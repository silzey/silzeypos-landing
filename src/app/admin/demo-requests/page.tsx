
'use client';

import { useMemo } from 'react';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, doc, updateDoc, query, orderBy } from 'firebase/firestore';
import { 
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function AdminDemoRequestsPage() {
    const firestore = useFirestore();

    const demoRequestsQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'demo_requests'), orderBy('requestDate', 'desc'));
    }, [firestore]);
    
    const { data: demoRequests, isLoading } = useCollection(demoRequestsQuery);

    const handleMarkAsRead = async (id: string) => {
        if (!firestore) return;
        const requestRef = doc(firestore, 'demo_requests', id);
        try {
            await updateDoc(requestRef, { status: 'read' });
        } catch (error) {
            console.error("Error updating demo request status:", error);
        }
    };

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Manage Demo Requests</h1>
                <p className="text-muted-foreground mt-2">
                    View and manage all submitted demo requests.
                </p>
            </div>
            {/* Mobile View */}
            <div className="md:hidden">
                <div className="space-y-4">
                    {isLoading && Array.from({ length: 3 }).map((_, i) => (
                        <Card key={i}>
                            <CardHeader>
                                <Skeleton className="h-5 w-3/4" />
                                <Skeleton className="h-4 w-1/2" />
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                            </CardContent>
                        </Card>
                    ))}
                    {demoRequests?.map(request => (
                        <Card key={request.id} className="card-glass">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-lg">{request.fullName}</CardTitle>
                                        <CardDescription>{request.emailAddress}</CardDescription>
                                    </div>
                                    <div className={cn(
                                        "h-3 w-3 rounded-full mt-1 shrink-0",
                                        request.status === 'new' ? 'bg-green-500' : 'bg-muted'
                                    )}>
                                        {request.status === 'new' && <div className="h-3 w-3 rounded-full bg-green-400 animate-ping" />}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="text-sm space-y-2">
                                <p><span className="font-semibold">Phone:</span> {request.phoneNumber || 'N/A'}</p>
                                <p><span className="font-semibold">Description:</span> {request.businessDescription}</p>
                                <p><span className="font-semibold">Date:</span> {request.requestDate?.seconds ? format(new Date(request.requestDate.seconds * 1000), 'P') : 'N/A'}</p>
                                {request.status === 'new' && (
                                    <Button variant="outline" size="sm" className="mt-2 w-full" onClick={() => handleMarkAsRead(request.id)}>
                                        <Eye className="mr-2 h-4 w-4" /> Mark as Read
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            {/* Desktop View */}
            <div className="hidden md:block border rounded-lg card-glass">
                <TooltipProvider>
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-12">Status</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead className="hidden sm:table-cell">Email</TableHead>
                            <TableHead className="hidden md:table-cell">Phone</TableHead>
                            <TableHead className="hidden lg:table-cell">Business Description</TableHead>
                            <TableHead className="hidden xl:table-cell text-center">Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && Array.from({ length: 5 }).map((_, i) => (
                            <TableRow key={i}>
                                <TableCell><Skeleton className="h-5 w-5 rounded-full" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                <TableCell className="hidden sm:table-cell"><Skeleton className="h-5 w-32" /></TableCell>
                                <TableCell className="hidden md:table-cell"><Skeleton className="h-5 w-28" /></TableCell>
                                <TableCell className="hidden lg:table-cell"><Skeleton className="h-5 w-48" /></TableCell>
                                <TableCell className="hidden xl:table-cell"><Skeleton className="h-5 w-20" /></TableCell>
                                <TableCell className="text-right"><Skeleton className="h-8 w-8 ml-auto" /></TableCell>
                            </TableRow>
                        ))}
                        {demoRequests && demoRequests.map(request => (
                            <TableRow key={request.id}>
                                <TableCell>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div className={cn(
                                                "h-3 w-3 rounded-full",
                                                request.status === 'new' ? 'bg-green-500' : 'bg-muted'
                                            )}>
                                                {request.status === 'new' && (
                                                    <div className="h-3 w-3 rounded-full bg-green-400 animate-ping" />
                                                )}
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{request.status === 'new' ? 'New Request' : 'Already Read'}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TableCell>
                                <TableCell className="font-medium">{request.fullName}</TableCell>
                                <TableCell className="hidden sm:table-cell">{request.emailAddress}</TableCell>
                                <TableCell className="hidden md:table-cell">{request.phoneNumber || 'N/A'}</TableCell>
                                <TableCell className="hidden lg:table-cell max-w-xs truncate">
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <p>{request.businessDescription}</p>
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-md">
                                            <p>{request.businessDescription}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TableCell>
                                <TableCell className="hidden xl:table-cell text-center">
                                    {request.requestDate?.seconds ? format(new Date(request.requestDate.seconds * 1000), 'P') : 'N/A'}
                                </TableCell>
                                <TableCell className="text-right">
                                    {request.status === 'new' && (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon" onClick={() => handleMarkAsRead(request.id)}>
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Mark as Read</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                         {demoRequests && demoRequests.length === 0 && !isLoading && (
                            <TableRow>
                                <TableCell colSpan={7} className="h-24 text-center">
                                    No demo requests found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                </TooltipProvider>
            </div>
        </div>
    );
}
