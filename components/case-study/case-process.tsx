import type { CaseStudyAccordionItem } from "@/lib/case-studies";

interface CaseProcessProps {
  steps: CaseStudyAccordionItem[];
}

/**
 * Numbered (01, 02, ...) process layout - kept available as a component
 * even though the current case study uses the accordion-style "Our
 * Approach" section instead. Swap it in for a case study where the
 * numbered-steps look fits better.
 */
const CaseProcess = ({ steps }: CaseProcessProps) => {
  return (
    <div className="py-10">
      <p className="text-sm font-medium text-primary mb-2">Process</p>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
        How it came together
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <div key={step.title} className="flex gap-4">
            <span className="text-2xl font-bold text-muted-foreground/40 tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-semibold mb-1.5">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseProcess;
