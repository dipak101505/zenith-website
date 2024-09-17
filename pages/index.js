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

posthog.init('phc_nmyGRxvQ6rV7nYaLfKMO4g1reR4wRpNwJS9Ajoo31FD',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
)

const Home = () => {
  return (
    <>
      <header>
        <EducationHeader />
        <EducationHeaderBottom />
      </header>
      <TrustedCompany />
      <EducationDetailOne />
      <EducationDepertment />
      <EducationTeacher />
      <EducationTestimonial />
      <EduFAQ />
      <RegisterBanner />
      <EducationFooter />
    </>
  );
};
export default Home;
