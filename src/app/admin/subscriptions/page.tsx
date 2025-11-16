
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Repeat } from "lucide-react";

export default function AdminSubscriptionsPage() {
  return (
    <div className="flex flex-col gap-8">
        <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Manage Subscriptions</h1>
            <p className="text-muted-foreground mt-2">
                This page is under construction.
            </p>
        </div>
        <Card className="flex flex-col items-center justify-center text-center p-8 gap-4 min-h-[300px]">
            <Repeat className="h-16 w-16 text-primary" />
            <CardTitle>Subscription Management</CardTitle>
            <CardDescription>
                A section to view and manage user subscriptions will be built here.
            </CardDescription>
        </Card>
    </div>
  );
}
