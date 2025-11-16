'use client';

import { useMemo } from 'react';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, deleteDoc, doc } from 'firebase/firestore';
import { 
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { PlusCircle, Trash, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export default function AdminBlogPage() {
    const firestore = useFirestore();
    const { toast } = useToast();

    const blogPostsQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return collection(firestore, 'blog_posts');
    }, [firestore]);
    
    const { data: blogPosts, isLoading } = useCollection(blogPostsQuery);

    const handleDelete = async (id: string) => {
        if (!firestore) return;
        if (confirm('Are you sure you want to delete this post?')) {
            const postRef = doc(firestore, 'blog_posts', id);
            deleteDoc(postRef).catch(error => {
                console.error("Error deleting blog post:", error);
                toast({
                    title: "Error",
                    description: "Failed to delete blog post.",
                    variant: "destructive",
                });
                 errorEmitter.emit('permission-error', new FirestorePermissionError({
                    path: postRef.path,
                    operation: 'delete'
                }));
            });
             toast({
                title: "Success",
                description: "Blog post deleted successfully.",
            });
        }
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Manage Blog Posts</h1>
                    <p className="text-muted-foreground mt-2">
                        Here you can create, edit, and delete blog posts.
                    </p>
                </div>
                <Button asChild>
                    <Link href="/admin/blog/new">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        New Post
                    </Link>
                </Button>
            </div>
            <div className="border rounded-lg">
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead className="hidden md:table-cell">Publication Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && Array.from({ length: 5 }).map((_, i) => (
                            <TableRow key={i}>
                                <TableCell><Skeleton className="h-5 w-3/4" /></TableCell>
                                <TableCell className="hidden md:table-cell"><Skeleton className="h-5 w-24" /></TableCell>
                                <TableCell className="text-right"><Skeleton className="h-8 w-8 ml-auto" /></TableCell>
                            </TableRow>
                        ))}
                        {blogPosts && blogPosts.map(post => (
                            <TableRow key={post.id}>
                                <TableCell className="font-medium">
                                    <Link href={`/admin/blog/edit/${post.id}`} className="flex items-center gap-3 group">
                                        <div className="h-8 w-8 rounded-full bg-secondary group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                                            <LinkIcon className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                                        </div>
                                        <span className="group-hover:text-primary transition-colors">{post.title}</span>
                                    </Link>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    {post.publicationDate?.toDate ? format(post.publicationDate.toDate(), 'PPP') : 'N/A'}
                                </TableCell>
                                <TableCell className="text-right space-x-2">
                                    <Button variant="destructive" size="sm" onClick={() => handleDelete(post.id)}>
                                        <Trash className="h-4 w-4 mr-2" />
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                         {blogPosts?.length === 0 && !isLoading && (
                            <TableRow>
                                <TableCell colSpan={3} className="h-24 text-center">
                                    No blog posts found. Get started by creating a new post.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
