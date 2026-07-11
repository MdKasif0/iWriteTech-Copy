"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MobileNavDrawer } from "./MobileNavDrawer";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Reviews", href: "/reviews" },
    { name: "Buying Guides", href: "/guides" },
    { name: "Amazon Finds", href: "/amazon-finds" },
    { name: "About", href: "/about" },
  ];

  const categories = [
    { name: "Desk Setups", href: "/categories/desk-setups" },
    { name: "MacBook Accessories", href: "/categories/macbook-accessories" },
    { name: "Mechanical Keyboards", href: "/categories/mechanical-keyboards" },
    { name: "Productivity", href: "/categories/productivity" },
    { name: "Smart Home", href: "/categories/smart-home" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b-0"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-heading font-bold text-2xl tracking-tight">
            <Image src="/logo.svg" alt="iWriteTech Logo" width={36} height={36} className="object-contain" priority />
            <span className="hidden sm:inline-block">iWriteTech</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <Link href="/reviews" className="hover:text-primary transition-colors">Reviews</Link>
            <Link href="/guides" className="hover:text-primary transition-colors">Buying Guides</Link>
            <Link href="/amazon-finds" className="hover:text-primary transition-colors">Amazon Finds</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-primary transition-colors flex items-center gap-1 focus:outline-none">
                Categories
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {categories.map((cat) => (
                  <DropdownMenuItem key={cat.name} className="cursor-pointer">
                    <Link href={cat.href} className="w-full h-full flex items-center">{cat.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/search" aria-label="Search" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9">
            <Search className="h-5 w-5" />
          </Link>
          <ThemeToggle />

          {/* Mobile Nav */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileNavOpen(true)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      <MobileNavDrawer 
        isOpen={isMobileNavOpen} 
        onClose={() => setIsMobileNavOpen(false)} 
      />
    </header>
  );
}
