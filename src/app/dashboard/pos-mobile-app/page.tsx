

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, BarChart2, PackageOpen, ArrowLeft } from "lucide-react";
import { MobileAppAnimation } from "@/components/landing/MobileAppAnimation";
import { Button } from '@/components/ui/button';

export default function PosMobileAppPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">POS Mobile App</h1>
        <p className="text-muted-foreground mt-2">
          Run your dispensary from the palm of your hand.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div className="lg:col-span-1 flex justify-center items-center order-1 lg:order-2">
            <div className="w-[250px] h-[500px] sm:w-[300px] sm:h-[600px] rounded-2xl shadow-2xl border-4 border-foreground overflow-hidden">
                <MobileAppAnimation />
            </div>
        </div>
        <div className="lg:col-span-2 order-2 lg:order-1">
          <Card>
            <CardHeader>
              <Smartphone className="h-8 w-8 text-primary" />
              <CardTitle>Your Business, Anywhere</CardTitle>
              <CardDescription>
                Our companion mobile app for iOS and Android gives you the freedom to manage your business without being tied to the register. Perfect for owners and managers on the move.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                    <BarChart2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">Live Dashboard</h3>
                        <p className="text-muted-foreground">Keep a pulse on your sales. View real-time revenue, transaction counts, and top-selling items directly from your phone.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <PackageOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">Inventory Management</h3>
                        <p className="text-muted-foreground">Receive new inventory, perform cycle counts, and adjust stock levels using your phone's camera as a barcode scanner. No need for a bulky, dedicated device.</p>
                    </div>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
