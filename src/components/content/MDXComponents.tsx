import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ComparisonTable } from "./ComparisonTable";
import { ProsConsBox } from "./ProsConsBox";
import { CalloutBox } from "./CalloutBox";
import { AffiliateButton } from "./AffiliateButton";
import { ProductCard } from "./ProductCard";
import { FAQAccordion } from "./FAQAccordion";

export const MDXComponents = {
  // Overrides for standard markdown elements
  h1: (props: any) => <h1 className="display-lg mt-12 mb-6 text-foreground" {...props} />,
  h2: (props: any) => <h2 className="heading mt-12 mb-6 text-foreground" {...props} />,
  h3: (props: any) => <h3 className="font-semibold text-2xl mt-8 mb-4 text-foreground" {...props} />,
  h4: (props: any) => <h4 className="font-semibold text-xl mt-6 mb-4 text-foreground" {...props} />,
  p: (props: any) => <p className="text-lg leading-relaxed text-foreground/80 mb-6" {...props} />,
  a: ({ href, children, ...props }: any) => {
    const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
    
    if (isInternal) {
      return (
        <Link href={href} className="font-medium text-foreground underline decoration-primary/30 decoration-2 underline-offset-4 hover:decoration-primary transition-colors" {...props}>
          {children}
        </Link>
      );
    }
    
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="font-medium text-foreground underline decoration-primary/30 decoration-2 underline-offset-4 hover:decoration-primary transition-colors"
        {...props}
      >
        {children}
      </a>
    );
  },
  ul: (props: any) => <ul className="list-disc list-outside pl-6 mb-6 space-y-2 text-lg text-foreground/80 marker:text-primary" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-outside pl-6 mb-6 space-y-2 text-lg text-foreground/80 marker:text-primary" {...props} />,
  li: (props: any) => <li className="pl-2" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-6 py-1 my-8 italic text-xl text-muted-foreground bg-muted/30 rounded-r-lg" {...props} />
  ),
  hr: (props: any) => <hr className="my-12 border-border" {...props} />,
  img: (props: any) => (
    <span className="block my-10 rounded-xl overflow-hidden border border-border bg-muted">
      <Image 
        src={props.src || ""} 
        alt={props.alt || ""} 
        width={1200} 
        height={675} 
        className="w-full h-auto object-cover" 
        sizes="(max-width: 768px) 100vw, 800px"
      />
    </span>
  ),
  pre: (props: any) => (
    <pre className="bg-zinc-950 dark:bg-zinc-900 text-zinc-50 rounded-xl p-5 overflow-x-auto my-8 border border-border/10 text-sm mono-data" {...props} />
  ),
  code: ({ className, ...props }: any) => {
    // If it's an inline code block, apply different styling
    const isInline = !className;
    if (isInline) {
      return <code className="bg-muted px-1.5 py-0.5 rounded text-sm mono-data text-foreground border border-border" {...props} />;
    }
    // Block code (inside pre)
    return <code className={className} {...props} />;
  },
  table: (props: any) => (
    <div className="w-full overflow-x-auto my-8 rounded-xl border border-border">
      <table className="w-full text-left border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props: any) => <th className="bg-muted/50 p-4 font-semibold text-foreground border-b border-border" {...props} />,
  td: (props: any) => <td className="p-4 border-b border-border text-muted-foreground" {...props} />,
  
  // Custom Components
  ComparisonTable,
  ProsConsBox,
  CalloutBox,
  AffiliateButton,
  ProductCard,
  FAQAccordion,
};
