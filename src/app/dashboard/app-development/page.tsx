

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Check, ArrowLeft } from "lucide-react";

export default function AppDevelopmentPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Custom App Development</h1>
        <p className="text-muted-foreground mt-2">
          Extend your brand and connect directly with your customers through a custom mobile app.
        </p>
      </div>

      <Card>
        <CardHeader>
          <Smartphone className="h-10 w-10 text-primary mb-4" />
          <CardTitle>Your Brand in Their Pocket</CardTitle>
          <CardDescription>
            A mobile app is more than just a tool; it's a direct marketing channel and a powerful way to build loyalty. From online ordering to exclusive deals, an app keeps your customers engaged and coming back. We handle the entire process, from design to deployment on the Apple App Store and Google Play Store.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">App Development Packages</h2>
        <p className="text-muted-foreground mt-2 md:max-w-2xl md:mx-auto">Choose a plan that fits your business goals and budget.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Tier 1: Starter App */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Starter App</CardTitle>
            <CardDescription>Essential features to establish your mobile presence.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="text-3xl md:text-4xl font-bold">
              $5,000<span className="text-lg font-normal text-muted-foreground"> one-time</span>
            </div>
            <p className="text-sm text-muted-foreground">+ $150/mo maintenance</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> iOS & Android Apps</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Branded UI/UX Design</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Product Menu & Details</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Store Locator & Info</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> App Store Submission</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">Get Started</Button>
          </CardFooter>
        </Card>

        {/* Tier 2: Business App */}
        <Card className="flex flex-col border-primary ring-2 ring-primary shadow-2xl">
           <CardHeader>
            <CardTitle>Business App</CardTitle>
            <CardDescription>Advanced tools to drive engagement and sales.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="text-3xl md:text-4xl font-bold">
              $12,000<span className="text-lg font-normal text-muted-foreground"> one-time</span>
            </div>
             <p className="text-sm text-muted-foreground">+ $300/mo maintenance</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start font-semibold text-foreground"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Everything in Starter, plus:</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Push Notifications</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> In-App Ordering & Payments</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> User Accounts & Profiles</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Basic Analytics Dashboard</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Choose Business</Button>
          </CardFooter>
        </Card>

        {/* Tier 3: Enterprise Suite */}
        <Card className="flex flex-col">
           <CardHeader>
            <CardTitle>Enterprise Suite</CardTitle>
            <CardDescription>A fully custom solution tailored to your unique operations.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="text-3xl md:text-4xl font-bold">
              Custom
            </div>
            <p className="text-sm text-muted-foreground">Let's build your vision</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start font-semibold text-foreground"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Everything in Business, plus:</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Advanced CRM & Loyalty Integration</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Custom Feature Development</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Dedicated Admin Panel</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Priority Support & SLA</li>
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
