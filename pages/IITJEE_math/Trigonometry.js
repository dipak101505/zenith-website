import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const Trigonometry = () => {
  const [Tags] = useState([
    'Mathematics', 'Trigonometry', 'JEE Mains', 'Trigonometric Functions', 'Inverse Trigonometric Functions'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Trigonometry" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Trigonometry – JEE Mains Mathematics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Trigonometric Functions</h2>
                <ul>
                  <li>Basic ratios: sin, cos, tan, cot, sec, cosec.</li>
                  <li>Relation between trigonometric ratios.</li>
                  <li>Trigonometric functions of standard angles: 0°, 30°, 45°, 60°, 90°.</li>
                  <li>Signs of trigonometric functions in different quadrants (ASTC rule).</li>
                  <li>Periodicity, domain, and range of functions.</li>
                  <li>Graphs of sine, cosine, and tangent functions.</li>
                </ul>

                <h2>2. Trigonometric Identities</h2>
                <ul>
                  <li><strong>Pythagorean Identities</strong>:
                    <pre>{`sin²θ + cos²θ = 1`}</pre>
                    <pre>{`1 + tan²θ = sec²θ`}</pre>
                    <pre>{`1 + cot²θ = cosec²θ`}</pre>
                  </li>
                  <li><strong>Sum and Difference Formulas</strong>:
                    <pre>{`sin(A ± B) = sinA cosB ± cosA sinB`}</pre>
                    <pre>{`cos(A ± B) = cosA cosB ∓ sinA sinB`}</pre>
                    <pre>{`tan(A ± B) = (tanA ± tanB) / (1 ∓ tanA tanB)`}</pre>
                  </li>
                  <li><strong>Double Angle Formulas</strong>:
                    <pre>{`sin(2A) = 2sinA cosA`}</pre>
                    <pre>{`cos(2A) = cos²A - sin²A`}</pre>
                    <pre>{`tan(2A) = 2tanA / (1 - tan²A)`}</pre>
                  </li>
                  <li><strong>Product to Sum and Sum to Product Formulas</strong></li>
                </ul>

                <h2>3. Inverse Trigonometric Functions</h2>
                <ul>
                  <li>Definition and principal value branch.</li>
                  <li>Domains and ranges of inverse trigonometric functions.</li>
                  <li>Properties and identities:
                    <pre>{`sin⁻¹x + cos⁻¹x = π/2`}</pre>
                    <pre>{`tan⁻¹x + cot⁻¹x = π/2`}</pre>
                    <pre>{`2tan⁻¹x = sin⁻¹(2x / (1 + x²))`}</pre>
                  </li>
                  <li>Graphs of inverse functions.</li>
                </ul>

                <h2>4. Applications in Geometry</h2>
                <ul>
                  <li>Solving triangles using sine rule and cosine rule.</li>
                  <li>Area of triangle using trigonometry:
                    <pre>{`Area = (1/2)ab sinC`}</pre>
                  </li>
                  <li>Height and distance problems using trigonometric ratios.</li>
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
          background-color: #f4f4f4;
          padding: 10px;
          font-family: monospace;
          white-space: pre-wrap;
          margin-top: 8px;
          margin-bottom: 8px;
        }
      `}</style>
    </>
  );
};

export default Trigonometry;
