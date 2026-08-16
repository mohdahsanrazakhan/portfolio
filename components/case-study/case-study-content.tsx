import type { CaseStudy } from "@/lib/case-studies";
import CaseHero from "./case-hero";
import CaseOverview from "./case-overview";
import CasePointsSection from "./case-points-section";
import CaseAccordionSection from "./case-accordion-section";
import CaseGallery from "./case-gallery";
import CaseStats from "./case-stats";
import CaseTestimonial from "./case-testimonial";
import CaseTech from "./case-tech";
import CaseCta from "./case-cta";

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
  nextCase?: CaseStudy;
}

/**
 * The single, reusable layout every case study page is built from.
 * To add a new case study, add its data to `lib/case-studies.ts` -
 * this component decides the format, once, for all of them.
 */
const CaseStudyContent = ({ caseStudy, nextCase }: CaseStudyContentProps) => {
  return (
    <article className="relative pt-32 pb-10 px-6">
      <div className="max-w-4xl mx-auto">
        <CaseHero caseStudy={caseStudy} />
        <CaseOverview caseStudy={caseStudy} />

        <CaseAccordionSection
          eyebrow={caseStudy.challengesEyebrow ?? "Challenges & Goals"}
          title={caseStudy.challengesTitle ?? "Challenges & Project Goals"}
          intro={caseStudy.challengesIntro}
          groups={[
            { label: "Challenges", items: caseStudy.challenges },
            ...(caseStudy.goals
              ? [{ label: "Goals", items: caseStudy.goals }]
              : []),
          ]}
        />

        {caseStudy.gallery && caseStudy.gallery.length > 0 && (
          <CaseGallery images={caseStudy.gallery} />
        )}

        {caseStudy.approach.length > 0 && (
          <CaseAccordionSection
            eyebrow={caseStudy.approachEyebrow ?? "Approach"}
            title={caseStudy.approachTitle ?? "Our Approach"}
            intro={caseStudy.approachIntro}
            groups={[{ items: caseStudy.approach }]}
          />
        )}

        {caseStudy.features && caseStudy.features.length > 0 && (
          <CasePointsSection
            eyebrow={caseStudy.featuresEyebrow ?? "Key Features"}
            title={caseStudy.featuresTitle ?? "Key Features & Business Value"}
            intro={caseStudy.featuresIntro}
            groups={[
              { label: "What It Does & Why It Matters", items: caseStudy.features },
            ]}
          />
        )}

        {caseStudy.stats && caseStudy.stats.length > 0 && (
          <CaseStats stats={caseStudy.stats} />
        )}

        {caseStudy.testimonial && (
          <CaseTestimonial {...caseStudy.testimonial} />
        )}

        <CaseTech technologies={caseStudy.technologies} />

        <CaseCta nextCase={nextCase} />
      </div>
    </article>
  );
};

export default CaseStudyContent;
