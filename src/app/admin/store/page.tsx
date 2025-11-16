
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Store } from "lucide-react";

export default function AdminStorePage() {
  return (
    <div className="flex flex-col gap-8">
        <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Manage Store</h1>
            <p className="text-muted-foreground mt-2">
                This page is under construction.
            </p>
        </div>
        <Card className="flex flex-col items-center justify-center text-center p-8 gap-4 min-h-[300px]">
            <Store className="h-16 w-16 text-primary" />
            <CardTitle>Store Management</CardTitle>
            <CardDescription>
                A dashboard for managing your application's store will be built here.
            </CardDescription>
        </Card>
    </div>
  );
}
