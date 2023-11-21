import Link from 'next/link';
import { getAllJobs } from '../utils';
import styles from '../app/page.module.css'
import RootLayout from '@/app/layout';
import Widget from '@/app/partials/widget';

export default function Home({jobs}) {
  return (
    <RootLayout>
      <div className="eleven columns">
        <div className="padding-right">
          <ul className="job-list full">
            {jobs.map((job) => (
              <li key={job.slug}>
                <Link href={`/jobs/${job.slug.replace(/\.md$/, "")}`}>
                  <img src="images/job-list-logo-01.png" alt="" />
                  <div className="job-list-content">
                    <h4>
                      <>{job.frontmatter.title} </>
                      <span className="full-time">Full-Time</span>
                    </h4>
                    <div className="job-icons">
                      <span>
                        <i className="fa fa-briefcase" />{" "}
                        {job.frontmatter.department}
                      </span>
                      <span>
                        <i className="fa fa-map-marker" />{" "}
                        {job.frontmatter.location}
                      </span>
                      <span>
                        <i className="fa fa-calendar" /> {job.frontmatter.date}
                      </span>
                    </div>
                    <p>
                      {job.content.substr(0, 200)}
                      {"..."}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="clearfix" />
        </div>
      </div>
      <Widget />
    </RootLayout>
  );
}

export async function getStaticProps() {
  const jobs = getAllJobs();
  return {
    props: { jobs },
  };
}
