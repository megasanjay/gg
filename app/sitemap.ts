import { getBlogPosts } from "app/blog/utils";

export const baseUrl = "https://gisellegarcia.link";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = [
    { path: "", priority: 1.0 },
    { path: "/blog", priority: 0.5 },
  ].map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority,
  }));

  return [...routes, ...blogs];
}
