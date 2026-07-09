import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | iWriteTech",
  description: "Learn how iWriteTech collects, uses, and protects your data.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  const lastUpdated = "[Month Day, Year]";

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <header className="mb-16">
        <h1 className="display-lg mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mono-data">Last updated: {lastUpdated}</p>
        <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground">
          <em>Template — replace all bracketed placeholders <code>[like this]</code> before publishing. Have a legal professional review this before launch, particularly if you expect meaningful EU/UK (GDPR) or California (CCPA) traffic.</em>
        </div>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="heading mb-6">1. Introduction</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>iWriteTech (&quot;iWriteTech,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates [iwritetech.com] (the &quot;Site&quot;). This Privacy Policy explains what information we collect when you visit the Site, how we use it, and the choices you have.</p>
            <p>By using the Site, you agree to the collection and use of information as described in this policy. If you don&apos;t agree, please don&apos;t use the Site.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">2. Information We Collect</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <h3 className="font-semibold text-foreground text-xl">Information you provide directly</h3>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-primary">
              <li><strong>Newsletter signup:</strong> if you subscribe to our email newsletter, we collect your email address.</li>
              <li><strong>Contact form:</strong> if you reach out through our contact page, we collect your name, email address, and the contents of your message.</li>
            </ul>

            <h3 className="font-semibold text-foreground text-xl pt-4">Information collected automatically</h3>
            <p>When you visit the Site, we (and our third-party service providers) automatically collect certain information through cookies and similar technologies, including:</p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-primary">
              <li>IP address and approximate location (city/region level)</li>
              <li>Browser type and version, device type, and operating system</li>
              <li>Pages visited, time spent on pages, referring URL, and click activity</li>
              <li>Date and time of visits</li>
            </ul>

            <h3 className="font-semibold text-foreground text-xl pt-4">Information from third parties</h3>
            <p>If you arrive at iWriteTech via Pinterest, Google, or another platform, that platform may share limited referral data with our analytics tools (e.g., which page you landed on).</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">3. How We Use Cookies</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>Cookies are small text files stored on your device. We use them to:</p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-primary">
              <li>Understand how visitors use the Site (via Google Analytics)</li>
              <li>Remember your display preferences (e.g., light/dark theme)</li>
              <li>Measure the performance of content and, where applicable, affiliate links</li>
            </ul>
            <p>You can disable cookies through your browser settings. Doing so may affect some Site functionality (such as theme preference being remembered).</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">4. How We Use Your Information</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-primary">
              <li>Operate, maintain, and improve the Site</li>
              <li>Understand which content resonates with readers, via aggregated, anonymized analytics</li>
              <li>Respond to messages sent through our contact form</li>
              <li>Send newsletter content, if and when you&apos;ve subscribed (you can unsubscribe at any time via the link in every email)</li>
              <li>Detect and prevent fraud, abuse, or security issues</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>We do <strong>not</strong> sell your personal information to third parties.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">5. Third-Party Services</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>We use the following third-party services, each of which has its own privacy policy governing how it handles data:</p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 pr-6 font-semibold">Service</th>
                    <th className="py-4 pr-6 font-semibold">Purpose</th>
                    <th className="py-4 font-semibold">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-4 pr-6">Google Analytics</td>
                    <td className="py-4 pr-6">Site traffic and usage analytics</td>
                    <td className="py-4"><a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6">Google Search Console</td>
                    <td className="py-4 pr-6">Search performance monitoring</td>
                    <td className="py-4"><a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6">Netlify</td>
                    <td className="py-4 pr-6">Website hosting</td>
                    <td className="py-4"><a href="https://www.netlify.com/privacy/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">netlify.com/privacy</a></td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6">Amazon Associates</td>
                    <td className="py-4 pr-6">Affiliate program / product links</td>
                    <td className="py-4"><a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">amazon.com/privacy</a></td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6">[Email service provider, once selected]</td>
                    <td className="py-4 pr-6">Newsletter delivery</td>
                    <td className="py-4"><a href="#" className="text-primary hover:underline">[add link]</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>When you click an affiliate link on iWriteTech and are taken to a retailer&apos;s site (such as Amazon), that retailer&apos;s own privacy policy governs any data they collect from that point forward — we don&apos;t have visibility into or control over what happens on their site.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">6. Affiliate Links & Cookies</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>iWriteTech participates in affiliate marketing programs, including the Amazon Associates Program. When you click certain product links on this Site, a cookie may be placed by the retailer to track that the referral came from iWriteTech, so we can earn a commission on qualifying purchases. This does not affect the price you pay. See our <Link href="/affiliate-disclosure" className="text-primary hover:underline">Affiliate Disclosure</Link> for more detail.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">7. Your Rights & Choices</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>Depending on where you&apos;re located, you may have the right to:</p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-primary">
              <li><strong>Access</strong> the personal information we hold about you</li>
              <li><strong>Correct</strong> inaccurate information</li>
              <li><strong>Delete</strong> your information</li>
              <li><strong>Opt out</strong> of non-essential cookies and marketing emails</li>
              <li><strong>Object to or restrict</strong> certain processing (where applicable under GDPR)</li>
              <li><strong>Data portability</strong> (where applicable under GDPR)</li>
            </ul>
            <p>To exercise any of these rights, contact us at [privacy@iwritetech.com]. We&apos;ll respond within a reasonable timeframe and in accordance with applicable law.</p>
            <p><strong>California residents:</strong> you have rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected and the right to opt out of its sale (note: we do not sell personal information).</p>
            <p><strong>EU/UK residents:</strong> our legal basis for processing your data is typically legitimate interest (site analytics, security) or consent (newsletter signups, non-essential cookies).</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">8. Data Retention</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>We retain personal information only as long as necessary for the purposes described in this policy, or as required by law. Newsletter subscriber data is retained until you unsubscribe.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">9. Children&apos;s Privacy</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>iWriteTech is not directed at children under 13 (or the applicable age of digital consent in your jurisdiction), and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, contact us and we&apos;ll delete it.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">10. Data Security</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>We take reasonable technical and organizational measures to protect your information. However, no method of transmission or storage is 100% secure, and we can&apos;t guarantee absolute security.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">11. International Visitors</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>iWriteTech is accessed globally. If you&apos;re visiting from outside [your primary country of operation], your information may be processed in [country], which may have different data protection laws than your home country.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">12. Changes to This Policy</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Continued use of the Site after changes means you accept the revised policy.</p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">13. Contact Us</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>Questions about this Privacy Policy? Reach out at:</p>
            <p><strong>Email:</strong> [privacy@iwritetech.com]<br /><strong>[Business address, if applicable]</strong></p>
          </div>
        </section>
      </div>
    </div>
  );
}
