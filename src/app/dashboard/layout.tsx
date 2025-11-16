
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import {
  User,
  PanelLeft,
  LayoutGrid,
  BarChartHorizontal,
  Bell,
  FileText,
  LifeBuoy,
  Users,
  Shield,
  BarChartBig,
  Smartphone,
  MonitorPlay,
  SlidersHorizontal,
  BadgeDollarSign,
  Package,
  Globe,
  ScrollText,
  Scale,
  Cloud,
  Briefcase,
  Factory,
  TrendingUp,
  Target,
  ClipboardCheck,
  LockKeyhole,
  Newspaper,
  Gavel,
  Search,
  BookUser,
  PenSquare,
  BrainCircuit
} from 'lucide-react';
import { ProfileButton } from "@/components/ProfileButton";
import { BottomNavBar } from "@/components/dashboard/BottomNavBar";
import { useUser } from "@/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { Loader2 } from "lucide-react";
import { useAuthSheet } from "@/hooks/use-auth-sheet";
import { BlogLinksSheet } from "@/components/dashboard/BlogLinksSheet";

const mainNavLinks = [
    { href: "/dashboard/client-portal", icon: LayoutGrid, label: "Client Portal" },
    { href: "/dashboard/analytics", icon: BarChartBig, label: "Analytics" },
    { href: "/dashboard/reports", icon: BarChartHorizontal, label: "Reports" },
    { href: "/dashboard/notifications", icon: Bell, label: "Notifications" },
    { href: "/dashboard/billing", icon: FileText, label: "Billing" },
    { href: "/dashboard/support", icon: LifeBuoy, label: "Support" },
    { href: "/dashboard/team", icon: Users, label: "Team" },
];

const featureLinks = [
  { href: "/dashboard/pos-mobile-app", icon: Smartphone, label: "POS Mobile App" },
  { href: "/dashboard/app-development", icon: Smartphone, label: "App Development" },
  { href: "/dashboard/futuristic-design", icon: MonitorPlay, label: "Futuristic Design" },
  { href: "/dashboard/user-flexibility", icon: SlidersHorizontal, label: "User Flexibility" },
  { href: "/dashboard/cheaper-prices", icon: BadgeDollarSign, label: "Cheaper Prices" },
  { href: "/dashboard/no-hidden-fees", icon: Shield, label: "No Hidden Fees" },
  { href: "/dashboard/integrated-pos-hardware", icon: Package, label: "POS Hardware" },
  { href: "/dashboard/ecommerce-sync", icon: Globe, label: "E-commerce Sync" },
  { href: "/dashboard/real-time-reports", icon: ScrollText, label: "Real-Time Reports" },
  { href: "/dashboard/cannabis-compliance", icon: Scale, label: "Compliance" },
  { href: "/dashboard/loyalty-and-crm", icon: Users, label: "Loyalty & CRM" },
  { href: "/dashboard/cloud-based", icon: Cloud, label: "Cloud Based" },
  { href: "/dashboard/business-consulting", icon: Briefcase, label: "Business Consulting" },
  { href: "/dashboard/startup-support", icon: Factory, label: "Startup Support" },
  { href: "/dashboard/startup-marketing", icon: TrendingUp, label: "Startup Marketing" },
  { href: "/dashboard/cats", icon: Target, label: "C.A.T.S." },
  { href: "/dashboard/automated-compliance-audits", icon: ClipboardCheck, label: "Automated Audits" },
  { href: "/dashboard/secure-cannabis-transactions", icon: LockKeyhole, label: "Secure Transactions" },
  { href: "/dashboard/careers", icon: Briefcase, label: "Careers" },
  { href: "/dashboard/legal-aide", icon: Gavel, label: "Legal Aide" },
  { href: "/dashboard/seo", icon: Search, label: "SEO" },
  { href: "/dashboard/opposition-research", icon: BookUser, label: "Opposition Research" },
  { href: "/dashboard/cms", icon: PenSquare, label: "CMS Integration" },
  { href: "/dashboard/ai", icon: BrainCircuit, label: "AI Solutions" },
];

