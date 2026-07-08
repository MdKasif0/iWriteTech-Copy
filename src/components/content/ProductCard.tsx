import React from "react";
import Image from "next/image";
import { AffiliateButton } from "./AffiliateButton";

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  price?: string;
  link: string;
  badge?: string;
}

export function ProductCard({ name, image, description, price, link, badge }: ProductCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col md:flex-row my-8 transition-shadow hover:shadow-md">
      <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto relative bg-muted shrink-0 overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover transition-transform duration-500 hover:scale-105" 
        />
        {badge && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
            {badge}
          </div>
        )}
      </div>
      
      <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="font-semibold text-xl leading-tight text-foreground m-0">{name}</h3>
          {price && <span className="font-semibold text-primary mono-data shrink-0">{price}</span>}
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>
        
        <div className="mt-auto">
          <AffiliateButton href={link} fullWidth>
            Check Price
          </AffiliateButton>
        </div>
      </div>
    </div>
  );
}
