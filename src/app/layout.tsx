import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Literata, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ReadingProgressBar } from "@/components/layout/ReadingProgressBar";
import { BackToTop } from "@/components/layout/BackToTop";
import "./globals.css";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F3" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://iwritetech.com"),
  title: {
    template: "%s | iWriteTech",
    default: "iWriteTech | Curated, aesthetic tech for your desk",
  },
  description: "Curated, tested, aesthetic tech for your desk. Discover minimal setups, mechanical keyboards, and productivity gadgets.",
  openGraph: {
    title: "iWriteTech | Curated, aesthetic tech for your desk",
    description: "Curated, tested, aesthetic tech for your desk. Discover minimal setups, mechanical keyboards, and productivity gadgets.",
    url: "/",
    siteName: "iWriteTech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iWriteTech | Curated, aesthetic tech for your desk",
    description: "Curated, tested, aesthetic tech for your desk.",
    creator: "@iwritetech",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global JSON-LD for Organization
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "iWriteTech",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://iwritetech.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://iwritetech.com"}/logo.png`,
    sameAs: [
      "https://twitter.com/iwritetech",
      "https://instagram.com/iwritetech",
      "https://pinterest.com/iwritetech"
    ]
  };

  return (
    <html
      lang="en"
      className={`${literata.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReadingProgressBar />
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
