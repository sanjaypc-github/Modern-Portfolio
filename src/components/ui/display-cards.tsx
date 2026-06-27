"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
  onClick?: () => void;
}

export function DisplayCard({
  className,
  icon = <Sparkles className="size-4" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-accent",
  titleClassName = "text-accent",
  onClick,
}: DisplayCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative flex h-44 w-[22rem] -skew-y-[6deg] cursor-pointer select-none flex-col justify-between rounded-2xl border border-border bg-surface-lowest/80 px-5 py-4 text-left backdrop-blur-sm transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-accent/40 hover:bg-surface-lowest [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className,
      )}
    >
      <div>
        <span className={cn("relative inline-block rounded-full bg-surface-high p-1.5", iconClassName)}>
          {icon}
        </span>
        <p className={cn("font-display text-xl", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-normal text-sm text-foreground/80 leading-snug">{description}</p>
      <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{date}</p>
    </button>
  );
}

export interface DisplayCardsProps {
  cards: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const positions = [
    "[grid-area:stack] hover:-translate-y-10",
    "[grid-area:stack] translate-x-14 translate-y-10 hover:-translate-y-1",
    "[grid-area:stack] translate-x-28 translate-y-20 hover:translate-y-10",
    "[grid-area:stack] translate-x-[10.5rem] translate-y-[7.5rem] hover:translate-y-[5rem]",
  ];

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {cards.map((c, i) => (
        <DisplayCard key={i} {...c} className={cn(positions[i % positions.length], c.className)} />
      ))}
    </div>
  );
}
