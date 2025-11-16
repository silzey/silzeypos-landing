
'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BookText, Users, FileQuestion, Repeat, Heart, MessageSquare, Briefcase, FilePenLine, LogOut, Store } from "lucide-react";
import { useCollection, useFirestore, useMemoFirebase, useAuth } from "@/firebase";
import { collection } from "firebase/firestore";
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';


const navItems = [
    { href: "/admin/demo-requests", icon: FileQuestion, label: "Demo Requests" },
    { href: "/admin/subscriptions", icon: Repeat, label: "Subscriptions" },
    { href: "/admin/users", icon: Users, label: "User Accounts" },
    { href: "/admin/donations", icon: Heart, label: "Donations" },
    { href: "/admin/blog", icon: BookText, label: "Blog Posts" },
    { href: "/admin/blog/editor", icon: FilePenLine, label: "Blog Editor" },
    { href: "/admin/in-app-messages", icon: MessageSquare, label: "In-App Messages" },
    { href: "/admin/projects", icon: Briefcase, label: "Projects" },
    { href: "/admin/store", icon: Store, label: "Store" },
];

export default function AdminDashboardPage() {
  const firestore = useFirestore();
  const auth = useAuth();
  const router = useRouter();

  const blogPostsQuery = useMemoFirebase(() => firestore ? collection(firestore, 'blog_posts') : null, [firestore]);
  const demoRequestsQuery = useMemoFirebase(() => firestore ? collection(firestore, 'demo_requests') : null, [firestore]);

  const { data: blogPosts } = useCollection(blogPostsQuery);
  const { data: demoRequests } = useCollection(demoRequestsQuery);

  const adminCards = [
    {
        title: "Manage Blog Posts",
        description: "Create, edit, and delete blog posts.",
        icon: BookText,
        href: "/admin/blog",
        count: blogPosts?.length ?? 0,
    },
    {
        title: "Manage Users",
        description: "View and manage user accounts.",
        icon: Users,
        href: "/admin/users",
        count: '—',
    },
    {
        title: "Manage Demo Requests",
        description: "View and manage demo requests.",
        icon: FileQuestion,
        href: "/admin/demo-requests",
        count: demoRequests?.length ?? 0,
    }
  ];
  
  const handleLogout = async () => {
    if (!auth) return;
    await auth.signOut();
    router.push('/');
  };

  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Manage your application's content and users from here.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adminCards.map(card => (
            <Link href={card.href} key={card.title}>
                <Card className="card-glass-interactive h-full">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <card.icon className="h-8 w-8 text-primary mb-4" />
                            <span className="text-3xl font-bold text-muted-foreground">{card.count}</span>
                        </div>
                        <CardTitle>{card.title}</CardTitle>
                        <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                </Card>
            </Link>
        ))}
      </div>
       <div>
        <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">Quick Navigation</h2>
        <div className="flex justify-around items-start text-center flex-wrap gap-6">
            {navItems.map(({ href, icon: Icon, label }) => (
                <Link href={href} key={label} className="flex flex-col items-center gap-2 text-foreground hover:text-primary transition-colors group w-24">
                    <div className="h-16 w-16 rounded-full border-2 border-border bg-card flex items-center justify-center group-hover:border-primary group-hover:bg-accent/50 transition-all duration-300">
                        <Icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-xs font-medium text-center">{label}</span>
                </Link>
            ))}
             <Button
                variant="ghost"
                onClick={handleLogout}
                className="flex flex-col items-center justify-start gap-2 text-foreground hover:text-primary transition-colors group w-24 h-auto p-0"
              >
                <div className="h-16 w-16 rounded-full border-2 border-border bg-card flex items-center justify-center group-hover:border-primary group-hover:bg-accent/50 transition-all duration-300">
                    <LogOut className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs font-medium text-center">Logout</span>
              </Button>
             <div className="w-24"></div>
        </div>
      </div>
    </div>
  );
}
