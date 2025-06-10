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
import CdnTeacher from '../../components/TeacherCenterWise/CdnTeacher';
import Head from 'next/head';

const Services = () => {
  return (
    <>
    <Head>
        <title>Zenith Institute Chandannagar – Best JEE, NEET, Foundation Coaching</title>
        <meta name="description" content="Coaching for IIT-JEE, NEET, Foundation & Robotics at Zenith Chandannagar near Sunity Poly Clinic. Strong academic support."/>
        <meta name="keywords" content="Chandannagar coaching, IIT JEE Chandannagar, NEET coaching Chandannagar, Robotics Chandannagar, Zenith Chandannagar"/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fins1.png?alt=media&token=1ee73676-393f-4a21-a614-2a799f55543e" />
        <meta property="og:image:width" content="92" />
        <meta property="og:image:height" content="92" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <header>
        <Header />
        <BreadCrumb pagename="Zenith Chandannnagar" />
      </header>
      <SolutionArea 
        title="Welcome to Zenith <span>Chandannagar</span>"
        image="/assets/images/about/Chandannagar.png"
        description="Zenith Chandannnagar "
      />
      <AboutFutured />
      <CdnTeacher/>
      {/* <ServicePricing /> */}
      <AllCounter />
      <TestimonialClient />
      <ServiceNewsletter />
      <Footer />
    </>
  );
};
export default Services;
