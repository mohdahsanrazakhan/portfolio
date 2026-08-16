"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type MouseEvent } from "react";
import type { CaseStudy } from "@/lib/case-studies";

interface WorkCardProps {
  caseStudy: CaseStudy;
}

const WorkCard = ({ caseStudy }: WorkCardProps) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Link href={`/work/${caseStudy.slug}`} className="group block">
      <div
        className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-accent"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={caseStudy.coverImage}
          alt={caseStudy.title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
        />

        {/* Hover overlay - black circular glassmorphism badge that follows the cursor */}
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10">
          <span
            className="absolute flex h-24 w-24 flex-col items-center justify-center rounded-full border border-white/25 bg-black/30 text-center text-sm leading-tight font-medium text-white [backdrop-filter:blur(14px)_invert(1)] [-webkit-backdrop-filter:blur(14px)_invert(1)] transition-[opacity,transform] duration-200 ease-out"
            style={{
              left: pos.x,
              top: pos.y,
              transform: `translate(-50%, -50%) scale(${hovered ? 1 : 0.85})`,
              opacity: hovered ? 1 : 0,
            }}
          >
            View
            <br />
            Case
          </span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold transition-colors group-hover:text-primary/80">
          {caseStudy.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          {caseStudy.services.join(", ")}
        </p>
      </div>
    </Link>
  );
};

export default WorkCard;
