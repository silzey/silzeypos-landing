
'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Heart, ArrowLeft } from "lucide-react";
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const amounts = [10, 25, 50, 100];

export default function DonationsPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | string>(25);

  return (
    <div className="flex flex-col gap-8 max-w-2xl mx-auto">
       <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/profile">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Profile
        </Link>
      </Button>
      <Card>
        <CardHeader className="text-center">
          <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-3xl">Support Our Mission</CardTitle>
          <CardDescription>
            Your generous contribution helps us continue to innovate and support the community.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div>
                <Label className="text-base">Select an amount</Label>
                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                    {amounts.map(amount => (
                         <Button
                            key={amount}
                            variant="outline"
                            className={cn(
                                "h-16 text-lg",
                                selectedAmount === amount && "ring-2 ring-primary border-primary"
                            )}
                            onClick={() => setSelectedAmount(amount)}
                        >
                            ${amount}
                        </Button>
                    ))}
                </div>
            </div>
            <div>
                <Label htmlFor="customAmount" className="text-base">Or enter a custom amount</Label>
                <div className="relative mt-2">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input 
                        id="customAmount"
                        type="number"
                        placeholder="20.00"
                        className="pl-7"
                        value={typeof selectedAmount === 'string' ? selectedAmount : ''}
                        onChange={e => setSelectedAmount(e.target.value)}
                        onClick={() => { if (typeof selectedAmount === 'number') setSelectedAmount('') }}
                    />
                </div>
            </div>
             <div>
                <Label className="text-base">Frequency</Label>
                <RadioGroup defaultValue="one-time" className="flex gap-4 mt-2">
                    <div>
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time" className="ml-2">One-time</Label>
                    </div>
                    <div>
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly" className="ml-2">Monthly</Label>
                    </div>
                </RadioGroup>
            </div>
        </CardContent>
        <CardFooter>
            <Button className="w-full" size="lg">Donate Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
