import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | TechFinds",
  description: "Get in touch with the TechFinds team for inquiries, feedback, or partnerships.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Info */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Contact Us
            </span>
          </div>
          <h1 className="display-lg mb-8 leading-tight">
            Let's start a conversation.
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-md leading-relaxed">
            Whether you have a question about a product, want to report an issue, or are interested in partnering with us, we'd love to hear from you.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shrink-0 mt-1">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">Email Us</h3>
                <p className="text-muted-foreground mb-2">For general inquiries and support.</p>
                <a href="mailto:hello@techfinds.com" className="font-medium text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                  hello@techfinds.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shrink-0 mt-1">
                <MessageSquare className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">Partnerships</h3>
                <p className="text-muted-foreground mb-2">For brand collaborations and sponsorships.</p>
                <a href="mailto:partners@techfinds.com" className="font-medium text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                  partners@techfinds.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-semibold mb-8 text-foreground">Send us a message</h2>
          
          {/* NOTE: Wire this form to an endpoint like Netlify Forms (data-netlify="true") or Formspree later */}
          <form className="space-y-6" action="#" method="POST">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                  First Name
                </label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
                  placeholder="John"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                  Last Name
                </label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">
                Subject
              </label>
              <div className="relative">
                <select 
                  id="subject" 
                  name="subject"
                  className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm appearance-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
                  required
                >
                  <option value="" disabled defaultValue="">Select a subject...</option>
                  <option value="general">General Inquiry</option>
                  <option value="feedback">Site Feedback</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows={5}
                className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors resize-none"
                placeholder="How can we help you?"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full inline-flex items-center justify-center whitespace-nowrap text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8 rounded-xl group"
            >
              Send Message
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <p className="text-xs text-muted-foreground text-center pt-2">
              By submitting this form, you agree to our <Link href="/privacy" className="underline hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">Privacy Policy</Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
