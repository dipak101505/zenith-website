import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const UnitsAndMeasurements = () => {
  const [Tags] = useState([
    'Physics', 'Units and Measurements', 'JEE Mains', 'Physical Quantities', 'SI Units'
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

                <h2>1. Physical Quantities</h2>
                <ul>
                  <li>Physical quantities are measurable quantities in physics used to describe the laws of nature.</li>
                  <li>They are classified into fundamental and derived quantities.</li>
                </ul>

                <h2>2. Units of Measurement</h2>
                <ul>
                  <li>A unit is a standard quantity used to specify measurements.</li>
                  <li>Each physical quantity has an appropriate unit (e.g., meter for length, kilogram for mass).</li>
                </ul>

                <h2>3. System of Units</h2>
                <ul>
                  <li>Various systems of units are used in different parts of the world. The main systems include:</li>
                  <ul>
                    <li><strong>CGS System</strong>: Centimeter, Gram, Second</li>
                    <li><strong>MKS System</strong>: Meter, Kilogram, Second</li>
                    <li><strong>SI System</strong>: International System of Units – widely accepted and used</li>
                  </ul>
                </ul>

                <h2>4. SI Base Units</h2>
                <ul>
                  <li>There are 7 fundamental units in SI:</li>
                  <ul>
                    <li>Length – meter (m)</li>
                    <li>Mass – kilogram (kg)</li>
                    <li>Time – second (s)</li>
                    <li>Electric current – ampere (A)</li>
                    <li>Temperature – kelvin (K)</li>
                    <li>Luminous intensity – candela (cd)</li>
                    <li>Amount of substance – mole (mol)</li>
                  </ul>
                </ul>

                <h2>5. Derived Units</h2>
                <ul>
                  <li>Units derived from the fundamental units are called derived units (e.g., m/s for speed, N for force).</li>
                </ul>

                <h2>6. Dimensional Formula</h2>
                <ul>
                  <li>Dimensional formula expresses a physical quantity in terms of the base quantities.</li>
                  <li>Example: The dimensional formula of force is [MLT⁻²].</li>
                </ul>

                <h2>7. Dimensional Analysis and Applications</h2>
                <ul>
                  <li>Used to check the dimensional correctness of equations.</li>
                  <li>Used to derive relationships between physical quantities.</li>
                </ul>

                <h2>8. Measurement Errors</h2>
                <ul>
                  <li>Errors are the deviation of the measured value from the actual value.</li>
                  <li>Types: Systematic errors, Random errors, Gross errors</li>
                </ul>

                <h2>9. Significant Figures</h2>
                <ul>
                  <li>Indicates the precision of a measurement.</li>
                  <li>Rules are followed while performing mathematical operations on significant figures.</li>
                </ul>

                <h2>10. Accuracy, Precision, and Resolution</h2>
                <ul>
                  <li><strong>Accuracy</strong> refers to how close a measured value is to the true value.</li>
                  <li><strong>Precision</strong> indicates the closeness among a set of values obtained by repeated measurements.</li>
                  <li><strong>Resolution</strong> is the smallest change in a measured quantity that an instrument can detect.</li>
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
      `}</style>
    </>
  );
};

export default UnitsAndMeasurements;
