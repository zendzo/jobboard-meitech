import Link from 'next/link';
import { getAllJobs } from '../utils';
import styles from '../app/page.module.css'

export default function Home({jobs}) {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <h1>Job Listings</h1>
          <ul>
            {jobs.map((job) => (
              <li key={job.slug}>
                <Link href={`/jobs/${job.slug.replace(/\.md$/, '')}`}>
                  <>{job.frontmatter.title}</>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const jobs = getAllJobs();
  return {
    props: { jobs },
  };
}
