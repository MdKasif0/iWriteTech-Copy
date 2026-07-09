"use client";

import Link from "next/link";
import {
  Monitor,
  Laptop,
  Keyboard,
  Lightbulb,
  Home,
  Headphones,
  Smartphone,
  Cable,
  Gamepad2,
  Cpu,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  {
    name: "Desk Setups",
    slug: "desk-setups",
    description: "Complete workspace inspiration and gear guides.",
    icon: Monitor,
  },
  {
    name: "MacBook Accessories",
    slug: "macbook-accessories",
    description: "Docks, stands, sleeves, and essentials for your Mac.",
    icon: Laptop,
  },
  {
    name: "Mechanical Keyboards",
    slug: "mechanical-keyboards",
    description: "Custom boards, switches, and keycap sets.",
    icon: Keyboard,
  },
  {
    name: "Productivity",
    slug: "productivity",
    description: "Apps, tools, and gadgets to sharpen your workflow.",
    icon: Lightbulb,
  },
  {
    name: "Smart Home",
    slug: "smart-home",
    description: "Automation, lighting, and connected devices.",
    icon: Home,
  },
  {
    name: "Audio Gear",
    slug: "audio-gear",
    description: "Headphones, speakers, and microphones worth hearing.",
    icon: Headphones,
  },
  {
    name: "iPad Accessories",
    slug: "ipad-accessories",
    description: "Cases, styluses, and stands for the iPad ecosystem.",
    icon: Smartphone,
  },
  {
    name: "Cables & Hubs",
    slug: "cables-hubs",
    description: "USB-C hubs, cables, and charging solutions.",
    icon: Cable,
  },
  {
    name: "Gaming",
    slug: "gaming",
    description: "Controllers, peripherals, and aesthetic gaming setups.",
    icon: Gamepad2,
  },
  {
    name: "Tech Components",
    slug: "tech-components",
    description: "SSDs, RAM, and upgrade parts for power users.",
    icon: Cpu,
  },
];

export function CategoriesSection() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className={`py-8 md:py-12 bg-card/50 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="h-px w-8 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Browse
          </span>
        </div>
        <h2 className="heading mb-10">Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="group block"
              >
                <div className="bg-background border border-border rounded-xl p-5 h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-primary/30">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
