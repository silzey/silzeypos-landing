
'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ArrowLeft, Star, Gift, Truck } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useUser, useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import { useMemo } from 'react';

type UserProfile = {
    membershipTier: 'Free' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
    loyaltyPoints: number;
}

const tierDetails = {
    Free: {
        pointsToNext: 0,
        nextTier: 'Silver',
        benefits: [
            { icon: Star, text: "Limited blog access" },
            { icon: Gift, text: "Access to Email Newsletter" },
        ]
    },
    Silver: {
        pointsToNext: 1000,
        nextTier: 'Gold',
        benefits: [
            { icon: Star, text: "Full Blog & Tutorial Access" },
            { icon: Gift, text: "Basic E-commerce Sync" },
            { icon: Truck, text: "10% Discount on All Services" },
        ]
    },
    Gold: {
        pointsToNext: 2500,
        nextTier: 'Platinum',
        benefits: [
            { icon: Star, text: "Exclusive access to new product drops" },
            { icon: Gift, text: "Special birthday reward every year" },
            { icon: Truck, text: "Priority local delivery" },
        ]
    },
    Platinum: {
        pointsToNext: 5000,
        nextTier: 'Diamond',
        benefits: [
            { icon: Star, text: "Full E-commerce Integration" },
            { icon: Gift, text: "3 Hours of Business Consulting/Month" },
            { icon: Truck, text: "Dedicated Server Hosting" },
        ]
    },
    Diamond: {
        pointsToNext: Infinity,
        nextTier: '',
        benefits: [
            { icon: Star, text: "C.A.T.S. Custom Tool Suite" },
            { icon: Gift, text: "5 Hours of Business Consulting/Month" },
            { icon: Truck, text: "24/7 Priority Support" },
        ]
    },
};


export default function MembershipPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  const userDocRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'users', user.uid);
  }, [user, firestore]);
  
  const { data: userProfile, isLoading: isProfileLoading } = useDoc<UserProfile>(userDocRef);

  const isLoading = isUserLoading || isProfileLoading;
  
  const currentTier = userProfile?.membershipTier || 'Gold';
  const tierInfo = useMemo(() => tierDetails[currentTier], [currentTier]);
  const loyaltyPoints = userProfile?.loyaltyPoints || 1750;
  const progress = useMemo(() => {
    if (!tierInfo || tierInfo.pointsToNext === Infinity) return 100;
    return (loyaltyPoints / tierInfo.pointsToNext) * 100;
  }, [loyaltyPoints, tierInfo]);
  const pointsToNext = useMemo(() => {
    if (!tierInfo || tierInfo.pointsToNext === Infinity) return 0;
    return tierInfo.pointsToNext - loyaltyPoints;
  }, [loyaltyPoints, tierInfo]);

  if (isLoading || !userProfile) {
    return (
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
             <Skeleton className="h-10 w-40" />
             <Card>
                <CardHeader className="text-center">
                    <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
                    <Skeleton className="h-8 w-64 mx-auto" />
                    <Skeleton className="h-4 w-80 mx-auto mt-2" />
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-3 w-full" />
                    </div>
                    <div className="space-y-2">
                        <Skeleton className="h-6 w-40" />
                        <div className="space-y-3">
                            <Skeleton className="h-16 w-full" />
                            <Skeleton className="h-16 w-full" />
                            <Skeleton className="h-16 w-full" />
                        </div>
                    </div>
                </CardContent>
             </Card>
        </div>
    )
  }


  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
       <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/profile">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Profile
        </Link>
      </Button>
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <Award className="h-16 w-16 text-primary mx-auto mb-4" />
          <CardTitle className="text-3xl">{currentTier} Tier Membership</CardTitle>
          <CardDescription>
            You're one of our most valued members. Thank you for your loyalty!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium">Loyalty Points</h3>
                    <p className="font-bold text-lg text-primary">{loyaltyPoints} / {tierInfo.pointsToNext !== Infinity ? tierInfo.pointsToNext : 'Max'}</p>
                </div>
                <Progress value={progress} className="h-3" />
                {tierInfo.nextTier && (
                    <p className="text-sm text-muted-foreground mt-2 text-right">{pointsToNext} points until your next reward!</p>
                )}
            </div>
             <div>
                <h3 className="text-lg font-medium mb-2">Your Benefits</h3>
                <div className="space-y-3">
                    {tierInfo.benefits.map((benefit, index) => (
                         <div key={index} className="flex items-center gap-4 p-3 rounded-lg border bg-secondary/30">
                            <benefit.icon className="h-6 w-6 text-primary flex-shrink-0" />
                            <p className="text-foreground">{benefit.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
