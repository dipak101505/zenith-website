import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const IntegralCalculus = () => {
  const [Tags] = useState([
    'Mathematics', 'Integral Calculus', 'JEE Mains', 'Calculus', 'Definite Integrals'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Integral Calculus" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Integral Calculus – JEE Mains Mathematics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Integral as an Anti-Derivative</h2>
                <ul>
                  <li>Integration is the reverse operation of differentiation, i.e., the anti-derivative of a function.</li>
                  <li>If F&apos;(x) = f(x), then ∫f(x) dx = F(x) + C, where C is the constant of integration.</li>
                  <li>Integration is used to find the area under curves, and solve problems involving rates of change.</li>
                </ul>

                <h2>2. Fundamental Integrals</h2>
                <ul>
                  <li>Some basic integrals for algebraic, trigonometric, exponential, and logarithmic functions:</li>
                  <ul>
                    <li>∫x^n dx = (x^(n+1))/(n+1) + C, for n ≠ -1</li>
                    <li>∫sin(x) dx = -cos(x) + C</li>
                    <li>∫cos(x) dx = sin(x) + C</li>
                    <li>∫e^x dx = e^x + C</li>
                    <li>∫1/x dx = ln|x| + C</li>
                  </ul>
                </ul>

                <h2>3. Integration Techniques</h2>
                <h3>3.1. Integration by Substitution</h3>
                <ul>
                  <li>If a function is complicated, substitution is used to simplify the integral.</li>
                  <li>If u = g(x), then ∫f(g(x)) * g&apos;(x) dx = ∫f(u) du</li>
                  <li>Example: ∫x * cos(x²) dx → let u = x², then du = 2x dx.</li>
                </ul>

                <h3>3.2. Integration by Parts</h3>
                <ul>
                  <li>Integration by parts is based on the product rule of differentiation:</li>
                  <li>∫u dv = uv - ∫v du</li>
                  <li>It is useful when the integral involves a product of two functions.</li>
                  <li>Example: ∫x * e^x dx → u = x, dv = e^x dx, then du = dx, v = e^x.</li>
                </ul>

                <h3>3.3. Integration by Partial Fractions</h3>
                <ul>
                  <li>Used to integrate rational functions by expressing them as a sum of simpler fractions.</li>
                  <li>Example: ∫(1/(x² - 1)) dx can be decomposed into partial fractions.</li>
                  <li>The technique involves expressing the denominator as a product of linear factors and solving for constants.</li>
                </ul>

                <h3>3.4. Integration Using Trigonometric Identities</h3>
                <ul>
                  <li>Some integrals can be simplified using trigonometric identities, such as:</li>
                  <ul>
                    <li>sin²(x) = (1 - cos(2x))/2</li>
                    <li>cos²(x) = (1 + cos(2x))/2</li>
                    <li>Using these, integrals like ∫sin²(x) dx or ∫cos²(x) dx can be simplified and solved.</li>
                  </ul>
                </ul>

                <h2>4. The Fundamental Theorem of Calculus</h2>
                <ul>
                  <li>It establishes the connection between differentiation and integration.</li>
                  <li>The first part states that if f(x) is continuous on [a, b], then the function F(x) = ∫[a, x] f(t) dt is differentiable, and its derivative is f(x).</li>
                  <li>The second part states that if F(x) is the antiderivative of f(x), then ∫[a, b] f(x) dx = F(b) - F(a).</li>
                </ul>

                <h2>5. Properties of Definite Integrals</h2>
                <ul>
                  <li>If f(x) is continuous on [a, b], then:</li>
                  <ul>
                    <li>∫[a, b] f(x) dx = F(b) - F(a), where F(x) is the antiderivative of f(x).</li>
                    <li>∫[a, b] f(x) dx = -∫[b, a] f(x) dx (reverse limits).</li>
                    <li>∫[a, b] [f(x) ± g(x)] dx = ∫[a, b] f(x) dx ± ∫[a, b] g(x) dx.</li>
                    <li>∫[a, b] c f(x) dx = c ∫[a, b] f(x) dx (constant factor rule).</li>
                  </ul>
                </ul>

                <h2>6. Evaluation of Definite Integrals</h2>
                <ul>
                  <li>To evaluate a definite integral, find the antiderivative of the function and then substitute the limits of integration.</li>
                  <li>Example: ∫[0, 1] (2x) dx = [x²] from 0 to 1 = 1² - 0² = 1.</li>
                </ul>

                <h2>7. Determining Areas of Regions Bounded by Curves</h2>
                <ul>
                  <li>Definite integrals can be used to find areas between curves.</li>
                  <li>If a curve is defined by y = f(x) and bounded by x = a and x = b, the area between the curve and the x-axis is given by:</li>
                  <ul>
                    <li>Area = ∫[a, b] f(x) dx</li>
                  </ul>
                  <li>For regions bounded by two curves y = f(x) and y = g(x), the area between the curves is:</li>
                  <ul>
                    <li>Area = ∫[a, b] [f(x) - g(x)] dx</li>
                  </ul>
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

export default IntegralCalculus;
