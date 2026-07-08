"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StyleGuide() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="container mx-auto p-8 space-y-16">
      <div className="flex items-center justify-between">
        <h1 className="display-lg">Style Guide</h1>
        <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          Toggle Theme ({theme})
        </Button>
      </div>

      {/* Colors */}
      <section className="space-y-4">
        <h2 className="heading border-b border-border pb-2">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <Swatch name="Background" bg="bg-background" text="text-foreground" />
          <Swatch name="Foreground" bg="bg-foreground" text="text-background" />
          <Swatch name="Card" bg="bg-card" text="text-card-foreground" />
          <Swatch name="Popover" bg="bg-popover" text="text-popover-foreground" />
          <Swatch name="Primary" bg="bg-primary" text="text-primary-foreground" />
          <Swatch name="Secondary" bg="bg-secondary" text="text-secondary-foreground" />
          <Swatch name="Muted" bg="bg-muted" text="text-muted-foreground" />
          <Swatch name="Accent" bg="bg-accent" text="text-accent-foreground" />
          <Swatch name="Destructive" bg="bg-destructive" text="text-destructive-foreground" />
          <Swatch name="Border" bg="bg-border" text="text-foreground" />
          <Swatch name="Input" bg="bg-input" text="text-foreground" />
          <Swatch name="Ring" bg="bg-ring" text="text-background" />
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-4">
        <h2 className="heading border-b border-border pb-2">Typography</h2>
        <div className="space-y-6">
          <div>
            <div className="text-sm text-muted-foreground mb-1">display-xl (4.5rem / 72px)</div>
            <div className="display-xl">The quick brown fox</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">display-lg (3rem / 48px)</div>
            <div className="display-lg">The quick brown fox</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">heading (2rem / 32px)</div>
            <div className="heading">The quick brown fox</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">body (1rem / 16px)</div>
            <div className="body">
              The quick brown fox jumps over the lazy dog. This is standard body text used for
              paragraphs and general reading content. It uses the default font size.
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">caption (0.875rem / 14px)</div>
            <div className="caption">This is caption text used for secondary information, hints, or small print.</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">mono-data (0.875rem / 14px)</div>
            <div className="mono-data">M2-CHIP-2026-X</div>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="heading border-b border-border pb-2">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      {/* Badges */}
      <section className="space-y-4">
        <h2 className="heading border-b border-border pb-2">Badges</h2>
        <div className="flex flex-wrap gap-4">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-4">
        <h2 className="heading border-b border-border pb-2">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Standard Card</CardTitle>
              <CardDescription>A basic card with standard styling.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="body">Card content goes here. This uses the surface color and standard border.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}

function Swatch({ name, bg, text }: { name: string; bg: string; text: string }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-md border border-border">
      <div className={`h-24 ${bg} flex items-center justify-center p-2`}>
        <span className={`text-xs font-medium ${text}`}>{name}</span>
      </div>
      <div className="bg-card p-2 text-xs font-mono border-t border-border flex justify-between">
        <span>{name}</span>
      </div>
    </div>
  );
}
