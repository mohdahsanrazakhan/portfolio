import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@/lib/case-studies";

interface CaseHeroProps {
  caseStudy: CaseStudy;
}

const CaseHero = ({ caseStudy }: CaseHeroProps) => {
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {caseStudy.services.map((service) => (
          <Badge key={service} variant="secondary" className="rounded-full">
            {service}
          </Badge>
        ))}
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
        {caseStudy.title}
      </h1>
      <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mb-10">
        {caseStudy.tagline}
      </p>

      <div className="relative h-64 sm:h-[28rem] w-full overflow-hidden rounded-xl bg-accent">
        <Image
          src={caseStudy.heroImage ?? caseStudy.coverImage}
          alt={caseStudy.title}
          className="object-cover"
          fill
          priority
        />
      </div>
    </div>
  );
};

export default CaseHero;
