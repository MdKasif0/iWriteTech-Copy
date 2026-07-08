import type { Metadata } from "next";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | TechFinds",
  description: "Information about how TechFinds is funded through affiliate partnerships.",
  alternates: {
    canonical: "/affiliate-disclosure",
  },
};

export default function AffiliateDisclosurePage() {
  const lastUpdated = "[Month Day, Year]";

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <header className="mb-16">
        <h1 className="display-lg mb-6">Affiliate Disclosure</h1>
        <p className="text-muted-foreground mono-data">Last updated: {lastUpdated}</p>
        <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground">
          <em>Template — replace bracketed placeholders <code>[like this]</code> before publishing.</em>
        </div>
      </header>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 md:p-8 mb-12 flex gap-4">
        <div className="mt-1 shrink-0">
          <Info className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h2 className="font-semibold text-lg text-blue-700 dark:text-blue-300 mb-2">The short version</h2>
          <p className="text-foreground/80 leading-relaxed">
            TechFinds is reader-supported. Some links on this Site are affiliate links — if you click one and make a purchase, we may earn a small commission, at no extra cost to you. This never affects the price you pay, and it never affects which products we choose to feature or how we rate them.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="heading mb-6">As required by the FTC</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              In accordance with the Federal Trade Commission&apos;s guidelines concerning the use of endorsements and testimonials in advertising, please assume the following about links and posts on this Site:
            </p>
            <p>
              Any/all of the links on TechFinds are affiliate links for which we may receive a small commission from purchases you make, at no additional cost to you. <strong>As an Amazon Associate, we earn from qualifying purchases.</strong> We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
            </p>
            <p>
              We may also participate in other affiliate programs (individual retailers, brands, or affiliate networks) as the Site grows. Any such relationships will be covered by this same disclosure.
            </p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">How this works, in practice</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-primary">
              <li>When a product mentioned on TechFinds has an affiliate link, clicking it takes you to the retailer&apos;s site with a tracking code attached.</li>
              <li>If you make a qualifying purchase during that visit (not necessarily the exact product you clicked through on), we earn a commission.</li>
              <li>The price you pay is exactly the same whether you use our link or go directly to the retailer.</li>
              <li>Not every link on TechFinds is an affiliate link — some are simply for reference.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">Our editorial standards</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>Affiliate relationships do not influence:</p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-primary">
              <li>Which products we choose to cover</li>
              <li>The opinions, ratings, or recommendations we publish</li>
              <li>Whether we disclose a product&apos;s downsides alongside its strengths</li>
            </ul>
            <p>
              We recommend products because we believe they&apos;re genuinely useful for our readers&apos; desk setups, workspaces, and everyday tech — not because of the commission structure behind them. If a product isn&apos;t good, we won&apos;t feature it, regardless of its affiliate payout.
            </p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">Sponsored content (future)</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              If TechFinds publishes sponsored posts or paid partnerships in the future, those will be clearly and separately labeled as &quot;Sponsored&quot; or &quot;In partnership with [Brand]&quot; at the top of the article, in addition to this general disclosure.
            </p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">Questions</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              If you have any questions about our affiliate relationships or this disclosure, contact us at [hello@techfinds.com].
            </p>
            <p>
              This disclosure is provided in the interest of transparency and in compliance with the FTC&apos;s 16 CFR Part 255: <em>Guides Concerning the Use of Endorsements and Testimonials in Advertising.</em>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
