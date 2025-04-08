import Header from '../components/layout/header';
import BreadCrumb from '../components/header/breadcrumb';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CommentBox from '../components/blog/CommentBox';
import Image from 'next/image';

const Olympiad = () => {
  const [Tabs, setTabs] = useState([
    'Olympiad',
    'Science Olympiad',
    'NSO',
    'NSTSE',
    'NTSE',
    'Class 6',
    'Class 7',
    'Class 8',
    'Class 9',
    'Class 10',
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Science Olympiad Preparation" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>
                  <a href="#">Science Olympiad Classes for Class 6 to 10</a>
                </h1>
                <ul>
                  <li>
                    <i className="bi bi-person-fill"></i>{' '}
                    <a href="#">by Zenith LMS</a>
                  </li>
                  <li>
                    <i className="bi bi-calendar3"></i>{' '}
                    <a href="#">Updated April 2025</a>
                  </li>
                </ul>
                <div className="details-post-img">
                  <Image
                    className="w-100"
                    src="/assets/images/olympiad/banner.png"
                    alt="Science Olympiad Preparation"
                    width={700}
                    height={300}
                  />
                </div>
                <p>
                  Our Science Olympiad preparation program is designed to ignite curiosity and sharpen analytical thinking in students. We focus on competitive exams such as NSO, NSTSE, NTSE, and other school-level science Olympiads.
                </p>
              </div>
              <div className="blog-details-wrap">
                <div className="details-post-content">
                  <h1>Why Choose Our Science Olympiad Coaching?</h1>
                  <ul>
                    <li><strong>Subject-Focused Syllabus:</strong> Aligned with national-level Science Olympiad patterns.</li>
                    <li><strong>Conceptual Mastery:</strong> Emphasis on core science principles and their applications.</li>
                    <li><strong>Practice Sheets & Mock Tests:</strong> Regular assignments to track growth and performance.</li>
                    <li><strong>Doubt Solving Sessions:</strong> Clear concepts through interactive problem-solving classes.</li>
                  </ul>

                  <h1>What Are Science Olympiads?</h1>
                  <p>
                    Science Olympiads are competitive exams that evaluate students’ understanding of Physics, Chemistry, Biology, and General Science. These exams promote scientific temperament and problem-solving aptitude among school students.
                  </p>

                  <h1>Types of Science Olympiads We Cover</h1>
                  <ul>
                    <li><strong>NSO (National Science Olympiad)</strong></li>
                    <li><strong>NSTSE (National Level Science Talent Search Exam)</strong></li>
                    <li><strong>NTSE (National Talent Search Examination – Science Segment)</strong></li>
                    <li><strong>ISO (International Science Olympiad)</strong></li>
                    <li><strong>Level-wise school science contests and talent search exams</strong></li>
                  </ul>

                  <h1>Benefits of Science Olympiad Exams</h1>
                  <ul>
                    <li>Builds strong scientific foundation and subject confidence.</li>
                    <li>Improves experimental, analytical, and logical thinking.</li>
                    <li>Better school exam scores through enhanced conceptual clarity.</li>
                    <li>Scholarship and recognition at state and national levels.</li>
                  </ul>

                  {/* <div
                    style={{
                      width: "50vw",
                      height: "600px",
                      margin: "5px 0",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      src="https://app.vignamlabs.com/openSimulation/SIM-olympiad-demo"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      id="iframe"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Science Olympiad Simulation"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML =
                          "Failed to load simulation. Please check your internet connection or try again later.";
                      }}
                    />
                  </div> */}
                </div>
              </div>
              <CommentBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Olympiad;
