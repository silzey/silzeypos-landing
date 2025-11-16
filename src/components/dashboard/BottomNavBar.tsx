
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  User,
  PanelLeft,
  LayoutGrid,
  BarChartHorizontal,
  Bell,
  FileText,
  LifeBuoy
} from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/dashboard/client-portal', icon: LayoutGrid, label: 'Dashboard' },
  { href: '/dashboard/reports', icon: BarChartHorizontal, label: 'Reports' },
  { href: '/dashboard/notifications', icon: Bell, label: 'Alerts' },
  { href: '/dashboard/billing', icon: FileText, label: 'Billing' },
  { href: '/dashboard/profile', icon: User, label: 'Profile' },
];

export function BottomNavBar() {
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 z-30 w-full h-20 bg-background/95 backdrop-blur-sm border-t">
      <div className="grid h-full grid-cols-6 mx-auto">
        <Button
          variant="ghost"
          size="icon"
          className="h-full w-full flex-col text-foreground/70 rounded-none hover:bg-accent"
          onClick={toggleSidebar}
        >
          <PanelLeft className="w-6 h-6" />
          <span className="text-xs">Menu</span>
        </Button>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'inline-flex flex-col items-center justify-center h-full group rounded-none hover:bg-accent',
              pathname === item.href ? 'text-primary' : 'text-primary/70'
            )}
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
