import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import { GithubLogo } from "@/components/icons";
import type { CaseStudy } from "@/lib/case-studies";

interface CaseMetaProps {
  caseStudy: CaseStudy;
}

const CaseMeta = ({ caseStudy }: CaseMetaProps) => {
  const items = [
    { label: "Client", value: caseStudy.client },
    { label: "Role", value: caseStudy.role },
    { label: "Timeline", value: caseStudy.timeline },
    { label: "Services", value: caseStudy.services.join(", ") },
  ];

  return (
    <div className="py-10">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-sm text-muted-foreground mb-1">
              {item.label}
            </p>
            <p className="font-medium">{item.value}</p>
          </div>
        ))}
      </div>

      {(caseStudy.liveUrl || caseStudy.githubUrl) && (
        <div className="flex flex-wrap gap-3 mt-8">
          {caseStudy.liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
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
              className="rounded-full shadow-none"
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

      <Separator className="mt-10" />
    </div>
  );
};

export default CaseMeta;
