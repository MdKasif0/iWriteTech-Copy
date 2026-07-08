import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items = [] }: FAQAccordionProps) {
  return (
    <div className="my-8">
      <h3 className="font-semibold text-xl mb-4 text-foreground">Frequently Asked Questions</h3>
      <div className="w-full space-y-4">
        {items.map((item, i) => (
          <details key={i} className="group border-b border-border pb-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between font-medium hover:text-primary transition-colors list-none">
              {item.question}
              <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200 group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
            </summary>
            <div className="mt-3 text-muted-foreground leading-relaxed animate-in slide-in-from-top-1 fade-in-50 duration-200">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
