
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  href?: string;
}

export function FeatureCard({ icon: Icon, title, description, className, href }: FeatureCardProps) {
  const cardContent = (
    <>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className={cn(
          "font-semibold font-headline",
          title === "Secure Cannabis Transactions" ? "text-lg" : "text-xl"
        )}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      {href && (
        <CardFooter>
          <div className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:underline">
            <span>See more</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardFooter>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group no-underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg h-full block">
        <Card className={cn("text-left shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card h-full flex flex-col", className)}>
          {cardContent}
        </Card>
      </Link>
    );
  }

  return (
    <Card className={cn("text-left shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card h-full flex flex-col", className)}>
      {cardContent}
    </Card>
  );
}
