import { Badge } from "@/components/ui/badge";
import type { CaseStudyAccordionItem } from "@/lib/case-studies";

interface CasePointsSectionProps {
  eyebrow: string;
  title: string;
  intro?: string;
  groups: { label: string; items: CaseStudyAccordionItem[] }[];
}

/**
 * A single flat container per group - bold heading + normal description,
 * repeated. No nesting, no expand/collapse.
 */
const CasePointsSection = ({
  eyebrow,
  title,
  intro,
  groups,
}: CasePointsSectionProps) => {
  return (
    <div className="py-10">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <Badge variant="secondary" className="rounded-full mb-3">
          {eyebrow}
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
          {title}
        </h2>
        {intro && (
          <p className="text-muted-foreground text-lg leading-relaxed">
            {intro}
          </p>
        )}
      </div>

      <div className="space-y-6">
        {groups.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-accent bg-accent/20 p-6 sm:p-8"
          >
            <h3 className="text-lg font-semibold mb-6">{group.label}</h3>
            <div className="space-y-6">
              {group.items.map((item) => (
                <div key={item.title}>
                  <h4 className="font-semibold mb-1.5">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasePointsSection;
