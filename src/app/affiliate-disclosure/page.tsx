import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | iWriteTech",
  description:
    "Learn how iWriteTech earns affiliate commissions while maintaining honest, unbiased product recommendations and reviews.",
  keywords: [
    "affiliate disclosure",
    "iWriteTech affiliate",
    "product recommendations",
    "editorial independence",
    "Amazon Associates",
    "transparent reviews",
  ],
  alternates: {
    canonical: "/affiliate-disclosure",
  },
  openGraph: {
    title: "Affiliate Disclosure | iWriteTech",
    description:
      "Learn how iWriteTech earns affiliate commissions while maintaining honest, unbiased product recommendations and reviews.",
    url: "/affiliate-disclosure",
    siteName: "iWriteTech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Affiliate Disclosure | iWriteTech",
    description:
      "Learn how iWriteTech earns affiliate commissions while maintaining honest, unbiased product recommendations and reviews.",
    creator: "@iwritetech",
  },
};

export default function AffiliateDisclosurePage() {
  const lastUpdated = "July 20, 2026";

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <header className="mb-16">
        <h1 className="display-lg mb-6">Affiliate Disclosure</h1>
        <p className="text-muted-foreground mono-data">Last updated: {lastUpdated}</p>
        <div className="mt-8 text-lg text-foreground/80 leading-relaxed max-w-3xl">
          <p>
            We believe in complete transparency. Here's how iWriteTech
            earns money while keeping our reviews honest and unbiased.
          </p>
        </div>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="heading mb-6">1. Introduction</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              iWriteTech is a reader-supported publication. Some of the links on
              our website are <strong>affiliate links</strong>, which means that
              if you click on them and make a purchase, we may earn a small
              commission. This commission comes at absolutely <strong>no additional cost</strong> to you — the price you pay
              remains exactly the same whether you use our link or go directly to
              the retailer.
            </p>
            <p>
              We use affiliate partnerships as one way to keep iWriteTech
              running — paying for hosting, tools, and the time it takes to
              research, test, and write thorough product recommendations. This
              page explains exactly how that works.
            </p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">2. How Affiliate Links Work</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              When you click an affiliate link on iWriteTech, you're taken
              to the retailer's website (such as Amazon) with a small
              tracking code attached to the URL. If you make a qualifying
              purchase during that session — not necessarily the exact product
              you clicked on — iWriteTech may receive a small commission from the
              retailer.
            </p>
            <p>
              Crucially, using our affiliate link <strong>does not increase the price</strong> you pay. The retailer
              covers the commission as part of their marketing budget. Not every
              link on iWriteTech is an affiliate link — many are simply included
              for reference and context.
            </p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">3. Our Promise</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              Our editorial recommendations are never for sale. Affiliate
              commissions exist alongside our content — they never drive it.
              Here's what that means in practice:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-primary">
              <li>Affiliate commissions <strong>never influence</strong> which products we recommend or how we rank them.</li>
              <li>Products are selected based on genuine research, hands-on testing, specifications, and real-world value.</li>
              <li>Negative opinions are <strong>never hidden</strong>. If a product has downsides, we say so — even if it has the best affiliate rate.</li>
              <li><strong>Editorial independence comes first</strong>, always. A product with no affiliate program can still be our top pick.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">4. Affiliate Programs We Use</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>iWriteTech currently participates in the following programs:</p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-primary">
              <li><strong>Amazon Associates (Amazon.com)</strong></li>
              <li><strong>Amazon Associates (Amazon.in)</strong></li>
            </ul>
            <p>
              We may also participate in additional affiliate programs in the
              future. Any new partnerships will be covered under this same
              disclosure.
            </p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">5. Pricing Disclaimer</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              Product prices, discounts, availability, ratings, and promotional
              offers displayed on iWriteTech are subject to change at any time.
              We make every effort to keep pricing information accurate and
              up-to-date, but we cannot guarantee real-time accuracy.
            </p>
            <p>
              Please always verify the final price, availability, and applicable
              offers directly on the retailer's website before making a
              purchase.
            </p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">6. Product Images &amp; Trademarks</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              Product images, logos, brand names, and trademarks displayed on
              iWriteTech belong to their respective owners. They are used here
              solely for the purpose of identifying and reviewing products, and
              their use does not imply endorsement by or affiliation with the
              trademark holders.
            </p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">7. FTC Disclosure</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              In accordance with the Federal Trade Commission's guidelines
              concerning the use of endorsements and testimonials in advertising
              (16 CFR Part 255), please be aware that iWriteTech may receive
              commissions from qualifying purchases made through affiliate links
              on this website.
            </p>
            <p>
              This disclosure is provided in the interest of full transparency
              and compliance with FTC regulations.
            </p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">8. Amazon Disclosure</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <div className="p-6 bg-muted/50 rounded-xl border border-border">
              <p className="font-medium italic text-foreground/90 m-0">
                &ldquo;As an Amazon Associate, iWriteTech earns from qualifying purchases.&rdquo;
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">9. Contact Us</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              If you have any questions regarding this disclosure, our affiliate
              partnerships, or how we select and review products, please reach
              out to us through our <Link href="/contact" className="text-primary hover:underline">Contact page</Link>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
