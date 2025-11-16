
import { FeatureCard } from '@/components/landing/FeatureCard';
import { SectionTitle } from '@/components/landing/SectionTitle';
import { 
  Target, ClipboardCheck, LockKeyhole
} from 'lucide-react';

const complianceSecurity = [
  { icon: Target, title: "Cannabis Analytic Tracking (C.A.T.S.)", description: "Utilize our C.A.T.S. system to track, analyze, and optimize every facet of cannabis operations.", href: "/dashboard/cats" },
  { icon: ClipboardCheck, title: "Automated Compliance Audits", description: "Reduce manual paperwork with built-in audit tools that automatically validate against state cannabis laws.", href: "/dashboard/automated-compliance-audits" },
  { icon: LockKeyhole, title: "Secure Cannabis Transactions", description: "End-to-end encrypted POS transactions tailored for cash-heavy and regulation-intensive cannabis sales.", href: "/dashboard/secure-cannabis-transactions" },
];

export function ComplianceSection() {
  return (
    <section id="compliance" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle subtitle="Industry Specific">Compliance & Security</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {complianceSecurity.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
