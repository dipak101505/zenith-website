import Header from '../components/layout/header';
import BreadCrumb from '../components/header/breadcrumb';
// import RecentPost from '../components/blog/RecentPosts';
// import RecentComments from '../components/blog/RecentComments';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CommentBox from '../components/blog/CommentBox';

const Foundation = () => {
  const [Tabs, setTabs] = useState([
    'CBSE',
    'ICSE',
    'Class 7',
    'Class 8',
    'Class 9',
    'Class 10',
    'Mathematics',
    'Science',
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Foundation Classes" />
      </header>

      <div  className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>
                  <a href="blog-details.html">
                    Foundation Classes for CBSE and ICSE Students
                  </a>
                </h1>
                <ul>
                  <li>
                    <i className="bi bi-person-fill"></i>{' '}
                    <a href="blog-details.html">by Zenith LMS</a>
                  </li>
                  <li>
                    <i className="bi bi-calendar3"></i>{' '}
                    <a href="blog-details.html">Updated March 2025</a>
                  </li>
                </ul>
                <div className="details-post-img">
                  <img
                    className="w-100"
                    src="/assets/images/foundation-classes/banner.png"
                    alt="Foundation Classes for CBSE and ICSE"
                  />
                </div>
                <p >
                  Welcome to the ultimate learning platform for CBSE and ICSE students in classes 7 to 10. Our foundation classes are designed to strengthen your core concepts in Mathematics, Science, and other subjects, ensuring academic excellence and preparing you for competitive exams like Olympiads, NTSE, and more.
                </p>
              </div>
              <div className="blog-details-wrap">
                <div className="details-post-content">
                  <h1>Why Choose Our Foundation Classes?</h1>
                  <p>
                    Our foundation classes are tailored to meet the unique needs of both CBSE and ICSE students. Here’s why students and parents trust us:
                  </p>
                  <ul >
                    <li>
                      <strong>Comprehensive Curriculum:</strong> Covers all essential topics for CBSE and ICSE boards.
                    </li>
                    <li>
                      <strong>Expert Faculty:</strong> Learn from experienced teachers who specialize in foundational education.
                    </li>
                    <li>
                      <strong>Interactive Learning:</strong> Engaging classes with real-life examples and practical applications.
                    </li>
                    <li>
                      <strong>Exam Preparation:</strong> Focused training for school exams, Olympiads, NTSE, and more.
                    </li>
                  </ul>

                  <h1 className="pb-2">What is CBSE?</h1>
                  <p >
                    The full form of CBSE is <strong>Central Board of Secondary Education</strong>. It is one of the most popular education boards in India, known for its structured curriculum and focus on preparing students for national-level competitive exams like JEE and NEET.
                  </p>

                  <h1 className="pb-2">What is ICSE?</h1>
                  <p  >
                    The full form of ICSE is <strong>Indian Certificate of Secondary Education</strong>. It is a private board of education in India, managed by the Council for the Indian School Certificate Examinations (CISCE). ICSE is known for its comprehensive and detailed syllabus, which emphasizes practical knowledge and analytical skills.
                  </p>

                  <h1 className="pb-2">Is ICSE and CBSE the Same?</h1>
                  <p >
                    No, ICSE and CBSE are not the same. While both are recognized education boards in India, they differ in their curriculum, teaching methodologies, and focus areas. CBSE is more focused on theoretical knowledge and national-level competitive exams, whereas ICSE emphasizes practical learning and a broader range of subjects.
                  </p>

                  <h1 className="pb-2">ICSE vs CBSE: Which is Better?</h1>
                  <p>
                    The choice between ICSE and CBSE depends on the student goals and preferences:
                  </p>
                  <ul>
                    <li>
                      <strong>CBSE:</strong> Ideal for students aiming for national-level competitive exams like JEE and NEET. It has a structured and concise syllabus.
                    </li>
                    <li>
                      <strong>ICSE:</strong> Suitable for students who want a detailed and practical approach to learning. It is also beneficial for students planning to study abroad.
                    </li>
                  </ul>

                  <div
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
                      src="https://app.vignamlabs.com/openSimulation/SIM-fb7b502d-0fee-4ad1-b753-e88dd46c654a?def_token=INST-5ccefcb8-1294-4adc-9975-a18b3c0b7c8d"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      id="iframe"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Vignam Labs Simulation"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML =
                          "Failed to load simulation. Please check your internet connection or try again later.";
                      }}
                    />
                  </div>
                </div>
              </div>

              <CommentBox />
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mobt-50">
              <div className="cart-wrap">
                {/* 
                <div className="single-cart search-cart">
                  <form action="#" className="cart-form">
                    <a href="#">
                      <i className="bi bi-search"></i>
                    </a>
                    <input type="text" placeholder="Search here..." />
                  </form>
                </div>

                <RecentPost />
                
                <RecentComments />

                <div className="single-cart">
                  <div className="cart-title">
                    <h2>Keywords</h2>
                  </div>
                  <div className="keywords-tag">
                    <ul>
                      {Tabs.map((tab) => {
                        return (
                          <li key={uuidv4()}>
                            <a href="#">{tab}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foundation;
