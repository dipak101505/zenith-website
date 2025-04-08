import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import CommentBox from '../../components/blog/CommentBox';
import { useState } from 'react';
import Image from 'next/image';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const ApplicationOfDerivatives = () => {
  const [Tags] = useState([
    'Mathematics', 'Derivatives', 'Class 12', 'Calculus', 'Maxima and Minima', 'Rate of Change'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Application of Derivatives" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Application of Derivatives – Class 11 Mathematics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Introduction</h2>
                <p>
                  Derivatives are powerful tools used to solve real-world problems involving rates of change, increasing/decreasing functions, and finding local maxima or minima of functions.
                </p>

                <h2>2. Rate of Change</h2>
                <ul>
                  <li>The derivative of a quantity with respect to time represents its rate of change.</li>
                  <li>Used in physics, economics, and biology to calculate speed, growth, etc.</li>
                  <li>Example: If s(t) is the position, then v(t) = ds/dt gives velocity.</li>
                </ul>

                <h2>3. Increasing and Decreasing Functions</h2>
                <ul>
                  <li>If f′(x) &gt; 0 for an interval, f(x) is increasing on that interval.</li>
                  <li>If f′(x) &lt; 0, then f(x) is decreasing.</li>
                  <li>Helps in analyzing the behavior of functions graphically.</li>
                </ul>

                <h2>4. Tangents and Normals</h2>
                <ul>
                  <li><strong>Equation of Tangent:</strong> y – y₁ = f′(x₁)(x – x₁)</li>
                  <li><strong>Equation of Normal:</strong> y – y₁ = –1/f′(x₁)(x – x₁)</li>
                  <li>Used in curve analysis and geometry problems.</li>
                </ul>

                <h2>5. Maxima and Minima</h2>
                <ul>
                  <li>Points where the function attains its maximum or minimum value.</li>
                  <li><strong>First Derivative Test:</strong>
                    <ul>
                      <li>If f′(x) changes sign from + to – at x = c, local maximum at c.</li>
                      <li>If f′(x) changes from – to +, local minimum at c.</li>
                    </ul>
                  </li>
                  <li><strong>Second Derivative Test:</strong>
                    <ul>
                      <li>If f′(c) = 0 and f″(c) &gt; 0, then local minimum.</li>
                      <li>If f″(c) &lt; 0, then local maximum.</li>
                    </ul>
                  </li>
                </ul>

                <h2>6. Optimization Problems</h2>
                <ul>
                  <li>Finding the maximum or minimum value of a quantity under given conditions.</li>
                  <li>Examples:
                    <ul>
                      <li>Maximizing area, minimizing cost or surface area.</li>
                      <li>Real-world applications in design, economics, engineering.</li>
                    </ul>
                  </li>
                </ul>

                <h2>7. Application in Economics and Science</h2>
                <ul>
                  <li>Marginal cost, marginal revenue, and profit functions use derivatives.</li>
                  <li>Population growth, rate of reaction, and motion analysis are based on rates of change.</li>
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

export default ApplicationOfDerivatives;
