"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: React.ReactNode;
  className?: string;
}

export const Footer = ({
  brandName = "YourBrand",
  brandDescription = "",
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  brandIcon,
  className,
}: FooterProps) => {
  return (
    <footer
      className={cn(
        "relative overflow-hidden rounded-[2rem] bg-surface-lowest border border-border soft-shadow",
        className,
      )}
    >
      <div className="relative z-10 px-8 md:px-14 pt-16 pb-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-display text-3xl mb-3">{brandName}</div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {brandDescription}
            </p>
          </div>

          {/* Nav */}
          {navLinks.length > 0 && (
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-accent mb-4">
                Navigate
              </div>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center text-sm text-foreground/80 hover:text-foreground transition"
                    >
                      <span className="story-link">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Socials */}
          {socialLinks.length > 0 && (
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-accent mb-4">
                Find me
              </div>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="group relative size-11 rounded-full border border-border bg-surface-low flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-accent hover:-translate-y-0.5 transition-all"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom row */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border/60 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} {brandName}. All rights reserved.</span>
          {creatorName && (
            <a
              href={creatorUrl}
              className="inline-flex items-center gap-1.5 hover:text-foreground transition"
            >
              <Sparkles className="size-3 text-accent" />
              Crafted by <span className="underline underline-offset-2">{creatorName}</span>
            </a>
          )}
        </div>

        {/* Bottom logo */}
        <div className="relative z-10 mt-10 flex items-center justify-center">
          <div className="size-12 rounded-full bg-surface-high border border-border flex items-center justify-center text-accent">
            {brandIcon ?? <Sparkles className="size-5" />}
          </div>
        </div>
      </div>

      {/* Large background brand text */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-6 md:-bottom-10 lg:-bottom-16 flex items-end justify-center select-none"
      >
        <span
          className="font-display leading-none text-[28vw] md:text-[22vw] lg:text-[18rem] tracking-tighter bg-gradient-to-b from-foreground/15 to-transparent bg-clip-text text-transparent"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          {brandName.toUpperCase()}
        </span>
      </div>

      {/* Soft gradient wash */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] rounded-full bg-accent/10 blur-3xl" />
    </footer>
  );
};

export default Footer;
