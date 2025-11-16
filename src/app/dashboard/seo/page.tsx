
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Search, ArrowLeft, LineChart, Target, PenSquare } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function SeoPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">SEO for Cannabis Businesses</h1>
        <p className="text-muted-foreground mt-2">
          Rank higher, attract more local customers, and grow your brand online.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Climb the Ranks of Local Search</CardTitle>
          <CardDescription>
            In the competitive cannabis market, being visible online is crucial. Our Search Engine Optimization (SEO) services are designed specifically for dispensaries and cannabis brands to help you dominate local search results and drive organic traffic to your website and your store.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <Target className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Local SEO Optimization</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We optimize your Google Business Profile, build local citations, and manage online reviews to ensure you're the top choice for "dispensary near me" searches.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <PenSquare className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Content Strategy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We create high-quality, keyword-rich content, including blog posts and location pages, that establishes your authority and attracts customers looking for your products.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <LineChart className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Performance Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We provide transparent monthly reports on your keyword rankings, website traffic, and other key performance indicators to show the direct impact of our efforts.
            </p>
          </CardContent>
        </Card>
      </div>
       <Card>
        <CardHeader>
            <CardTitle>Start Your SEO Journey</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">Our SEO services are available in our marketing packages. Let's create a custom strategy to help you achieve your business goals.</p>
        </CardContent>
        <CardFooter>
            <Button>Explore Marketing Packages</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
