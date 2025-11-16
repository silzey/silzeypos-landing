
'use client';

import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { Footer } from '@/components/landing/Footer';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { TestimonialSection } from '@/components/landing/TestimonialSection';
import { IntegrationsSection } from '@/components/landing/IntegrationsSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { ComplianceSection } from '@/components/landing/ComplianceSection';
import { DemoRequestSection } from '@/components/landing/DemoRequestSection';

export default function SilzeyPOSLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <IntegrationsSection />
        <ServicesSection />
        <ComplianceSection />
        <DemoRequestSection />
      </main>
      <Footer />
    </div>
  );
}
