import EducationHeaderBottom from "../components/header/EducationBottom";
import EducationDepertment from "../components/Education/Deperments";
import EducationDetailOne from "../components/Education/DetailOne";
import EducationTestimonial from "../components/Education/EduTestimonial";
import RegisterBanner from "../components/Education/RegisterBanner";
import EducationTeacher from "../components/Education/Teachers";
import TrustedCompany from "../components/Education/TrustedCompany";
import EducationFooter from "../components/layout/EducationFooter";
import EducationHeader from "../components/layout/EducationHeader";
import posthog from "posthog-js";
import EduFAQ from "../components/Education/EduFaq";
import AboutFutured from "../components/about/AboutFutured";
import AllCounter from "../components/services/Allcounter";
import AboutTeam from "../components/about/AboutTeam";
import Head from "next/head";

posthog.init("phc_nmyGRxvQ6rV7nYaLfKMO4g1reR4wRpNwJS9Ajoo31FD", {
  api_host: "https://us.i.posthog.com",
  person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
});

const Home = () => {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-492YKX9M6Z"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-492YKX9M6Z');
            `,
          }}
        />
        <meta
          name="google-site-verification"
          content="IyADBMFayncRyUFoEv7rEejCgc-70g0o7B6VAg92Xhg"
        />
        <title># Best IITJEE, NEET Coaching - Zenith Institute </title>
        <meta
          name="description"
          content="Zenith Institute is a leading coaching center for IIT JEE, NEET, Foundation, Olympiads, and Robotics/AI across West Bengal & Tripura. Expert faculty, result-oriented teaching, smart classrooms, and personalized mentoring."
        />
        <meta
          name="keywords"
          content="Coaching for Class 8, Class 9, Class 10, Class 11, Class 12, NEET Preparation, JEE Main and Advanced Classes, Olympiad Preparation, Foundation Courses, Premier NEET Institutes, Best JEE Tutorials, Competitive Exam Training, Advanced Science Coaching, Top Ranked Coaching Institutes, AI & Robotics, Best Coaching center for  IITJEE NEET in Kolkata, Best Coaching center for IITJEE NEET near me, Best Coaching center for  IITJEE NEET in Howrah"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fins1.png?alt=media&token=1ee73676-393f-4a21-a614-2a799f55543e"
        />
        <meta property="og:image:width" content="92" />
        <meta property="og:image:height" content="92" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://www.zenithinstitute.co.in" />
      </Head>
      <header>
        <EducationHeader />
        <EducationHeaderBottom />
      </header>
      <div style={{ marginTop: "40px" }}>
        <AboutFutured />
      </div>
      <AllCounter />
      <EducationDetailOne />
      <EducationDepertment />
      <AboutTeam />
      {/* <EducationTeacher /> */}
      <EducationTestimonial />
      <EduFAQ />
      <RegisterBanner />
      <EducationFooter />
    </>
  );
};
export default Home;
