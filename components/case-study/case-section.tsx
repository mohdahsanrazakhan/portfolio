import { Badge } from "@/components/ui/badge";

interface CaseSectionProps {
  eyebrow: string;
  title: string;
  text: string;
}

const CaseSection = ({ eyebrow, title, text }: CaseSectionProps) => {
  return (
    <div className="py-10">
      <Badge variant="secondary" className="rounded-full mb-3">
        {eyebrow}
      </Badge>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed">{text}</p>
    </div>
  );
};

export default CaseSection;
