
'use client';

import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { blogFeatures } from '@/app/dashboard/blog/blog-data';
import { Newspaper, ArrowRight } from 'lucide-react';


export default function BlogEditorHubPage() {

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Blog Post Editor Hub</h1>
        <p className="text-muted-foreground mt-2">
          Select a blog post to open the full-featured editor.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Object.entries(blogFeatures).map(([slug, { title, description }]) => (
            <Link href={`/admin/blog/edit/${slug}`} key={slug}>
                 <Card className="card-glass-interactive h-full group">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                             <div className="h-12 w-12 rounded-full border-2 border-border bg-card flex items-center justify-center group-hover:border-primary group-hover:bg-accent/50 transition-all duration-300">
                                <Newspaper className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <ArrowRight className="h-6 w-6 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                        </div>
                        <CardTitle className="pt-4">{title}</CardTitle>
                        <CardDescription className="line-clamp-3">{description}</CardDescription>
                    </CardHeader>
                </Card>
            </Link>
        ))}
      </div>
    </div>
  );
}
