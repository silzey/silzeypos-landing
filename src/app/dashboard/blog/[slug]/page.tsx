

import Image from "next/image";
import { notFound } from 'next/navigation';
import { blogFeatures } from '@/app/dashboard/blog/blog-data';
import type { Metadata, ResolvingMetadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import placeholderImages from '@/app/lib/placeholder-images.json';
import { initializeFirebase } from '@/firebase/index.ssr';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

type Props = {
  params: { slug: string }
}

async function getPostFromSlug(slug: string) {
    // 1. Try to get post from Firestore
    try {
      const { firestore } = initializeFirebase();
      const blogPostsRef = collection(firestore, 'blog_posts');
      const q = query(blogPostsRef, where("id", "==", slug), limit(1));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const data = doc.data();
        return {
            id: doc.id,
            title: data.title,
            content: data.content,
            imageUrl: data.imageUrl || placeholderImages['blog-post-header'].src,
            imageAiHint: data.imageAiHint || placeholderImages['blog-post-header'].hint,
        };
      }
    } catch (error) {
        console.error("Firestore fetch failed, falling back to local data.", error);
    }
    
    // 2. Fallback to local static data if Firestore fails or post not found
    const postData = blogFeatures[slug as keyof typeof blogFeatures];
    if (!postData) {
        return null;
    }
    
    return {
        id: slug,
        title: postData.title,
        content: postData.description,
        imageUrl: placeholderImages['blog-post-header'].src,
        imageAiHint: placeholderImages['blog-post-header'].hint,
    };
}


export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const post = await getPostFromSlug(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  const url = `/dashboard/blog/${slug}`;
  const ogImage = post.imageUrl || placeholderImages['blog-post-og'].src;


  return {
    title: `${post.title} | SilzeyPOS Blog`,
    description: (post.content as string).substring(0, 160),
    keywords: `${post.title}, SilzeyPOS, business software, POS, CRM, analytics`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${post.title} | SilzeyPOS Blog`,
      description: (post.content as string).substring(0, 160),
      type: 'article',
      url: url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | SilzeyPOS Blog`,
      description: (post.content as string).substring(0, 160),
      images: [ogImage],
    },
  }
}

export default async function BlogFeaturePage({ params }: Props) {
  const slug = params.slug;
  const post = await getPostFromSlug(slug);

  if (!post) {
    notFound();
  }

  const { title, content, imageUrl, imageAiHint } = post;
  const displayImage = imageUrl || placeholderImages['blog-post-header'].src;
  const displayImageHint = imageAiHint || placeholderImages['blog-post-header'].hint;

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-5xl mx-auto overflow-hidden">
        <CardHeader className="p-6">
          <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="aspect-video w-full rounded-lg overflow-hidden border">
                <Image
                  src={displayImage}
                  alt={title}
                  width={1200}
                  height={675}
                  className="object-cover w-full h-full"
                  data-ai-hint={displayImageHint}
                  priority
                />
              </div>
              <div className="prose prose-stone dark:prose-invert max-w-none text-muted-foreground">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
              </div>
            </div>
            <aside className="md:col-span-1 space-y-6">
               <div className="p-4 rounded-lg border bg-secondary/30">
                  <h4 className="font-semibold mb-2 text-foreground">Search Blog</h4>
                   <div className="flex w-full items-center space-x-2">
                      <Input type="search" placeholder="Find features..." />
                      <Button type="submit" size="icon">
                          <Search className="h-4 w-4" />
                      </Button>
                  </div>
              </div>
              <div className="p-4 rounded-lg border bg-secondary/30">
                  <h4 className="font-semibold mb-4 text-foreground">Related Features</h4>
                  <div className="space-y-2">
                    {Object.keys(blogFeatures).slice(0, 5).map((key) => (
                      key !== slug && (
                        <Link key={key} href={`/dashboard/blog/${key}`} passHref>
                          <Button variant="ghost" className="w-full justify-start text-left h-auto py-2">
                            {blogFeatures[key as keyof typeof blogFeatures].title}
                          </Button>
                        </Link>
                      )
                    ))}
                  </div>
              </div>
            </aside>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// This function tells Next.js which slugs to pre-render at build time.
export async function generateStaticParams() {
  const slugs = Object.keys(blogFeatures).map(slug => ({ slug }));
  return slugs;
}
