import { Badge } from "@/components/ui/badge";

interface CaseTechProps {
  technologies: string[];
}

const CaseTech = ({ technologies }: CaseTechProps) => {
  return (
    <div className="py-10">
      <p className="text-sm font-medium text-primary mb-4">Built With</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge key={tech} variant="secondary" className="rounded-full">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default CaseTech;
