import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import CommentBox from '../../components/blog/CommentBox';
import { useState } from 'react';
import Image from 'next/image';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const Integrals = () => {
  const [Tags] = useState([
    'Mathematics', 'Integrals', 'Class 11', 'Calculus', 'Indefinite Integrals', 'Definite Integrals'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Integrals" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Integrals – Class 11 Mathematics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Introduction</h2>
                <p>
                  Integrals are a fundamental concept in calculus, often regarded as the reverse process of differentiation. This chapter deals with indefinite and definite integrals and their applications.
                </p>

                <h2>2. Indefinite Integrals</h2>
                <ul>
                  <li>Represent a family of functions with an arbitrary constant of integration (C).</li>
                  <li>Basic formulas include:
                    <ul>
                      <li>∫xⁿ dx = (xⁿ⁺¹)/(n+1) + C, n ≠ -1</li>
                      <li>∫eˣ dx = eˣ + C</li>
                      <li>∫1/x dx = ln|x| + C</li>
                    </ul>
                  </li>
                </ul>

                <h2>3. Methods of Integration</h2>
                <ul>
                  <li><strong>Substitution Method:</strong> Used when the integrand fits a function and its derivative.</li>
                  <li><strong>Integration by Parts:</strong> ∫u·v dx = u∫v dx - ∫(du/dx)∫v dx</li>
                  <li><strong>Partial Fractions:</strong> Used for rational functions.</li>
                </ul>

                <h2>4. Definite Integrals</h2>
                <ul>
                  <li>Have limits of integration [a, b] and give a specific numerical value.</li>
                  <li>Fundamental Theorem of Calculus links definite integrals with antiderivatives.</li>
                  <li>∫ₐᵇ f(x) dx = F(b) - F(a), where F is an antiderivative of f.</li>
                </ul>

                <h2>5. Properties of Definite Integrals</h2>
                <ul>
                  <li>∫ₐᵇ f(x) dx = –∫ᵇₐ f(x) dx</li>
                  <li>∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫ᶜᵇ f(x) dx</li>
                  <li>If f is even: ∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx</li>
                  <li>If f is odd: ∫₋ₐᵃ f(x) dx = 0</li>
                </ul>

                <h2>6. Applications of Integrals</h2>
                <ul>
                  <li><strong>Area under curves:</strong> Calculate area between curves and the x-axis using definite integrals.</li>
                  <li><strong>Area between two curves:</strong> ∫ₐᵇ [f(x) – g(x)] dx, where f(x) ≥ g(x) in [a, b].</li>
                </ul>

                <h2>7. Common Integral Results</h2>
                <ul>
                  <li>∫sinx dx = –cosx + C</li>
                  <li>∫cosx dx = sinx + C</li>
                  <li>∫sec²x dx = tanx + C</li>
                  <li>∫cosec²x dx = –cotx + C</li>
                  <li>∫secx·tanx dx = secx + C</li>
                  <li>∫cosecx·cotx dx = –cosecx + C</li>
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

export default Integrals;
