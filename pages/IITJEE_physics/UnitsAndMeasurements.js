import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const UnitsAndMeasurements = () => {
  const [Tags] = useState([
    'Physics', 'Units and Measurements', 'JEE Mains', 'Dimensional Analysis', 'Errors'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Units and Measurements" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Units and Measurements – JEE Mains Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Units of Measurements</h2>
                <ul>
                  <li>Measurement is the comparison of a physical quantity with a standard unit.</li>
                  <li>Physical quantities like length, mass, time, etc., require proper units for measurement.</li>
                </ul>

                <h2>2. System of Units</h2>
                <ul>
                  <li>Different systems of units are used globally:</li>
                  <li>CGS System: Centimetre, Gram, Second</li>
                  <li>FPS System: Foot, Pound, Second</li>
                  <li>MKS System: Metre, Kilogram, Second</li>
                  <li>SI System: International System of Units — most widely accepted.</li>
                </ul>

                <h2>3. SI Units</h2>
                <ul>
                  <li>Established in 1960, based on seven fundamental units.</li>
                  <li>Examples:</li>
                  <li>Length – metre (m)</li>
                  <li>Mass – kilogram (kg)</li>
                  <li>Time – second (s)</li>
                  <li>Electric current – ampere (A)</li>
                  <li>Temperature – kelvin (K)</li>
                  <li>Amount of substance – mole (mol)</li>
                  <li>Luminous intensity – candela (cd)</li>
                </ul>

                <h2>4. Fundamental and Derived Units</h2>
                <ul>
                  <li>Fundamental Units: Independent of each other, like metre, kilogram, second, etc.</li>
                  <li>Derived Units: Formed from fundamental units (e.g., velocity = metre/second, acceleration = m/s²).</li>
                </ul>

                <h2>5. Least Count and Significant Figures</h2>
                <ul>
                  <li>Least Count: The smallest measurement that an instrument can accurately measure.</li>
                  <li>Significant Figures: Digits in a number that are reliable and necessary for accuracy.</li>
                  <li>Rules for significant figures include:
                    <ul>
                      <li>All non-zero digits are significant.</li>
                      <li>Zeros between non-zero digits are significant.</li>
                      <li>Leading zeros are not significant.</li>
                      <li>Trailing zeros are significant if a decimal point is present.</li>
                    </ul>
                  </li>
                </ul>

                <h2>6. Errors in Measurements</h2>
                <ul>
                  <li>Types of Errors:
                    <ul>
                      <li>Systematic Errors (instrumental, environmental, observational)</li>
                      <li>Random Errors</li>
                      <li>Gross Errors (due to human mistakes)</li>
                    </ul>
                  </li>
                  <li>Error propagation rules when adding, subtracting, multiplying or dividing measurements.</li>
                  <li>Absolute Error, Relative Error, Percentage Error concepts are important.</li>
                </ul>

                <h2>7. Dimensions of Physical Quantities</h2>
                <ul>
                  <li>Dimensions represent the powers to which fundamental quantities are raised to represent a physical quantity.</li>
                  <li>Example: Force = M¹L¹T⁻²</li>
                </ul>

                <h2>8. Dimensional Analysis and Its Applications</h2>
                <ul>
                  <li>Checking correctness of physical equations (Principle of Homogeneity).</li>
                  <li>Deriving relationships between physical quantities.</li>
                  <li>Converting units from one system to another.</li>
                  <li>Finding the dependence of a physical quantity on others using dimensional methods.</li>
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

        .blog-post-details ul {
          list-style-type: disc;
          padding-left: 20px;
          margin-bottom: 20px;
        }

        .blog-post-details li {
          display: list-item;
          margin-bottom: 8px;
        }

        .blog-post-details pre {
          background: #f5f5f5;
          padding: 10px;
          border-radius: 5px;
          font-family: monospace;
          overflow-x: auto;
        }
      `}</style>
    </>
  );
};

export default UnitsAndMeasurements;
