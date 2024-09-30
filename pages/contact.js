import BreadCrumb from '../components/header/breadcrumb';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import FuturedItem from '../components/about/Futured/FuturedItem';

const Contact = () => {
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
              icon="/assets/images/icon/featured-icon-1.png"
              title="Saltlake"
              desc="BK 61, Salt Lake Bypass, near Water Tank, No 8, Bidhannagar, West Bengal 700091 (Near Karunamoyee)"
              phone="9051509444"
            />

            <FuturedItem
              icon="/assets/images/icon/featured-icon-2.png"
              title="PhoolBagan"
              desc="1st Floor, 263, Hem Chandra Naskar Road, Kolkata, West Bengal 700010
(Near Phoolbagan Metro)"
              phone="9051509444"
            />

            <FuturedItem
              icon="/assets/images/icon/featured-icon-3.png"
              title="Howrah"
              desc="Gokul Apartment, Block B, 1st Floor, 14 Watkins Lane, Howrah, West Bengal - 711101
(Near Howrah AC Market)."
              phone="9051509444"
            />

            <FuturedItem
              icon="/assets/images/icon/featured-icon-4.png"
              title="Andul"
              desc="Andul Road, Andul Mouri Rd, near Andul Purbapara Street, Andul, Howrah, West Bengal 711302
(Near Dr Lal Path Lab Andul)."
              phone="810000 7626"
            />

            <FuturedItem
              icon="/assets/images/icon/featured-icon-5.png"
              title="Serampore"
              desc="623, Grand Trunk Rd, Battala, Serampore, Hooghly, West Bengal 712201
(Opp Anjali Jewellers)."
              phone="9123357543"
            />
            <FuturedItem
              icon="/assets/images/icon/featured-icon-5.png"
              title="Chandannagar"
              desc="540, Mankundu Station Rd, Near Pirtala, Mahadanga Colony, Mankundu, Chandannagar, West Bengal 712139."
              phone="9123357543"
            />
            <FuturedItem
              icon="/assets/images/icon/featured-icon-5.png"
              title="Mogra"
              desc="Mogra Triveni Road, P.O & P.S - Mogra, Dist - Hooghly, West Bengal – 712 148."
              phone="9123357543"
            />
            <FuturedItem
              icon="/assets/images/icon/featured-icon-1.png"
              title="RampurHat"
              desc="New Hospital Road, Near Rampurhat Govt. Medical College & Hospital, Rampurhat, W.B.-731224 (Near New Janseva Diagnostic Centre)"
              phone="8777434458"
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
                          <i className="bi bi-geo-alt-fill"></i>14 Watkins Lane, Gokul Apartment, Block B, 1st Floor, Howrah - 711101
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
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8875746394356!2d88.34951967526091!3d22.594213385168503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a92365a7af%3A0xe02c5d246bfcabf5!2s14%20Watkins%20Ln%2C%20Gokul%20Apartment%2C%20Block%20B%2C%201st%20Floor%2C%20Howrah%2C%20West%20Bengal%20711101!5e0!3m2!1sen!2sin!4v1695127958214!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  aria-hidden="false"
                  tabIndex="0"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
