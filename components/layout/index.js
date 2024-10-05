import Head from 'next/head';
import { useEffect, useState } from 'react';
import Preloader from './Preloader';
import animateScrollTo from 'animated-scroll-to';

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  function scrollToTop() {
    animateScrollTo(0, { maxDuration: 1000 });
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <title>Zenith Institute IIT JEE NEET Foundation</title>
        <link
          rel="icon"
          href="/assets/images/fav.png"
          type="image/gif"
          sizes="20x20"
        />
      </Head>

      {loading ? <Preloader /> : null}

      <div
        id="scroll-top"
        onClick={scrollToTop}
        className="back-to-top-btn"
        style={{ display: 'inline' }}
      >
        <i className="bi bi-arrow-up"></i>
      </div>

      {children}
    </>
  );
};

export default Layout;
