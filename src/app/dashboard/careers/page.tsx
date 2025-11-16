
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Briefcase, ArrowLeft } from "lucide-react";
import { Button } from '@/components/ui/button';

const openPositions = [
  {
    title: 'Senior Frontend Engineer',
    location: 'Remote',
    description: 'We are looking for an experienced Frontend Engineer to help build our next-generation POS interface. Must have experience with React, TypeScript, and modern web technologies.',
  },
  {
    title: 'Cannabis Compliance Specialist',
    location: 'Denver, CO',
    description: 'Join our compliance team to help navigate the complex regulatory landscape. Deep knowledge of METRC and other state traceability systems is required.',
  },
  {
    title: 'Customer Support Advocate',
    location: 'Remote',
    description: 'Are you passionate about helping customers succeed? Join our support team to provide top-notch assistance to our clients.',
  }
];

export default function CareersPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Careers at SilzeyPOS</h1>
        <p className="text-muted-foreground mt-2">
          Join us in revolutionizing the cannabis technology industry.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Why Work With Us?</CardTitle>
          <CardDescription>
            At SilzeyPOS, we're a passionate team of innovators, thinkers, and builders dedicated to creating best-in-class software for the cannabis industry. We offer competitive salaries, comprehensive benefits, and a flexible, remote-first work culture.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center">Open Positions</h2>
        {openPositions.map((position) => (
          <Card key={position.title}>
            <CardHeader>
              <CardTitle>{position.title}</CardTitle>
              <CardDescription>{position.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{position.description}</p>
            </CardContent>
            <CardFooter>
              <Button>Apply Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
