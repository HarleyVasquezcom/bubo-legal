import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  authorRole: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  featured: boolean;
  readingMinutes: number;
};

export type Post = PostMeta & { content: string };

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

const readingMinutes = (content: string) =>
  Math.max(1, Math.round(content.trim().split(/\s+/).length / 200));

function parseFile(fileName: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), 'utf8');
  const { data, content } = matter(raw);

  return {
    slug: fileName.replace(/\.mdx?$/, ''),
    title: String(data.title ?? ''),
    description: String(data.description ?? ''),
    date: String(data.date ?? ''),
    category: String(data.category ?? 'Derecho Laboral Individual'),
    author: String(data.author ?? 'Equipo BUBO Legal'),
    authorRole: String(data.authorRole ?? 'Abogados laboralistas'),
    image: String(data.image ?? ''),
    imageAlt: String(data.imageAlt ?? ''),
    keywords: Array.isArray(data.keywords) ? data.keywords.map(String) : [],
    featured: Boolean(data.featured),
    readingMinutes: readingMinutes(content),
    content,
  };
}

export function getAllPosts(): Post[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((fileName) => /\.mdx?$/.test(fileName))
    .map(parseFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getCategories(posts: PostMeta[]): string[] {
  return Array.from(new Set(posts.map((post) => post.category))).sort();
}

export function getRelatedPosts(post: PostMeta, limit = 3): PostMeta[] {
  const others = getAllPosts().filter((candidate) => candidate.slug !== post.slug);
  const sameCategory = others.filter((candidate) => candidate.category === post.category);
  return [
    ...sameCategory,
    ...others.filter((candidate) => candidate.category !== post.category),
  ].slice(0, limit);
}
