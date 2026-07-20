import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | iWriteTech",
  description: "Get in touch with the iWriteTech team for inquiries, feedback, or partnerships.",
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
                <a href="mailto:hello@iwritetech.com" className="font-medium text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                  hello@iwritetech.com
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
                <a href="mailto:partners@iwritetech.com" className="font-medium text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                  partners@iwritetech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-semibold mb-8 text-foreground">Send us a message</h2>
          
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
