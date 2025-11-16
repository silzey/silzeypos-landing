import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  subtitle?: string;
}

export function SectionTitle({ children, subtitle, className, ...props }: SectionTitleProps) {
  return (
    <div className="text-center mb-10 md:mb-16">
      {subtitle && <p className="text-base text-primary font-semibold tracking-wide uppercase mb-2">{subtitle}</p>}
      <h2
        className={cn("text-3xl font-bold font-headline tracking-tight sm:text-4xl lg:text-5xl", className)}
        {...props}
      >
        {children}
      </h2>
    </div>
  );
}
