
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowLeft, PlusCircle, Send, MessageSquare } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';

type Ticket = {
  id: number;
  subject: string;
  status: "Open" | "In Progress" | "Closed";
  priority: "High" | "Medium" | "Low";
  date: string;
  conversation: { author: string; message: string; date: string }[];
};

const initialTickets: Ticket[] = [
  { 
    id: 1234, 
    subject: "Login Issue After Password Reset", 
    status: "Open", 
    priority: "High", 
    date: "2025-11-12",
    conversation: [
        { author: "You", message: "I reset my password but I'm still unable to log in. I'm getting an 'invalid credentials' error.", date: "2 hours ago" },
    ]
  },
  { 
    id: 1235, 
    subject: "Question About Billing Invoice #INV-0042", 
    status: "In Progress", 
    priority: "Medium", 
    date: "2025-11-11",
    conversation: [
        { author: "Support", message: "Thanks for reaching out. We're looking into the discrepancy on invoice #INV-0042 and will get back to you shortly.", date: "1 day ago" },
        { author: "You", message: "There seems to be an incorrect charge on my latest invoice. Can you please look into it?", date: "2 days ago" },
    ]
  },
  { 
    id: 1236, 
    subject: "Feature Request: Dark Mode for Analytics", 
    status: "Closed", 
    priority: "Low", 
    date: "2025-11-09",
    conversation: [
        { author: "Support", message: "Thank you for the suggestion! We've added it to our product roadmap.", date: "4 days ago" },
        { author: "You", message: "It would be great if the analytics dashboard had a dark mode option. My eyes would thank you!", date: "5 days ago" },
    ]
  },
];

const priorityVariant = {
  High: 'destructive',
  Medium: 'secondary',
  Low: 'outline',
} as const;

const statusVariant = {
  Open: 'default',
  'In Progress': 'secondary',
  Closed: 'outline',
} as const;


export default function SupportPage() {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [selectedTicket, setSelectedTicket] = useState<Ticket>(tickets[0]);
  const [isNewTicketDialogOpen, setIsNewTicketDialogOpen] = useState(false);

  const handleCreateTicket = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newTicket: Ticket = {
      id: Math.floor(Math.random() * 9000) + 1000,
      subject: formData.get('subject') as string,
      status: 'Open',
      priority: 'Medium',
      date: new Date().toISOString().split('T')[0],
      conversation: [
        { author: 'You', message: formData.get('message') as string, date: 'Just now' },
      ],
    };
    const newTickets = [newTicket, ...tickets];
    setTickets(newTickets);
    setSelectedTicket(newTicket);
    setIsNewTicketDialogOpen(false);
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
        <Dialog open={isNewTicketDialogOpen} onOpenChange={setIsNewTicketDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto">
              <PlusCircle className="mr-2 h-4 w-4" />
              Create New Ticket
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={handleCreateTicket}>
              <DialogHeader>
                <DialogTitle>New Support Ticket</DialogTitle>
                <DialogDescription>
                  Describe your issue below. Our support team will get back to you as soon as possible.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="subject" className="text-right">Subject</Label>
                  <Input id="subject" name="subject" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label htmlFor="message" className="text-right mt-2">Message</Label>
                  <Textarea id="message" name="message" className="col-span-3" rows={5} required />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Submit Ticket</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Support Center</h1>
        <p className="text-muted-foreground mt-2">Create and manage your support requests.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tickets List */}
        <div className="lg:col-span-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Your Tickets</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y">
                {tickets.map(ticket => (
                  <li key={ticket.id}>
                    <button 
                      onClick={() => setSelectedTicket(ticket)} 
                      className={cn(
                        "w-full text-left p-4 hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:z-10 relative",
                        selectedTicket.id === ticket.id && "bg-accent"
                      )}
                    >
                      <p className="font-semibold truncate">{ticket.subject}</p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                        <Badge variant={statusVariant[ticket.status]} className="text-xs">{ticket.status}</Badge>
                        <Separator orientation="vertical" className="h-3" />
                        <Badge variant={priorityVariant[ticket.priority]} className="text-xs">{ticket.priority} Priority</Badge>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Selected Ticket Details */}
        <div className="lg:col-span-2">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="truncate text-xl">{selectedTicket.subject}</CardTitle>
              <CardDescription>
                Ticket #{selectedTicket.id} &bull; Created on {new Date(selectedTicket.date).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-6">
              <div className="space-y-4">
                {selectedTicket.conversation.map((msg, index) => (
                  <div key={index} className={cn("flex items-start gap-3", msg.author === 'You' ? "justify-end" : "justify-start")}>
                    {msg.author !== 'You' && (
                      <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                    )}
                    <div className={cn(
                      "p-3 rounded-lg max-w-sm", 
                      msg.author === 'You' ? "bg-primary text-primary-foreground" : "bg-muted"
                    )}>
                      <p className="text-sm">{msg.message}</p>
                      <p className={cn("text-xs mt-1", msg.author === 'You' ? "text-primary-foreground/70" : "text-muted-foreground")}>{msg.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6">
              <div className="w-full flex items-center gap-2">
                <Textarea placeholder="Type your reply..." className="flex-grow" rows={1} />
                <Button>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

    