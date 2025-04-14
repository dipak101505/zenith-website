import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const BinomialTheorem = () => {
  const [Tags] = useState([
    'Mathematics', 'Binomial Theorem', 'JEE Mains', 'Algebra', 'Expansion'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Binomial Theorem and Its Simple Applications" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Binomial Theorem and Its Simple Applications – JEE Mains Mathematics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Binomial Theorem for Positive Integral Index</h2>
                <ul>
                  <li>The binomial expansion of (a + b)<sup>n</sup> for positive integer n is given by:</li>
                  <li>
                    <pre>(a + b)^n = Σ (r = 0 to n) [C(n, r) · a^(n−r) · b^r]</pre>
                  </li>
                  <li>Each term is called a binomial term and is of the form:</li>
                  <li>
                    <pre>C(n, r) · a^(n−r) · b^r</pre>
                  </li>
                  <li>Where:</li>
                  <li>
                    <pre>C(n, r) = n! / [r!(n − r)!]</pre>
                  </li>
                </ul>

                <h2>2. General Term of Binomial Expansion</h2>
                <ul>
                  <li>The general term (T<sub>r+1</sub>) of (a + b)<sup>n</sup> is:</li>
                  <li>
                    <pre>T(r+1) = C(n, r) · a^(n−r) · b^r</pre>
                  </li>
                  <li>Used to find any specific term in the expansion without writing all terms.</li>
                  <li>Example:</li>
                  <li>
                    <pre>5th term in (2 + x)^6 → T(5) = C(6, 4) · 2^2 · x^4</pre>
                  </li>
                </ul>

                <h2>3. Middle Term(s)</h2>
                <ul>
                  <li>If n is even:</li>
                  <li>
                    <pre>Middle term = T((n/2) + 1)</pre>
                  </li>
                  <li>If n is odd:</li>
                  <li>
                    <pre>Middle terms = T((n+1)/2) and T((n+3)/2)</pre>
                  </li>
                </ul>

                <h2>4. Simple Applications</h2>
                <ul>
                  <li>Finding a particular term from the binomial expansion</li>
                  <li>Finding the coefficient of a specific term (e.g., x⁵)</li>
                  <li>Solving algebraic identities and symmetric expressions</li>
                  <li>Approximations using first few terms of binomial expansion:</li>
                  <li>
                    <pre>(1 + x)^n ≈ 1 + nx + n(n−1)x²/2! + ...</pre>
                  </li>
                  <li>Useful in probability, algebra, and inequalities problems in JEE</li>
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

export default BinomialTheorem;
