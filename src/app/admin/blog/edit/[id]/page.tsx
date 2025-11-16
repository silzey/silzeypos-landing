'use client';

import React, { useMemo } from 'react';
import { BlogPostForm } from '@/components/admin/BlogPostForm';
import { useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { BlogPostPreview } from '@/components/admin/BlogPostPreview';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { slugify } from '@/lib/utils';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const formSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long.'),
  content: z.string().min(10, 'Content must be at least 10 characters long.'),
  imageUrl: z.string().optional().or(z.literal('')),
  imageAiHint: z.string().optional(),
  videoUrl: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
});

type BlogFormData = z.infer<typeof formSchema>;

export default function EditBlogPostPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const firestore = useFirestore();
    const router = useRouter();
    const { toast } = useToast();

    const postRef = useMemoFirebase(() => {
        if (!firestore) return null;
        return doc(firestore, 'blog_posts', id);
    }, [firestore, id]);
    
    const { data: post, isLoading: isPostLoading } = useDoc<BlogFormData>(postRef);

    const form = useForm<BlogFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: post || {
            title: '',
            content: '',
            imageUrl: '',
            imageAiHint: '',
            videoUrl: '',
        },
    });
    
    const watchedData = form.watch();

    React.useEffect(() => {
        if (post) {
            form.reset(post);
        }
    }, [post, form]);


    const handleUpdatePost = async (data: BlogFormData) => {
        if (!postRef) return;
    
        let finalImageUrl = data.imageUrl || '';
    
        if (data.imageUrl && !data.imageUrl.startsWith('https://')) {
          const storage = getStorage();
          const folderName = slugify(data.title);
          const imagePath = `${folderName}/${data.imageUrl}`;
          try {
            const storageRef = ref(storage, imagePath);
            finalImageUrl = await getDownloadURL(storageRef);
          } catch (error) {
            console.error("Error getting image download URL:", error);
            toast({
              title: "Image Error",
              description: `Could not find image "${data.imageUrl}" in storage folder "${folderName}". Please check the filename and folder.`,
              variant: "destructive",
            });
            return; 
          }
        }

        updateDoc(postRef, {
            ...data,
            imageUrl: finalImageUrl,
            publicationDate: serverTimestamp(),
        }).catch(error => {
            console.error("Error updating blog post:", error);
            toast({
                title: "Error",
                description: "Failed to update blog post.",
                variant: "destructive",
            });
            errorEmitter.emit('permission-error', new FirestorePermissionError({
                path: postRef.path,
                operation: 'update',
                requestResourceData: data,
            }));
        });

        toast({
            title: "Success",
            description: "Blog post updated successfully.",
        });
        router.push('/admin/blog');
    };
    
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Edit Blog Post</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="lg:order-1">
                     <h2 className="text-2xl font-semibold mb-4">Editor</h2>
                    {isPostLoading ? (
                         <div className="space-y-6">
                            <Skeleton className="h-10 w-full" />
                            <Skeleton className="h-40 w-full" />
                            <Skeleton className="h-10 w-full" />
                            <Skeleton className="h-10 w-32" />
                        </div>
                    ) : (
                       <BlogPostForm form={form} onSubmit={handleUpdatePost} isEditing />
                    )}
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
