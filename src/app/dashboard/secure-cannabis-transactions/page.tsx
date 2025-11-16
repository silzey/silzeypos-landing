
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LockKeyhole, ShieldCheck, DatabaseZap, ArrowLeft } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function SecureTransactionsPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Secure Cannabis Transactions</h1>
        <p className="text-muted-foreground mt-2">
          Protecting your business and your customers with enterprise-grade security.
        </p>
      </div>

      <Card>
        <CardHeader>
          <LockKeyhole className="h-10 w-10 text-primary" />
          <CardTitle>End-to-End Encryption</CardTitle>
          <CardDescription>
            Every piece of data, from the moment a transaction is initiated at the POS to its storage in our cloud servers, is protected with end-to-end encryption. This ensures that sensitive business and customer information is shielded from unauthorized access.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <ShieldCheck className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Role-Based Access Control</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              You have granular control over what your employees can see and do. Customize permissions for roles like Budtender, Inventory Manager, and Administrator to ensure staff can only access the information necessary for their job.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <DatabaseZap className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Data Redundancy & Backups</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Your data is continuously backed up across multiple secure servers. This protects against data loss from hardware failure or other catastrophic events, ensuring your business can continue to operate.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
