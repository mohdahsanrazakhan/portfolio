import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import CaseStudyContent from "@/components/case-study/case-study-content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return { title: "Case study not found | Mohd Ahsan Raza Khan" };
  }

  return {
    title: `${caseStudy.title} | Case Study | Mohd Ahsan Raza Khan`,
    description: caseStudy.tagline,
    alternates: {
      canonical: `https://www.mohdahsanrazakhan.com/work/${caseStudy.slug}`,
    },
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.tagline,
      type: "article",
      images: [{ url: caseStudy.coverImage }],
    },
  };
}

const CaseStudyPage = async ({ params }: CaseStudyPageProps) => {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const currentIndex = caseStudies.findIndex((c) => c.slug === slug);
  const nextCase =
    caseStudies.length > 1
      ? caseStudies[(currentIndex + 1) % caseStudies.length]
      : undefined;

  return <CaseStudyContent caseStudy={caseStudy} nextCase={nextCase} />;
};

export default CaseStudyPage;
