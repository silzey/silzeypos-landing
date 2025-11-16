
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { BadgeDollarSign, Receipt, TrendingDown, Check, ArrowLeft, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from '@/components/ui/table';

export default function CheaperPricesPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Affordable & Competitive Pricing</h1>
        <p className="text-muted-foreground mt-2">
          A powerful POS system that doesn't break the bank. We're committed to helping your dispensary thrive.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <BadgeDollarSign className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Lower Monthly Fees</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our subscription plans are designed to be more affordable than major competitors. We believe in putting money back into the pockets of business owners, allowing you to invest in inventory, staff, and marketing.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TrendingDown className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Reduced Payment Processing Rates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We leverage our partnerships to offer competitive, and often lower, rates for integrated debit and ACH payment solutions, directly reducing your operational overhead on every transaction.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Tiered Pricing That Grows With You</h2>
        <p className="text-muted-foreground mt-2">Our pricing scales with your business.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Seedling Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Seedling Plan</CardTitle>
            <CardDescription>Perfect for new dispensaries or single-location businesses getting started.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="text-3xl md:text-4xl font-bold">
              $299<span className="text-lg font-normal text-muted-foreground">/mo</span>
            </div>
            <p className="text-sm text-muted-foreground">per location</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Core POS & Inventory Management</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> State Compliance Integrations (METRC, etc.)</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Real-Time Reporting</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Integrated Payment Solutions</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> POS Mobile App (Manager View)</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Get Started</Button>
          </CardFooter>
        </Card>

        {/* Flowering Plan */}
        <Card className="flex flex-col border-primary ring-2 ring-primary shadow-2xl">
           <CardHeader>
            <CardTitle>Flowering Plan</CardTitle>
            <CardDescription>For growing businesses that need advanced tools and integrations.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="text-3xl md:text-4xl font-bold">
              $499<span className="text-lg font-normal text-muted-foreground">/mo</span>
            </div>
            <p className="text-sm text-muted-foreground">per location</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start font-semibold text-foreground"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Everything in Seedling, plus:</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Advanced Analytics (C.A.T.S.)</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> E-commerce & Menu Sync</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Loyalty & CRM Suite</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Multi-Location Management</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Choose Flowering</Button>
          </CardFooter>
        </Card>

        {/* Harvest Plan */}
        <Card className="flex flex-col">
           <CardHeader>
            <CardTitle>Harvest (Enterprise)</CardTitle>
            <CardDescription>Custom solutions for large-scale operations and MSOs.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="text-3xl md:text-4xl font-bold">
              Custom
            </div>
            <p className="text-sm text-muted-foreground">Negotiated Pricing</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start font-semibold text-foreground"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Everything in Flowering, plus:</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Dedicated Account Manager</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Business Consulting Hours</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Startup Support & Marketing</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Custom Integrations & API Access</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Service Level Agreement (SLA)</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="text-center mt-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Digital Marketing Packages</h2>
        <p className="text-muted-foreground mt-2">Amplify your brand's reach and engagement.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Starter Package – “Launch & Presence”</CardTitle>
            <CardDescription>Goal: Build online visibility and basic brand credibility.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="text-3xl md:text-4xl font-bold">
              $500 – $1,200
              <span className="text-lg font-normal text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground">Ideal for: New businesses or local service providers</p>
            <div>
                <h4 className="font-semibold mb-2">Includes:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Social media setup (Facebook, Instagram, TikTok, LinkedIn)</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> 8–12 branded social posts per month</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Hashtag strategy & content calendar</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> SEO keyword research (10–15 keywords)</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Google Business Profile optimization</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> 1 email campaign or newsletter per month</li>
                </ul>
            </div>
             <div>
                <h4 className="font-semibold mb-2 mt-4">Add-ons:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start"><Lightbulb className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Basic logo design</li>
                  <li className="flex items-start"><Lightbulb className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> 1-month paid ad setup (Facebook or Instagram)</li>
                </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">Select Package</Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Growth Package – “Engage & Convert”</CardTitle>
            <CardDescription>Goal: Increase followers, engagement, and sales conversions.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="text-3xl md:text-4xl font-bold">
              $1,200 – $3,000
              <span className="text-lg font-normal text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground">Ideal for: Retail, restaurants, coaches, service brands</p>
            <div>
                <h4 className="font-semibold mb-2">Includes:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> 3–4 social media platforms managed</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> 16–20 posts/month (custom graphics + captions)</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Ad management (Facebook + Instagram or Google Ads)</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Landing page design or funnel setup</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Basic influencer outreach or collaboration strategy</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Email automation (2 campaigns/month)</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Monthly performance report + strategy call</li>
                </ul>
            </div>
             <div>
                <h4 className="font-semibold mb-2 mt-4">Add-ons:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start"><Lightbulb className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> TikTok growth strategy</li>
                  <li className="flex items-start"><Lightbulb className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Short-form video creation (Reels / TikToks)</li>
                </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">Select Package</Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Premium Package – “Dominate & Scale”</CardTitle>
            <CardDescription>Goal: Full-funnel marketing for brand domination & ROI tracking.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="text-3xl md:text-4xl font-bold">
              $3,000 – $10,000+
              <span className="text-lg font-normal text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground">Ideal for: E-commerce, SaaS, national brands</p>
            <div>
                <h4 className="font-semibold mb-2">Includes:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Multi-channel social media management</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Video production (short-form & promotional)</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> SEO & blog content (4 optimized articles/month)</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Google Ads + Meta Ads + TikTok Ads</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Retargeting & conversion optimization</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> A/B testing for ad creatives</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Influencer partnerships & affiliate program setup</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Monthly growth dashboard with KPIs</li>
                  <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Dedicated account manager + strategy team</li>
                </ul>
            </div>
             <div>
                <h4 className="font-semibold mb-2 mt-4">Add-ons:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start"><Lightbulb className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Press release campaigns</li>
                  <li className="flex items-start"><Lightbulb className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Marketing automation via CRM (HubSpot, GoHighLevel, etc.)</li>
                </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">Select Package</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Social Media Marketing Packages</h2>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Package</TableHead>
                <TableHead>Deliverables</TableHead>
                <TableHead>Goal</TableHead>
                <TableHead className="text-right">Price Range</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Social Starter</TableCell>
                <TableCell>3 posts/week, captions, branded templates</TableCell>
                <TableCell>Establish presence</TableCell>
                <TableCell className="text-right">$400–$800</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Engagement Boost</TableCell>
                <TableCell>5 posts/week, engagement management, reels</TableCell>
                <TableCell>Grow community</TableCell>
                <TableCell className="text-right">$800–$1,500</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Social Domination</TableCell>
                <TableCell>Full account growth, content, paid ads, analytics</TableCell>
                <TableCell>Viral awareness & sales</TableCell>
                <TableCell className="text-right">$2,000–$6,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Extra Services</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Influencer campaign management</li>
            <li>Social listening & competitor analysis</li>
            <li>TikTok or YouTube Shorts management</li>
            <li>Reputation monitoring</li>
          </ul>
        </CardContent>
      </Card>

      <div className="text-center mt-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Brand Strategy Packages</h2>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Package</TableHead>
                <TableHead>What’s Included</TableHead>
                <TableHead>Use Case</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Brand Identity Kit</TableCell>
                <TableCell>Logo, colors, fonts, style guide</TableCell>
                <TableCell>Startups, rebrands</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Positioning & Messaging</TableCell>
                <TableCell>Brand voice, target persona, value proposition</TableCell>
                <TableCell>For new product launches</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Complete Brand Strategy</TableCell>
                <TableCell>Market research, audience segmentation, content pillars, storytelling framework</TableCell>
                <TableCell>Established businesses expanding into new markets</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="justify-end pt-4">
            <p className="text-sm text-muted-foreground font-medium">Price range: $1,000 – $7,500 (one-time project)</p>
        </CardFooter>
      </Card>

      <div className="text-center mt-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Content Creation Packages</h2>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Package</TableHead>
                <TableHead>Content</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Visual Kit</TableCell>
                <TableCell>10–15 branded posts, photo editing</TableCell>
                <TableCell>Social feed aesthetics</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Video Content</TableCell>
                <TableCell>5 short videos + captions</TableCell>
                <TableCell>TikTok / Reels</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Full Content Vault</TableCell>
                <TableCell>20 posts + 10 videos + 3 blogs</TableCell>
                <TableCell>Full digital storytelling</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="justify-end pt-4">
          <p className="text-sm text-muted-foreground font-medium">Price range: $800 – $4,000/project</p>
        </CardFooter>
      </Card>

    </div>
  );
}
