import FuturedItem from './Futured/FuturedItem';

const AboutFutured = () => {
  return (
    <>
      <div className="featured-area positioning  pb-76">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div
                className="hrdd-section-title text-center wow animate fadeInDown"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <h1>
                  <span>Courses</span> We Provide
                </h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-50">
            <FuturedItem
              icon="/assets/images/icon/featured-icon-1.png"
              title="IIT JEE"
              desc="Engineering aspirants preparing for IITJEE, WBJEE, BITSAT, COMEDK etc."
            />

            <FuturedItem
              icon="/assets/images/icon/featured-icon-2.png"
              title="NEET"
              desc="Medical aspirants aiming to get into AIIMS and Govt Medical college."
            />

            <FuturedItem
              icon="/assets/images/icon/featured-icon-3.png"
              title="Robotics & AI"
              desc="This course sparks curiosity in science and math for early learners in grades 5-10."
            />

            <FuturedItem
              icon="/assets/images/icon/featured-icon-4.png"
              title="Class 7-10"
              desc="This course is apt for students aspiring for Engineering & Medical Entrance Exams."
            />

            <FuturedItem
              icon="/assets/images/icon/featured-icon-5.png"
              title="Olympiad"
              desc="Foundation courses are apt for students taking Science & Maths Olympiads."
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutFutured;
