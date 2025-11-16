

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Megaphone, Share2, PenSquare, Users, Check, ArrowLeft } from "lucide-react";

export default function StartupMarketingPage() {
  return (
    <div className="flex flex-col gap-8">
      <Button asChild variant="outline" className="self-start">
        <Link href="/dashboard/client-portal">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Dashboard
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Startup Marketing Solutions</h1>
        <p className="text-muted-foreground mt-2">
          Cut through the noise and build your brand in the competitive cannabis market.
        </p>
      </div>

      <Card>
        <CardHeader>
          <TrendingUp className="h-10 w-10 text-primary" />
          <CardTitle>Marketing for a Regulated Industry</CardTitle>
          <CardDescription>
            Cannabis marketing is filled with complex restrictions that can feel like navigating a minefield. Our team specializes in creating marketing solutions that are not only effective but also meticulously compliant. We help you build significant brand awareness and drive consistent foot traffic, all while safeguarding your hard-earned license.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Core Marketing Services</h2>
        <p className="text-muted-foreground mt-2 md:max-w-2xl md:mx-auto">A suite of services to help you connect with your customers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <Megaphone className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Launch Campaign Strategy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A successful launch sets the tone for your entire business. We develop comprehensive multi-channel launch strategies using compliant social media, local PR, and targeted text/email campaigns to build hype and ensure a packed grand opening.
            </p>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-2 p-4 rounded-lg border">
            <Share2 className="h-6 w-6 text-primary" />
            <h3 className="font-semibold">Digital Presence Setup</h3>
            <p className="text-sm text-muted-foreground">
              We establish your digital footprint by setting up and optimizing your profiles on key platforms like Weedmaps and Leafly. We also assist with creating a professional, SEO-friendly website to attract organic, local traffic from day one.
            </p>
        </div>
        <div className="flex flex-col gap-2 p-4 rounded-lg border">
            <PenSquare className="h-6 w-6 text-primary" />
            <h3 className="font-semibold">Content & SEO Strategy</h3>
            <p className="text-sm text-muted-foreground">
              Attract and educate your audience with high-quality content. We develop blog posts, strain reviews, and educational articles that are optimized for search engines, establishing your dispensary as a trusted local authority.
            </p>
        </div>
        <div className="flex flex-col gap-2 p-4 rounded-lg border">
            <Users className="h-6 w-6 text-primary" />
            <h3 className="font-semibold">Loyalty & Retention Marketing</h3>
            <p className="text-sm text-muted-foreground">
              Leverage your CRM to keep customers coming back. We design and execute targeted SMS and email campaigns to announce new product drops, promote daily deals, and re-engage customers who haven't visited in a while.
            </p>
        </div>
      </div>

       <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">🌿 Cannabis Marketing Tier Packages</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {/* Tier 1: Starter */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>🟢 Tier 1: Starter</CardTitle>
            <CardDescription>For new cannabis brands just planting roots.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="text-3xl md:text-4xl font-bold">$499<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> 4 Social media posts/month (IG, TikTok, Facebook)</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> 1 branded content graphic/week</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Local SEO optimization (Google Business)</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Basic logo placement on one community page</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Monthly email blast to 500 customers</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Basic analytics dashboard</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">Get Started</Button>
          </CardFooter>
        </Card>

        {/* Tier 2: Growth */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>🌱 Tier 2: Growth</CardTitle>
            <CardDescription>For dispensaries and brands building local visibility.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="text-3xl md:text-4xl font-bold">$999<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> 12 Social media posts/month</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Short-form video content (2 TikToks + 1 Instagram Reel)</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> 1 Blog/article for website SEO</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Influencer intro (1 micro-influencer collab/month)</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> SMS campaign setup</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Monthly performance report</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">Choose Growth</Button>
          </CardFooter>
        </Card>
        
        {/* Tier 3: Bud Builder */}
        <Card className="flex flex-col border-primary ring-2 ring-primary shadow-2xl">
          <CardHeader>
            <CardTitle>🌿 Tier 3: Bud Builder</CardTitle>
            <CardDescription>For multi-location or fast-growing cannabis brands.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="text-3xl md:text-4xl font-bold">$1,999<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> 20 Social media posts/month</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> 4 custom video ads (15-30s)</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Paid ad campaign setup (Google + Meta, excludes ad spend)</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> 2 blogs/articles/month</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Local + regional SEO strategy</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Influencer campaign management</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> CRM integration support</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Bi-weekly analytics & consultation</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Choose Bud Builder</Button>
          </CardFooter>
        </Card>
        
        {/* Tier 4: Blossom Brand */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>🌸 Tier 4: Blossom Brand</CardTitle>
            <CardDescription>For brands seeking premium visibility & thought leadership.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="text-3xl md:text-4xl font-bold">$3,999<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> 30 social media posts/month + 6 short videos</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> TikTok growth strategy (with shadow content calendar)</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> 4 educational blog posts/month (SEO-rich)</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Podcast or YouTube strategy + content consulting</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> High-level PR placement (1 per quarter)</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Retail product photo shoot (quarterly)</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Data-rich dashboards + heat mapping</li>
              <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Dedicated account manager</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">Choose Blossom</Button>
          </CardFooter>
        </Card>
        
        {/* Tier 5: Harvest Domination */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>🌺 Tier 5: Harvest Domination</CardTitle>
            <CardDescription>For MSOs, tech brands, or white-label manufacturers.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="text-3xl md:text-4xl font-bold">$7,999<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Fully managed social media content & ads</li>
                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> 10 video assets/month + editing</li>
                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Email/SMS lifecycle marketing setup</li>
                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Regional press outreach (2 PR/month)</li>
                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Cross-channel ad campaigns (programmatic, Spotify, Reddit)</li>
                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Product storytelling campaign (1/month)</li>
                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Event marketing support</li>
                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Monthly strategy call + competitor analysis</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">Contact Sales</Button>
          </CardFooter>
        </Card>
        
        {/* Tier 6: Legendary Legacy */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>🔥 Tier 6: Legendary Legacy</CardTitle>
            <CardDescription>For national expansion, IPO-prep, or brand IPOs.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div className="text-3xl md:text-4xl font-bold">$15,000+<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Dedicated full-service marketing team (strategist, designer, video editor, copywriter)</li>
                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> 24/7 content calendar + real-time adjustments</li>
                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> In-house influencer & affiliate program management</li>
                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> TV-quality ad production (1/month)</li>
                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Event activation & experiential marketing (budtender tours, pop-ups)</li>
                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Trade show marketing kit & booth design</li>
                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> State-by-state compliance review of all creative</li>
                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" /> Custom enterprise dashboard & brand book</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add-On Services (Available à la carte)</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-muted-foreground list-disc list-inside">
            <li>Cannabis packaging design</li>
            <li>Dispensary menu UI/UX redesign</li>
            <li>Product photo sessions</li>
            <li>E-commerce integration</li>
            <li>POS integration consulting</li>
            <li>Education/Training sessions for staff</li>
          </ul>
        </CardContent>
      </Card>

    </div>
  );
}
