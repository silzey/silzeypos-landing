

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { UploadCloud, ArrowLeft } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function PublishingPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <Card>
        <CardHeader>
          <UploadCloud className="h-10 w-10 text-primary mb-4" />
          <CardTitle>Publishing</CardTitle>
          <CardDescription>
            Publishing your application to the world.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content about publishing will go here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
