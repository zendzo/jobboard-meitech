import { useRouter } from 'next/router';
import { getJobBySlug, getJobSlugs } from '../../utils';

export default function Job({ job }) {
  const router = useRouter();

  if (!router.isFallback && !job?.slug) {
    return <p>Job not found</p>;
  }

  return (
    <div>
      <h1>{job.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: job.content }} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getJobSlugs().map((slug) => ({
    params: { slug: slug.replace(/\.md$/, '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const job = getJobBySlug(params.slug + '.md');
  return {
    props: { job },
  };
}
