
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from '@/components/ui/table';

const invoices = [
  { id: 1, date: "Oct 1, 2025", amount: "$500", status: "Paid" },
  { id: 2, date: "Oct 10, 2025", amount: "$1200", status: "Due" },
];

export default function BillingPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Client Portal
        </Link>
      </Button>
      <div className="flex flex-col gap-8">
          <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Billing History</h1>
              <p className="text-muted-foreground mt-2">
                  View and manage your invoices.
              </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Your Invoices</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="bg-card shadow-md rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice #</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map(inv => (
                      <TableRow key={inv.id}>
                        <TableCell className="font-mono">{inv.id}</TableCell>
                        <TableCell>{inv.date}</TableCell>
                        <TableCell>{inv.amount}</TableCell>
                        <TableCell>{inv.status}</TableCell>
                        <TableCell className="text-right space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          {inv.status === "Due" && <Button size="sm">Pay Now</Button>}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
      </div>
    </div>
  );
}

    
