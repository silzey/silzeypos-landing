
"use client";

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const SilzeyPOSCard = dynamic(() => import('./SilzeyPOSCard').then(mod => mod.SilzeyPOSCard), {
  loading: () => <Skeleton className="w-full h-full rounded-lg" />,
  ssr: false,
});

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline mb-6 tracking-tight">
          SilzeyPOS
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          Serving Cannabis Dispensaries & Businesses of All Sizes with a Futuristic, Apple-inspired user experience.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <Button size="lg" asChild>
            <Link href="/request-free-demo/Qmgi0BZZgp0FANkfZWYC">
              Request a Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#features">
              Learn More
            </Link>
          </Button>
        </div>
        <div className="relative aspect-video max-w-[1200px] mx-auto rounded-lg overflow-hidden shadow-2xl border border-border flex justify-center items-center mt-8">
            <SilzeyPOSCard />
        </div>
      </div>
    </section>
  );
}
