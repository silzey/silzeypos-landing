
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Gavel, ArrowLeft, Scale, FileText, ShieldCheck } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function LegalAidePage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Legal Aide Services</h1>
        <p className="text-muted-foreground mt-2">
          Expert legal guidance tailored for the cannabis industry.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Navigate the Legal Maze with Confidence</CardTitle>
          <CardDescription>
            The legal landscape for cannabis is constantly evolving and varies widely from state to state. Our legal aide services provide you with access to experienced legal professionals who specialize in the cannabis industry, helping you stay compliant, mitigate risk, and protect your business.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <Scale className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Regulatory Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We provide ongoing guidance on state and local regulations, including licensing, packaging, labeling, and advertising rules.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <FileText className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Contract Review</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our experts can review vendor agreements, employment contracts, and other legal documents to ensure your interests are protected.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <ShieldCheck className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Risk Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We help you identify and address potential legal risks in your operations before they become costly problems.
            </p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Get Legal Support</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">Our legal aide services are available as an add-on to our Growth and Enterprise plans or as a standalone retainer. Contact us to learn more about how we can support your business.</p>
        </CardContent>
        <CardFooter>
            <Button>Contact Sales</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
