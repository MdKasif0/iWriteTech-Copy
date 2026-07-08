import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | TechFinds",
  description: "Learn about the TechFinds mission and the team behind the curated tech and aesthetic desk setups.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Story
            </span>
          </div>
          <h1 className="display-lg mb-8 leading-tight">
            Curating tech that inspires.
          </h1>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              TechFinds was born from a simple frustration: the tech review space is overwhelmingly focused on raw specs, gaming aesthetics, and benchmarks. But for modern professionals, creators, and minimalists, how a piece of technology looks and feels on a desk is just as important as how fast its processor is.
            </p>
            <p>
              We believe that your workspace should be a sanctuary of productivity and inspiration. Every keyboard, monitor arm, and desk mat we feature has been tested not just for performance, but for its contribution to a beautiful, focused environment.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted border border-border">
          <Image 
            src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1200&auto=format&fit=crop"
            alt="A clean, minimalist desk setup featuring a mechanical keyboard and warm lighting"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-card border border-border rounded-3xl p-8 md:p-16 mb-24">
        <h2 className="heading text-center mb-16">Our Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Aesthetics Matter",
              desc: "We prioritize clean lines, premium materials, and cohesive color palettes. If it looks like a spaceship, you won't find it here."
            },
            {
              title: "Real World Testing",
              desc: "Specs only tell half the story. We test every product in a real daily-driver setup to understand the actual user experience."
            },
            {
              title: "Intentional Curation",
              desc: "We don't post everything. We filter through the noise to bring you only the products that genuinely elevate your workflow."
            }
          ].map((value, idx) => (
            <div key={idx} className="flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="heading mb-6">Ready to upgrade your workspace?</h2>
        <p className="text-lg text-muted-foreground mb-10">
          Dive into our latest reviews and guides to find the perfect addition to your setup.
        </p>
        <Link 
          href="/blog" 
          className="inline-flex items-center justify-center whitespace-nowrap text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-10 rounded-full"
        >
          Explore the Blog
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>
    </div>
  );
}
