import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AffiliateButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function AffiliateButton({ href, children, className = "", fullWidth = false }: AffiliateButtonProps) {
  let finalHref = href;
  const affiliateTag = process.env.NEXT_PUBLIC_AFFILIATE_TAG;
  
  if (affiliateTag && href.includes("amazon.com")) {
    try {
      const url = new URL(href);
      url.searchParams.set("tag", affiliateTag);
      finalHref = url.toString();
    } catch (e) {
      // Ignore invalid URL
    }
  }

  return (
    <Link 
      href={finalHref} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-full group duration-300 ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
