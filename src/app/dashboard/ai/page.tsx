
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { BrainCircuit, ArrowLeft, LineChart, Palette, ShoppingBasket } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function AiPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">AI-Powered Business Solutions</h1>
        <p className="text-muted-foreground mt-2">
          Leverage the power of Artificial Intelligence to make smarter decisions and automate growth.
        </p>
      </div>

      <Card>
        <CardHeader>
          <BrainCircuit className="h-10 w-10 text-primary mb-4" />
          <CardTitle>Your Intelligent Business Partner</CardTitle>
          <CardDescription>
            SilzeyPOS integrates cutting-edge AI to transform your data into a competitive advantage. We go beyond simple reporting to provide predictive insights and intelligent automation, helping you optimize every aspect of your business, from inventory to customer engagement.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <LineChart className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Predictive Business Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our AI analyzes historical sales data, market trends, and even local events to forecast demand. It helps you anticipate which products will be popular, preventing stockouts and reducing overstock.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Palette className="h-8 w-8 text-primary mb-2" />
            <CardTitle>AI-Assisted Web Design</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Looking to build or refresh your website? Our AI tools can generate design mockups, suggest color palettes, and create compelling copy, dramatically speeding up the creative process.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <ShoppingBasket className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Intelligent Customer Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              AI helps you understand your customers on a deeper level. It identifies purchasing patterns and customer segments, enabling you to create highly targeted and effective marketing campaigns.
            </p>
          </CardContent>
        </Card>
      </div>
       <Card>
        <CardHeader>
            <CardTitle>How We Bring AI to You</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">
              We believe AI should be accessible and practical. Our team assists by first understanding your business goals. Then, we configure and fine-tune our AI models with your data to provide solutions that deliver real-world value, whether that's optimizing your inventory, personalizing the customer experience, or uncovering new market opportunities.
            </p>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline">
            <Link href="/dashboard/business-consulting">Explore AI Consulting</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
