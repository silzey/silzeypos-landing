
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, FileText, ShieldCheck, ArrowLeft } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function CannabisCompliancePage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Cannabis Compliance</h1>
        <p className="text-muted-foreground mt-2">
          Stay ahead of regulations with integrated, state-specific compliance tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <Scale className="h-8 w-8 text-primary mb-2" />
            <CardTitle>METRC Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Full, two-way integration with METRC. Sales and inventory adjustments are automatically reported in real-time, eliminating manual entry and reducing the risk of errors. Sync your plant and package tags seamlessly.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <FileText className="h-8 w-8 text-primary mb-2" />
            <CardTitle>BioTrack & Leaf Data Systems Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We support major state traceability systems. Our platform adapts to the specific reporting requirements of BioTrack and Leaf Data Systems, ensuring you're always compliant no matter where you operate.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <ShieldCheck className="h-8 w-8 text-primary mb-2" />
          <CardTitle>Automated Compliance Features</CardTitle>
          <CardDescription>
            Our POS is designed with compliance at its core, helping you avoid common violations.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li><strong>Purchase Limit Enforcement:</strong> Automatically calculates and tracks THC limits across different product categories (flower, edibles, concentrates) to prevent over-selling.</li>
            <li><strong>Age Verification:</strong> Prompts and logs age verification for every transaction, compatible with 2D barcode scanners.</li>
            <li><strong>Operating Hour Controls:</strong> Restricts sales outside of legally permitted hours based on your local regulations.</li>
            <li><strong>Accurate Labeling:</strong> Integrates with compliant label printers to ensure all necessary information (potency, batch number, warnings) is on your products.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
