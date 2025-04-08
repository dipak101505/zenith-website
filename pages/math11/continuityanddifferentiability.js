import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import CommentBox from '../../components/blog/CommentBox';
import { useState } from 'react';
import Image from 'next/image';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const ContinuityAndDifferentiability = () => {
  const [Tags] = useState([
    'Mathematics', 'Continuity', 'Differentiability', 'Class 12', 'Calculus'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Continuity and Differentiability" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Continuity and Differentiability – Class 11 Mathematics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Introduction</h2>
                <p>
                  This chapter explores the core concepts of calculus — continuity and differentiability. It lays the foundation for understanding smooth behavior of functions and their derivatives.
                </p>

                <h2>2. Continuity</h2>
                <ul>
                  <li>A function f(x) is continuous at a point x = a if:
                    <ul>
                      <li>f(a) is defined</li>
                      <li>lim x→a f(x) exists</li>
                      <li>lim x→a f(x) = f(a)</li>
                    </ul>
                  </li>
                  <li>Types of discontinuities: removable, jump, infinite.</li>
                  <li>Polynomials, exponential, and trigonometric functions are continuous in their domain.</li>
                </ul>

                <h2>3. Differentiability</h2>
                <ul>
                  <li>If f′(x) exists, then f is differentiable at x.</li>
                  <li>Differentiability implies continuity, but the converse is not always true.</li>
                  <li>Check using left-hand and right-hand derivatives.</li>
                </ul>

                <h2>4. Algebra of Continuous and Differentiable Functions</h2>
                <ul>
                  <li>Sum, difference, product, and quotient of continuous/differentiable functions are also continuous/differentiable (where defined).</li>
                </ul>

                <h2>5. Chain Rule</h2>
                <ul>
                  <li>Used to differentiate composite functions.</li>
                  <li>If y = f(g(x)), then dy/dx = f′(g(x)) × g′(x)</li>
                </ul>

                <h2>6. Derivatives of Inverse Trigonometric Functions</h2>
                <ul>
                  <li>Standard derivatives include:
                    <ul>
                      <li>d/dx(sin⁻¹x) = 1 / √(1 - x²)</li>
                      <li>d/dx(cos⁻¹x) = -1 / √(1 - x²)</li>
                      <li>d/dx(tan⁻¹x) = 1 / (1 + x²)</li>
                    </ul>
                  </li>
                </ul>

                <h2>7. Implicit Differentiation</h2>
                <ul>
                  <li>Used when y is not explicitly expressed in terms of x.</li>
                  <li>Differentiate both sides and solve for dy/dx.</li>
                </ul>

                <h2>8. Logarithmic Differentiation</h2>
                <ul>
                  <li>Useful for differentiating complex expressions, especially with variables in powers.</li>
                  <li>Take log on both sides, apply log rules, and then differentiate.</li>
                </ul>

                <h2>9. Mean Value Theorem</h2>
                <ul>
                  <li><strong>Rolle’s Theorem:</strong> If a function is continuous and differentiable in [a, b], and f(a) = f(b), then there exists c ∈ (a, b) such that f′(c) = 0.</li>
                  <li><strong>Lagrange’s Mean Value Theorem:</strong> There exists c ∈ (a, b) such that f′(c) = [f(b) – f(a)] / (b – a)</li>
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

export default ContinuityAndDifferentiability;
