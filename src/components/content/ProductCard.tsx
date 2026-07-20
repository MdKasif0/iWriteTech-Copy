import React from "react";
import Image from "next/image";
import { AffiliateButton } from "./AffiliateButton";

interface ProductCardProps {
  name: string;
  image: string;
  description?: string;
  price?: string;
  link?: string;
  badge?: string;
  rating?: string;
}

export function ProductCard({ name, image, description, price, link, badge, rating }: ProductCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col md:flex-row my-8 transition-shadow hover:shadow-md">
      <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto md:min-h-[250px] relative bg-white shrink-0 overflow-hidden border-b md:border-b-0 md:border-r border-border">
        <Image 
          src={image} 
          alt={name} 
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-contain p-6 transition-transform duration-500 hover:scale-105" 
        />
        {badge && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
            {badge}
          </div>
        )}
      </div>
      
      <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
        <div className="flex justify-between items-start gap-4 mb-2">
          <div>
            <h3 className="font-semibold text-xl leading-tight text-foreground m-0">{name}</h3>
            {rating && (
              <div className="flex items-center text-sm text-amber-500 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                {rating}
              </div>
            )}
          </div>
          {price && (
            <div className="flex flex-col items-end shrink-0">
              <span className="font-semibold text-primary mono-data">{price}</span>
              <span className="text-[10px] text-muted-foreground mt-1">Checked 2026-07-13</span>
            </div>
          )}
        </div>
        
        {description && (
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
            {description}
          </p>
        )}
        
        {link && (
          <div className="mt-auto">
            <AffiliateButton href={link} fullWidth>
              Check Price
            </AffiliateButton>
          </div>
        )}
      </div>
    </div>
  );
}
