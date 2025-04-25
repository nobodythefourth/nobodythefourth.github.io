import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.resolve('./src/posts');
const outFile = path.resolve('./src/data/blogPosts.generated.json');

const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
const posts = files.map(filename => {
  const filePath = path.join(postsDir, filename);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return {
    ...data,
    slug: data.slug || filename.replace(/\.md$/, ''),
    content,
  };
});

fs.writeFileSync(outFile, JSON.stringify(posts, null, 2));
console.log(`Generated ${outFile} with ${posts.length} posts.`);
