"use client";

import { track } from "@hellyeah/x-ray";
import type { ComponentPropsWithoutRef } from "react";

type AffiliateLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
};

export function AffiliateLink({ href, children, onClick, ...props }: AffiliateLinkProps) {
  let destinationHost: string | undefined;

  try {
    destinationHost = new URL(href).hostname;
  } catch {
    destinationHost = undefined;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented && destinationHost) {
          track("affiliate_link_clicked", { destination_host: destinationHost });
        }
      }}
      {...props}
    >
      {children}
    </a>
  );
}
