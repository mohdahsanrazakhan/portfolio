import { XMLParser } from "fast-xml-parser";

const PUBLICATION_HOST = "mohdahsanrazakhan.hashnode.dev";
const RSS_URL = `https://${PUBLICATION_HOST}/rss.xml`;

export interface BlogPost {
  slug: string;
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  contentHtml: string;
  coverImage: string | null;
  series: string;
}

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  description?: string;
  "content:encoded"?: string;
  enclosure?: { "@_url"?: string };
  category?: unknown;
}

function unwrapCdata(value: unknown): string {
  if (typeof value === "string") return value;
  if (value && typeof value === "object" && "__cdata" in value) {
    return String((value as { __cdata: unknown }).__cdata);
  }
  return String(value ?? "");
}

function slugFromLink(link: string): string {
  const path = new URL(link).pathname;
  return path.split("/").filter(Boolean).pop() ?? link;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text: string, maxLength: number): string {
  return text.length > maxLength
    ? `${text.slice(0, maxLength).trimEnd()}…`
    : text;
}

function firstImageSrc(html: string): string | null {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

async function fetchFeedItems(): Promise<RssItem[]> {
  const res = await fetch(RSS_URL, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Hashnode RSS error: ${res.status} ${res.statusText}`);
  }

  const xml = await res.text();
  const parser = new XMLParser({
    cdataPropName: "__cdata",
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
  });
  const feed = parser.parse(xml);

  const rawItems = feed?.rss?.channel?.item ?? [];
  const items = Array.isArray(rawItems) ? rawItems : [rawItems];

  return items.map((item) => ({
    title: item.title?.__cdata ?? item.title ?? "",
    link: item.link ?? "",
    pubDate: item.pubDate ?? "",
    description: item.description?.__cdata ?? item.description ?? "",
    "content:encoded":
      item["content:encoded"]?.__cdata ?? item["content:encoded"] ?? "",
    enclosure: item.enclosure,
    category: item.category,
  }));
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const items = await fetchFeedItems();

    return items
      .filter((item) => item.link)
      .map((item) => {
        const contentHtml = item["content:encoded"] || item.description || "";
        const categories = item.category
          ? (Array.isArray(item.category) ? item.category : [item.category]).map(
              unwrapCdata
            )
          : [];

        return {
          slug: slugFromLink(item.link),
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          excerpt: truncate(stripHtml(item.description ?? ""), 180),
          contentHtml,
          coverImage: item.enclosure?.["@_url"] || firstImageSrc(contentHtml),
          series: categories[0] || "Uncategorized",
        };
      });
  } catch (error) {
    console.error("Failed to fetch Hashnode RSS feed:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

function slugifyHeading(text: string): string {
  return (
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-") || "section"
  );
}

export function addHeadingAnchors(html: string): {
  html: string;
  toc: TocItem[];
} {
  const toc: TocItem[] = [];
  const seen = new Map<string, number>();

  const resultHtml = html.replace(
    /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (_match, level: string, attrs: string, inner: string) => {
      const text = inner.replace(/<[^>]+>/g, "").trim();
      const baseSlug = slugifyHeading(text);
      const count = seen.get(baseSlug) ?? 0;
      seen.set(baseSlug, count + 1);
      const id = count > 0 ? `${baseSlug}-${count}` : baseSlug;

      toc.push({ id, text, level: Number(level) });

      const cleanedAttrs = attrs.replace(/\sid=["'][^"']*["']/i, "");
      return `<h${level}${cleanedAttrs} id="${id}">${inner}</h${level}>`;
    }
  );

  return { html: resultHtml, toc };
}
