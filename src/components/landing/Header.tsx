
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { ProfileButton } from '../ProfileButton';
import { ThemeToggle } from '../ThemeToggle';

export function Header() {
  return (
    <header className="py-4 px-4 md:px-6 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-headline text-primary hover:opacity-80 transition-opacity">
          SilzeyPOS
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild>
            <Link href="/request-free-demo/Qmgi0BZZgp0FANkfZWYC">
              Request Demo
              <Sparkles className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <ProfileButton />
        </div>
      </div>
    </header>
  );
}
