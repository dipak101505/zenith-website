import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const StatisticsAndProbability = () => {
  const [Tags] = useState([
    'Mathematics', 'Statistics', 'Probability', 'JEE Mains', 'Mean', 'Standard Deviation'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Statistics and Probability" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Statistics and Probability – JEE Mains Mathematics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Measures of Dispersion</h2>
                <ul>
                  <li><strong>Range</strong>: Difference between the highest and lowest values.</li>
                  <li><strong>Mean Deviation</strong>:
                    <ul>
                      <li>For ungrouped data: Mean deviation from mean/median is calculated using absolute differences.</li>
                      <li>For grouped data: Apply class-wise deviations and frequencies.</li>
                    </ul>
                  </li>
                  <li><strong>Standard Deviation (σ)</strong>:
                    <ul>
                      <li>For ungrouped data:
                        <pre>{`σ = √[(1/n) × Σ(xᵢ - x̄)²]`}</pre>
                      </li>
                      <li>For grouped data: Use midpoints and frequency for calculation.</li>
                    </ul>
                  </li>
                  <li><strong>Variance</strong>: Square of the standard deviation.</li>
                </ul>

                <h2>2. Measures of Central Tendency</h2>
                <ul>
                  <li><strong>Mean</strong>: Average of all data values.</li>
                  <li><strong>Median</strong>: Middle value when data is arranged in order.</li>
                  <li><strong>Mode</strong>: Most frequent value in the dataset.</li>
                  <li>For grouped data: Apply appropriate formulae using class intervals and frequencies.</li>
                </ul>

                <h2>3. Probability</h2>
                <ul>
                  <li><strong>Probability of an Event</strong>: 
                    <pre>{`P(E) = Number of favorable outcomes / Total number of outcomes`}</pre>
                  </li>
                  <li><strong>Addition Theorem</strong>: 
                    <pre>{`P(A ∪ B) = P(A) + P(B) - P(A ∩ B)`}</pre>
                  </li>
                  <li><strong>Multiplication Theorem</strong>: 
                    <pre>{`P(A ∩ B) = P(A) × P(B|A)`}</pre>
                  </li>
                  <li><strong>Bayes&apos; Theorem</strong>: 
                    <pre>{`P(A|B) = [P(B|A) × P(A)] / P(B)`}</pre>
                    Useful for finding conditional probabilities.
                  </li>
                </ul>

                <h2>4. Probability Distribution</h2>
                <ul>
                  <li><strong>Random Variable</strong>: A variable whose possible values are numerical outcomes of a random phenomenon.</li>
                  <li><strong>Probability Distribution</strong>: A table or function that gives the probabilities of outcomes of a random variable.</li>
                  <li><strong>Expected Value</strong>: 
                    <pre>{`E(X) = Σ xᵢ P(xᵢ)`}</pre>
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

export default StatisticsAndProbability;
