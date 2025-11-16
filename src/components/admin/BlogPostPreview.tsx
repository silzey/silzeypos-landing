
'use client';

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type PreviewData = {
    title?: string;
    content?: string;
    imageUrl?: string;
};

interface BlogPostPreviewProps {
    data: PreviewData;
}

export function BlogPostPreview({ data }: BlogPostPreviewProps) {
    const { title, content, imageUrl } = data;

    return (
        <Card className="w-full mx-auto overflow-hidden">
            <CardHeader className="p-4 md:p-6">
                {title ? (
                    <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight text-primary">{title}</CardTitle>
                ) : (
                    <Skeleton className="h-9 w-3/4" />
                )}
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0">
                <div className="space-y-6">
                    <div className="aspect-video w-full rounded-lg overflow-hidden border bg-muted">
                        {imageUrl ? (
                             <Image
                                src={imageUrl}
                                alt={title || "Blog post image"}
                                width={1200}
                                height={675}
                                className="object-cover w-full h-full"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                <p>Image Preview</p>
                            </div>
                        )}
                    </div>
                    <div className="prose prose-stone dark:prose-invert max-w-none text-muted-foreground">
                        {content ? (
                           <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {content}
                           </ReactMarkdown>
                        ) : (
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-3/4" />
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
