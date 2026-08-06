import { addHeadingAnchors, getAllPosts, getPostBySlug } from "@/lib/hashnode";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft, BookOpen, Calendar, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found | Mohd Ahsan Raza Khan" };
  }

  return {
    title: `${post.title} | Mohd Ahsan Raza Khan`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.mohdahsanrazakhan.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
  };
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { html: contentHtml, toc } = addHeadingAnchors(post.contentHtml);

  return (
    <article className="relative pt-32 pb-20 px-6">
      <div className="max-w-screen-md mx-auto">

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-muted-foreground text-lg mb-6">{post.excerpt}</p>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
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

          <Button variant="outline" size="sm" asChild>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              Read on Hashnode
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>

        <Separator className="mb-8" />

        {post.coverImage && (
          <div className="relative h-64 sm:h-96 w-full overflow-hidden rounded-xl bg-accent mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={post.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        )}

        {toc.length > 0 && (
          <>
            <div className="mb-8">
              <h2 className="font-semibold mb-3">Table of Contents:</h2>
              <ol className="list-decimal list-inside space-y-2">
                {toc.map((item) => (
                  <li
                    key={item.id}
                    className={item.level === 3 ? "ml-4" : undefined}
                  >
                    <a
                      href={`#${item.id}`}
                      className="font-medium underline underline-offset-4 hover:text-primary"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
            <Separator className="mb-8" />
          </>
        )}

        <div
          className="prose prose-neutral dark:prose-invert max-w-none prose-a:text-primary prose-img:rounded-xl scroll-mt-24 [&_h2]:scroll-mt-24 [&_h3]:scroll-mt-24"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </article>
  );
};

export default BlogPostPage;
