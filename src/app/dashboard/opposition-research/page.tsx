
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { BookUser, ArrowLeft, Users, BarChart, MapPin } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function OppositionResearchPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Opposition Research Services</h1>
        <p className="text-muted-foreground mt-2">
          Gain a decisive competitive advantage with in-depth market and competitor analysis.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Know Your Battlefield</CardTitle>
          <CardDescription>
            Success in the cannabis industry requires more than just a great product; it demands a deep understanding of your competitors and the market landscape. Our opposition research services provide you with the actionable intelligence you need to make smarter strategic decisions.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <Users className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Competitor Profiling</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We deliver detailed profiles of your key competitors, analyzing their pricing strategies, product assortment, marketing tactics, and customer reviews.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <BarChart className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Market Trend Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Stay ahead of the curve. We identify emerging product trends, pricing shifts, and changes in consumer behavior within your specific market.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <MapPin className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Location & Expansion Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Planning to expand? We provide data-driven analysis of potential new locations, including demographic data and competitor saturation.
            </p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Arm Your Business with Intelligence</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">Opposition research is a key component of our Business Consulting services. Contact us for a confidential consultation.</p>
        </CardContent>
        <CardFooter>
            <Button>Request a Consultation</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
