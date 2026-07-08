import type { Metadata } from "next";
import Link from "next/link";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | TechFinds",
  description: "Information about how TechFinds is funded through affiliate partnerships.",
  alternates: {
    canonical: "/affiliate-disclosure",
  },
};

export default function AffiliateDisclosurePage() {
  const lastUpdated = "July 8, 2026";

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <header className="mb-16">
        <h1 className="display-lg mb-6">Affiliate Disclosure</h1>
        <p className="text-muted-foreground mono-data">Last Updated: {lastUpdated}</p>
      </header>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 md:p-8 mb-12 flex gap-4">
        <div className="mt-1 shrink-0">
          <Info className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-blue-700 dark:text-blue-300 mb-2">Short Version</h3>
          <p className="text-foreground/80 leading-relaxed">
            TechFinds is a reader-supported publication. When you buy through links on our site, we may earn an affiliate commission at absolutely no extra cost to you.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="heading mb-6">How It Works</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              Many of the links pointing to products on TechFinds—including those on Amazon, Keychron, and other retailers—are affiliate links. This means that if you click on one of these links and make a purchase, the retailer gives us a small percentage of the sale.
            </p>
            <p>
              <strong>This does not change the price you pay for the product.</strong> The commission comes directly out of the retailer's pocket, not yours.
            </p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">Our Commitment to Honesty</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              Maintaining your trust is our number one priority. Our editorial team tests and reviews products entirely independently from our affiliate team. 
            </p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-primary">
              <li>We never recommend a product solely because it has a high affiliate payout.</li>
              <li>We never accept direct payment to publish a positive review. (Any sponsored content is clearly marked at the top of the article).</li>
              <li>If a product is bad, we will tell you it is bad—even if we could make a commission by selling it.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">Amazon Associates Program</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              TechFinds is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and affiliated sites.
            </p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">Questions?</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              If you have any questions about how we fund TechFinds or our relationship with any specific brand, please feel free to reach out via our <Link href="/contact" className="text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">Contact Page</Link>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
