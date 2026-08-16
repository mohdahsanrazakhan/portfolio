import type { CaseStudy } from "@/lib/case-studies";
import WorkCard from "./work-card";

interface WorkGridProps {
  caseStudies: CaseStudy[];
}

const WorkGrid = ({ caseStudies }: WorkGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
      {caseStudies.map((caseStudy) => (
        <WorkCard key={caseStudy.slug} caseStudy={caseStudy} />
      ))}
    </div>
  );
};

export default WorkGrid;
