
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Star, MessageSquareText, ArrowLeft } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function LoyaltyCrmPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Loyalty & CRM</h1>
        <p className="text-muted-foreground mt-2">
          Turn first-time buyers into lifelong customers and advocates.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <Users className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Comprehensive Customer Profiles</CardTitle>
            <CardDescription>
              Know your customers. Our CRM captures detailed information, including contact details, purchase history, and product preferences, all tied to a single profile.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Purchase History:</strong> See every item a customer has ever purchased.</li>
              <li><strong>Preferred Strains/Products:</strong> Automatically tag favorite products for personalized recommendations.</li>
              <li><strong>Communication Log:</strong> Track SMS and email marketing messages sent to the customer.</li>
              <li><strong>Notes:</strong> Budtenders can add notes to profiles (e.g., "Prefers sativa-dominant hybrids").</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
           <CardHeader>
            <Star className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Flexible Loyalty Programs</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-muted-foreground">Design a loyalty program that fits your brand. Choose from points-based systems, punch cards, or tiered VIP levels.</p>
             <div>
                <h4 className="font-semibold">Points System</h4>
                <p className="text-sm text-muted-foreground">Customers earn points for every dollar spent, redeemable for discounts or products.</p>
              </div>
               <div>
                <h4 className="font-semibold">Tiered Rewards</h4>
                <p className="text-sm text-muted-foreground">Create tiers (e.g., Bronze, Silver, Gold) with increasing benefits to encourage repeat business.</p>
              </div>
          </CardContent>
        </Card>
      </div>
      
       <Card>
        <CardHeader>
          <MessageSquareText className="h-8 w-8 text-primary mb-2" />
          <CardTitle>Integrated Marketing</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">
              Use your CRM data to send targeted marketing campaigns via SMS or email (where compliant). Filter customers based on their purchase history to announce a new drop of their favorite strain or send a special offer to customers you haven't seen in a while.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
