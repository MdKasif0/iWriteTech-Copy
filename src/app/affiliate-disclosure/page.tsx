import type { Metadata } from "next";
import Link from "next/link";
import {
  Link2,
  ShieldCheck,
  Store,
  BadgeDollarSign,
  Image as ImageIcon,
  Scale,
  ShoppingCart,
  Mail,
  CalendarDays,
  Handshake,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* SEO METADATA                                                        */
/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
/* TYPES                                                               */
/* ------------------------------------------------------------------ */
interface SectionCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

/* ------------------------------------------------------------------ */
/* REUSABLE SECTION CARD                                               */
/* ------------------------------------------------------------------ */
function SectionCard({ icon, title, children }: SectionCardProps) {
  return (
    <section className="group relative rounded-2xl border border-border/40 bg-card/50 dark:bg-card/30 p-8 md:p-10 transition-all duration-300 hover:border-border/70 hover:shadow-lg dark:hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]">
      {/* Subtle accent on hover */}
      <div className="absolute top-0 left-8 h-[2px] w-0 bg-primary/60 rounded-full transition-all duration-500 group-hover:w-16" />

      <div className="flex items-start gap-4 mb-6">
        <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
          {icon}
        </div>
        <h2 className="font-heading text-2xl md:text-[26px] font-semibold text-foreground leading-tight tracking-tight">
          {title}
        </h2>
      </div>

      <div className="text-[16px] md:text-[17px] text-foreground/75 leading-[1.75] space-y-5">
        {children}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* PROMISE ITEM                                                        */
/* ------------------------------------------------------------------ */
function PromiseItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 group/item">
      <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 dark:bg-primary/20">
        <ShieldCheck className="w-3.5 h-3.5 text-primary" />
      </span>
      <span className="transition-colors group-hover/item:text-foreground">
        {children}
      </span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* MAIN PAGE                                                           */
/* ------------------------------------------------------------------ */
export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        {/* ======================================================= */}
        {/* HERO                                                     */}
        {/* ======================================================= */}
        <header className="pt-16 pb-12 md:pt-24 md:pb-16 text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-8 bg-primary/60" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.25em] text-primary">
              Transparency
            </span>
            <span className="h-px w-8 bg-primary/60" />
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
            Affiliate Disclosure
          </h1>

          <p className="text-[17px] md:text-[19px] text-muted-foreground leading-[1.7] max-w-[640px] mx-auto">
            We believe in complete transparency. Here&apos;s how iWriteTech
            earns money while keeping our reviews honest and unbiased.
          </p>
        </header>

        {/* ======================================================= */}
        {/* CONTENT SECTIONS                                         */}
        {/* ======================================================= */}
        <div className="space-y-6 pb-24">
          {/* --- Introduction --- */}
          <SectionCard
            icon={<Handshake className="w-5 h-5 text-primary" />}
            title="Introduction"
          >
            <p>
              iWriteTech is a reader-supported publication. Some of the links on
              our website are <strong>affiliate links</strong>, which means that
              if you click on them and make a purchase, we may earn a small
              commission. This commission comes at absolutely{" "}
              <strong>no additional cost</strong> to you — the price you pay
              remains exactly the same whether you use our link or go directly to
              the retailer.
            </p>
            <p>
              We use affiliate partnerships as one way to keep iWriteTech
              running — paying for hosting, tools, and the time it takes to
              research, test, and write thorough product recommendations. This
              page explains exactly how that works.
            </p>
          </SectionCard>

          {/* --- How Affiliate Links Work --- */}
          <SectionCard
            icon={<Link2 className="w-5 h-5 text-primary" />}
            title="How Affiliate Links Work"
          >
            <p>
              When you click an affiliate link on iWriteTech, you&apos;re taken
              to the retailer&apos;s website (such as Amazon.in) with a small
              tracking code attached to the URL. If you make a qualifying
              purchase during that session — not necessarily the exact product
              you clicked on — iWriteTech may receive a small commission from the
              retailer.
            </p>
            <p>
              Crucially, using our affiliate link{" "}
              <strong>does not increase the price</strong> you pay. The retailer
              covers the commission as part of their marketing budget. Not every
              link on iWriteTech is an affiliate link — many are simply included
              for reference and context.
            </p>
          </SectionCard>

          {/* --- Our Promise --- */}
          <SectionCard
            icon={<ShieldCheck className="w-5 h-5 text-primary" />}
            title="Our Promise"
          >
            <p>
              Our editorial recommendations are never for sale. Affiliate
              commissions exist alongside our content — they never drive it.
              Here&apos;s what that means in practice:
            </p>
            <ul className="space-y-3 mt-2">
              <PromiseItem>
                Affiliate commissions <strong>never influence</strong> which
                products we recommend or how we rank them.
              </PromiseItem>
              <PromiseItem>
                Products are selected based on genuine research, hands-on
                testing, specifications, and real-world value.
              </PromiseItem>
              <PromiseItem>
                Negative opinions are <strong>never hidden</strong>. If a
                product has downsides, we say so — even if it has the best
                affiliate rate.
              </PromiseItem>
              <PromiseItem>
                <strong>Editorial independence comes first</strong>, always. A
                product with no affiliate program can still be our top pick.
              </PromiseItem>
            </ul>
          </SectionCard>

          {/* --- Affiliate Programs We Use --- */}
          <SectionCard
            icon={<Store className="w-5 h-5 text-primary" />}
            title="Affiliate Programs We Use"
          >
            <p>iWriteTech currently participates in the following programs:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {/* Amazon.com */}
              <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/60 dark:bg-background/30 px-5 py-4 transition-colors hover:border-primary/30">
                <ShoppingCart className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-[15px]">
                    Amazon Associates
                  </p>
                  <p className="text-sm text-muted-foreground">Amazon.com</p>
                </div>
              </div>

              {/* Amazon.in */}
              <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/60 dark:bg-background/30 px-5 py-4 transition-colors hover:border-primary/30">
                <ShoppingCart className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-[15px]">
                    Amazon Associates
                  </p>
                  <p className="text-sm text-muted-foreground">Amazon.in</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-3">
              We may also participate in additional affiliate programs in the
              future. Any new partnerships will be covered under this same
              disclosure.
            </p>
          </SectionCard>

          {/* --- Pricing Disclaimer --- */}
          <SectionCard
            icon={<BadgeDollarSign className="w-5 h-5 text-primary" />}
            title="Pricing Disclaimer"
          >
            <p>
              Product prices, discounts, availability, ratings, and promotional
              offers displayed on iWriteTech are subject to change at any time.
              We make every effort to keep pricing information accurate and
              up-to-date, but we cannot guarantee real-time accuracy.
            </p>
            <p>
              Please always verify the final price, availability, and applicable
              offers directly on the retailer&apos;s website before making a
              purchase.
            </p>
          </SectionCard>

          {/* --- Product Images & Trademarks --- */}
          <SectionCard
            icon={<ImageIcon className="w-5 h-5 text-primary" />}
            title="Product Images &amp; Trademarks"
          >
            <p>
              Product images, logos, brand names, and trademarks displayed on
              iWriteTech belong to their respective owners. They are used here
              solely for the purpose of identifying and reviewing products, and
              their use does not imply endorsement by or affiliation with the
              trademark holders.
            </p>
          </SectionCard>

          {/* --- FTC Disclosure --- */}
          <SectionCard
            icon={<Scale className="w-5 h-5 text-primary" />}
            title="FTC Disclosure"
          >
            <p>
              In accordance with the Federal Trade Commission&apos;s guidelines
              concerning the use of endorsements and testimonials in advertising
              (16 CFR Part 255), please be aware that iWriteTech may receive
              commissions from qualifying purchases made through affiliate links
              on this website.
            </p>
            <p>
              This disclosure is provided in the interest of full transparency
              and compliance with FTC regulations.
            </p>
          </SectionCard>

          {/* --- Amazon Disclosure (Highlighted) --- */}
          <div className="relative rounded-2xl border border-primary/20 bg-primary/[0.04] dark:bg-primary/[0.06] p-8 md:p-10 overflow-hidden">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[60px] pointer-events-none" />

            <div className="flex items-start gap-4 mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary/15 dark:bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <ShoppingCart className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-heading text-2xl md:text-[26px] font-semibold text-foreground leading-tight tracking-tight">
                Amazon Disclosure
              </h2>
            </div>

            <blockquote className="text-[17px] md:text-[18px] text-foreground/85 leading-[1.75] font-medium italic pl-4 border-l-[3px] border-primary/40 ml-[60px]">
              &ldquo;As an Amazon Associate, iWriteTech earns from qualifying
              purchases.&rdquo;
            </blockquote>
          </div>

          {/* --- Contact --- */}
          <SectionCard
            icon={<Mail className="w-5 h-5 text-primary" />}
            title="Contact"
          >
            <p>
              If you have any questions regarding this disclosure, our affiliate
              partnerships, or how we select and review products, please reach
              out to us through our{" "}
              <Link
                href="/contact"
                className="font-medium text-primary underline decoration-primary/30 decoration-2 underline-offset-4 hover:decoration-primary transition-colors"
              >
                Contact page
              </Link>
              .
            </p>
          </SectionCard>

          {/* --- Last Updated --- */}
          <div className="flex items-center justify-center gap-2 pt-8 pb-4 text-sm text-muted-foreground">
            <CalendarDays className="w-4 h-4" />
            <span className="mono-data">Last Updated: July 2026</span>
          </div>
        </div>
      </div>
    </main>
  );
}
