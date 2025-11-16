
"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  BarChartBig, Smartphone, MonitorPlay, SlidersHorizontal, BadgeDollarSign, ShieldCheck, Package,
  Globe, ScrollText, Scale, Users, Cloud,
  Briefcase, Factory, TrendingUp,
  Target, ClipboardCheck, LockKeyhole, Plus,
  Map, Lightbulb, Megaphone, Palette, Server, Store, HardDrive, UploadCloud, Gavel, Search, BookUser,
  PenSquare, BrainCircuit
} from 'lucide-react';
import { useUser } from "@/firebase/auth/use-user";
import { useAuthSheet } from "@/hooks/use-auth-sheet";

const blogLinks = [
  { icon: BarChartBig, title: "Analytics", href: "/dashboard/blog/analytics" },
  { icon: Smartphone, title: "POS Mobile App", href: "/dashboard/blog/pos-mobile-app" },
  { icon: Smartphone, title: "App Development", href: "/dashboard/blog/app-development" },
  { icon: MonitorPlay, title: "Futuristic Design", href: "/dashboard/blog/futuristic-design" },
  { icon: SlidersHorizontal, title: "User Flexibility", href: "/dashboard/blog/user-flexibility" },
  { icon: BadgeDollarSign, title: "Cheaper Prices", href: "/dashboard/blog/cheaper-prices" },
  { icon: ShieldCheck, title: "No Hidden Fees", href: "/dashboard/blog/no-hidden-fees" },
  { icon: Package, title: "POS Hardware", href: "/dashboard/blog/integrated-pos-hardware" },
  { icon: Globe, title: "E-commerce Sync", href: "/dashboard/blog/ecommerce-sync" },
  { icon: ScrollText, title: "Real-Time Reports", href: "/dashboard/blog/real-time-reports" },
  { icon: Scale, title: "Cannabis Compliance", href: "/dashboard/blog/cannabis-compliance" },
  { icon: Users, title: "Loyalty & CRM", href: "/dashboard/blog/loyalty-and-crm" },
  { icon: Cloud, title: "Cloud Based", href: "/dashboard/blog/cloud-based" },
  { icon: Briefcase, title: "Business Consulting", href: "/dashboard/blog/business-consulting" },
  { icon: Factory, title: "Startup Support", href: "/dashboard/blog/startup-support" },
  { icon: TrendingUp, title: "Startup Marketing", href: "/dashboard/blog/startup-marketing" },
  { icon: Target, title: "C.A.T.S.", href: "/dashboard/blog/cats" },
  { icon: ClipboardCheck, title: "Compliance Audits", href: "/dashboard/blog/automated-compliance-audits" },
  { icon: LockKeyhole, title: "Secure Transactions", href: "/dashboard/blog/secure-cannabis-transactions" },
  { icon: Map, title: "States", href: "/dashboard/blog/states" },
  { icon: Lightbulb, title: "Consulting", href: "/dashboard/blog/consulting" },
  { icon: Megaphone, title: "Marketing", href: "/dashboard/blog/marketing" },
  { icon: Palette, title: "UI Design", href: "/dashboard/blog/ui-design" },
  { icon: Server, title: "Backend Design", href: "/dashboard/blog/backend-design" },
  { icon: Store, title: "Marketplace", href: "/dashboard/blog/marketplace" },
  { icon: HardDrive, title: "Hosting", href: "/dashboard/blog/hosting" },
  { icon: UploadCloud, title: "Publishing", href: "/dashboard/blog/publishing" },
  { icon: Briefcase, title: "Careers", href: "/dashboard/blog/careers" },
  { icon: Gavel, title: "Legal Aide", href: "/dashboard/blog/legal-aide" },
  { icon: Search, title: "SEO", href: "/dashboard/blog/seo" },
  { icon: BookUser, title: "Opposition Research", href: "/dashboard/blog/opposition-research" },
  { icon: PenSquare, title: "CMS Integration", href: "/dashboard/blog/cms" },
  { icon: BrainCircuit, title: "AI Solutions", href: "/dashboard/blog/ai" },
];

interface BlogLinksSheetProps {
  onTriggerClick: () => void;
}

export function BlogLinksSheet({ onTriggerClick }: BlogLinksSheetProps) {
  const [isBlogSheetOpen, setIsBlogSheetOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useUser();
  const { setOpen: setAuthSheetOpen } = useAuthSheet();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    setIsBlogSheetOpen(false);
  }, [pathname]);

  const handleTriggerClick = () => {
    if (user) {
      setIsBlogSheetOpen(true);
    } else {
      onTriggerClick();
    }
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <Sheet open={isBlogSheetOpen} onOpenChange={setIsBlogSheetOpen}>
      <SheetTrigger asChild>
        <Button
          onClick={handleTriggerClick}
          className="fixed bottom-24 md:bottom-6 right-6 h-16 w-16 rounded-full shadow-lg z-40 bg-primary hover:bg-primary/90 shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <Plus className="h-8 w-8" />
          <span className="sr-only">Explore Features</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[90vh] overflow-y-auto card-glass">
        <SheetHeader>
          <SheetTitle>Explore Features</SheetTitle>
          <SheetDescription>
            Click on a feature to learn more in our blog.
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-4">
          {blogLinks.map(({ icon: Icon, title, href }) => (
            <Link href={href} key={title} className="flex flex-col items-center justify-center gap-2 p-4 border rounded-lg hover:bg-accent/50 transition-colors text-center card-glass-interactive">
              <Icon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium text-foreground">{title}</span>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
