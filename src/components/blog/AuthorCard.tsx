import React from "react";
import Image from "next/image";

interface AuthorCardProps {
  name: string;
  role?: string;
  avatarUrl?: string;
  bio?: string;
  compact?: boolean;
}

export function AuthorCard({ 
  name, 
  role = "Tech Reviewer", 
  avatarUrl, 
  bio, 
  compact = false 
}: AuthorCardProps) {
  // If no avatar is provided, generate a fallback based on initials
  const initials = name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
  
  if (compact) {
    return (
      <div className="flex items-center gap-3">
        {avatarUrl ? (
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted border border-border shrink-0">
            <Image src={avatarUrl} alt={name} fill sizes="40px" className="object-cover" />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm border border-primary/20 shrink-0">
            {initials}
          </div>
        )}
        <div>
          <p className="font-semibold text-sm text-foreground leading-tight">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    );
  }

  // Full bio variant (used at bottom of posts)
  return (
    <div className="flex flex-col sm:flex-row gap-5 p-6 rounded-2xl bg-card border border-border items-start sm:items-center">
      {avatarUrl ? (
        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-muted border border-border shrink-0">
          <Image src={avatarUrl} alt={name} fill sizes="80px" className="object-cover" />
        </div>
      ) : (
        <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-2xl border border-primary/20 shrink-0">
          {initials}
        </div>
      )}
      <div className="flex-1">
        <p className="font-semibold text-lg text-foreground">{name}</p>
        <p className="text-sm text-primary font-medium mb-2">{role}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {bio || "Tech enthusiast and reviewer dedicated to finding the perfect balance between aesthetics and performance for modern workspaces."}
        </p>
      </div>
    </div>
  );
}
