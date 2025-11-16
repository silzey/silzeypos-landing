
import { DemoRequestForm } from '@/components/landing/DemoRequestForm';

export function DemoRequestSection() {
    return (
        <section id="demo-request" className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/10">
          <div className="container mx-auto px-4 md:px-6">
            <DemoRequestForm />
          </div>
        </section>
    );
}
