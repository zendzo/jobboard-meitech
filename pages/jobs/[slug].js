import { useRouter } from "next/router";
import { getJobBySlug, getJobSlugs } from "../../utils";
import RootLayout from "@/app/layout";
import Markdown from "react-markdown";

export default function Job({ job }) {
  const router = useRouter();

  if (!router.isFallback && !job?.slug) {
    return <p>Job not found</p>;
  }

  return (
    <RootLayout>
      <div className="container">
        {/* Recent Jobs */}
        <div className="eleven columns">
          <div className="padding-right">
            {/* Company Info */}
            <div className="company-info">
              <img src="/images/company-logo.png" alt="" />
              <div className="content">
                <h4>{job.frontmatter.title}</h4>
                <span>
                  <a href="#">
                    <i className="fa fa-link" /> Website
                  </a>
                </span>
                <span>
                  <a href="#">
                    <i className="fa fa-twitter" /> @kingrestaurants
                  </a>
                </span>
              </div>
              <div className="clearfix" />
            </div>
            <div dangerouslySetInnerHTML={{ __html: job.content }} />

            {/* <p className="margin-reset">
              The Food Service Specialist ensures outstanding customer service
              is provided to food customers and that all food offerings meet the
              required stock levels and presentation standards. Beginning your
              career as a Food Steward will give you a strong foundation in
              Speedway’s food segment that can make you a vital member of the
              front line team!
            </p>
            <br />
            <p>
              The <strong>Food Service Specialist</strong> will have
              responsibilities that include:
            </p>
            <ul className="list-1">
              <li>
                Executing the Food Service program, including preparing and
                presenting our wonderful food offerings to hungry customers on
                the go!
              </li>
              <li>
                Greeting customers in a friendly manner and suggestive selling
                and sampling items to help increase sales.
              </li>
              <li>
                Keeping our Store food area looking terrific and ready for our
                valued customers by managing product inventory, stocking,
                cleaning, etc.
              </li>
              <li>
                We’re looking for associates who enjoy interacting with people
                and working in a fast-paced environment!
              </li>
            </ul>
            <br />
            <h4 className="margin-bottom-10">Job Requirment</h4>
            <ul className="list-1">
              <li>
                Excellent customer service skills, communication skills, and a
                happy, smiling attitude are essential.
              </li>
              <li>
                Must be available to work required shifts including weekends,
                evenings and holidays.
              </li>
              <li>
                Must be able to perform repeated bending, standing and reaching.
              </li>
              <li> Must be able to occasionally lift up to 50 pounds</li>
            </ul> */}
          </div>
        </div>
        {/* Widgets */}
        <div className="five columns">
          {/* Sort by */}
          <div className="widget">
            <h4>Overview</h4>
            <div className="job-overview">
              <ul>
                <li>
                  <i className="fa fa-map-marker" />
                  <div>
                    <strong>Location:</strong>
                    <span>20180 Outer Dr Dearborn, MI 48124</span>
                  </div>
                </li>
                <li>
                  <i className="fa fa-user" />
                  <div>
                    <strong>Job Title:</strong>
                    <span>Food Service Specialist</span>
                  </div>
                </li>
                <li>
                  <i className="fa fa-clock-o" />
                  <div>
                    <strong>Hours:</strong>
                    <span>40h / week</span>
                  </div>
                </li>
                <li>
                  <i className="fa fa-money" />
                  <div>
                    <strong>Rate:</strong>
                    <span>$9.50 - $12.50 / hour</span>
                  </div>
                </li>
              </ul>
              <a href="#small-dialog" className="popup-with-zoom-anim button">
                Apply For This Job
              </a>
              <div
                id="small-dialog"
                className="zoom-anim-dialog mfp-hide apply-popup"
              >
                <div className="small-dialog-headline">
                  <h2>Apply For This Job</h2>
                </div>
                <div className="small-dialog-content">
                  <form action="#" method="get">
                    <input
                      type="text"
                      placeholder="Full Name"
                      defaultValue=""
                    />
                    <input
                      type="text"
                      placeholder="Email Address"
                      defaultValue=""
                    />
                    <textarea
                      placeholder="Your message / cover letter sent to the employer"
                      defaultValue={""}
                    />
                    {/* Upload CV */}
                    <div className="upload-info">
                      <strong>Upload your CV (optional)</strong>{" "}
                      <span>Max. file size: 5MB</span>
                    </div>
                    <div className="clearfix" />
                    <label className="upload-btn">
                      <input type="file" multiple="" />
                      <i className="fa fa-upload" /> Browse
                    </label>
                    <span className="fake-input">No file selected</span>
                    <div className="divider" />
                    <button className="send">Send Application</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Widgets / End */}
      </div>
    </RootLayout>
  );
}

export async function getStaticPaths() {
  const paths = getJobSlugs().map((slug) => ({
    params: { slug: slug.replace(/\.md$/, "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const job = getJobBySlug(params.slug + ".md");
  return {
    props: { job },
  };
}
