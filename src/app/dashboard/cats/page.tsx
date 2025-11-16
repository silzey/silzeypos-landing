
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, Filter, BrainCircuit, ArrowLeft } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function CatsPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <div className="flex items-center gap-4">
          <Target className="h-10 w-10 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Cannabis Analytic Tracking System (C.A.T.S.)</h1>
        </div>
        <p className="text-muted-foreground mt-2">
          Harness the power of your data to make smarter business decisions.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Beyond Standard Reporting</CardTitle>
          <CardDescription>
            C.A.T.S. is our advanced analytics engine designed specifically for the nuances of the cannabis market. It goes beyond simple sales numbers to give you actionable insights into product performance, customer behavior, and market trends.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2 p-4 rounded-lg border">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h3 className="font-semibold">Product Performance Analysis</h3>
            <p className="text-sm text-muted-foreground">Identify your "power plants." Track sales velocity, margin, and sell-through rate by strain, brand, and product type. Know which products to reorder and which to discount.</p>
          </div>
          <div className="flex flex-col gap-2 p-4 rounded-lg border">
            <Filter className="h-6 w-6 text-primary" />
            <h3 className="font-semibold">Customer Segmentation</h3>
            <p className="text-sm text-muted-foreground">Understand your clientele. C.A.T.S. segments customers based on purchase history, frequency, and product preferences (e.g., "weekend edible buyers," "high-THC flower enthusiasts").</p>
          </div>
           <div className="flex flex-col gap-2 p-4 rounded-lg border">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <h3 className="font-semibold">Predictive Analytics</h3>
            <p className="text-sm text-muted-foreground">Forecast future demand based on historical sales data, seasonality, and local events. Optimize your inventory to avoid stockouts of popular items and overstocking of slow-movers.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
