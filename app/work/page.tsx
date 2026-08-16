import { caseStudies } from "@/lib/case-studies";
import WorkHero from "@/components/work/work-hero";
import WorkGrid from "@/components/work/work-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Mohd Ahsan Raza Khan",
  description:
    "Case studies covering the products I've designed and built - process, challenges, and outcomes.",
  alternates: {
    canonical: "https://www.mohdahsanrazakhan.com/work",
  },
};

const WorkPage = () => {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <WorkHero />

        {caseStudies.length === 0 ? (
          <p className="text-muted-foreground">
            Case studies are on the way. Check back soon.
          </p>
        ) : (
          <WorkGrid caseStudies={caseStudies} />
        )}
      </div>
    </section>
  );
};

export default WorkPage;
