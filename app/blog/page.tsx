import { getAllPosts } from "@/lib/hashnode";
import { Badge } from "@/components/ui/badge";
import { BlogList } from "@/components/blog/blog-list";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog | Mohd Ahsan Raza Khan",
  description:
    "Articles, tutorials, and notes on web development from Mohd Ahsan Raza Khan.",
  alternates: {
    canonical: "https://www.mohdahsanrazakhan.com/blog",
  },
};

const BlogPage = async () => {
  const posts = await getAllPosts();

  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Blog
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Writing
          </h1>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Articles and notes I&apos;ve published on Hashnode
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No posts yet. Check back soon.
          </p>
        ) : (
          <BlogList posts={posts} />
        )}
      </div>
    </section>
  );
};

export default BlogPage;
