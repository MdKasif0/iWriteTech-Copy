import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | TechFinds",
  description: "Learn how TechFinds collects, uses, and protects your data.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  const lastUpdated = "July 8, 2026";

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <header className="mb-16">
        <h1 className="display-lg mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mono-data">Last Updated: {lastUpdated}</p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="heading mb-6">1. Introduction</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              At TechFinds, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">2. Data We Collect</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-primary">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">3. Cookies</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly. We use essential cookies to keep the site functioning and analytics cookies (via Google Analytics) to understand how visitors interact with our content.
            </p>
          </div>
        </section>

        <section>
          <h2 className="heading mb-6">4. Contact Details</h2>
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="font-medium text-primary">privacy@techfinds.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}
