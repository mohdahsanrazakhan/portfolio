"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ExpandingSearchDock } from "@/components/ui/expanding-search-dock";
import { BookOpen, Calendar, Check, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/hashnode";

interface BlogListProps {
  posts: BlogPost[];
}

export const BlogList = ({ posts }: BlogListProps) => {
  const [search, setSearch] = useState("");
  const [selectedSeries, setSelectedSeries] = useState<string>("all");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);

  const seriesList = useMemo(() => {
    const unique = new Set(posts.map((post) => post.series));
    return Array.from(unique).sort((a, b) => a.localeCompare(b));
  }, [posts]);

  useEffect(() => {
    if (!isCategoryOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCategoryOpen]);

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesSeries =
        selectedSeries === "all" || post.series === selectedSeries;
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query);
      return matchesSeries && matchesSearch;
    });
  }, [posts, search, selectedSeries]);

  return (
    <div>
      <div className="flex items-center justify-end gap-2 mb-6">
        {seriesList.length > 1 && (
          <div ref={categoryRef} className="relative">
            <button
              type="button"
              onClick={() => setIsCategoryOpen((open) => !open)}
              className="flex h-9 items-center gap-2 rounded-md border border-input bg-background px-3 text-sm shadow-xs transition-colors hover:bg-accent"
            >
              {selectedSeries === "all" ? "All categories" : selectedSeries}
              <ChevronDown
                className={cn(
                  "h-4 w-4 opacity-50 transition-transform",
                  isCategoryOpen && "rotate-180"
                )}
              />
            </button>

            {isCategoryOpen && (
              <div className="absolute right-0 top-full z-50 mt-1 max-h-64 min-w-[10rem] overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
                {["all", ...seriesList].map((series) => (
                  <button
                    key={series}
                    type="button"
                    onClick={() => {
                      setSelectedSeries(series);
                      setIsCategoryOpen(false);
                    }}
                    className="flex w-full items-center justify-between gap-2 rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent"
                  >
                    {series === "all" ? "All categories" : series}
                    {selectedSeries === series && <Check className="h-4 w-4" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <ExpandingSearchDock
          value={search}
          onValueChange={setSearch}
          placeholder="Search posts..."
          width={240}
        />
      </div>

      {filteredPosts.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No posts match your search.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-xl border border-border p-5 transition-all hover:border-primary/50"
            >
              <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline" className="rounded-md">
                    <BookOpen className="h-3 w-3" />
                    {post.series}
                  </Badge>
                  <Badge variant="outline" className="rounded-md">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.pubDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Badge>
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors shrink-0">
                  Read more
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
