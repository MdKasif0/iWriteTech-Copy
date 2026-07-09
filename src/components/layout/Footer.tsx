import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="font-heading font-bold text-2xl tracking-tight inline-block">
              iWriteTech
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Curating the best aesthetic tech gadgets, desk setups, and productivity tools to inspire your workspace.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.3 2.7 8 6.5 9.4-.1-1-.2-2.7 0-3.8l1.4-6s-.4-.7-.4-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.8-2.2 3.8-5.5 0-2.9-2.1-4.9-5.1-4.9-3.4 0-5.4 2.6-5.4 5.2 0 1 .4 2.1.9 2.7.1.1.1.2.1.3-.1.4-.3 1.2-.3 1.3-.1.2-.2.3-.4.2-1.5-.7-2.4-2.9-2.4-4.6 0-3.8 2.7-7.2 7.9-7.2 4.2 0 7.4 3 7.4 7 0 4.2-2.6 7.5-6.2 7.5-1.2 0-2.4-.6-2.8-1.4l-.8 2.9c-.3 1.1-1.1 2.5-1.6 3.4 1.1.3 2.2.5 3.4.5 5.5 0 10-4.5 10-10S17.5 2 12 2z" /></svg>
                <span className="sr-only">Pinterest</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/categories/desk-setups" className="hover:text-primary transition-colors">Desk Setups</Link></li>
              <li><Link href="/categories/macbook-accessories" className="hover:text-primary transition-colors">MacBook Accessories</Link></li>
              <li><Link href="/categories/mechanical-keyboards" className="hover:text-primary transition-colors">Mechanical Keyboards</Link></li>
              <li><Link href="/categories/productivity" className="hover:text-primary transition-colors">Productivity</Link></li>
              <li><Link href="/categories/smart-home" className="hover:text-primary transition-colors">Smart Home</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-primary transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 text-xs text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} iWriteTech. All rights reserved.</p>
          <p>
            iWriteTech may earn a commission from links on this site.{" "}
            <Link href="/affiliate-disclosure" className="underline hover:text-primary transition-colors">
              Read our full disclosure.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
