import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const LimitContinuityDifferentiability = () => {
  const [Tags] = useState([
    'Mathematics', 'Limit', 'Continuity', 'Differentiability', 'JEE Mains', 'Calculus'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Limit, Continuity and Differentiability" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Limit, Continuity and Differentiability – JEE Mains Mathematics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Real-Valued Functions</h2>
                <ul>
                  <li>A function that maps real numbers to real numbers.</li>
                  <li>Examples include polynomial, rational, trigonometric, logarithmic, and exponential functions.</li>
                </ul>

                <h2>2. Algebra of Functions</h2>
                <ul>
                  <li>Sum, difference, product, and quotient of functions can be formed:</li>
                  <li>If f(x) and g(x) are functions, then (f + g)(x) = f(x) + g(x), (f − g)(x) = f(x) − g(x), (f * g)(x) = f(x) * g(x), and (f/g)(x) = f(x) / g(x), for g(x) ≠ 0.</li>
                </ul>

                <h2>3. Types of Functions</h2>
                <ul>
                  <li><strong>Polynomial Functions:</strong> Functions involving powers of x, e.g., f(x) = ax² + bx + c</li>
                  <li><strong>Rational Functions:</strong> Functions of the form f(x) = P(x)/Q(x), where P(x) and Q(x) are polynomials</li>
                  <li><strong>Trigonometric Functions:</strong> f(x) = sin(x), cos(x), tan(x), etc.</li>
                  <li><strong>Logarithmic and Exponential Functions:</strong> e.g., f(x) = log(x), f(x) = e^x</li>
                  <li><strong>Inverse Functions:</strong> Functions that reverse the effect of a given function, e.g., if f(x) = y, then f⁻¹(y) = x.</li>
                </ul>

                <h2>4. Limits</h2>
                <ul>
                  <li>Limit of a function describes the behavior of the function as the input approaches a particular value.</li>
                  <li><strong>Mathematical Representation:</strong> lim<sub>x → a</sub> f(x) = L</li>
                  <li>Fundamental limit properties: lim<sub>x → a</sub> [f(x) ± g(x)] = lim<sub>x → a</sub> f(x) ± lim<sub>x → a</sub> g(x)</li>
                  <li>Limits are used to define continuity and differentiability.</li>
                </ul>

                <h2>5. Continuity</h2>
                <ul>
                  <li>A function is continuous at a point if the following are true:</li>
                  <ul>
                    <li>f(a) is defined</li>
                    <li>lim<sub>x → a</sub> f(x) exists</li>
                    <li>lim<sub>x → a</sub> f(x) = f(a)</li>
                  </ul>
                  <li>Continuous functions do not have jumps, breaks, or holes in their graphs.</li>
                </ul>

                <h2>6. Differentiability</h2>
                <ul>
                  <li>A function is differentiable at a point if the derivative exists at that point.</li>
                  <li>f&apos;(x) = lim<sub>h → 0</sub> [f(x+h) − f(x)]/h</li>
                  <li>If a function is differentiable at a point, it is also continuous at that point.</li>
                </ul>

                <h2>7. Differentiation of Various Functions</h2>
                <ul>
                  <li><strong>Sum, Difference, Product, and Quotient:</strong> Differentiation rules for sum, difference, product, and quotient of two functions.</li>
                  <li><strong>Trigonometric Functions:</strong> 
                    <ul>
                      <li>d/dx [sin(x)] = cos(x)</li>
                      <li>d/dx [cos(x)] = −sin(x)</li>
                      <li>d/dx [tan(x)] = sec²(x)</li>
                    </ul>
                  </li>
                  <li><strong>Inverse Trigonometric Functions:</strong> 
                    <ul>
                      <li>d/dx [arcsin(x)] = 1/√(1−x²)</li>
                      <li>d/dx [arccos(x)] = −1/√(1−x²)</li>
                    </ul>
                  </li>
                  <li><strong>Logarithmic Functions:</strong> 
                    <ul>
                      <li>d/dx [ln(x)] = 1/x</li>
                      <li>d/dx [logₐ(x)] = 1/(x ln(a))</li>
                    </ul>
                  </li>
                  <li><strong>Exponential Functions:</strong>
                    <ul>
                      <li>d/dx [e^x] = e^x</li>
                      <li>d/dx [a^x] = a^x ln(a)</li>
                    </ul>
                  </li>
                  <li><strong>Composite Functions:</strong> 
                    <ul>
                      <li>d/dx [f(g(x))] = f&apos;(g(x)) * g&apos;(x)</li>
                    </ul>
                  </li>
                  <li><strong>Implicit Functions:</strong> Differentiation of functions involving both x and y using implicit differentiation.</li>
                </ul>

                <h2>8. Applications of Derivatives</h2>
                <ul>
                  <li><strong>Rate of Change:</strong> Derivatives are used to find the rate at which one quantity changes with respect to another.</li>
                  <li><strong>Monotonic Functions:</strong> A function is increasing if its derivative is positive, decreasing if its derivative is negative.</li>
                  <li><strong>Maxima and Minima:</strong> 
                    <ul>
                      <li>Use first and second derivative tests to find local maxima and minima of a function.</li>
                      <li>If f&apos;(x) = 0 and f&apos;&apos;(x) {'>'} 0, the function has a local minimum at x.</li>
                      <li>If f&apos;(x) = 0 and f&apos;&apos;(x) {'<'} 0, the function has a local maximum at x.</li>
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

export default LimitContinuityDifferentiability;
