import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import { useState } from 'react';
import CommentBox from '../../components/blog/CommentBox';
import Footer from '../../components/layout/footer';

const JobsPage = () => {
  const [Tabs, setTabs] = useState([
    'Faculty Positions',
    'Robotics & AI',
    'Counsellor',
    'Telecaller',
    'Marketing Executives',
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Join Our Team" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1><a href="#">Join Our Team at Zenith Institute</a></h1>
                <ul>
                  <li><i className="bi bi-person-fill"></i> <a href="#">by Zenith Institute</a></li>
                  <li><i className="bi bi-calendar3"></i> <a href="#">Updated April 2025</a></li>
                </ul>
                <p>
                  At Zenith Institute, we believe in nurturing talent and inspiring young minds. If you&apos;re passionate about education and looking to be a part of a dynamic and growing academic environment, we invite you to explore our current job openings below.
                </p>
              </div>

              <div className="blog-details-wrap">
                <div className="details-post-content">

                  <h1>Faculty Positions</h1>
                  <p><strong>Subjects Open:</strong> Mathematics, Chemistry, Biology, Physics</p>
                  <p><strong>Eligibility:</strong> Master’s degree in the respective subject | Minimum 2–3 years of teaching experience</p>
                  <p><strong>Job Role:</strong> Teach Foundation Classes (Grades 7–10), Train for IIT-JEE/NEET (Grades 11–12/pass-outs), Create study material & assessments</p>

                  <h1>Faculty – Robotics & AI</h1>
                  <p><strong>Eligibility:</strong> B.Tech/B.E. in CSE, ECE, or any circuital branch | Experience or interest in Robotics, AI, Embedded Systems</p>
                  <p><strong>Job Role:</strong> Teach school students Robotics, AI & Coding | Conduct project-based learning & workshops | Guide student innovations</p>

                  <h1>Counsellor</h1>
                  <p><strong>Eligibility:</strong> Graduate in any discipline | 2–3 years in student counselling or academic support</p>
                  <p><strong>Job Role:</strong> Guide students/parents in course selection | Handle inquiries & assist with admissions | Maintain student communication</p>

                  <h1>Telecaller</h1>
                  <p><strong>Eligibility:</strong> Graduate in any stream | 2–3 years in telecalling or customer communication</p>
                  <p><strong>Job Role:</strong> Call leads & explain courses | Record conversations & follow-ups | Coordinate with admissions & counselling teams</p>

                  <h1>Marketing Executives</h1>
                  <p><strong>Eligibility:</strong> Graduate in any stream | 2–3 years in education marketing or related fields</p>
                  <p><strong>Job Role:</strong> Plan & run campaigns | Visit schools & promote programs | Collaborate with digital marketing for outreach</p>

                  <h2>Apply Now</h2>
                  <p>
                    If you are passionate about making a difference in the field of education, we would love to hear from you.<br />
                    <strong>Email your CV to:</strong> <a href="mailto:admin@zenithinstitute.co.in">admin@zenithinstitute.co.in</a>
                  </p>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
      <Footer/>

      <style jsx>{`
        h1, h2 {
          padding-top: 20px;
        }

        a {
          color: #0070f3;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default JobsPage;
