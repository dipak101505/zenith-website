import BreadCrumb from '../../components/header/breadcrumb';
import Header from '../../components/layout/header';
import AllCounter from '../../components/services/Allcounter';
import ServicePricing from '../../components/services/AllPricing';
import AllServices from '../../components/services/Allservices';
import ServiceNewsletter from '../../components/services/Newsletter';
import SolutionArea from '../../components/services/solutionsection';
import TestimonialClient from '../../components/services/TestimonialClient';
import Footer from '../../components/layout/footer';
import AboutFutured from '../../components/about/AboutFutured';
import PBTeacher from '../../components/TeacherCenterWise/PBTeacher';
import Head from 'next/head';

const Services = () => {
  return (
    <>
    <Head>
        <title>Zenith Phoolbagan - Best Coaching Institute in Kolkata for IITJEE | NEET | WBJEE |Foundation |AI & Robotics </title>
        <meta name="description" content="The idea of Zenith was sparked by a mission to revolutionize competitive exam prep — challenging outdated methods and guiding students toward success in IIT JEE, WBJEE, NEET, and Foundation like never before." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <header>
        <Header />
        <BreadCrumb pagename="Zenith Phoolbagan" />
      </header>
      <SolutionArea 
        title="Welcome to Zenith <span>Phoolbagan</span>"
        image="/assets/images/about/phoolbagan.png"
        description="Zenith Phoolbagan "
      />
      <AboutFutured />
      <PBTeacher/>
      {/* <ServicePricing /> */}
      <AllCounter />
      <TestimonialClient />
      <ServiceNewsletter />
      <Footer />
    </>
  );
};
export default Services;
