
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Rocket, FileCheck2, ArrowLeft } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function StartupSupportPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Cannabis Startup Support</h1>
        <p className="text-muted-foreground mt-2">
          From license application to grand opening, we're your technology partner.
        </p>
      </div>

      <Card>
        <CardHeader>
          <Rocket className="h-10 w-10 text-primary" />
          <CardTitle>Launch with Confidence</CardTitle>
          <CardDescription>
            Starting a dispensary is a monumental task. Our startup support program is designed to guide you through the process, ensuring your technology stack is solid from day one so you can focus on the hundred other things on your plate.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <FileCheck2 className="h-8 w-8 text-primary mb-2" />
            <CardTitle>License Application Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Many state license applications require a detailed technology and security plan. We provide the necessary documentation outlining our platform's security, compliance, and traceability features to strengthen your application.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Factory className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Pre-Opening Setup & Training</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We work with you before your doors open to set up your entire system, from hardware installation to menu building and staff training. We'll ensure your team is confident and your operations are smooth for your grand opening.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
