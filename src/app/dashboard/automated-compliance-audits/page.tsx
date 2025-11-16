
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileWarning, ShieldAlert, ArrowLeft } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function AutomatedAuditsPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Automated Compliance Audits</h1>
        <p className="text-muted-foreground mt-2">
          Simplify your compliance process with automated checks and proactive alerts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Audits</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Our system automatically runs daily audits of sales, inventory, and employee data against state regulations, flagging any discrepancies before they become major issues.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Purchase Limit Monitoring</CardTitle>
            <FileWarning className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Get real-time alerts if a transaction exceeds a customer's daily or monthly purchase limit for medical or recreational cannabis, preventing costly compliance violations.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Discrepancy Reports</CardTitle>
            <ShieldAlert className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Generate detailed reports on any identified compliance risks, with clear action steps for resolution. Export reports for internal records or state audits.
            </p>
          </CardContent>
        </Card>
      </div>

       <Card>
        <CardHeader>
            <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div>
                <h3 className="font-semibold">1. Rule Configuration</h3>
                <p className="text-muted-foreground">Set up compliance rules based on your state and local regulations, including purchase limits, operating hours, and product equivalencies (e.g., flower vs. concentrate).</p>
            </div>
            <div>
                <h3 className="font-semibold">2. Continuous Monitoring</h3>
                <p className="text-muted-foreground">The system continuously cross-references every transaction and inventory adjustment with your configured rules.</p>
            </div>
            <div>
                <h3 className="font-semibold">3. Instant Alerts & Blocking</h3>
                <p className="text-muted-foreground">Budtenders are instantly alerted at the POS if a sale would violate a rule. The system can be configured to block such transactions entirely, providing a hard stop against non-compliance.</p>
            </div>
        </CardContent>
       </Card>
    </div>
  );
}
