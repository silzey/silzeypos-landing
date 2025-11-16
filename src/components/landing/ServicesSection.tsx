
import { FeatureCard } from '@/components/landing/FeatureCard';
import { SectionTitle } from '@/components/landing/SectionTitle';
import { 
  Briefcase, Factory, TrendingUp
} from 'lucide-react';

const serviceOfferings = [
  { icon: Briefcase, title: "Business Consulting", description: "We offer strategic business consulting tailored to cannabis operations and dispensaries.", href: "/dashboard/business-consulting" },
  { icon: Factory, title: "Startup Support", description: "Empowering cannabis startups with the tech and guidance they need to launch and grow.", href: "/dashboard/startup-support" },
  { icon: TrendingUp, title: "Startup Marketing", description: "Marketing solutions designed for visibility, traction, and brand awareness in cannabis markets.", href: "/dashboard/startup-marketing" },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle subtitle="Beyond the POS">Our Expert Services</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceOfferings.map((service) => (
            <FeatureCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
