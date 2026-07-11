"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  X, Search, BookOpen, Star, ShoppingCart, 
  Gift, Info, Bookmark, MessageSquare, Mail
} from "lucide-react";
import { createPortal } from "react-dom";
import { ThemeToggle } from "./ThemeToggle";

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavDrawer({ isOpen, onClose }: MobileNavDrawerProps) {
  const [mounted, setMounted] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Swipe handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Lock body scroll when open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    // Calculate distance
    const distance = touchStartX.current - touchEndX.current;
    
    // If swiped left by at least 50px, close
    if (distance > 50) {
      onClose();
    }
    
    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Only render on client to avoid hydration issues with portals
  if (!mounted) return null;

  const mainLinks = [
    { name: "Blog", subtitle: "Latest articles & tutorials", href: "/blog", icon: BookOpen },
    { name: "Reviews", subtitle: "Honest product reviews", href: "/reviews", icon: Star },
    { name: "Buying Guides", subtitle: "Find the best products", href: "/guides", icon: ShoppingCart },
    { name: "Amazon Finds", subtitle: "Curated recommendations", href: "/amazon-finds", icon: Gift },
    { name: "About", subtitle: "Learn about iWriteTech", href: "/about", icon: Info },
  ];

  const categories = [
    "Mechanical Keyboards",
    "Desk Setups",
    "MacBook Accessories",
    "Productivity",
    "Smart Home"
  ];

  const overlayClasses = isOpen 
    ? "opacity-100 pointer-events-auto" 
    : "opacity-0 pointer-events-none";
    
  const drawerClasses = isOpen 
    ? "translate-x-0" 
    : "-translate-x-full";

  return createPortal(
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${overlayClasses}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`absolute top-0 left-0 bottom-0 w-[85vw] max-w-[400px] bg-[#121212] text-[#F2EEE6] rounded-r-[20px] shadow-2xl flex flex-col overflow-hidden nav-drawer-spring transition-transform duration-500 ease-out dark ${drawerClasses}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4 border-b border-white/10 shrink-0">
          <Link href="/" onClick={onClose} className="flex items-center gap-3 group">
            <div className="bg-white p-1 rounded-lg">
              <Image src="/logo.svg" alt="iWriteTech Logo" width={28} height={28} className="object-contain" />
            </div>
            <div>
              <div className="font-heading font-bold text-xl tracking-tight leading-none text-white">iWriteTech</div>
              <div className="text-[11px] text-white/50 uppercase tracking-wider font-medium mt-1">Tech Reviews • Buying Guides</div>
            </div>
          </Link>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-white/70" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 flex flex-col gap-8 overscroll-contain">
          
          {/* Main Links */}
          <nav className="flex flex-col gap-3">
            {mainLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className={`stagger-item group flex items-center justify-between p-3 rounded-[14px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:scale-[1.02] hover:border-white/10 transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20`}
                  style={{ animationDelay: `${isOpen ? i * 50 : 0}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors">
                        {link.name}
                      </div>
                      <div className="text-[13px] text-white/40 group-hover:text-white/60 transition-colors">
                        {link.subtitle}
                      </div>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors mr-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-white transition-colors"/>
                    </svg>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Categories */}
          <div className="flex flex-col gap-4">
            <h4 className={`stagger-item text-xs font-semibold text-white/40 uppercase tracking-widest pl-1`} style={{ animationDelay: `${isOpen ? 250 : 0}ms` }}>
              Categories
            </h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, i) => {
                const slug = cat.toLowerCase().replace(/ /g, '-');
                return (
                  <Link
                    key={cat}
                    href={`/categories/${slug}`}
                    onClick={onClose}
                    className={`stagger-item px-4 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20 transition-colors active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20`}
                    style={{ animationDelay: `${isOpen ? 300 + (i * 30) : 0}ms` }}
                  >
                    {cat}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className={`stagger-item p-6 border-t border-white/10 bg-white/[0.01] shrink-0`} style={{ animationDelay: `${isOpen ? 450 : 0}ms` }}>
          <div className="flex items-center gap-3 mb-6">
            <Link 
              href="/search" 
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-colors active:scale-[0.98] font-medium text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              <Search className="w-4 h-4" />
              <span>Search iWriteTech</span>
            </Link>
            {/* Keeping the ThemeToggle for aesthetic if needed, though they want it dark. I'll include it for functional completeness but hide it if they strictly want dark. Actually, Navbar handles theme toggle outside. */}
          </div>
          
          <div className="flex items-center justify-between text-white/50 text-[13px]">
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-white transition-colors" aria-label="Pinterest">
                <Bookmark className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <MessageSquare className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors" aria-label="Newsletter">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <span>•</span>
              <Link href="/disclosure" className="hover:text-white transition-colors">Affiliate</Link>
            </div>
          </div>
        </div>

      </div>
    </div>,
    document.body
  );
}
