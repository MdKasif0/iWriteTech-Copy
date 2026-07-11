import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | iWriteTech",
  description: "Read the terms and conditions governing your use of iWriteTech.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  const lastUpdated = "July 11, 2026";

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <header className="mb-16">
        <h1 className="display-lg mb-6">Terms & Conditions</h1>
        <p className="text-muted-foreground mono-data">Last updated: {lastUpdated}</p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="heading mb-6">1. Agreement to Terms</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>By accessing or using iWriteTech (the &quot;Site&quot;), you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the Site.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">2. Description of Service</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>iWriteTech is a content publisher covering aesthetic tech gadgets, desk setups, and related product recommendations. The Site is not an e-commerce store — we do not sell products directly. Where we link to third-party retailers (including through affiliate links), those transactions are governed entirely by that retailer&apos;s own terms, not ours. See our <Link href="/affiliate-disclosure" className="text-primary hover:underline">Affiliate Disclosure</Link> for details on how affiliate links work.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">3. Not Professional Advice</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>Content on this Site — including product reviews, buying guides, and comparisons — is provided for general informational purposes only. It is not professional, technical, medical, or safety advice. Product specifications, pricing, and availability change frequently; always verify current details directly with the retailer or manufacturer before purchasing. You are responsible for doing your own research and making your own purchasing decisions.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">4. Intellectual Property</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>All original content on this Site — including articles, images we&apos;ve created or licensed, graphics, and the iWriteTech name and logo — is owned by iWriteTech or its licensors and protected by copyright and trademark law. You may:</p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-primary">
              <li>Share links to our content</li>
              <li>Quote brief excerpts with clear attribution and a link back to the original article</li>
            </ul>
            <p>You may not, without our prior written permission:</p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-primary">
              <li>Republish, redistribute, or reproduce substantial portions of our content elsewhere</li>
              <li>Scrape, mirror, or systematically copy the Site&apos;s content</li>
              <li>Use our name, logo, or branding to imply endorsement or affiliation without permission</li>
            </ul>
            <p>Product names, logos, and images belonging to third parties (the brands and products we review) remain the property of their respective owners.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">5. User Conduct</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>When using the Site, including any comments sections if enabled, you agree not to:</p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-primary">
              <li>Post unlawful, defamatory, harassing, or abusive content</li>
              <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity</li>
              <li>Attempt to gain unauthorized access to any part of the Site or its underlying systems</li>
              <li>Use automated tools (bots, scrapers) to access the Site beyond normal search-engine indexing</li>
              <li>Upload or transmit viruses, malware, or any code designed to disrupt the Site</li>
            </ul>
            <p>We reserve the right to remove any user-submitted content and restrict access for anyone who violates these terms.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">6. Third-Party Links</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>The Site contains links to third-party websites, including retailers and affiliate partners. We do not control and are not responsible for the content, privacy practices, accuracy, or availability of any third-party site. Visiting a linked site is at your own risk and subject to that site&apos;s own terms and privacy policy.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">7. Disclaimer of Warranties</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>The Site and its content are provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind, either express or implied, including but not limited to accuracy, completeness, reliability, or fitness for a particular purpose. We make reasonable efforts to keep information current, but we do not guarantee that product prices, specifications, availability, or any other detail on the Site is accurate or up to date at the time you read it.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">8. Limitation of Liability</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>To the fullest extent permitted by law, iWriteTech and its owners, contributors, and affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages — including but not limited to lost profits, lost data, or purchasing decisions made based on content found on the Site — arising from your use of, or inability to use, the Site or any product purchased through a link on the Site.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">9. Indemnification</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>You agree to indemnify and hold harmless iWriteTech and its owners, contributors, and affiliates from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your violation of these Terms or your misuse of the Site.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">10. Changes to These Terms</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>We may update these Terms & Conditions from time to time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Continued use of the Site after changes are posted means you accept the revised Terms.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">11. Termination</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>We reserve the right to restrict or terminate your access to the Site at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">12. Governing Law</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>These Terms are governed by the laws of California, United States, without regard to its conflict of law principles. Any disputes arising from these Terms or use of the Site will be subject to the exclusive jurisdiction of the courts located in California, United States.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">13. Severability</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">14. Contact Us</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>Questions about these Terms & Conditions? Reach out at:</p>
            <p><strong>Email:</strong> legal@iwritetech.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}
