
import { FeatureCard } from '@/components/landing/FeatureCard';
import { SectionTitle } from '@/components/landing/SectionTitle';
import { 
  Globe, ScrollText, Scale, Users, Cloud
} from 'lucide-react';

const integrationShowcase = [
  { icon: Globe, title: "E-commerce Sync", description: "Sync your online and offline sales with powerful integration to your ecommerce platform.", href: "/dashboard/ecommerce-sync" },
  { icon: ScrollText, title: "Real-Time Reports", description: "Instant reporting tools to view your business metrics and performance in real-time.", href: "/dashboard/real-time-reports" },
  { icon: Scale, title: "Cannabis Compliance", description: "Stay compliant with cannabis industry regulations including METRC, BioTrack, and more.", href: "/dashboard/cannabis-compliance" },
  { icon: Users, title: "Loyalty & CRM", description: "Enhance customer retention with loyalty rewards, profiles, and personalized marketing tools.", href: "/dashboard/loyalty-and-crm" },
  { icon: Cloud, title: "Cloud Based", description: "Access and manage your POS from anywhere with secure, cloud-based technology.", href: "/dashboard/cloud-based" },
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle subtitle="Seamless Connections">Powerful Integrations</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrationShowcase.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
