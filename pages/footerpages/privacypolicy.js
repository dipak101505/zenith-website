import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CommentBox from '../../components/blog/CommentBox';
import Image from 'next/image';
import EducationFooter from '../../components/layout/EducationFooter';

const PrivacyPolicy = () => {
  const [Tabs, setTabs] = useState([
    'Privacy Policy',
    'User Information',
    'Data Security',
    'Cookies',
    'Communication',
    'Confidentiality',
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Privacy Policy" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>
                  <a href="#">Privacy Policy</a>
                </h1>
                <ul>
                  <li>
                    <i className="bi bi-person-fill"></i>{' '}
                    <a href="#">by Zenith Institute</a>
                  </li>
                  <li>
                    <i className="bi bi-calendar3"></i>{' '}
                    <a href="#">Updated April 2025</a>
                  </li>
                </ul>
                {/* <div className="details-post-img">
                  <Image
                    className="w-100"
                    src="/assets/images/privacy/banner.png"
                    alt="Privacy Policy"
                    width={500}
                    height={300}
                  />
                </div> */}
                <p>
                  At Zenith Institute, we value your privacy and are committed to protecting the personal information you share with us through our website and applications. This policy outlines how we collect, use, and safeguard your information.
                </p>
              </div>

              <div className="blog-details-wrap">
                <div className="details-post-content">

                  <h1>Information Gathering and Usage</h1>
                  <p>When you register on our website or mobile app, we may ask for personal details such as your name, email, contact number, and address. This data helps us personalize your experience and deliver high-quality services tailored to your learning journey.</p>

                  <h4>1. Registration / Information</h4>
                  <p>
                    Information provided during registration (such as name, email, address) is used to authenticate users, provide access to content, and communicate important updates. Data may also be combined with third-party sources for service enhancement.
                  </p>

                  <h4>2. Cookies</h4>
                  <p>
                    Zenith’s website uses cookies to understand traffic patterns and improve user experience. Cookies do not access your personal data or read data on your device. You can manage cookie settings in your browser.
                  </p>

                  <h4>3. User Communications</h4>
                  <p>
                    When you contact us via forms, email, or SMS, we may retain those communications to respond appropriately and improve our services. Your contact details may also be used for service-related notifications.
                  </p>

                  <h4>4. Log Information</h4>
                  <p>
                    When you use our services, our servers automatically collect log data including IP address, browser type, device info, date/time, and pages visited. This helps us maintain system security and track performance.
                  </p>

                  <h4>5. Newsletters & Promotional Emails</h4>
                  <p>
                    We may send newsletters or promotional emails to users who opt in. You can unsubscribe anytime using the link provided in these communications.
                  </p>

                  <h4>6. Confidentiality & Third-Party Links</h4>
                  <p>
                    This policy applies only to Zenith-hosted platforms. We do not control third-party links on our website. We do not share your data with unauthorized entities and restrict access to staff on a need-to-know basis.
                  </p>

                  <h4>7. Feedback Forms</h4>
                  <p>
                    Our feedback forms may collect personal and demographic information such as name, age, location, and contact details. This data is used to improve our educational services and resolve specific issues.
                  </p>

                  <h4>8. Improvements & Research</h4>
                  <p>
                    We may use user data internally for research, product development, service improvement, and personalized learning suggestions.
                  </p>

                  <h4>9. Queries or Concerns</h4>
                  <p>
                    For any privacy-related queries or to request data deletion, please contact us at{' '}
                    <a href="mailto:admin@zenithinstitute.co.in">admin@zenithinstitute.co.in</a>.
                  </p>

                </div>
              </div>
              

              {/* <CommentBox /> */}
            </div>
          </div>
        </div>
      </div>
      <EducationFooter/>

      <style jsx>{`
        h4 {
          padding-top: 20px;
        }

        a {
          color: #0070f3;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default PrivacyPolicy;
