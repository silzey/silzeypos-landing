
'use client';

import React from 'react';
import { BlogPostForm } from '@/components/admin/BlogPostForm';
import { useFirestore, useUser } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { v4 as uuidv4 } from 'uuid';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { BlogPostPreview } from '@/components/admin/BlogPostPreview';

const formSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long.').optional(),
  content: z.string().min(10, 'Content must be at least 10 characters long.').optional(),
  imageUrl: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
  imageAiHint: z.string().optional(),
  videoUrl: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
});

type BlogFormData = z.infer<typeof formSchema>;

export default function NewBlogPostPage() {
    const firestore = useFirestore();
    const { user } = useUser();
    const router = useRouter();
    const { toast } = useToast();

    const form = useForm<BlogFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            content: '',
            imageUrl: '',
            imageAiHint: '',
            videoUrl: '',
        },
    });

    const watchedData = form.watch();

    const handleCreatePost = async (data: BlogFormData) => {
        if (!firestore || !user) {
            toast({
                title: "Error",
                description: "You must be logged in to create a post.",
                variant: "destructive",
            });
            return;
        }

        const blogPostsCollection = collection(firestore, 'blog_posts');
        const newPost = {
            id: uuidv4(),
            authorId: user.uid,
            title: data.title || 'Untitled Post',
            content: data.content || '',
            imageUrl: data.imageUrl || '',
            imageAiHint: data.imageAiHint || '',
            videoUrl: data.videoUrl || '',
            publicationDate: serverTimestamp(),
        };

        addDoc(blogPostsCollection, newPost).catch(error => {
            console.error("Error creating blog post:", error);
            toast({
                title: "Error",
                description: "Failed to create blog post.",
                variant: "destructive",
            });
            errorEmitter.emit('permission-error', new FirestorePermissionError({
                path: blogPostsCollection.path,
                operation: 'create',
                requestResourceData: newPost,
            }));
        });
        
        toast({
            title: "Success",
            description: "Blog post created successfully.",
        });
        router.push('/admin/blog');
    };
    
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">New Blog Post</h1>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="lg:order-1">
                     <h2 className="text-2xl font-semibold mb-4">Editor</h2>
                    <BlogPostForm form={form} onSubmit={handleCreatePost} />
                </div>
                <div className="lg:order-2">
                    <h2 className="text-2xl font-semibold mb-4">Live Preview</h2>
                     <div className="sticky top-24">
                        <BlogPostPreview data={watchedData} />
                     </div>
                </div>
            </div>
        </div>
    );
}
