import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <Building2 className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Ativa IT Solutions",
      period: "Oct 2025 - Present",
      description:
        "Responsible for end-to-end lifecycle of clients and in-house products including portals and web applications covering strategy, planning, design, development, deployment, and post-launch follow-ups with clients and board members.",
      technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Docker", "GitHub Actions", "Shopify","WooCommerce",
    "VPS provisioning & configuration (KVM-based)",
"Server and deployment management",],
    },
    {
      title: "Web Developer",
      company: "BizzBuzz Creations",
      period: "Aug 2024 - Sep 2025",
      description:
        "Led full-stack development across CRM, reporting systems, and client websites. Improved reporting accuracy, email deliverability, and system performance while integrating automation, headless CMS workflows, and managing a team.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "SQLite", "PHP", "WordPress", "TailwindCSS", "Amazon SES", "AWS", "WhatsApp Business API", "PHPMailer", "REST APIs"],
    },
    {
      title: "Web Developer",
      company: "Kepler Voice",
      period: "Mar 2024 - Aug 2024",
      description:
        "Contributed to the development of responsive, high-performance websites using React.js, and WordPress. Delivered modern frontend experiences, improved website performance, and implemented scalable Headless CMS architectures.",
      technologies: ["React.js", "JavaScript", "TailwindCSS", "WordPress", "Headless CMS", "REST APIs"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
