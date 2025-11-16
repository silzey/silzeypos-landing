
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export default function AdminProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
        <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Manage Projects</h1>
            <p className="text-muted-foreground mt-2">
                This page is under construction.
            </p>
        </div>
        <Card className="flex flex-col items-center justify-center text-center p-8 gap-4 min-h-[300px]">
            <Briefcase className="h-16 w-16 text-primary" />
            <CardTitle>Project Management</CardTitle>
            <CardDescription>
                A dashboard for viewing and managing client projects will be built here.
            </CardDescription>
        </Card>
    </div>
  );
}
