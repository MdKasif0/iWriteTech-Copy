"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getVisitorId, identify } from "@hellyeah/x-ray";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "");
    const subject = String(formData.get("subject") ?? "");
    
    // Netlify requires urlencoded form data
    const data = new URLSearchParams(formData as any).toString();
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data,
      });
      
      if (response.ok) {
        identify(email, { email });
        void fetch("/api/analytics/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            subject,
            visitorId: getVisitorId(),
          }),
        }).catch(() => undefined);
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-12 text-center space-y-4">
        <div className="mx-auto w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thanks for reaching out. We've received your message and will get back to you shortly.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-6 font-medium text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form name="contact" onSubmit={handleSubmit} data-netlify="true" className="space-y-6">
      <input type="hidden" name="form-name" value="contact" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
          <input type="text" id="firstName" name="firstName" required className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors" placeholder="John" />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
          <input type="text" id="lastName" name="lastName" required className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors" placeholder="Doe" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
        <input type="email" id="email" name="email" required className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors" placeholder="john@example.com" />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
        <div className="relative">
          <select id="subject" name="subject" required defaultValue="" className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm appearance-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors">
            <option value="" disabled>Select a subject...</option>
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
        <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
        <textarea id="message" name="message" rows={5} required className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors resize-none" placeholder="How can we help you?" />
      </div>

      {status === "error" && (
        <div className="text-sm text-red-500 bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
          Something went wrong sending your message. Please try again.
        </div>
      )}

      <button type="submit" disabled={status === "submitting"} className="w-full inline-flex items-center justify-center whitespace-nowrap text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8 rounded-xl group">
        {status === "submitting" ? "Sending..." : "Send Message"}
        {status !== "submitting" && <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />}
      </button>
      
      <p className="text-xs text-muted-foreground text-center pt-2">
        By submitting this form, you agree to our <Link href="/privacy" className="underline hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">Privacy Policy</Link>.
      </p>
    </form>
  );
}
