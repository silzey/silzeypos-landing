
'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Repeat, ArrowLeft, Check, X } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const plans = [
    {
        name: "Free",
        price: "$0",
        priceDetail: "Free Forever",
        description: "For users getting started with basic access.",
        features: [
            { text: "Limited Blog Access (1-2 posts/week)", included: true },
            { text: "Basic Analytics on Site Traffic", included: true },
            { text: "Access to Email Newsletter", included: true },
            { text: "Limited Community Access", included: true },
            { text: "5% Discount on Consulting", included: true },
            { text: "POS Mobile App", included: false },
            { text: "Advanced Reporting", included: false },
        ],
        isCurrent: false,
    },
    {
        name: "Silver",
        price: "$9.99",
        priceDetail: "/month",
        description: "For those ready to access more content and basic tools.",
        features: [
            { text: "Full Blog & Tutorial Access", included: true },
            { text: "Basic E-commerce Sync", included: true },
            { text: "Basic Real-Time Reports", included: true },
            { text: "Basic Loyalty & CRM Tools", included: true },
            { text: "10% Discount on All Services", included: true },
            { text: "Shared Cloud Hosting", included: true },
            { text: "Basic Mobile App Template", included: true },
        ],
        isCurrent: false,
    },
    {
        name: "Gold",
        price: "$29.99",
        priceDetail: "/month",
        description: "The most popular choice for growing businesses.",
        features: [
            { text: "Everything in Silver", included: true },
            { text: "Advanced Analytics Dashboard", included: true },
            { text: "Integrated POS Hardware Options", included: true },
            { text: "Automated Compliance Audits", included: true },
            { text: "1 Hour of Business Consulting/Month", included: true },
            { text: "Marketplace Access to Sell", included: true },
            { text: "15% Discount on All Services", included: true },
        ],
        isCurrent: true,
        highlighted: true,
    },
    {
        name: "Platinum",
        price: "$69.99",
        priceDetail: "/month",
        description: "For businesses that need advanced tools and support.",
        features: [
            { text: "Everything in Gold", included: true },
            { text: "Full E-commerce Integration", included: true },
            { text: "Advanced Loyalty & CRM Suite", included: true },
            { text: "3 Hours of Business Consulting/Month", included: true },
            { text: "Dedicated Server Hosting", included: true },
            { text: "Custom Mobile App (1-2 features)", included: true },
            { text: "25% Discount on All Services", included: true },
        ],
        isCurrent: false,
    },
    {
        name: "Diamond",
        price: "$149.99",
        priceDetail: "/month",
        description: "The ultimate package for market leaders.",
        features: [
            { text: "Everything in Platinum", included: true },
            { text: "C.A.T.S. Custom Tool Suite", included: true },
            { text: "Full Cannabis Compliance Suite", included: true },
            { text: "Custom Backend Design Options", included: true },
            { text: "5 Hours of Business Consulting/Month", included: true },
            { text: "30% Discount on All Services", included: true },
            { text: "24/7 Priority Support", included: true },
        ],
        isCurrent: false,
    }
];

export default function SubscriptionsPage() {
  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto">
       <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/profile">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Profile
        </Link>
      </Button>
      
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Membership Tiers</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Choose the plan that's right for your business. Unlock more features and benefits as you grow.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
        {plans.map((plan) => (
            <Card key={plan.name} className={cn(
                "flex flex-col",
                plan.highlighted ? 'border-primary ring-2 ring-primary shadow-2xl' : 'shadow-lg',
                'lg:col-span-1',
                (plan.name === 'Platinum' || plan.name === 'Diamond') && 'md:col-span-1',
                 plan.name === 'Gold' && 'md:col-span-2 lg:col-span-1'

            )}>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>{plan.name}</CardTitle>
                        {plan.isCurrent && <Badge variant="default">Current Plan</Badge>}
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                    <div className="flex items-baseline">
                        <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground ml-1">{plan.priceDetail}</span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        {plan.features.map((feature, index) => (
                             <li key={index} className="flex items-start">
                                {feature.included ? 
                                    <Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> :
                                    <X className="h-4 w-4 mr-2 mt-1 text-muted-foreground/50 flex-shrink-0" />
                                }
                                <span className={!feature.included ? 'text-muted-foreground/50 line-through' : ''}>
                                    {feature.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" disabled={plan.isCurrent} variant={plan.highlighted ? 'default' : 'outline'}>
                        {plan.isCurrent ? 'Your Current Plan' : 'Choose Plan'}
                    </Button>
                </CardFooter>
            </Card>
        ))}
      </div>
       <div className="text-center text-muted-foreground text-sm space-y-2 pt-4">
            <p><strong>Free Trials:</strong> We offer a 7-day free trial for our Silver, Gold, and Platinum tiers.</p>
            <p><strong>Discounts & Perks:</strong> Get 2 months free with any annual subscription. Refer a friend and get 10% off your next bill.</p>
        </div>
    </div>
  );
}
