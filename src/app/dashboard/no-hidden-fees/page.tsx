
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, FileCheck, Search, ArrowLeft } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function NoHiddenFeesPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Transparent and Simple Pricing</h1>
        <p className="text-muted-foreground mt-2">
          No surprises. Just clear, upfront pricing so you can budget with confidence.
        </p>
      </div>

      <Card>
        <CardHeader>
          <ShieldCheck className="h-10 w-10 text-primary" />
          <CardTitle>Our Promise of Transparency</CardTitle>
          <CardDescription>
            We believe that your POS provider should be a partner, not an adversary. That's why we've built our pricing model on a foundation of trust and clarity. You'll always know exactly what you're paying for.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-lg mb-2">What You Get:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>One clear monthly subscription fee.</li>
              <li>Clearly stated payment processing rates.</li>
              <li>Defined costs for hardware bundles.</li>
              <li>Optional add-on services with upfront pricing.</li>
            </ul>
          </div>
           <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-lg mb-2">What You DON'T Get:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>Unexpected setup or installation fees.</li>
              <li>"Statement fees" or other junk charges.</li>
              <li>Extra charges for standard customer support.</li>
              <li>Charges for core software updates and compliance changes.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
