import EducationHeaderBottom from '../components/header/EducationBottom';
import EducationDepertment from '../components/Education/Deperments';
import EducationDetailOne from '../components/Education/DetailOne';
import EducationTestimonial from '../components/Education/EduTestimonial';
import RegisterBanner from '../components/Education/RegisterBanner';
import EducationTeacher from '../components/Education/Teachers';
import TrustedCompany from '../components/Education/TrustedCompany';
import EducationFooter from '../components/layout/EducationFooter';
import EducationHeader from '../components/layout/EducationHeader';
import posthog from 'posthog-js'
import EduFAQ from '../components/Education/EduFaq';
import AboutFutured from '../components/about/AboutFutured';
import AllCounter from '../components/services/Allcounter';
import AboutTeam from '../components/about/AboutTeam';
import Head from 'next/head';

posthog.init('phc_nmyGRxvQ6rV7nYaLfKMO4g1reR4wRpNwJS9Ajoo31FD',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
)

const Home = () => {
  return (
    <>
    <Head>
        <meta name="google-site-verification" content="2XsGYvnNPVa14c-6_blvsMGZtnKSSB970gz41j_q-1c" />
        <title># Best IITJEE, NEET Coaching - Zenith Institute </title>
        <meta name="description" content="The idea of Zenith was sparked by a mission to revolutionize competitive exam prep — challenging outdated methods and guiding students toward success in IIT JEE, WBJEE, NEET, and Foundation like never before." />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fins1.png?alt=media&token=1ee73676-393f-4a21-a614-2a799f55543e" />
        <meta property="og:image:width" content="92" />
        <meta property="og:image:height" content="92" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <header>
        <EducationHeader />
        <EducationHeaderBottom />
      </header>
      <div style={{ marginTop: '40px' }}>
      <AboutFutured/>
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
