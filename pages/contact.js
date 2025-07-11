import React, { useState, useEffect } from 'react';
import BreadCrumb from '../components/header/breadcrumb';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import StudentForm from '../components/header/StudentForm'; 
import FuturedItem from '../components/about/Futured/FuturedItem';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowForm(true);
      }, 1500);
  
      return () => clearTimeout(timer);
    }, []);
  
    const handleActionButtonClick = (e) => {
      e?.preventDefault();
      setShowForm(true);
    };
  
    const handleCloseForm = () => {
      setShowForm(false);
    };
  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Contact" />
        <meta name="google-site-verification" content="pQ2uQZlh9difEF6x0ctRrH2c17yBbXtDG10mYT7h2Zw" />
      </header>

      <div className="contact-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <form
                id="contact-form"
                action="mail.php"
                method="POST"
                className="contact-input"
              >
                <div className="contact-title">
                  <h1>Our Centres</h1>
                </div>
                <div className="row justify-content-center mt-50">
            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-1.png?alt=media&token=450a2226-0579-4d1f-a18c-b42701aa6cc2"
              title="Saltlake"
              desc="BK 61, Salt Lake Bypass, near Water Tank, No 8, Bidhannagar, West Bengal 700091 (Near Karunamoyee)"
              phone="9051509444"
            />

            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-2.png?alt=media&token=ff0569aa-55d0-4d4d-89ba-9d1340dfdc1d"
              title="Phoolbagan"
              desc="1st Floor, 263, Hem Chandra Naskar Road, Kolkata, West Bengal 700010
(Near Phoolbagan Metro)"
              phone="9051509444"
            />

            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-3.png?alt=media&token=8c945ab4-9c2b-4c43-9a9d-208137f25e43"
              title="Howrah"
              desc="Gokul Apartment, Block B, 1st Floor, 14 Watkins Lane, Howrah, West Bengal - 711101
(Near Howrah AC Market)."
              phone="9051509444"
            />

            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-4.png?alt=media&token=e65c9cfe-8ef6-45cd-acb5-b951370e6dc3"
              title="Andul"
              desc="Andul Road, Andul Mouri Rd, near Andul Purbapara Street, Andul, Howrah, West Bengal 711302
(Near Dr Lal Path Lab Andul)."
              phone="810000 7626"
            />

            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-5.png?alt=media&token=24aec600-e1ea-4a96-8114-592b7b1642ee"
              title="Serampore"
              desc="623, Grand Trunk Rd, Battala, Serampore, Hooghly, West Bengal 712201
(Opp Anjali Jewellers)."
              phone="9123357543"
            />
            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-2.png?alt=media&token=ff0569aa-55d0-4d4d-89ba-9d1340dfdc1d"
              title="Chandannagar"
              desc="Bara Bazar, State Bank lane, Opposite to Sunity Poly Clinic, Barabazar Chandannagar West Bengal - 712136."
              phone="8777388316"
            />
            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-5.png?alt=media&token=24aec600-e1ea-4a96-8114-592b7b1642ee"
              title="Mogra"
              desc="Mogra Triveni Road, P.O & P.S - Mogra, Dist - Hooghly, West Bengal – 712 148."
              phone="9123357543"
            />
            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-2.png?alt=media&token=ff0569aa-55d0-4d4d-89ba-9d1340dfdc1d"
              title="Rampurhat"
              desc="New Hospital Road, Near Rampurhat Govt. Medical College & Hospital, Rampurhat, W.B.-731224 (Near New Janseva Diagnostic Centre)"
              phone="8777434458"
            />
            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-2.png?alt=media&token=ff0569aa-55d0-4d4d-89ba-9d1340dfdc1d"
              title="Dunlop"
              desc="Bhajan Complex, Near Dunlop Old Gurudwara, Behind Monginis, Dunlop, Saket Nagar, Bonhooghly Government Colony, Kolkata, Baranagar, West Bengal 700108, India."
              phone="9836644061"
            />
            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-3.png?alt=media&token=8c945ab4-9c2b-4c43-9a9d-208137f25e43"
              title="VIP Road"
              desc="137 VIP Road, P.S Magnum, Above Domino’s, Unit No. 110/109, PIN- 700052"
              phone="9903312612"
            />
            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-1.png?alt=media&token=450a2226-0579-4d1f-a18c-b42701aa6cc2"
              title="Raiganj"
              desc="Raiganj, Uttardinajpur, West Bengal -733134 (Near NBSTC Bus stand)"
              phone="9933990557"
            />
            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-3.png?alt=media&token=8c945ab4-9c2b-4c43-9a9d-208137f25e43"
              title="Balurghat"
              desc="Balurghat High School Vocational Campus opposite of CMOH office Gate No - 2, Balurghat, West Bengal - 733101"
              phone="9933173579"
            />

            <FuturedItem
                icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-5.png?alt=media&token=24aec600-e1ea-4a96-8114-592b7b1642ee"
                title="Berhampore"
                desc="119,R N TAGORE RD. LALDIGHI, BERHAMPORE, P C CHANDRA BUILDING, (Beside Berhampore Municipality)."
                phone="7076299403/9476179519"
            />
            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-2.png?alt=media&token=ff0569aa-55d0-4d4d-89ba-9d1340dfdc1d"
              title="Agartala"
              desc="1st & 2nd Floor, Blood Mouth Club, Ramnagar Road no.2, (Before SBI RMS Chowmuhuni Branch), P.O.- Ramnagar, P.S.- West Tripura, Agartala-799002
"
              phone="8132996319"
            />

            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-3.png?alt=media&token=8c945ab4-9c2b-4c43-9a9d-208137f25e43"
              title="Gariahat"
              desc="Gariahat Crossing"
              phone="9051509444"
            />

          </div>
              </form>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mobt-50">
              <div className="cart-wrap">
                <div className="single-cart">
                  <div className="cart-title">
                    <h2>Contact Information</h2>
                  </div>
                  <div className="contact-details">
                    <div className="contact-details-title">
                      <h3>Contact Info</h3>
                    </div>
                    <div className="contact-details-info">
                      <ul>
                        <li>
                          <i className="bi bi-envelope"></i>{' '}
                          <a href="mailto:support@zenithinstitute.co.in">
                            support@zenithinstitute.co.in
                          </a>
                        </li>
                        <li>
                          <i className="bi bi-telephone"></i>{' '}
                          <a href="tel:01761111456">+91 905150 9444 </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="contact-details">
                    <div className="contact-details-title">
                      <h3>Head Office</h3>
                    </div>
                    <div className="contact-details-info">
                      <ul>
                        <li>
                          <i className="bi bi-geo-alt-fill"></i>Block B, 1st Floor, Gokul Apartment, 14, Watkins Ln, near Howrah Motor Training, Babudanga, Pilkhana, Howrah, West Bengal 711101
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-area mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="location-map mt-100">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.6402798935696!2d88.33860187530105!3d22.59255347947747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277ea32fd9ac3%3A0x390cc6d67fa2d5e1!2sZenith%20Institute%20Howrah-%20IITJEE%20%7C%20NEET%20%7C%20FOUNDATION-%20Best%20Coaching%20In%20Kolkata!5e0!3m2!1sen!2sin!4v1743589545750!5m2!1sen!2sin" 
                style={{ border: 0 }}
                aria-hidden="false"
                tabIndex="0"
                allowFullScreen="">
              </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {showForm && <StudentForm onClose={handleCloseForm} />}
    </>
  );
};
export default Contact;
