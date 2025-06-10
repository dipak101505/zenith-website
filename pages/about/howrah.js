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
import HwhTeacher from '../../components/TeacherCenterWise/HwhTeacher';
import Head from 'next/head';

const Services = () => {
  return (
    <>
    <Head>
        <title>Top Coaching in Howrah for JEE, NEET & Foundation | Zenith</title>
        <meta name="description" content="Zenith Institute Howrah – Coaching for IIT-JEE, NEET, Foundation & Robotics near AC Market. Best teachers and structured learning."/>
        <meta name="keywords" content="Howrah coaching, JEE Howrah, NEET Howrah, Foundation course Howrah, Zenith Howrah, Robotics Howrah"/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fins1.png?alt=media&token=1ee73676-393f-4a21-a614-2a799f55543e" />
        <meta property="og:image:width" content="92" />
        <meta property="og:image:height" content="92" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <header>
        <Header />
        <BreadCrumb pagename="Zenith Howrah" />
      </header>
      <SolutionArea />
      <AboutFutured />
      <HwhTeacher/>
      {/* <ServicePricing /> */}
      <AllCounter />
      <TestimonialClient />
      <ServiceNewsletter />
      <Footer />
    </>
  );
};
export default Services;
