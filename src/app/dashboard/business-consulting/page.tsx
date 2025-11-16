

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Lightbulb, LineChart, Target, Check, Scale, Users, Megaphone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BusinessConsultingPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Business Consulting Services</h1>
        <p className="text-muted-foreground mt-2">
          Leverage our industry expertise to optimize your cannabis business operations from seed to sale.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>A Multidisciplinary Team of Experts</CardTitle>
          <CardDescription>
            The cannabis market is unlike any other. Success requires more than just a good product; it demands expertise in compliance, marketing, and data analysis. Our consultants include seasoned legal staff, creative marketers, and sharp analysts dedicated to helping you navigate the complexities and turn your vision into a profitable, compliant reality.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-secondary/30">
            <Scale className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Legal & Compliance</h3>
            <p className="text-sm text-muted-foreground">
              Our legal staff provide crucial guidance on state-specific regulations, licensing applications, and ongoing compliance to protect your business.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-secondary/30">
            <Megaphone className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Marketing & Promotions</h3>
            <p className="text-sm text-muted-foreground">
             Our marketers develop compliant, data-driven strategies to build your brand, run effective promotions, and capture your target audience.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-secondary/30">
            <LineChart className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Data Analysts</h3>
            <p className="text-sm text-muted-foreground">
             Our analysts dive deep into your sales and market data to uncover actionable insights for inventory optimization, pricing, and expansion strategy.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Consulting Packages</h2>
        <p className="text-muted-foreground mt-2 md:max-w-2xl md:mx-auto">Choose a consulting plan that aligns with your business goals.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Tier 1: Startup */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Startup Launchpad</CardTitle>
            <CardDescription>Essential guidance for getting your cannabis business off the ground correctly and compliantly.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="text-3xl md:text-4xl font-bold">
              $3,500<span className="text-lg font-normal text-muted-foreground">/one-time</span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> License Application Review & Support</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Initial Compliance & SOP Setup</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Basic Brand & Logo Consultation</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Grand Opening Marketing Plan</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Tech Stack & Hardware Recommendation</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">Select Plan</Button>
          </CardFooter>
        </Card>

        {/* Tier 2: Growth */}
        <Card className="flex flex-col border-primary ring-2 ring-primary shadow-2xl">
           <CardHeader>
            <CardTitle>Growth Accelerator</CardTitle>
            <CardDescription>For established dispensaries looking to optimize operations and scale marketing efforts.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="text-3xl md:text-4xl font-bold">
              $2,500<span className="text-lg font-normal text-muted-foreground">/mo</span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start font-semibold text-foreground"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Everything in Startup, plus:</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Monthly Performance Analysis & Reporting</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Promotional Campaign Planning & Execution</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Inventory & Margin Optimization Strategy</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Ongoing SEO & Content Marketing Support</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Choose Growth</Button>
          </CardFooter>
        </Card>

        {/* Tier 3: Enterprise */}
        <Card className="flex flex-col">
           <CardHeader>
            <CardTitle>Enterprise Strategy</CardTitle>
            <CardDescription>Comprehensive, ongoing support for MSOs and large-scale cannabis operations.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="text-3xl md:text-4xl font-bold">
              Custom
            </div>
            <p className="text-sm text-muted-foreground">Let's build your empire</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start font-semibold text-foreground"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Everything in Growth, plus:</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Dedicated Legal & Marketing Team</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Expansion & M&A Advisory</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Advanced Data Modeling & Predictive Analytics</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Quarterly On-Site Business Reviews</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
