
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function AdminDonationsPage() {
  return (
    <div className="flex flex-col gap-8">
        <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Manage Donations</h1>
            <p className="text-muted-foreground mt-2">
                This page is under construction.
            </p>
        </div>
        <Card className="flex flex-col items-center justify-center text-center p-8 gap-4 min-h-[300px]">
            <Heart className="h-16 w-16 text-primary" />
            <CardTitle>Donations Management</CardTitle>
            <CardDescription>
                A section to view and manage user donations will be built here.
            </CardDescription>
        </Card>
    </div>
  );
}
