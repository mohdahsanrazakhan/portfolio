import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import { GithubLogo } from "@/components/icons";
import type { CaseStudy } from "@/lib/case-studies";

interface CaseOverviewProps {
  caseStudy: CaseStudy;
}

/**
 * Overview narrative (left, fills the remaining width) paired with a fixed
 * width project spec sidebar - Client, Role, Timeline, Services, and
 * live/code links (right, 240px). The overview column absorbs any extra
 * container width instead of shrinking to a fixed ratio. Stacks to a single
 * column on mobile, with the pointers themselves laid out 2-up.
 */
const CaseOverview = ({ caseStudy }: CaseOverviewProps) => {
  const metaItems = [
    { label: "Client", value: caseStudy.client },
    { label: "Role", value: caseStudy.role },
    { label: "Timeline", value: caseStudy.timeline },
    { label: "Services", value: caseStudy.services.join(", ") },
  ];

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_240px] lg:gap-10">
        <div>
          <Badge variant="secondary" className="rounded-full mb-3">
            {caseStudy.overviewEyebrow ?? "Overview"}
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            {caseStudy.overviewTitle ?? "What we set out to build"}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {caseStudy.overview}
          </p>
        </div>

        <div className="lg:border-l lg:border-accent lg:pl-6">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
            {metaItems.map((item) => (
              <div
                key={item.label}
              >
                <p className="text-sm text-muted-foreground mb-1">
                  {item.label}
                </p>
                <p className="font-medium">{item.value}</p>
              </div>
            ))}
          </div>

          {(caseStudy.liveUrl || caseStudy.githubUrl) && (
            <div className="flex flex-col gap-3 mt-8">
              {caseStudy.liveUrl && (
                <Button variant="default" className="w-full rounded-full" asChild>
                  <a
                    href={caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Visit Live Site
                  </a>
                </Button>
              )}
              {caseStudy.githubUrl && (
                <Button
                  variant="outline"
                  className="w-full rounded-full shadow-none"
                  asChild
                >
                  <a
                    href={caseStudy.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubLogo className="mr-1 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      <Separator className="mt-10" />
    </div>
  );
};

export default CaseOverview;
