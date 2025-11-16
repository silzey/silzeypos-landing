
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SlidersHorizontal, Settings, Palette, ArrowLeft } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function UserFlexibilityPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Powerful User Flexibility</h1>
        <p className="text-muted-foreground mt-2">
          Your dispensary, your workflow. Our software adapts to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <SlidersHorizontal className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Customizable Workflows</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              No two dispensaries operate exactly the same. We provide powerful tools to let you tailor the system to your specific needs. Configure custom product categories, tax rules, and receipt formats.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Settings className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Granular Permissions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Control exactly what your employees can access. Create custom roles beyond the defaults, and specify permissions for actions like processing returns, applying discounts, or editing inventory.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <Palette className="h-8 w-8 text-primary mb-2" />
          <CardTitle>Dynamic Pricing & Promotions</CardTitle>
          <CardDescription>
            Easily create and manage complex promotions without workarounds.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li><strong>Happy Hour:</strong> Schedule time-based discounts that automatically apply during certain hours.</li>
            <li><strong>BOGO Deals:</strong> Set up "Buy One, Get One" or "Buy Two, Get One 50% Off" promotions.</li>
            <li><strong>Tiered Discounts:</strong> Offer volume discounts, such as a lower price per gram for buying an ounce.</li>
            <li><strong>Customer Group Pricing:</strong> Assign special pricing for specific groups like veterans or medical patients.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
