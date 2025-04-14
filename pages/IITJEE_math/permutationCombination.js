import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const PermutationsCombinations = () => {
  const [Tags] = useState([
    'Mathematics', 'Permutations', 'Combinations', 'JEE Mains', 'Counting Principle'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Permutations and Combinations" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Permutations and Combinations – JEE Mains Mathematics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Fundamental Principle of Counting</h2>
                <ul>
                  <li>If one event can occur in *m* ways and another event can occur in *n* ways, then the total number of ways both events can occur is *m × n*.</li>
                  <li>This principle extends to more than two events.</li>
                </ul>

                <h2>2. Factorial Notation</h2>
                <ul>
                  <li>*n!* = n × (n − 1) × (n − 2) × ... × 1</li>
                  <li>0! = 1 (by definition)</li>
                </ul>

                <h2>3. Permutations – P(n, r)</h2>
                <ul>
                  <li>Number of ways to arrange *r* objects out of *n* distinct objects.</li>
                  <li><strong>Formula:</strong> P(n, r) = n! / (n − r)!</li>
                  <li>Order matters in permutations.</li>
                  <li>Example: Number of ways to arrange 3 out of 5 books on a shelf = P(5, 3)</li>
                </ul>

                <h2>4. Combinations – C(n, r)</h2>
                <ul>
                  <li>Number of ways to choose *r* objects out of *n* distinct objects (order does not matter).</li>
                  <li><strong>Formula:</strong> C(n, r) = n! / [r!(n − r)!]</li>
                  <li>Example: Choosing 3 students out of 5 = C(5, 3)</li>
                </ul>

                <h2>5. Simple Applications</h2>
                <ul>
                  <li>Selection problems – selecting committees, teams, etc.</li>
                  <li>Arrangement problems – placing people in a row, circular permutations, etc.</li>
                  <li>Number formation, digit problems using given digits with or without repetition</li>
                  <li>Combining both permutation and combination concepts in real-life word problems</li>
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

export default PermutationsCombinations;
