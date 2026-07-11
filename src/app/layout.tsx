import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Literata, Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { ReadingProgressBar } from "@/components/layout/ReadingProgressBar";
import "./globals.css";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
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
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  other: {
    "google-adsense-account": "ca-pub-6238466387091690",
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
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://iwritetech.com"}/logo.svg`,
    sameAs: [
      "https://twitter.com/iwritetech",
      "https://instagram.com/iwritetech",
      "https://pinterest.com/iwritetech"
    ]
  };

  return (
    <html
      lang="en"
      className={`${literata.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6238466387091690" crossOrigin="anonymous"></script>
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || "G-XJQM0C7P9V"}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || "G-XJQM0C7P9V"}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex-1 flex flex-col relative z-10 bg-background min-h-screen rounded-b-3xl border-b border-border shadow-md">
            <ReadingProgressBar />
            <Navbar />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
          </div>
          <CinematicFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
