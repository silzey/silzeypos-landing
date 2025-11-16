
'use client';

import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Progress } from '@/components/ui/progress';
import { 
    LayoutGrid, ArrowLeft, Briefcase, FileText, TrendingUp, TrendingDown, Activity, ArrowRight, DollarSign,
    BarChartBig, Smartphone, MonitorPlay, SlidersHorizontal, BadgeDollarSign, ShieldCheck, Package,
    Globe, ScrollText, Scale, Users, Cloud, Factory, Target, ClipboardCheck, LockKeyhole,
    Map, Lightbulb, Megaphone, Palette, Server, Store, HardDrive, UploadCloud, Bell, BarChartHorizontal, MessageSquare, LifeBuoy, User
} from "lucide-react";
import { Button } from '@/components/ui/button';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

const monthlyRevenueData = [
  { month: "Jan", revenue: 4000, expenses: 2400 }, { month: "Feb", revenue: 3000, expenses: 1398 },
  { month: "Mar", revenue: 5500, expenses: 2800 }, { month: "Apr", revenue: 4780, expenses: 3908 },
  { month: "May", revenue: 6890, expenses: 4800 }, { month: "Jun", revenue: 7390, expenses: 3800 },
];
const taskStatusData = [
  { name: 'Completed', value: 120, fill: 'var(--color-completed)' },
  { name: 'In Progress', value: 45, fill: 'var(--color-inProgress)' },
  { name: 'Overdue', value: 15, fill: 'var(--color-overdue)' },
];

const supportTicketTrend = [ { month: 'Jan', created: 10, resolved: 8 }, { month: 'Feb', created: 12, resolved: 10 }, { month: 'Mar', created: 8, resolved: 9 }, { month: 'Apr', created: 15, resolved: 12 } ];


const chartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--chart-2))" },
  expenses: { label: "Expenses", color: "hsl(var(--chart-5))" },
  completed: { label: "Completed", color: "hsl(var(--chart-2))" },
  inProgress: { label: "In Progress", color: "hsl(var(--chart-3))" },
  overdue: { label: "Overdue", color: "hsl(var(--chart-5))" },
  created: { label: "Created", color: "hsl(var(--chart-4))" },
  resolved: { label: "Resolved", color: "hsl(var(--chart-2))" },
} satisfies import("@/components/ui/chart").ChartConfig;

const quickNavItems = [
    { href: "/dashboard/reports", icon: BarChartHorizontal, label: "Project Reports" },
    { href: "/dashboard/notifications", icon: Bell, label: "Notifications" },
    { href: "/dashboard/billing", icon: FileText, label: "Billing History" },
    { href: "/dashboard/support", icon: LifeBuoy, label: "Support Tickets" },
    { href: "/dashboard/profile", icon: User, label: "My Profile" },
    { href: "/dashboard/team", icon: Users, label: "Team Members" },
];


