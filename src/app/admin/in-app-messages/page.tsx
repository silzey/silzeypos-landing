
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useFirestore, useUser, useCollection, useMemoFirebase } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function AdminInAppMessagesPage() {
    const firestore = useFirestore();
    const { user } = useUser();
    const { toast } = useToast();

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [recipientId, setRecipientId] = useState('all');
    const [isLoading, setIsLoading] = useState(false);

    const usersQuery = useMemoFirebase(() => firestore ? collection(firestore, 'users') : null, [firestore]);
    const { data: users, isLoading: usersLoading } = useCollection(usersQuery);

    const handleSendNotification = async () => {
        if (!firestore || !user) {
            toast({ variant: 'destructive', title: 'Error', description: 'You must be logged in.' });
            return;
        }
        if (!title || !message) {
            toast({ variant: 'destructive', title: 'Error', description: 'Title and message are required.' });
            return;
        }

        setIsLoading(true);
        try {
            await addDoc(collection(firestore, 'notifications'), {
                title,
                message,
                type: 'info',
                createdAt: serverTimestamp(),
                senderId: user.uid, // Using admin's UID as senderId
                recipientId,
                read: false,
            });
            toast({ title: 'Success', description: 'Notification sent successfully.' });
            setTitle('');
            setMessage('');
            setRecipientId('all');
        } catch (error) {
            console.error('Error sending notification:', error);
            toast({ variant: 'destructive', title: 'Error', description: 'Failed to send notification. You may not have admin privileges.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">In-App Messages</h1>
                <p className="text-muted-foreground mt-2">
                    Send notifications to your users.
                </p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Send Notification</CardTitle>
                    <CardDescription>Compose and send a message to all users or a specific user.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" placeholder="Enter notification title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="recipient">Recipient</Label>
                        {usersLoading ? (
                           <Skeleton className="h-10 w-full" />
                        ) : (
                        <Select value={recipientId} onValueChange={setRecipientId}>
                            <SelectTrigger id="recipient">
                                <SelectValue placeholder="Select a recipient" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Users</SelectItem>
                                {users?.map((u) => (
                                    <SelectItem key={u.id} value={u.id}>
                                        {u.firstName} {u.lastName} ({u.email})
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        )}
                    </div>
                    <Button onClick={handleSendNotification} disabled={isLoading}>
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                        Send Notification
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
