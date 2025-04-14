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
                <h1>Application of Derivatives – JEE Mains Mathematics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Introduction</h2>
                <p>Derivatives are powerful tools used to solve real-world problems involving rates of change, increasing/decreasing functions, and finding local maxima or minima of functions.</p>

                <h2>2. Rate of Change</h2>
                <ul>
                  <li>The derivative of a quantity with respect to time represents its rate of change.</li>
                  <li>Used in physics, economics, and biology to calculate speed, growth, etc.</li>
                  <li>Example:
                    <pre>{`If s(t) is the position, then v(t) = ds/dt gives velocity.`}</pre>
                  </li>
                </ul>

                <h2>3. Increasing and Decreasing Functions</h2>
                <ul>
                  <li>
                    <pre>{`If f′(x) > 0 for an interval, then f(x) is increasing on that interval.`}</pre>
                  </li>
                  <li>
                    <pre>{`If f′(x) < 0 for an interval, then f(x) is decreasing on that interval.`}</pre>
                  </li>
                </ul>

                <h2>4. Tangents and Normals</h2>
                <ul>
                  <li><strong>Equation of Tangent:</strong>
                    <pre>{`y – y₁ = f′(x₁)(x – x₁)`}</pre>
                  </li>
                  <li><strong>Equation of Normal:</strong>
                    <pre>{`y – y₁ = –1/f′(x₁)(x – x₁)`}</pre>
                  </li>
                </ul>

                <h2>5. Maxima and Minima</h2>
                <ul>
                  <li>Points where the function attains its maximum or minimum value.</li>
                  <li><strong>First Derivative Test:</strong>
                    <ul>
                      <li>
                        <pre>{`If f′(x) changes from + to – at x = c, local maximum at x = c.`}</pre>
                      </li>
                      <li>
                        <pre>{`If f′(x) changes from – to + at x = c, local minimum at x = c.`}</pre>
                      </li>
                    </ul>
                  </li>
                  <li><strong>Second Derivative Test:</strong>
                    <ul>
                      <li>
                        <pre>{`If f′(c) = 0 and f″(c) > 0, then local minimum at x = c.`}</pre>
                      </li>
                      <li>
                        <pre>{`If f′(c) = 0 and f″(c) < 0, then local maximum at x = c.`}</pre>
                      </li>
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
                  <li>Marginal functions are defined as derivatives:</li>
                  <li>
                    <pre>{`Marginal Cost = dC/dx`}</pre>
                    <pre>{`Marginal Revenue = dR/dx`}</pre>
                    <pre>{`Marginal Profit = dP/dx`}</pre>
                  </li>
                  <li>Used in population growth models, chemical reaction rates, motion under gravity, etc.</li>
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

export default ApplicationOfDerivatives;
