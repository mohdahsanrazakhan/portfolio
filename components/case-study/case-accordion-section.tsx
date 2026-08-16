import { Badge } from "@/components/ui/badge";
import CaseAccordion from "./case-accordion";
import type { CaseStudyAccordionItem } from "@/lib/case-studies";

interface CaseAccordionSectionProps {
  eyebrow: string;
  title: string;
  intro?: string;
  groups: { label?: string; items: CaseStudyAccordionItem[] }[];
}

const CaseAccordionSection = ({
  eyebrow,
  title,
  intro,
  groups,
}: CaseAccordionSectionProps) => {
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

      {groups.map((group, index) => (
        <CaseAccordion
          key={group.label ?? index}
          label={group.label}
          items={group.items}
        />
      ))}
    </div>
  );
};

export default CaseAccordionSection;
