
import { FeatureCard } from '@/components/landing/FeatureCard';
import { SectionTitle } from '@/components/landing/SectionTitle';
import { 
  BarChartBig, Smartphone, MonitorPlay, SlidersHorizontal, BadgeDollarSign, ShieldCheck, Package
} from 'lucide-react';

const featureHighlights = [
  { icon: BarChartBig, title: "Built-In Analytics", description: "Track your sales, inventory, and customer behavior with our advanced analytics dashboard.", href: "/dashboard/analytics" },
  { icon: Smartphone, title: "POS Mobile App", description: "Manage your business from anywhere with our companion mobile app for iOS and Android.", href: "/dashboard/pos-mobile-app" },
  { icon: MonitorPlay, title: "Futuristic Design", description: "Sleek, Apple-inspired user experience with smooth navigation and modern UI elements.", href: "/dashboard/futuristic-design" },
  { icon: SlidersHorizontal, title: "User Flexibility", description: "Powerful tools for customization and workflows that adapt to how you run your business.", href: "/dashboard/user-flexibility" },
  { icon: BadgeDollarSign, title: "Cheaper Prices", description: "Affordable and competitive pricing built for businesses of all sizes.", href: "/dashboard/cheaper-prices" },
  { icon: ShieldCheck, title: "No Hidden Fees", description: "Transparent and simple pricing with no surprises.", href: "/dashboard/no-hidden-fees" },
  { icon: Package, title: "Integrated POS Hardware", description: "Complete POS hardware solutions including barcode scanners, receipt printers, and cash drawers.", href: "/dashboard/integrated-pos-hardware" },
  { icon: Smartphone, title: "App Development", description: "Extend your brand with a custom-built mobile application for iOS and Android.", href: "/dashboard/app-development" },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle subtitle="Core Capabilities">Why SilzeyPOS?</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureHighlights.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
