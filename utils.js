import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// import remark from 'remark';
// import html from 'remark-html';

const jobsDirectory = path.join(process.cwd(), 'jobs');

export function getJobSlugs() {
  return fs.readdirSync(jobsDirectory);
}

export function getJobBySlug(slug) {
  const fullPath = path.join(jobsDirectory, slug);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data,
    content,
  };
}

export function getAllJobs() {
  const slugs = getJobSlugs();
  const jobs = slugs
    .map((slug) => getJobBySlug(slug))
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));

  return jobs;
}
