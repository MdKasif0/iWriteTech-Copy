"use client";

import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { 
  X, 
  Search, 
  BookOpen, 
  Star, 
  ShoppingCart, 
  Gift, 
  Info,
  ChevronRight,
  Mail,
  Shield,
  FileText
} from "lucide-react";

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Custom SVGs for Socials to avoid Lucide import issues
const PinterestIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.163 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z"/>
  </svg>
);

const XTwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export function MobileNavDrawer({ isOpen, onClose }: MobileNavDrawerProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchMove, setTouchMove] = useState<number | null>(null);
  const [drawerOffset, setDrawerOffset] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setDrawerOffset(0);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;
    
    // Only allow swiping left (negative offset)
    if (diff > 0) {
      setDrawerOffset(-diff);
    }
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchMove === null) return;
    
    // If swiped more than 75px to the left, close the drawer
    if (drawerOffset < -75) {
      onClose();
    } else {
      // Snap back
      setDrawerOffset(0);
    }
    
    setTouchStart(null);
    setTouchMove(null);
  };

  if (!isMounted) return null;

  const navCards = [
    { name: "Blog", href: "/blog", desc: "Latest articles & tutorials", icon: BookOpen },
    { name: "Reviews", href: "/reviews", desc: "Honest product reviews", icon: Star },
    { name: "Buying Guides", href: "/guides", desc: "Find the best products", icon: ShoppingCart },
    { name: "Amazon Finds", href: "/amazon-finds", desc: "Curated recommendations", icon: Gift },
    { name: "About", href: "/about", desc: "Learn about iWriteTech", icon: Info },
  ];

  const categories = [
    { name: "Desk Setups", href: "/categories/desk-setups" },
    { name: "MacBook Accessories", href: "/categories/macbook-accessories" },
    { name: "Mechanical Keyboards", href: "/categories/mechanical-keyboards" },
    { name: "Productivity", href: "/categories/productivity" },
    { name: "Smart Home", href: "/categories/smart-home" },
  ];

  const drawerTransform = isOpen 
    ? `translateX(${drawerOffset < 0 ? drawerOffset : 0}px)` 
    : "translateX(-100%)";

  return createPortal(
    <div className="fixed inset-0 z-50 lg:hidden pointer-events-none">
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className="absolute top-0 left-0 h-full w-[85%] max-w-[400px] bg-[#121212]/95 backdrop-blur-xl border-r border-white/10 rounded-tr-[20px] rounded-br-[20px] shadow-2xl flex flex-col pointer-events-auto"
        style={{
          transform: drawerTransform,
          transition: touchStart !== null ? "none" : "transform 0.5s cubic-bezier(0.32,0.72,0,1)",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
          <Link href="/" className="flex flex-col gap-1" onClick={onClose}>
            <div className="flex items-center font-heading font-medium text-[26px] tracking-tight hover:opacity-90 transition-opacity">
              <span className="relative inline-flex items-center justify-center">
                <span className="absolute top-[0.2em] w-[0.2em] h-[0.2em] bg-[#cda962] rounded-full" />
                <span className="text-white">ı</span>
              </span>
              <span className="text-white">WriteTech</span>
            </div>
            <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">Tech Reviews • Buying Guides</span>
          </Link>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors active:scale-90 touch-manipulation"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain pb-8 px-6 pt-6 no-scrollbar">
          
          {/* Main Nav Cards */}
          <nav className="flex flex-col gap-3 mb-8">
            {navCards.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className="group flex items-center justify-between p-4 rounded-[16px] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/15 transition-all duration-300 active:scale-[0.98] touch-manipulation"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateY(0)" : "translateY(10px)",
                  transition: `opacity 0.4s ease forwards ${0.1 + (i * 0.05)}s, transform 0.4s cubic-bezier(0.32,0.72,0,1) forwards ${0.1 + (i * 0.05)}s, background 0.2s, border 0.2s, transform 0.1s`
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                    <link.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-medium text-base">{link.name}</span>
                    <span className="text-zinc-500 text-xs mt-0.5">{link.desc}</span>
                  </div>
                </div>
                <ChevronRight size={18} className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
              </Link>
            ))}
          </nav>

          {/* Categories Pills */}
          <div className="mb-8"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(10px)",
              transition: `opacity 0.4s ease forwards 0.4s, transform 0.4s cubic-bezier(0.32,0.72,0,1) forwards 0.4s`
            }}
          >
            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-full bg-white/5 border border-white/5 text-sm text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-200 active:scale-95 touch-manipulation"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-4"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(10px)",
              transition: `opacity 0.4s ease forwards 0.5s, transform 0.4s cubic-bezier(0.32,0.72,0,1) forwards 0.5s`
            }}
          >
            <Link 
              href="/search" 
              onClick={onClose}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white transition-colors"
            >
              <Search size={18} />
              <span className="text-sm font-medium">Search Articles</span>
            </Link>

            <Link 
              href="#" 
              onClick={onClose}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm font-medium">Newsletter</span>
            </Link>
            
            <div className="flex items-center gap-2 px-3 py-2">
              <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                <PinterestIcon />
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                <XTwitterIcon />
              </Link>
            </div>

            <div className="flex items-center gap-4 px-3 mt-4">
              <Link href="/privacy" onClick={onClose} className="flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
                <Shield size={14} /> Privacy
              </Link>
              <Link href="/affiliate" onClick={onClose} className="flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
                <FileText size={14} /> Affiliate
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>,
    document.body
  );
}
