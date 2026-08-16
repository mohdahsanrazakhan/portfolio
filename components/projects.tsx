import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudySlug?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  caseStudySlug,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        {caseStudySlug ? (
          <Link href={`/work/${caseStudySlug}`} className="group/title w-fit">
            <h3 className="text-xl font-semibold mb-2 inline-flex items-center gap-1 group-hover/title:text-primary/80 transition-colors">
              {title}
              <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 transition-all group-hover/title:opacity-100 group-hover/title:translate-x-0" />
            </h3>
          </Link>
        ) : (
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
        )}
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {caseStudySlug && (
            <Button variant="default" className="rounded-full" asChild>
              <Link href={`/work/${caseStudySlug}`}>
                Case Study
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          )}
          {liveUrl && (
            <Button
              variant={caseStudySlug ? "outline" : "default"}
              className="rounded-full shadow-none"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Legal Codes",
      description: "A legal resource platform designed to make Indian laws including the IPC, CrPC etc. easily accessible to everyone.",
      image: "/project1.webp",
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "PWA"],
      liveUrl: "https://legalcodes.in",
      githubUrl: "https://github.com/mohdahsanrazakhan/LawCodes",
    },
    {
      title: "flowdesk CRM",
      description:
        "A modern and scalable system designed to manage leads, campaigns, and business workflows from a single, unified dashboard.",
      image: "/project2.webp",
      technologies: ["React.js", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://flowdesk-crm.vercel.app",
      githubUrl: "https://github.com/mohdahsanrazakhan/flowdesk-crm",
      caseStudySlug: "flowdesk-crm",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Showcasing some of my best projects and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
