// Centralized blog post data for the blog
import blogPostsJson from "./blogPosts.generated.json";

export const blogPosts = blogPostsJson as Array<{
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  url?: string;
  content: string;
}>;
