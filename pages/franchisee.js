import React, { useState, useEffect } from "react";
import Header from "../components/layout/header";
import BreadCrumb from "../components/header/breadcrumb";
import EducationFooter from "../components/layout/EducationFooter";
import StudentForm from "../components/header/StudentForm";
import Image from "next/image";

const Franchisee = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 3000); // Show form after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleContactClick = () => {
    setShowForm(true);
  };

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Franchisee Opportunities" />
      </header>

      <div className="blog-details-area">
        <div style={{ maxWidth: "1200px" }} className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1 className="details-post-title">
                  Join Zenith Institute - Franchisee Partnership Program
                </h1>
                <ul>
                  <li>
                    <i className="bi bi-person-fill"></i> by Zenith Institute
                  </li>
                  <li>
                    <i className="bi bi-calendar3"></i> Updated December 2024
                  </li>
                </ul>

                <div className="details-post-img">
                  <Image
                    className="w-100"
                    src="/assets/images/education/banner.png"
                    alt="Zenith Institute Franchisee Program"
                    width={616}
                    height={300}
                  />
                </div>

                <p>
                  <strong>Zenith Institute</strong> is a leading educational
                  institution specializing in competitive exam preparation for
                  IIT JEE, NEET, WBJEE, Foundation courses, and Olympiads. With
                  a proven track record of success and a strong brand presence,
                  we are now offering franchisee opportunities to passionate
                  educators and entrepreneurs who want to be part of our mission
                  to transform education.
                </p>

                <h2>Why Choose Zenith Institute Franchisee?</h2>

                <h3>🏆 Proven Success Record</h3>
                <ul>
                  <li>Established brand with excellent student results</li>
                  <li>High success rates in IIT JEE, NEET, and WBJEE</li>
                  <li>Strong reputation in competitive exam preparation</li>
                  <li>Growing network of successful centers</li>
                </ul>

                <h3>📚 Comprehensive Course Portfolio</h3>
                <ul>
                  <li>
                    <strong>IIT JEE:</strong> Complete preparation for JEE Main
                    & Advanced
                  </li>
                  <li>
                    <strong>NEET:</strong> Medical entrance exam coaching
                  </li>
                  <li>
                    <strong>WBJEE:</strong> West Bengal Joint Entrance
                    Examination
                  </li>
                  <li>
                    <strong>Foundation:</strong> Classes 7-10 foundation courses
                  </li>
                  <li>
                    <strong>Olympiads:</strong> SOF and other competitive exams
                  </li>
                  <li>
                    <strong>Robotics & AI:</strong> Modern technology education
                  </li>
                </ul>

                <h3>🎯 What We Provide to Franchisees</h3>

                <h4>Brand Support</h4>
                <ul>
                  <li>Complete branding materials and guidelines</li>
                  <li>Marketing support and promotional materials</li>
                  <li>Digital marketing assistance</li>
                  <li>Website development support</li>
                </ul>

                <h4>Academic Excellence</h4>
                <ul>
                  <li>Comprehensive study materials</li>
                  <li>Regular curriculum updates</li>
                  <li>Online learning management system</li>
                  <li>Mock test series and assessments</li>
                  <li>Faculty training programs</li>
                </ul>

                <h4>Operational Support</h4>
                <ul>
                  <li>Center setup guidance</li>
                  <li>Staff recruitment assistance</li>
                  <li>Regular training workshops</li>
                  <li>Quality assurance programs</li>
                  <li>Student counseling support</li>
                </ul>

                <h4>Technology Integration</h4>
                <ul>
                  <li>Learning Management System (LMS)</li>
                  <li>Online test platform</li>
                  <li>Student progress tracking</li>
                  <li>Digital content library</li>
                  <li>Mobile app support</li>
                </ul>

                <h2>Franchisee Requirements</h2>

                <h3>Space Requirements</h3>
                <ul>
                  <li>Minimum 2000-3000 sq ft space</li>
                  <li>Well-ventilated classrooms</li>
                  <li>Library and study area</li>
                  <li>Administrative office space</li>
                  <li>Parking facilities preferred</li>
                </ul>

                <h3>Investment Details</h3>
                <ul>
                  <li>Initial franchisee fee</li>
                  <li>Setup and infrastructure costs</li>
                  <li>Working capital requirements</li>
                  <li>Marketing and promotion budget</li>
                  <li>Staff recruitment and training costs</li>
                </ul>

                <h3>Ideal Franchisee Profile</h3>
                <ul>
                  <li>Educational background or teaching experience</li>
                  <li>Passion for education and student development</li>
                  <li>Business management skills</li>
                  <li>Local market knowledge</li>
                  <li>Commitment to quality education</li>
                </ul>

                <h2>Franchisee Locations Available</h2>
                <p>
                  We are currently looking for franchisee partners in the
                  following areas:
                </p>

                <h3>West Bengal</h3>
                <ul>
                  <li>Kolkata suburbs</li>
                  <li>Durgapur</li>
                  <li>Asansol</li>
                  <li>Siliguri</li>
                  <li>Malda</li>
                  <li>Midnapore</li>
                  <li>Burdwan</li>
                  <li>Cooch Behar</li>
                </ul>

                <h3>Other States</h3>
                <ul>
                  <li>Assam - Guwahati, Dibrugarh</li>
                  <li>Tripura - Agartala</li>
                  <li>Odisha - Bhubaneswar, Cuttack</li>
                  <li>Jharkhand - Ranchi, Dhanbad</li>
                  <li>Bihar - Patna, Muzaffarpur</li>
                </ul>

                <h2>Success Stories</h2>
                <p>
                  Our existing franchisee partners have achieved remarkable
                  success with consistent student enrollments, excellent
                  results, and strong community presence. Join our network of
                  successful education entrepreneurs who are making a difference
                  in students&apos; lives while building profitable businesses.
                </p>

                <h2>Application Process</h2>
                <ol>
                  <li>
                    <strong>Initial Inquiry:</strong> Contact us with your
                    interest and location details
                  </li>
                  <li>
                    <strong>Application Submission:</strong> Fill out detailed
                    franchisee application form
                  </li>
                  <li>
                    <strong>Evaluation:</strong> Our team will evaluate your
                    application and location
                  </li>
                  <li>
                    <strong>Meeting:</strong> Face-to-face or virtual meeting
                    with our franchisee team
                  </li>
                  <li>
                    <strong>Site Visit:</strong> Joint evaluation of proposed
                    location
                  </li>
                  <li>
                    <strong>Agreement:</strong> Signing of franchisee agreement
                  </li>
                  <li>
                    <strong>Setup & Training:</strong> Complete setup and staff
                    training
                  </li>
                  <li>
                    <strong>Launch:</strong> Grand opening with marketing
                    support
                  </li>
                </ol>

                <h2>Get Started Today</h2>
                <p>
                  Ready to join the Zenith Institute family and make a positive
                  impact on students&apos; futures? Contact us today to learn
                  more about our franchisee opportunities and start your journey
                  as an education entrepreneur.
                </p>

                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    padding: "2rem",
                    borderRadius: "8px",
                    margin: "2rem 0",
                    textAlign: "center",
                  }}
                >
                  <h3 style={{ color: "#cc6600", marginBottom: "1rem" }}>
                    Ready to Partner with Zenith Institute?
                  </h3>
                  <p style={{ marginBottom: "1.5rem" }}>
                    Take the first step towards owning a successful education
                    franchise. Get detailed information about investment,
                    support, and opportunities in your area.
                  </p>
                  <button
                    onClick={handleContactClick}
                    style={{
                      backgroundColor: "#cc6600",
                      color: "white",
                      padding: "12px 30px",
                      border: "none",
                      borderRadius: "5px",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                    }}
                  >
                    Contact Us for Franchisee Details
                  </button>
                </div>

                <h2>Contact Information</h2>
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "1.5rem",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                  }}
                >
                  <h4>Zenith Institute - Franchisee Division</h4>
                  <p>
                    <strong>Phone:</strong> 9051509444
                  </p>
                  <p>
                    <strong>Email:</strong> zenithinsti@gmail.com
                  </p>
                  <p>
                    <strong>Address:</strong> Head Office - West Bengal, India
                  </p>
                  <p>
                    <strong>Business Hours:</strong> Monday to Saturday, 9:00 AM
                    - 6:00 PM
                  </p>
                </div>

                <h2>Frequently Asked Questions</h2>

                <h3>
                  Q1. What is the minimum investment required for a Zenith
                  Institute franchisee?
                </h3>
                <p>
                  The investment varies based on location and size of the
                  center. Contact us for detailed investment information
                  specific to your area.
                </p>

                <h3>
                  Q2. Do I need teaching experience to become a franchisee?
                </h3>
                <p>
                  While teaching experience is beneficial, it&apos;s not
                  mandatory. We provide comprehensive training and support to
                  help you succeed.
                </p>

                <h3>Q3. What kind of ongoing support is provided?</h3>
                <p>
                  We provide continuous support including academic updates,
                  marketing assistance, staff training, and operational
                  guidance.
                </p>

                <h3>
                  Q4. How long does it take to set up a franchisee center?
                </h3>
                <p>
                  Typically, it takes 2-3 months from agreement signing to
                  center launch, depending on space availability and setup
                  requirements.
                </p>

                <h3>
                  Q5. Is there any territorial protection for franchisees?
                </h3>
                <p>
                  Yes, we provide territorial exclusivity within a defined
                  radius to protect your business interests.
                </p>

                <h3>Q6. What marketing support is provided?</h3>
                <p>
                  We provide marketing materials, digital marketing support,
                  local advertising guidance, and promotional campaign
                  assistance.
                </p>

                <div
                  style={{
                    backgroundColor: "#e7f3ff",
                    padding: "1.5rem",
                    borderLeft: "4px solid #0066cc",
                    margin: "2rem 0",
                  }}
                >
                  <h4 style={{ color: "#0066cc", marginBottom: "1rem" }}>
                    📞 Ready to Take the Next Step?
                  </h4>
                  <p style={{ marginBottom: "0" }}>
                    Don&apos;t miss this opportunity to be part of India&apos;s
                    growing education sector. Contact us today to discuss
                    franchisee opportunities in your area and get detailed
                    business projections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EducationFooter />
      {showForm && <StudentForm onClose={handleCloseForm} />}
    </>
  );
};

export default Franchisee;
