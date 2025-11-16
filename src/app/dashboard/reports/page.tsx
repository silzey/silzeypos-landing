'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowLeft, PlusCircle, Briefcase, Target, CheckCircle, Clock } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DatePicker } from '@/components/ui/date-picker';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const initialProjects = [
  { id: 'PROJ-001', name: "Q4 Marketing Campaign", status: "In Progress", progress: 75, dueDate: "2025-12-15", budget: 15000 },
  { id: 'PROJ-002', name: "Website Redesign", status: "Completed", progress: 100, dueDate: "2025-10-30", budget: 25000 },
  { id: 'PROJ-003', name: "Mobile App v2.0", status: "Planning", progress: 10, dueDate: "2026-03-01", budget: 50000 },
  { id: 'PROJ-004', name: "Compliance Audit Prep", status: "Review", progress: 90, dueDate: "2025-11-20", budget: 7500 },
  { id: 'PROJ-005', name: "New POS Hardware Rollout", status: "On Hold", progress: 40, dueDate: "2026-01-10", budget: 30000 },
];

const statusColors = {
  "Planning": "var(--chart-5)",
  "In Progress": "var(--chart-3)",
  "Review": "var(--chart-4)",
  "Completed": "var(--chart-2)",
  "On Hold": "var(--chart-1)",
};

const getStatusVariant = (status: string) => {
    switch (status) {
        case 'Completed': return 'outline';
        case 'In Progress': return 'default';
        case 'Review': return 'secondary';
        case 'On Hold': return 'destructive';
        case 'Planning': return 'secondary';
        default: return 'default';
    }
};

export default function ReportsPage() {
  const [projects, setProjects] = useState(initialProjects);
  const [isNewProjectOpen, setIsNewProjectOpen] = useState(false);

  const projectStatusData = Object.entries(
    projects.reduce((acc, p) => {
      acc[p.status] = (acc[p.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  ).map(([name, value]) => ({ name, value, fill: statusColors[name as keyof typeof statusColors] }));

  const totalBudget = projects.reduce((acc, p) => acc + p.budget, 0);
  const activeProjects = projects.filter(p => p.status === 'In Progress').length;
  
  const handleCreateProject = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newProject = {
      id: `PROJ-00${projects.length + 1}`,
      name: formData.get('name') as string,
      status: formData.get('status') as string,
      progress: 0,
      dueDate: formData.get('dueDate') as string,
      budget: Number(formData.get('budget')),
    };
    setProjects([newProject, ...projects]);
    setIsNewProjectOpen(false);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Button asChild variant="outline" className="self-start">
          <Link href="/dashboard/client-portal">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Client Portal
          </Link>
        </Button>
        <Dialog open={isNewProjectOpen} onOpenChange={setIsNewProjectOpen}>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form onSubmit={handleCreateProject}>
              <DialogHeader>
                <DialogTitle>Create New Project</DialogTitle>
                <DialogDescription>Fill in the details for your new project.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <Label htmlFor="name">Project Name</Label>
                  <Input id="name" name="name" required />
                </div>
                <div>
                  <Label htmlFor="budget">Budget</Label>
                  <Input id="budget" name="budget" type="number" required />
                </div>
                 <div>
                  <Label htmlFor="status">Status</Label>
                   <Select name="status" defaultValue="Planning">
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {Object.keys(statusColors).map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Due Date</Label>
                  <DatePicker name="dueDate" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Create Project</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Project Reports</h1>
        <p className="text-muted-foreground mt-2">An overview of all your ongoing and completed projects.</p>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card><CardHeader><CardDescription>Total Projects</CardDescription><CardTitle className="flex items-center gap-2"><Briefcase /> {projects.length}</CardTitle></CardHeader></Card>
            <Card><CardHeader><CardDescription>Active Projects</CardDescription><CardTitle className="flex items-center gap-2"><Clock /> {activeProjects}</CardTitle></CardHeader></Card>
            <Card><CardHeader><CardDescription>Completed</CardDescription><CardTitle className="flex items-center gap-2"><CheckCircle /> {projects.filter(p => p.status === 'Completed').length}</CardTitle></CardHeader></Card>
            <Card><CardHeader><CardDescription>Total Budget</CardDescription><CardTitle className="flex items-center gap-2"><Target /> ${totalBudget.toLocaleString()}</CardTitle></CardHeader></Card>
       </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Projects by Status</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip content={<ChartTooltipContent hideLabel />} />
                  <Pie data={projectStatusData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} labelLine={false}>
                    {projectStatusData.map((entry) => <Cell key={`cell-${entry.name}`} fill={entry.fill} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
            <CardHeader><CardTitle>Project Progress</CardTitle></CardHeader>
            <CardContent>
                <ChartContainer config={{}} className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={projects} layout="vertical" margin={{ left: 20, right: 20 }}>
                           <CartesianGrid horizontal={false} strokeDasharray="3 3" />
                           <XAxis type="number" domain={[0, 100]} unit="%" />
                           <YAxis dataKey="name" type="category" width={80} tick={{ fontSize: 10 }} />
                           <Tooltip content={<ChartTooltipContent />} cursor={{fill: 'hsl(var(--muted))'}} />
                           <Bar dataKey="progress" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle>All Projects</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>Project Name</TableHead><TableHead>Status</TableHead><TableHead>Progress</TableHead><TableHead>Due Date</TableHead><TableHead className="text-right">Budget</TableHead></TableRow></TableHeader>
            <TableBody>
              {projects.map(p => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.name}</TableCell>
                  <TableCell><Badge variant={getStatusVariant(p.status)}>{p.status}</Badge></TableCell>
                  <TableCell><div className="flex items-center gap-2"><Progress value={p.progress} className="w-24 h-2" /><span>{p.progress}%</span></div></TableCell>
                  <TableCell>{p.dueDate}</TableCell>
                  <TableCell className="text-right font-mono">${p.budget.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
