import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const ThreeDimensionalGeometry = () => {
  const [Tags] = useState([
    'Mathematics', '3D Geometry', 'JEE Mains', 'Vectors', 'Lines and Planes'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Three Dimensional Geometry" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Three Dimensional Geometry – JEE Mains Mathematics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Coordinates of a Point in Space</h2>
                <ul>
                  <li>In three-dimensional space, a point is represented by an ordered triplet (x, y, z), where:</li>
                  <ul>
                    <li>x, y, and z represent the coordinates of the point along the x, y, and z axes respectively.</li>
                  </ul>
                </ul>

                <h2>2. Distance Between Two Points</h2>
                <ul>
                  <li>The distance between two points P₁(x₁, y₁, z₁) and P₂(x₂, y₂, z₂) in three-dimensional space is given by:</li>
                  <ul>
                    <li>Distance = √[(x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²]</li>
                  </ul>
                </ul>

                <h2>3. Section Formula</h2>
                <ul>
                  <li>The section formula in three dimensions is used to find the coordinates of a point dividing the line segment joining two points in a given ratio.</li>
                  <li>If the point P divides the line joining points A(x₁, y₁, z₁) and B(x₂, y₂, z₂) in the ratio m:n, the coordinates of P are:</li>
                  <ul>
                    <li>P = ((mx₂ + nx₁) / (m + n), (my₂ + ny₁) / (m + n), (mz₂ + nz₁) / (m + n))</li>
                  </ul>
                </ul>

                <h2>4. Direction Ratios and Direction Cosines</h2>
                <ul>
                  <li>The **direction ratios** (dr) of a line are the proportional values of the differences in the coordinates of two points on the line, i.e., (x₂ - x₁), (y₂ - y₁), (z₂ - z₁).</li>
                  <li>The **direction cosines** (l, m, n) of a line are the cosines of the angles made by the line with the positive x, y, and z-axes respectively.</li>
                  <ul>
                    <li>l = cos(α), m = cos(β), n = cos(γ), where α, β, and γ are the angles the line makes with the x, y, and z-axes respectively.</li>
                  </ul>
                </ul>

                <h2>5. Angle Between Two Intersecting Lines</h2>
                <ul>
                  <li>The angle θ between two lines with direction ratios (l₁, m₁, n₁) and (l₂, m₂, n₂) is given by:</li>
                  <ul>
                    <li>cos(θ) = (l₁l₂ + m₁m₂ + n₁n₂) / (√(l₁² + m₁² + n₁²) * √(l₂² + m₂² + n₂²))</li>
                  </ul>
                </ul>

                <h2>6. Equation of a Line</h2>
                <ul>
                  <li>The equation of a line in three-dimensional space passing through a point (x₁, y₁, z₁) with direction ratios (l, m, n) is given by:</li>
                  <ul>
                    <li>(x - x₁) / l = (y - y₁) / m = (z - z₁) / n</li>
                  </ul>
                </ul>

                <h2>7. Skew Lines</h2>
                <ul>
                  <li>Two lines are said to be **skew lines** if they are not parallel and do not intersect.</li>
                  <li>The shortest distance between two skew lines can be found using the formula:</li>
                  <ul>
                    <li>Distance = |(r₂ - r₁) . (d₁ × d₂)| / |d₁ × d₂|</li>
                    <li>Where r₁ and r₂ are position vectors of points on the respective lines, and d₁ and d₂ are direction ratios of the lines.</li>
                  </ul>
                </ul>

                <h2>8. Shortest Distance Between Two Skew Lines</h2>
                <ul>
                  <li>The shortest distance between two skew lines can be calculated using the cross product of their direction ratios, as explained in the previous section on skew lines.</li>
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

export default ThreeDimensionalGeometry;
