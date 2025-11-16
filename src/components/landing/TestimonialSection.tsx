
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export function TestimonialSection() {
  return (
    <section id="testimonial" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-2xl bg-card p-6 sm:p-8 md:p-12 rounded-lg">
          <CardContent className="text-center p-0">
            <Quote className="h-8 w-8 sm:h-12 sm:w-12 text-primary mx-auto mb-4 sm:mb-6" />
            <blockquote className="text-lg sm:text-xl md:text-2xl font-medium italic text-foreground">
              "We are changing the game and the way things are done to meet the needs of the owners — putting money back in the pockets of the users."
            </blockquote>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground">- The SilzeyPOS Team</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
