
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MonitorPlay, Sparkles, Wand2, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import placeholderImages from '@/app/lib/placeholder-images.json';

export default function FuturisticDesignPage() {
  const designImage = placeholderImages['interface-design'];
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Futuristic, Consumer-Inspired Design</h1>
        <p className="text-muted-foreground mt-2">
          An interface so intuitive, it feels familiar from the first touch.
        </p>
      </div>

      <Card className="overflow-hidden">
        <CardHeader>
          <MonitorPlay className="h-8 w-8 text-primary mb-2" />
          <CardTitle>Inspired by the Best</CardTitle>
          <CardDescription>
            We took inspiration from the clean, user-centric design of Apple products to create a POS that is both beautiful and highly functional. Say goodbye to cluttered, legacy interfaces and hello to a system your budtenders will love to use.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <Image 
              src={designImage.src}
              alt="Sleek POS interface" 
              width={designImage.width}
              height={designImage.height}
              className="object-cover w-full h-full"
              data-ai-hint={designImage.hint}
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <Sparkles className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Reduced Training Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              An intuitive design means new hires can get up to speed in hours, not days. Simple, logical workflows reduce errors and allow your team to focus on customer service, not on figuring out the software.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Wand2 className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Enhanced Budtender Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A faster, more responsive interface allows budtenders to quickly find products, access customer profiles, and complete transactions, leading to shorter lines and happier customers.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
