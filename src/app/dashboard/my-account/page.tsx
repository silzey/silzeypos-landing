
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Cog, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const profileSchema = z.object({
    firstName: z.string().min(1, "First name is required."),
    lastName: z.string().min(1, "Last name is required."),
    email: z.string().email(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function MyAccountPage() {
    const { user, isUserLoading } = useUser();
    const firestore = useFirestore();
    const { toast } = useToast();

    const userDocRef = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return doc(firestore, 'users', user.uid);
    }, [firestore, user]);

    const { data: userProfile, isLoading: isProfileLoading } = useDoc<{firstName: string, lastName: string}>(userDocRef);

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
        }
    });

    useEffect(() => {
        if (user) {
            form.reset({
                firstName: userProfile?.firstName || user.displayName?.split(' ')[0] || '',
                lastName: userProfile?.lastName || user.displayName?.split(' ').slice(1).join(' ') || '',
                email: user.email || '',
            });
        }
    }, [user, userProfile, form]);

    const handleUpdateProfile: SubmitHandler<ProfileFormValues> = async (data) => {
        if (!user || !userDocRef) {
            toast({ variant: 'destructive', title: 'Error', description: 'You must be logged in to update your profile.' });
            return;
        }

        form.clearErrors();

        try {
            const newDisplayName = `${data.firstName} ${data.lastName}`.trim();

            // Update Firebase Auth profile
            await updateProfile(user, { displayName: newDisplayName });

            // Update Firestore document
            await updateDoc(userDocRef, {
                firstName: data.firstName,
                lastName: data.lastName,
            });

            toast({ title: 'Success', description: 'Your profile has been updated.' });
        } catch (error) {
            console.error("Error updating profile:", error);
            toast({ variant: 'destructive', title: 'Error', description: 'Failed to update profile.' });
        }
    };
    
    const isLoading = isUserLoading || isProfileLoading;

    return (
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            <Button asChild variant="outline" className="self-start">
                <Link href="/dashboard/profile">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Profile
                </Link>
            </Button>
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <Cog className="h-10 w-10 text-primary" />
                        <div>
                            <CardTitle className="text-3xl">My Account</CardTitle>
                            <CardDescription>Manage your profile, password, and notification settings.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleUpdateProfile)}>
                        <CardContent className="space-y-8">
                            {isLoading ? (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium text-foreground">Profile Information</h3>
                                    <Separator />
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Skeleton className="h-4 w-20" />
                                            <Skeleton className="h-10 w-full" />
                                        </div>
                                        <div className="space-y-2">
                                            <Skeleton className="h-4 w-20" />
                                            <Skeleton className="h-10 w-full" />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium text-foreground">Profile Information</h3>
                                    <Separator />
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="firstName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>First Name</FormLabel>
                                                    <FormControl><Input {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="lastName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Last Name</FormLabel>
                                                    <FormControl><Input {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                     <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email Address</FormLabel>
                                                <FormControl><Input {...field} disabled /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            )}

                            {/* Change Password Section */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-foreground">Change Password</h3>
                                <Separator />
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="currentPassword">Current Password</Label>
                                        <Input id="currentPassword" type="password" disabled={form.formState.isSubmitting} />
                                    </div>
                                    <div>
                                        <Label htmlFor="newPassword">New Password</Label>
                                        <Input id="newPassword" type="password" disabled={form.formState.isSubmitting} />
                                    </div>
                                </div>
                                 <Button variant="outline" type="button" disabled>Update Password</Button>
                                 <p className="text-xs text-muted-foreground">Password updates are coming soon.</p>
                            </div>

                            {/* Notification Settings Section */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-foreground">Notification Settings</h3>
                                <Separator />
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between rounded-lg border p-4">
                                        <div>
                                            <p className="font-medium">Invoice Notifications</p>
                                            <p className="text-sm text-muted-foreground">Receive an email when a new invoice is available.</p>
                                        </div>
                                        <Switch defaultChecked />
                                    </div>
                                    <div className="flex items-center justify-between rounded-lg border p-4">
                                        <div>
                                            <p className="font-medium">Promotional Emails</p>
                                            <p className="text-sm text-muted-foreground">Get notified about new features and special offers.</p>
                                        </div>
                                        <Switch />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Save Changes
                            </Button>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </div>
    );
}
