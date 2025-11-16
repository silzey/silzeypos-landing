
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Wifi, Smartphone, Tablet, Laptop, ArrowLeft } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function CloudBasedPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Secure Cloud-Based Platform</h1>
        <p className="text-muted-foreground mt-2">
          Access your business data from anywhere, at any time, on any device.
        </p>
      </div>

      <Card>
        <CardHeader>
          <Cloud className="h-10 w-10 text-primary" />
          <CardTitle>Freedom and Flexibility</CardTitle>
          <CardDescription>
            No more being tied to a back-office computer. Our cloud-based system means your data is securely stored and accessible wherever you have an internet connection. Check sales reports from home, manage inventory from your phone, or update pricing on the go.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex justify-around items-center p-6 bg-secondary/30 rounded-lg">
                <Smartphone className="h-12 w-12 text-muted-foreground" />
                <Tablet className="h-12 w-12 text-muted-foreground" />
                <Laptop className="h-12 w-12 text-muted-foreground" />
            </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Real-Time Data Sync</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Any sale made at the register instantly updates your inventory levels and sales reports across all devices. Multi-location operators can view consolidated data or drill down into a specific store's performance in real-time.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Offline Mode</CardTitle>
            <Wifi className="h-4 w-4 text-muted-foreground absolute top-6 right-6" />
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Internet outage? No problem. Our system continues to operate in offline mode, queuing transactions securely. Once your connection is restored, all data automatically syncs to the cloud.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
