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
import CoreTeacher from '../../components/TeacherCenterWise/CoreTeacher';
import Head from 'next/head';

const Services = () => {
  return (
    <>
    <Head>
        <title>Zenith Institute VIP Road – Best Coaching for NEET, JEE & Robotics</title>
        <meta name="description" content="Above Domino’s on VIP Road – IIT-JEE, NEET, Foundation, Robotics & Olympiads coaching with expert mentors."/>
        <meta name="keywords" content="VIP Road coaching, IIT JEE VIP Road, NEET VIP Road, Zenith VIP Road, Robotics coaching VIP Road, Olympiads VIP Road"/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fins1.png?alt=media&token=1ee73676-393f-4a21-a614-2a799f55543e" />
        <meta property="og:image:width" content="92" />
        <meta property="og:image:height" content="92" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <header>
        <Header />
        <BreadCrumb pagename="Zenith VIP Road" />
      </header>
      <SolutionArea 
        title="Welcome to Zenith <span>VIP Road</span>"
        image="/assets/images/about/VIP Road.png"
        description="Zenith VIP Road "
      />
      <AboutFutured />
      <CoreTeacher/>
      {/* <ServicePricing /> */}
      <AllCounter />
      <TestimonialClient />
      <ServiceNewsletter />
      <Footer />
    </>
  );
};
export default Services;
