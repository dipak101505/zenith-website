import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import Image from 'next/image';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const ComplexNumbersQuadratics = () => {
  const [Tags] = useState([
    'Mathematics', 'Complex Numbers', 'Quadratic Equations', 'JEE Mains', 'Algebra'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Complex Numbers and Quadratic Equations" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Complex Numbers and Quadratic Equations – JEE Mains Mathematics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Introduction to Complex Numbers</h2>
                <ul>
                  <li>Complex numbers can be represented as ordered pairs of real numbers (x, y)</li>
                  <li>Standard form: a + ib, where a is the real part and b is the imaginary part</li>
                  <li>Visual representation using Argand diagram</li>
                </ul>

                <h2>2. Algebra of Complex Numbers</h2>
                <ul>
                  <li>Addition, subtraction, multiplication and division of complex numbers</li>
                  <li>Conjugate of a complex number: If z = a + ib, then z̄ = a - ib</li>
                  <li>Modulus: <pre>|z| = √(a² + b²)</pre></li>
                  <li>Argument (amplitude): Angle made with the positive real axis</li>
                </ul>

                <h2>3. Quadratic Equations</h2>
                <ul>
                  <li>Definition and standard form: <pre>ax² + bx + c = 0</pre></li>
                  <li>Solutions in real and complex number systems</li>
                  <li>Discriminant: <pre>D = b² - 4ac</pre></li>
                  <li>Nature of roots:
                    <ul>
                      <li><pre>D &gt; 0: Two distinct real roots</pre></li>
                      <li><pre>D = 0: One real root (repeated)</pre></li>
                      <li><pre>D {'<'} 0: Two complex roots</pre></li>
                    </ul>
                  </li>
                </ul>

                <h2>4. Relations and Formations</h2>
                <ul>
                  <li>Relation between roots and coefficients: If α and β are roots:
                    <ul>
                      <li><pre>α + β = -b/a</pre></li>
                      <li><pre>αβ = c/a</pre></li>
                    </ul>
                  </li>
                  <li>Formation of quadratic equation with given roots:
                    <ul>
                      <li>If α and β are known, equation is <pre>(x - α)(x - β) = 0</pre></li>
                      <li>Expanding gives: <pre>x² - (α + β)x + αβ = 0</pre></li>
                    </ul>
                  </li>
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

export default ComplexNumbersQuadratics;
