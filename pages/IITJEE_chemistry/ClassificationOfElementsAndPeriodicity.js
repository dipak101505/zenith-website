import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import CommentBox from '../../components/blog/CommentBox';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const ClassificationOfElementsAndPeriodicity = () => {
  const [Tags] = useState([
    'Classification of Elements', 'Periodic Table', 'Periodic Trends', 'Atomic Radii', 'Ionization Energy', 'JEE Mains Chemistry'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Classification of Elements and Periodicity in Properties" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Classification of Elements and Periodicity in Properties – JEE Mains Chemistry</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Modern Periodic Law and the Present Form of the Periodic Table</h2>
                <p>
                  The Modern Periodic Law states that the properties of elements are periodic functions of their atomic numbers. The present form of the periodic table arranges elements based on increasing atomic number, which reflects their recurring chemical and physical properties.
                </p>

                <h2>2. s, p, d, and f Block Elements</h2>
                <p>
                  The periodic table can be divided into four blocks based on the type of orbital in which the last electron enters. These are the s-block, p-block, d-block, and f-block elements, each with distinct characteristics.
                </p>

                <h2>3. Periodic Trends in Properties of Elements</h2>
                <ul>
                  <li><strong>Atomic and Ionic Radii:</strong> Atomic radii tend to decrease across a period and increase down a group.</li>
                  <li><strong>Ionization Enthalpy:</strong> Ionization enthalpy generally increases across a period and decreases down a group.</li>
                  <li><strong>Electron Gain Enthalpy:</strong> Electron gain enthalpy becomes more negative across a period and less negative down a group.</li>
                </ul>

                <h2>4. Valence, Oxidation States, and Chemical Reactivity</h2>
                <ul>
                  <li><strong>Valence Electrons:</strong> Elements in the same group have the same number of valence electrons, which determines their chemical properties.</li>
                  <li><strong>Oxidation States:</strong> The possible oxidation states of an element can vary depending on its position in the periodic table.</li>
                  <li><strong>Chemical Reactivity:</strong> The reactivity of elements depends on their valence electron configuration and oxidation states.</li>
                </ul>

                <CommentBox />
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mobt-50">
              <div className="cart-wrap">
                <SideSubjectFlotingBarIITJEE />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-post-details h2 {
          font-size: 28px;
          color: #1a237e;
          margin-top: 32px;
          margin-bottom: 16px;
          border-left: 4px solid #3f51b5;
          padding-left: 12px;
        }
        .blog-post-details p {
          margin-top: 0px;
          margin-bottom: 20px;
        }
      `}</style>
    </>
  );
};

export default ClassificationOfElementsAndPeriodicity;
