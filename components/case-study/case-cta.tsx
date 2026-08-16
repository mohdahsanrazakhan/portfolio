import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";

interface CaseCtaProps {
  nextCase?: CaseStudy;
}

const CaseCta = ({ nextCase }: CaseCtaProps) => {
  return (
    <div className="py-16 border-t border-accent">
      {nextCase ? (
        <Link href={`/work/${nextCase.slug}`} className="group block">
          <p className="text-sm text-muted-foreground mb-2">Next Project</p>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight group-hover:text-primary/80 transition-colors">
              {nextCase.title}
            </h2>
            <ArrowRight className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      ) : (
        <Link href="/work" className="group block">
          <p className="text-sm text-muted-foreground mb-2">
            That&apos;s all for now
          </p>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight group-hover:text-primary/80 transition-colors">
              Back to all Works
            </h2>
            <ArrowRight className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default CaseCta;
