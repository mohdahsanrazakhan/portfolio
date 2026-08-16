import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { CaseStudyAccordionItem } from "@/lib/case-studies";

interface CaseAccordionProps {
  label?: string;
  items: CaseStudyAccordionItem[];
  /** value of the item that starts expanded, defaults to the first */
  defaultOpen?: string;
}

/**
 * A single, flat, top-level accordion. When `label` is set it renders as a
 * plain heading above the accordion - never as a second collapsible layer,
 * so groups (e.g. Challenges, Goals) never look like nested accordions.
 */
const CaseAccordion = ({ label, items, defaultOpen }: CaseAccordionProps) => {
  return (
    <div className="mb-6 last:mb-0">
      {label && (
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {label}
        </h3>
      )}

      <Accordion
        type="single"
        collapsible
        defaultValue={defaultOpen ?? items[0]?.title}
        className="rounded-xl border border-accent bg-accent/20 px-6"
      >
        {items.map((item) => (
          <AccordionItem
            key={item.title}
            value={item.title}
            className="border-accent"
          >
            <AccordionTrigger className="font-medium hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CaseAccordion;
