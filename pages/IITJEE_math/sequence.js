import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const SequenceAndSeries = () => {
  const [Tags] = useState([
    'Mathematics', 'Sequence and Series', 'Arithmetic Progression', 'Geometric Progression', 'JEE Mains'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Sequence and Series" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Sequence and Series – JEE Mains Mathematics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Arithmetic Progression (A.P.)</h2>
                <ul>
                  <li>A sequence where the difference between consecutive terms is constant.</li>
                  <li>General form: a, a+d, a+2d, ..., a+(n−1)d</li>
                  <li>n-th term: T<sub>n</sub> = a + (n−1)d</li>
                  <li>Sum of first n terms: S<sub>n</sub> = (n/2)[2a + (n−1)d] or S<sub>n</sub> = (n/2)(a + l)</li>
                </ul>

                <h2>2. Geometric Progression (G.P.)</h2>
                <ul>
                  <li>A sequence where each term is obtained by multiplying the previous term by a constant ratio.</li>
                  <li>General form: a, ar, ar², ar³, ..., ar<sup>n−1</sup></li>
                  <li>n-th term: T<sub>n</sub> = ar<sup>n−1</sup></li>
                  <li>Sum of first n terms (r ≠ 1): S<sub>n</sub> = a(1 − rⁿ)/(1 − r)</li>
                  <li>Sum to infinity (|r| &lt; 1): S = a/(1 − r)</li>
                </ul>

                <h2>3. Insertion of A.M. and G.M. Between Two Numbers</h2>
                <ul>
                  <li>To insert n arithmetic means between a and b:</li>
                  <li>Use A.P. formula with a as the first term and b as the (n+2)<sup>th</sup> term.</li>
                  <li>d = (b − a)/(n+1), then insert values using a + d, a + 2d, ...</li>
                  <li>To insert n geometric means between a and b:</li>
                  <li>Use G.P. with a as the first term and b as the (n+2)<sup>th</sup> term: b = ar<sup>n+1</sup></li>
                  <li>r = (b/a)<sup>1/(n+1)</sup></li>
                </ul>

                <h2>4. Relation Between A.M. and G.M.</h2>
                <ul>
                  <li>For any two positive numbers a and b:</li>
                  <li>A.M. = (a + b)/2</li>
                  <li>G.M. = √(ab)</li>
                  <li>Relation: A.M. ≥ G.M., with equality only when a = b</li>
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

export default SequenceAndSeries;
