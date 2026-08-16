import { Badge } from "@/components/ui/badge";

const WorkHero = () => {
  return (
    <div className="mb-12 sm:mb-16">
      <Badge variant="secondary" className="mb-4">
        Work
      </Badge>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] max-w-2xl">
        Great products don&apos;t just solve problems. They create growth.
      </h1>
    </div>
  );
};

export default WorkHero;
