import type { CaseStudyStat } from "@/lib/case-studies";

interface CaseStatsProps {
  stats: CaseStudyStat[];
}

const CaseStats = ({ stats }: CaseStatsProps) => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-xl border border-accent p-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-xl sm:text-2xl font-bold tracking-tight mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStats;
