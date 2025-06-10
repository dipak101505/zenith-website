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
        <title>IIT JEE & NEET Coaching in Phoolbagan | Zenith Institute</title>
        <meta name="description" content="Zenith Institute Phoolbagan – Trusted coaching near Phoolbagan Metro for IIT-JEE, NEET, Foundation, and Robotics."/>
        <meta name="keywords" content="Phoolbagan coaching, IIT coaching Phoolbagan, NEET institute Phoolbagan, Robotics training Phoolbagan, Zenith Phoolbagan"/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fins1.png?alt=media&token=1ee73676-393f-4a21-a614-2a799f55543e" />
        <meta property="og:image:width" content="92" />
        <meta property="og:image:height" content="92" />
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
