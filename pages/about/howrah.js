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

const Services = () => {
  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Zenith Howrah" />
      </header>
      <SolutionArea />
      <AboutFutured />
      <CoreTeacher/>
      <ServicePricing />
      <AllCounter />
      <TestimonialClient />
      <ServiceNewsletter />
      <Footer />
    </>
  );
};
export default Services;
