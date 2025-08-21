import Head from "next/head";
import Link from "next/link";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found - Zenith Institute</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Return to Zenith Institute homepage."
        />
      </Head>

      <div className="error-404-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="error-404-content text-center">
                {/* 404 Animation/Icon */}
                <div className="error-404-icon mb-4">
                  <div className="error-number">
                    <span className="four-zero">4</span>
                    <span className="zero-icon">
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="60"
                          cy="60"
                          r="55"
                          stroke="#ff8345"
                          strokeWidth="10"
                          fill="none"
                          className="rotating-circle"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="30"
                          stroke="#7bc678"
                          strokeWidth="6"
                          fill="none"
                          className="inner-circle"
                        />
                      </svg>
                    </span>
                    <span className="four-zero">4</span>
                  </div>
                </div>

                {/* Error Message */}
                <div className="error-404-text">
                  <h1 className="error-title mb-4">Oops! Page Not Found</h1>
                  <p className="error-description mb-5">
                    The page you&apos;re looking for seems to have wandered off
                    into the digital wilderness. Don&apos;t worry though - even
                    the best students sometimes take a wrong turn!
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="error-404-actions">
                  <Link href="/">
                    <a className="common-btn btn-style-1 me-3 mb-3">
                      <i className="bi bi-house-fill me-2"></i>
                      Go to Home
                    </a>
                  </Link>
                  <button
                    onClick={() => window.history.back()}
                    className="common-btn btn-style-2 mb-3"
                  >
                    <i className="bi bi-arrow-left me-2"></i>
                    Go Back
                  </button>
                </div>

                {/* Quick Links */}
                <div className="error-404-links mt-5">
                  <h5 className="mb-3">Quick Links</h5>
                  <div className="quick-links-grid">
                    <Link href="/IITJEE">
                      <a className="quick-link-item">
                        <i className="bi bi-mortarboard"></i>
                        <span>IIT JEE</span>
                      </a>
                    </Link>
                    <Link href="/NEET">
                      <a className="quick-link-item">
                        <i className="bi bi-heart-pulse"></i>
                        <span>NEET</span>
                      </a>
                    </Link>
                    <Link href="/foundation">
                      <a className="quick-link-item">
                        <i className="bi bi-building"></i>
                        <span>Foundation</span>
                      </a>
                    </Link>
                    <Link href="/olympiad">
                      <a className="quick-link-item">
                        <i className="bi bi-trophy"></i>
                        <span>Olympiad</span>
                      </a>
                    </Link>
                    <Link href="/about">
                      <a className="quick-link-item">
                        <i className="bi bi-info-circle"></i>
                        <span>About Us</span>
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a className="quick-link-item">
                        <i className="bi bi-telephone"></i>
                        <span>Contact</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="error-404-bg">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>
      </div>

      <style jsx>{`
        .error-404-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          overflow: hidden;
          padding: 60px 0;
        }

        .error-404-content {
          position: relative;
          z-index: 2;
        }

        .error-number {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 30px;
        }

        .four-zero {
          font-size: 120px;
          font-weight: 900;
          color: #ff8345;
          text-shadow: 0 10px 20px rgba(255, 131, 69, 0.3);
          line-height: 1;
        }

        .zero-icon {
          display: inline-block;
          animation: spin 3s linear infinite;
        }

        .rotating-circle {
          animation: rotate 2s linear infinite;
        }

        .inner-circle {
          animation: rotate 1.5s linear infinite reverse;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .error-title {
          font-size: 48px;
          font-weight: 800;
          color: #183b56;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .error-description {
          font-size: 18px;
          color: #5a7184;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        .error-404-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
        }

        .quick-links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 20px;
          max-width: 600px;
          margin: 0 auto;
        }

        .quick-link-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          background: white;
          border-radius: 12px;
          text-decoration: none;
          color: #183b56;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }

        .quick-link-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(255, 131, 69, 0.15);
          color: #ff8345;
          text-decoration: none;
        }

        .quick-link-item i {
          font-size: 24px;
          margin-bottom: 8px;
          color: #ff8345;
        }

        .quick-link-item span {
          font-size: 14px;
          font-weight: 600;
        }

        .error-404-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 80px;
          height: 80px;
          background: #ff8345;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 60px;
          height: 60px;
          background: #7bc678;
          top: 20%;
          right: 20%;
          animation-delay: 1s;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          background: #ff8345;
          bottom: 20%;
          left: 15%;
          animation-delay: 2s;
        }

        .shape-4 {
          width: 40px;
          height: 40px;
          background: #7bc678;
          bottom: 30%;
          right: 10%;
          animation-delay: 3s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .error-404-section {
            padding: 40px 20px;
          }

          .four-zero {
            font-size: 80px;
          }

          .error-title {
            font-size: 36px;
          }

          .error-description {
            font-size: 16px;
          }

          .error-404-actions {
            flex-direction: column;
            align-items: center;
          }

          .quick-links-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .quick-link-item {
            padding: 15px;
          }
        }

        @media (max-width: 480px) {
          .four-zero {
            font-size: 60px;
          }

          .zero-icon svg {
            width: 80px;
            height: 80px;
          }

          .error-title {
            font-size: 28px;
          }

          .quick-links-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

// This ensures the page is statically generated at build time
export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Custom404;
