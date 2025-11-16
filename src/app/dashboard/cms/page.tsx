
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PenSquare, ArrowLeft, Layers, Image as ImageIcon, Calendar } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function CmsPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Seamless Content Management (CMS)</h1>
        <p className="text-muted-foreground mt-2">
          Your brand, your content, all managed effortlessly through your central POS.
        </p>
      </div>

      <Card>
        <CardHeader>
          <PenSquare className="h-10 w-10 text-primary mb-4" />
          <CardTitle>Take Control of Your Digital Storefront</CardTitle>
          <CardDescription>
            In today's digital-first world, your website and online menus are as important as your physical store. SilzeyPOS offers seamless CMS integration, empowering you to manage your entire digital presence from the same platform you use to run your daily operations. Stop juggling multiple systems and take unified control of your content.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <Layers className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Unified Product Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Update a product's price, description, or THC content in SilzeyPOS, and watch it instantly update across your website, e-commerce menu, and in-store displays.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <ImageIcon className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Dynamic Blog & Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Establish your brand as an authority. Our integrated CMS allows you to write, edit, and publish blog posts and educational content directly from your dashboard.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Calendar className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Scheduled Promotions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Create promotional banners and landing pages for upcoming sales or events. Schedule them to go live and expire automatically, ensuring timely and relevant marketing.
            </p>
          </CardContent>
        </Card>
      </div>
       <Card>
        <CardHeader>
            <CardTitle>How We Assist with Integration</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">
              Our expert team handles the heavy lifting. We work with your existing website or build you a new one, connecting it to the SilzeyPOS API. We map your data fields and ensure that your content flows smoothly and displays beautifully, providing a consistent brand experience for your customers everywhere they interact with you.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
