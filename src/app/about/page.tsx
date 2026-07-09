import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Palette, Microscope, Filter } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | iWriteTech",
  description: "Learn about the iWriteTech mission and the team behind the curated tech and aesthetic desk setups.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      
      {/* Global Background Depth */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      {/* Main Container - Adjusted to max-w-7xl (1400px) for premium editorial feel */}
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* ========================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================= */}
        <section className="pt-16 pb-[140px] lg:pt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-primary/60" />
              <span className="text-[14px] font-semibold uppercase tracking-[0.25em] text-primary">
                Our Story
              </span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-[56px] lg:text-[64px] font-semibold text-foreground leading-[1.1] mb-10 tracking-tight">
              Curating tech that inspires.
            </h1>
            
            <div className="space-y-8 text-[17px] md:text-[18px] lg:text-[20px] text-muted-foreground leading-[1.8] max-w-[620px]">
              <p>
                iWriteTech was born from a simple frustration: the tech review space is overwhelmingly focused on raw specs, gaming aesthetics, and benchmarks. But for modern professionals, creators, and minimalists, how a piece of technology looks and feels on a desk is just as important as how fast its processor is.
              </p>
              <p>
                We believe that your workspace should be a sanctuary of productivity and inspiration. Every keyboard, monitor arm, and desk mat we feature has been tested not just for performance, but for its contribution to a beautiful, focused environment.
              </p>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative w-full flex justify-center lg:justify-end">
            {/* Subtle glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/10 blur-[80px] rounded-[28px] pointer-events-none" />
            
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[28px] overflow-hidden border border-border/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] group">
              <Image 
                src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1200&auto=format&fit=crop"
                alt="A clean, minimalist desk setup featuring a mechanical keyboard and warm lighting"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* STATS STRIP */}
        {/* ========================================================= */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 mb-[140px] border-y border-border/30 py-10">
          {[
            { value: "200+", label: "In-depth Reviews" },
            { value: "50+", label: "Buying Guides" },
            { value: "10K+", label: "Monthly Readers" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="font-heading text-4xl font-bold text-foreground mb-1">{stat.value}</span>
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* PHILOSOPHY SECTION */}
        {/* ========================================================= */}
        <section className="mb-[140px]">
          
          {/* Premium Container */}
          <div className="relative w-full rounded-[36px] p-10 md:p-16 lg:p-[80px] bg-card/60 dark:bg-card/20 border border-border/30 dark:border-border/10 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.2)] overflow-hidden">
            
            {/* Subtle vertical gradient inside container */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/80 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
                <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-semibold text-foreground leading-[1.1] tracking-tight">
                  Our Philosophy
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                
                {/* Card 1 */}
                <div className="group relative flex flex-col items-start bg-transparent border border-border/20 rounded-[24px] p-8 lg:p-[36px] min-h-[320px] transition-all duration-300 ease-out hover:-translate-y-[6px] hover:bg-card/40 hover:border-border/40 hover:shadow-xl dark:hover:bg-card/20 overflow-hidden">
                  <div className="w-[60px] h-[60px] rounded-full bg-[#F8F5F0] dark:bg-[#2A2824] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-105">
                    <Palette className="w-6 h-6 text-primary drop-shadow-sm" />
                  </div>
                  <h3 className="font-heading text-[30px] lg:text-[34px] font-bold mb-4 text-foreground leading-[1.2]">
                    Aesthetics Matter
                  </h3>
                  <p className="text-[16px] lg:text-[17px] text-muted-foreground leading-[1.6] max-w-[34ch]">
                    We prioritize clean lines, premium materials, and cohesive palettes. If it looks like a spaceship, you won't find it here.
                  </p>
                </div>

                {/* Card 2 (Subtle Emphasis) */}
                <div className="group relative flex flex-col items-start bg-card/40 dark:bg-card/10 border border-border/30 rounded-[24px] p-8 lg:p-[36px] min-h-[320px] transition-all duration-300 ease-out hover:-translate-y-[6px] hover:bg-card/60 hover:border-border/50 hover:shadow-xl dark:hover:bg-card/30 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] pointer-events-none transition-transform duration-500 group-hover:scale-110" />
                  <div className="w-[60px] h-[60px] rounded-full bg-[#F8F5F0] dark:bg-[#2A2824] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-105">
                    <Microscope className="w-6 h-6 text-primary drop-shadow-sm" />
                  </div>
                  <h3 className="font-heading text-[30px] lg:text-[34px] font-bold mb-4 text-foreground leading-[1.2]">
                    Real World Testing
                  </h3>
                  <p className="text-[16px] lg:text-[17px] text-muted-foreground leading-[1.6] max-w-[34ch]">
                    Specs only tell half the story. We test every product in a real daily-driver setup to understand the actual user experience.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="group relative flex flex-col items-start bg-transparent border border-border/20 rounded-[24px] p-8 lg:p-[36px] min-h-[320px] transition-all duration-300 ease-out hover:-translate-y-[6px] hover:bg-card/40 hover:border-border/40 hover:shadow-xl dark:hover:bg-card/20 overflow-hidden">
                  <div className="w-[60px] h-[60px] rounded-full bg-[#F8F5F0] dark:bg-[#2A2824] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-105">
                    <Filter className="w-6 h-6 text-primary drop-shadow-sm" />
                  </div>
                  <h3 className="font-heading text-[30px] lg:text-[34px] font-bold mb-4 text-foreground leading-[1.2]">
                    Intentional Curation
                  </h3>
                  <p className="text-[16px] lg:text-[17px] text-muted-foreground leading-[1.6] max-w-[34ch]">
                    We don't post everything. We filter through the noise to bring you only the products that genuinely elevate your workflow.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CTA SECTION */}
        {/* ========================================================= */}
        <section className="py-[140px] text-center flex flex-col items-center justify-center relative">
          
          {/* Subtle vertical divider transition instead of a harsh border */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[80px] bg-gradient-to-b from-transparent via-border/60 to-transparent" />
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-semibold text-foreground leading-[1.1] mb-8 tracking-tight max-w-[800px] mt-8">
            Ready to upgrade your workspace?
          </h2>
          <p className="text-[18px] lg:text-[20px] text-muted-foreground leading-[1.8] mb-12 max-w-[620px]">
            Dive into our latest reviews and guides to find the perfect addition to your setup.
          </p>
          <Link 
            href="/blog" 
            className="group inline-flex items-center justify-center h-[60px] px-[36px] rounded-full bg-[#E8E1D5] hover:bg-[#DED5C5] dark:bg-[#2A2824] dark:hover:bg-[#33302C] text-foreground font-semibold text-[17px] shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-1"
          >
            Explore the Blog
            <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </section>

      </div>
    </main>
  );
}