const blogLinks = [
  { href: "/dashboard/blog/analytics", label: "Analytics" },
  { href: "/dashboard/blog/pos-mobile-app", label: "POS Mobile App" },
  { href: "/dashboard/blog/app-development", label: "App Development" },
  { href: "/dashboard/blog/futuristic-design", label: "Futuristic Design" },
  { href: "/dashboard/blog/user-flexibility", label: "User Flexibility" },
  { href: "/dashboard/blog/cheaper-prices", label: "Cheaper Prices" },
  { href: "/dashboard/blog/no-hidden-fees", label: "No Hidden Fees" },
  { href: "/dashboard/blog/integrated-pos-hardware", label: "POS Hardware" },
  { href: "/dashboard/blog/ecommerce-sync", label: "E-commerce Sync" },
  { href: "/dashboard/blog/real-time-reports", label: "Real-Time Reports" },
  { href: "/dashboard/blog/cannabis-compliance", label: "Compliance" },
  { href: "/dashboard/blog/loyalty-and-crm", label: "Loyalty & CRM" },
  { href: "/dashboard/blog/cloud-based", label: "Cloud Based" },
  { href: "/dashboard/blog/business-consulting", label: "Business Consulting" },
  { href: "/dashboard/blog/startup-support", label: "Startup Support" },
  { href: "/dashboard/blog/startup-marketing", label: "Startup Marketing" },
  { href: "/dashboard/blog/cats", label: "C.A.T.S." },
  { href: "/dashboard/blog/automated-compliance-audits", label: "Compliance Audits" },
  { href: "/dashboard/blog/secure-cannabis-transactions", label: "Secure Transactions" },
  { href: "/dashboard/blog/careers", label: "Careers" },
  { href: "/dashboard/blog/legal-aide", label: "Legal Aide" },
  { href: "/dashboard/blog/seo", label: "SEO" },
  { href: "/dashboard/blog/opposition-research", label: "Opposition Research" },
  { href: "/dashboard/blog/cms", label: "CMS Integration" },
  { href: "/dashboard/blog/ai", label: "AI Solutions" },
];


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  const adminEmails = useMemo(() => (process.env.NEXT_PUBLIC_ADMIN_EMAILS || '')
    .toLowerCase()
    .split(',')
    .filter(Boolean), []);

  const isAdmin = useMemo(() => {
    return user && user.email && adminEmails.includes(user.email.toLowerCase());
  }, [user, adminEmails]);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.replace('/');
    }
  }, [user, isUserLoading, router]);

  if (isUserLoading || !user) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center justify-between">
              <Link href="/" className="text-lg font-bold font-headline text-primary hover:opacity-80 transition-opacity flex items-center gap-2">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.5 2.47a.75.75 0 0 0-1.02.09l-5.6 6.3a.75.75 0 0 1-1.01.12l-2.4-1.6a.75.75 0 0 0-.96.06L5 9.03a.75.75 0 0 0 .15 1.05l4.28 4.28a.75.75 0 0 1 .12 1.01l-6.3 5.6a.75.75 0 0 0 .96 1.11l14.4-6.4a.75.75 0 0 0 .42-.82l-1.3-4.83a.75.75 0 0 0-.82-.58L14.7 9.8l2.8-3.15a.75.75 0 0 0-.09-1.02L17.5 2.47z" />
                </svg>
                <span className="group-data-[collapsible=icon]:hidden">SilzeyPOS</span>
              </Link>
            </div>
          </SidebarHeader>
          <SidebarContent>
             <SidebarMenu>
                {mainNavLinks.map((link) => (
                    <SidebarMenuItem key={link.href}>
                        <SidebarMenuButton asChild tooltip={link.label} isActive={pathname === link.href}>
                            <Link href={link.href}><link.icon /><span>{link.label}</span></Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
             </SidebarMenu>
             <SidebarGroup>
                <SidebarGroupLabel>Features</SidebarGroupLabel>
                <SidebarMenu>
                {featureLinks.map((link) => (
                    <SidebarMenuItem key={link.href}>
                        <SidebarMenuButton asChild tooltip={link.label} isActive={pathname === link.href}>
                            <Link href={link.href}><link.icon /><span>{link.label}</span></Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                </SidebarMenu>
            </SidebarGroup>
             <SidebarGroup>
                <SidebarGroupLabel>Blog</SidebarGroupLabel>
                <SidebarMenu>
                    {blogLinks.map((link) => (
                        <SidebarMenuItem key={link.href}>
                            <SidebarMenuButton asChild tooltip={link.label} isActive={pathname === link.href}>
                                <Link href={link.href}><Newspaper /><span>{link.label}</span></Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            {isAdmin && (
              <SidebarMenu>
                  <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Admin" isActive={pathname.startsWith('/admin')}>
                          <Link href="/admin"><Shield /><span>Admin</span></Link>
                      </SidebarMenuButton>
                  </SidebarMenuItem>
              </SidebarMenu>
            )}
            <ProfileButton />
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
            <div className="relative flex h-full w-full flex-col overflow-hidden">
                <header className="flex h-14 shrink-0 items-center justify-between border-b bg-card/80 p-4 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 md:justify-end">
                    <SidebarTrigger className="md:hidden">
                        <PanelLeft />
                    </SidebarTrigger>
                    <ProfileButton />
                </header>
                <main className="flex-1 overflow-y-auto p-4 pb-24 md:p-6 md:pb-8 lg:p-8">
                    {children}
                </main>
                <BottomNavBar />
            </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