export default function ClientPortalPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/dashboard/analytics');
    }
  }, [user, isUserLoading, router]);

  const projectsQuery = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return query(collection(firestore, 'users', user.uid, 'projects'));
  }, [firestore, user]);

  const invoicesQuery = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return query(collection(firestore, 'users', user.uid, 'invoices'));
  }, [firestore, user]);

  const { data: projects, isLoading: projectsLoading } = useCollection(projectsQuery);
  const { data: invoices, isLoading: invoicesLoading } = useCollection(invoicesQuery);

  const staticProjects = [
    { id: 1, name: "Website Redesign", status: "Active", budget: "$5,000", deadline: "Oct 30, 2025" },
    { id: 2, name: "Mobile App Launch", status: "Completed", budget: "$12,000", deadline: "Sep 15, 2025" },
  ];

  if (isUserLoading || !user) {
    return (
        <div className="flex flex-col gap-8">
            <Skeleton className="h-10 w-40" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({length: 4}).map((_, i) => <Skeleton key={i} className="h-36 w-full" />)}
            </div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Skeleton className="h-80 w-full" />
                <Skeleton className="h-80 w-full" />
            </div>
        </div>
    );
  }

  const getStatusVariant = (status: string): "secondary" | "default" | "outline" | "destructive" | null | undefined => {
    switch (status) {
        case 'In Progress': return 'secondary';
        case 'Active': return 'secondary';
        case 'Review': return 'default';
        case 'Completed': return 'outline';
        case 'On Hold': return 'destructive';
        case 'Paid': return 'outline';
        case 'Due': return 'secondary';
        case 'Overdue': return 'destructive';
        default: return 'default';
    }
  };

  const totalRevenue = user.totalRevenue ?? 25480;
  const totalExpenses = user.monthlyExpenses ?? 12345;
  const netIncome = totalRevenue - totalExpenses;
  const openProjects = projects?.filter(p => p.status !== 'Completed').length ?? 0;


  return (
    <div className="flex flex-col gap-8">
       <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-4">
            <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Client Dashboard</h1>
                <p className="text-muted-foreground mt-2">
                    Welcome back, {user.displayName?.split(' ')[0] || 'Client'}. Here's your financial and project overview.
                </p>
            </div>
            <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="/dashboard/analytics">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Main Dashboard
                </Link>
            </Button>
       </div>
      
        {/* --- KPI Cards Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-glass">
                <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                    <div className="flex items-center gap-2">
                         <DollarSign className="h-6 w-6 text-green-500" />
                         <span className="text-3xl font-bold font-mono">${totalRevenue.toLocaleString()}</span>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1 text-green-500"/>
                        <span>+15.2% from last month</span>
                    </div>
                </CardContent>
            </Card>
             <Card className="card-glass">
                <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">Total Expenses</CardTitle>
                    <div className="flex items-center gap-2">
                        <DollarSign className="h-6 w-6 text-red-500" />
                        <span className="text-3xl font-bold font-mono">${totalExpenses.toLocaleString()}</span>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground flex items-center">
                        <TrendingDown className="h-4 w-4 mr-1 text-red-500"/>
                        <span>+3.1% from last month</span>
                    </div>
                </CardContent>
            </Card>
             <Card className="card-glass">
                <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">Net Income</CardTitle>
                    <div className="flex items-center gap-2">
                        <DollarSign className="h-6 w-6 text-primary" />
                        <span className="text-3xl font-bold font-mono">${netIncome.toLocaleString()}</span>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1 text-green-500"/>
                        <span>+20.5% from last month</span>
                    </div>
                </CardContent>
            </Card>
             <Card className="card-glass">
                <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">Open Projects</CardTitle>
                     <div className="flex items-center gap-2">
                        <Briefcase className="h-6 w-6 text-amber-500" />
                        <span className="text-3xl font-bold font-mono">{openProjects}</span>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">
                        {projectsLoading ? <Skeleton className="h-4 w-24" /> : <span>{projects?.length} total projects</span>}
                    </div>
                </CardContent>
            </Card>
        </div>


      {/* --- Analytics Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-glass">
                <CardHeader>
                    <CardTitle>Monthly Revenue vs. Expenses</CardTitle>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig} className="h-[250px] w-full">
                        <AreaChart data={monthlyRevenueData} margin={{ left: -20, right: 10 }}>
                            <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="var(--color-expenses)" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="var(--color-expenses)" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                            <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} />
                            <YAxis tickLine={false} axisLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} />
                            <Tooltip content={<ChartTooltipContent />} cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: "3 3" }} />
                            <Legend />
                            <Area type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
                            <Area type="monotone" dataKey="expenses" stroke="var(--color-expenses)" strokeWidth={2} fillOpacity={1} fill="url(#colorExpenses)" />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>

            <Card className="card-glass">
                <CardHeader><CardTitle>Support Ticket Trends</CardTitle></CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig} className="h-[250px] w-full">
                        <LineChart data={supportTicketTrend} margin={{ left: -20, right: 10 }}>
                             <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                            <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}}/>
                            <YAxis tickLine={false} axisLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}}/>
                            <Tooltip content={<ChartTooltipContent />} cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: "3 3" }}/>
                            <Legend />
                            <Line type="monotone" dataKey="created" stroke="var(--color-created)" strokeWidth={2} dot={false} />
                            <Line type="monotone" dataKey="resolved" stroke="var(--color-resolved)" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
            </Card>
      </div>

      <Card className="card-glass">
        <CardHeader>
          <CardTitle>Project Reports</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {staticProjects.map(p => (
            <div key={p.id} className="bg-background/50 p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-muted-foreground">Status: <span className="font-medium text-foreground">{p.status}</span> | Budget: {p.budget}</p>
                <p className="text-sm text-muted-foreground">Deadline: {p.deadline}</p>
              </div>
              <div className="space-x-2 shrink-0">
                <Button variant="default" size="sm">View</Button>
                <Button variant="outline" size="sm">Export</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>


       {/* --- Quick Navigation Section --- */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">Quick Navigation</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {quickNavItems.map(({ href, icon: Icon, label }) => (
                <Link href={href} key={label} className="flex flex-col items-center justify-center gap-2 p-4 border rounded-lg hover:bg-accent/50 transition-colors text-center card-glass-interactive h-28">
                    <Icon className="h-8 w-8 text-primary" />
                    <span className="text-xs font-medium text-foreground text-center">{label}</span>
                </Link>
            ))}
        </div>
      </div>

    </div>
  );
}
