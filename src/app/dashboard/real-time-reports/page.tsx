
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollText, Clock, Download, ArrowLeft } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function RealTimeReportsPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Real-Time Reporting</h1>
        <p className="text-muted-foreground mt-2">
          Instant access to the data you need, when you need it.
        </p>
      </div>

      <Card>
        <CardHeader>
          <Clock className="h-8 w-8 text-primary mb-2" />
          <CardTitle>No More Waiting for End-of-Day</CardTitle>
          <CardDescription>
            Traditional POS systems often require a 'Z-report' or end-of-day closing process to see your final numbers. With Green Leaf Guide, every report is live. The moment a sale is completed, your data is updated across the entire system.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sales Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Drill down into sales by hour, budtender, product, category, or vendor. Identify your peak hours and most effective staff members.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Inventory Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">View current stock levels, low-stock alerts, inventory valuation, and detailed history for any item to track its entire lifecycle.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Compliance Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Easily generate reports required by state agencies, including sales data, tax reports, and purchase limit adherence.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <Download className="h-8 w-8 text-primary mb-2" />
          <CardTitle>Export Your Data</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            All reports can be easily exported to CSV or PDF formats for use in external accounting software, for sharing with partners, or for your own offline analysis.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
