
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, RefreshCw, ShoppingCart, ArrowLeft } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function EcommerceSyncPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">E-commerce Integration</h1>
        <p className="text-muted-foreground mt-2">
          Unify your in-store and online cannabis sales with seamless menu syncing.
        </p>
      </div>

      <Card>
        <CardHeader>
          <Globe className="h-10 w-10 text-primary mb-4" />
          <CardTitle>One Menu, All Channels</CardTitle>
          <CardDescription>
            Stop wasting time manually updating menus on multiple platforms. With Green Leaf Guide, your POS inventory is the single source of truth. Any change you make—adding a new strain, updating THC content, or changing a price—is automatically pushed to your integrated online menus.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 text-muted-foreground">
                <span className="font-semibold">POS</span>
                <RefreshCw className="h-6 w-6 text-primary animate-spin" style={{ animationDuration: '5s' }} />
                <span className="font-semibold">Weedmaps</span>
                <RefreshCw className="h-6 w-6 text-primary animate-spin" style={{ animationDuration: '5s' }} />
                <span className="font-semibold">Leafly</span>
                <RefreshCw className="h-6 w-6 text-primary animate-spin" style={{ animationDuration: '5s' }} />
                <span className="font-semibold">Your Website</span>
            </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <ShoppingCart className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Live Inventory Sync</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              When a product sells out in-store, it's automatically removed from your online menus, preventing overselling and customer frustration. Low stock alerts can also trigger items to be hidden online.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <RefreshCw className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Online Order Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Online orders from your e-commerce platforms flow directly into your POS for easy fulfillment. Manage pickup and delivery orders from a single, unified interface.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
