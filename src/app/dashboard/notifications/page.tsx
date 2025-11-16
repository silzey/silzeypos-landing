
'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowLeft, Bell, Info, AlertTriangle, Clock } from 'lucide-react';
import { useCollection, useFirestore, useUser, useMemoFirebase } from '@/firebase';
import { collection, query, where, orderBy, doc, updateDoc } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';

type Notification = {
    id: string;
    title: string;
    message: string;
    type: "info" | "alert" | "reminder";
    createdAt: { seconds: number; nanoseconds: number };
    recipientId: string;
    read: boolean;
};

const notificationIcons = {
    info: <Info className="h-5 w-5 text-blue-500" />,
    alert: <AlertTriangle className="h-5 w-5 text-red-500" />,
    reminder: <Clock className="h-5 w-5 text-yellow-500" />,
};

const staticNotifications = [
  { id: '1', title: "Payment Received", message: "You received $500 from Client A", date: "Oct 22, 2025", read: false, createdAt: { seconds: new Date().getTime()/1000, nanoseconds: 0}, type: 'info', recipientId: 'user' },
  { id: '2', title: "Project Updated", message: "New status for 'Website Redesign'", date: "Oct 21, 2025", read: true, createdAt: { seconds: new Date().getTime()/1000 - 86400, nanoseconds: 0}, type: 'info', recipientId: 'user' },
];

export default function NotificationsPage() {
    const firestore = useFirestore();
    const { user } = useUser();

    const notificationsQuery = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return query(
            collection(firestore, 'notifications'),
            where('recipientId', 'in', [user.uid, 'all']),
            orderBy('createdAt', 'desc')
        );
    }, [firestore, user]);

    const { data: notifications, isLoading } = useCollection<Notification>(notificationsQuery);

    const handleMarkAsRead = async (id: string) => {
        if (!firestore) return;
        const notifRef = doc(firestore, 'notifications', id);
        try {
            await updateDoc(notifRef, { read: true });
        } catch (error) {
            console.error("Error marking notification as read:", error);
        }
    };

    const displayNotifications = notifications ?? staticNotifications;

    return (
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            <Button asChild variant="outline" className="self-start">
                <Link href="/dashboard/client-portal">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Client Portal
                </Link>
            </Button>
            <div className="flex flex-col gap-8">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Notifications</h1>
                    <p className="text-muted-foreground mt-2">
                        Your latest alerts and messages.
                    </p>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Your Feed</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isLoading && (
                            <div className="space-y-4">
                                {Array.from({ length: 3 }).map((_, i) => (
                                     <div key={i} className="p-4 rounded-lg shadow-md bg-background flex items-start gap-4">
                                        <Skeleton className="h-6 w-6 rounded-full mt-1" />
                                        <div className="flex-grow space-y-2">
                                            <Skeleton className="h-5 w-3/4" />
                                            <Skeleton className="h-4 w-full" />
                                            <Skeleton className="h-3 w-1/4" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {!isLoading && displayNotifications && displayNotifications.length > 0 ? (
                            <div className="space-y-4">
                                {displayNotifications.map(n => (
                                  <div key={n.id} className={cn('p-4 rounded shadow-md', n.read ? 'bg-background' : 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500')}>
                                    <h3 className="font-semibold">{n.title}</h3>
                                    <p>{n.message}</p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {formatDistanceToNow(new Date(n.createdAt.seconds * 1000), { addSuffix: true })}
                                    </p>
                                  </div>
                                ))}
                            </div>
                        ) : !isLoading && (
                             <Card className="flex flex-col items-center justify-center text-center p-8 gap-4 min-h-[300px]">
                                <Bell className="h-16 w-16 text-primary" />
                                <CardTitle>All caught up!</CardTitle>
                                <CardDescription>
                                    You have no new notifications.
                                </CardDescription>
                            </Card>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
