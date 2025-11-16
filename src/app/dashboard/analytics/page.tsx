
"use client"
import Link from 'next/link';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Line, LineChart, Pie, PieChart, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const dailyRevenueData = [
  { date: "Mon", revenue: 2250 },
  { date: "Tue", revenue: 1800 },
  { date: "Wed", revenue: 2800 },
  { date: "Thu", revenue: 2500 },
  { date: "Fri", revenue: 4100 },
  { date: "Sat", revenue: 5300 },
  { date: "Sun", revenue: 3200 },
];

const topSellingProductsData = [
  { name: "Blue Dream", sold: 120 },
  { name: "OG Kush", sold: 98 },
  { name: "Sour Diesel", sold: 86 },
  { name: "GSC", sold: 74 },
  { name: "Granddaddy Purple", sold: 65 },
  { name: "Jack Herer", sold: 51 },
];

const salesByCategoryData = [
  { name: 'Flower', value: 45, fill: 'hsl(var(--chart-1))' },
  { name: 'Edibles', value: 25, fill: 'hsl(var(--chart-2))' },
  { name: 'Concentrates', value: 15, fill: 'hsl(var(--chart-3))' },
  { name: 'Vapes', value: 10, fill: 'hsl(var(--chart-4))' },
  { name: 'Other', value: 5, fill: 'hsl(var(--chart-5))' },
];

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Analytics Dashboard</h1>
        <p className="text-muted-foreground mt-2 px-4">Your dispensary's performance at a glance.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
            <CardDescription>Last 30 Days</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl md:text-4xl font-bold">$89,420.50</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Avg. Transaction</CardTitle>
            <CardDescription>Last 30 Days</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl md:text-4xl font-bold">$78.15</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>New Customers</CardTitle>
            <CardDescription>This Month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl md:text-4xl font-bold">213</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
            <CardDescription>Units sold this week</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-[250px] sm:h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topSellingProductsData} layout="vertical" margin={{ left: 10, right: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={80} tick={{ fontSize: 10 }} />
                  <Tooltip
                    cursor={{ fill: 'hsl(var(--muted))' }}
                    content={<ChartTooltipContent />}
                  />
                  <Bar dataKey="sold" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Weekly Revenue</CardTitle>
            <CardDescription>Last 7 Days</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-[250px] sm:h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyRevenueData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4, fill: "hsl(var(--primary))" }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sales by Category</CardTitle>
          <CardDescription>Breakdown of product category sales</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
            <ChartContainer config={{}} className="h-[250px] sm:h-[300px] w-full max-w-lg">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Tooltip content={<ChartTooltipContent />} />
                        <Pie
                            data={salesByCategoryData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius="80%"
                            labelLine={false}
                        >
                            {salesByCategoryData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                        <Legend wrapperStyle={{ fontSize: '12px' }} />
                    </PieChart>
                </ResponsiveContainer>
            </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
