

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ScanLine, Printer, CaseSensitive, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import placeholderImages from '@/app/lib/placeholder-images.json';

export default function IntegratedHardwarePage() {
  const hardwareImage = placeholderImages['hardware-bundle'];
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Integrated POS Hardware</h1>
        <p className="text-muted-foreground mt-2">
          A complete, plug-and-play hardware solution for your dispensary.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <Package className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Curated Hardware Bundles</CardTitle>
            <CardDescription>
              We've sourced and tested the best hardware to work seamlessly with our software. Our bundles include everything you need to get your checkout counter up and running.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30">
              <ScanLine className="h-6 w-6 text-primary" />
              <div>
                <h4 className="font-semibold">Barcode Scanners</h4>
                <p className="text-sm text-muted-foreground">For quick product scanning and 2D ID verification.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30">
              <Printer className="h-6 w-6 text-primary" />
              <div>
                <h4 className="font-semibold">Receipt & Label Printers</h4>
                <p className="text-sm text-muted-foreground">High-speed thermal printers for receipts and compliant product labels.</p>
              </div>
            </div>
             <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30">
              <CaseSensitive className="h-6 w-6 text-primary" />
              <div>
                <h4 className="font-semibold">Cash Drawers</h4>
                <p className="text-sm text-muted-foreground">Heavy-duty, secure cash drawers that integrate directly with your POS station.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="relative aspect-square lg:aspect-auto rounded-lg overflow-hidden">
          <Image 
            src={hardwareImage.src}
            alt="POS Hardware Bundle"
            width={hardwareImage.width}
            height={hardwareImage.height}
            fill
            className="object-cover"
            data-ai-hint={hardwareImage.hint}
          />
        </div>
      </div>
    </div>
  );
}
