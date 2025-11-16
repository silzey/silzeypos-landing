
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  { name: "John Doe", role: "Admin", email: "john@example.com" },
  { name: "Jane Smith", role: "Member", email: "jane@example.com" },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Client Portal
        </Link>
      </Button>
      <div className="flex flex-col gap-8">
          <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Team Members</h1>
              <p className="text-muted-foreground mt-2">
                  Manage your project team members.
              </p>
          </div>
          <Card>
              <CardHeader>
                <CardTitle>Your Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {team.map(member => (
                  <div key={member.email} className="p-4 bg-background/50 rounded-lg shadow-md flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.role} | {member.email}</p>
                        </div>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">Edit Role</Button>
                      <Button variant="destructive" size="sm">Remove</Button>
                       <Button variant="default" size="sm">Message</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
          </Card>
      </div>
    </div>
  );
}
