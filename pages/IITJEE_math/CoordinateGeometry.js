import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const CoordinateGeometry = () => {
  const [Tags] = useState([
    'Mathematics', 'Coordinate Geometry', 'JEE Mains', 'Straight Lines', 'Conic Sections'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Coordinate Geometry" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Coordinate Geometry – JEE Mains Mathematics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Cartesian Coordinate System</h2>
                <ul>
                  <li>The coordinate plane consists of two perpendicular axes: the **x-axis** (horizontal) and the **y-axis** (vertical).</li>
                  <li>Each point in the plane is represented by an ordered pair (x, y), where x is the coordinate along the x-axis, and y is the coordinate along the y-axis.</li>
                </ul>

                <h2>2. Distance Formula</h2>
                <ul>
                  <li>The distance between two points (x₁, y₁) and (x₂, y₂) is given by:</li>
                  <ul>
                    <li>Distance = √[(x₂ - x₁)² + (y₂ - y₁)²]</li>
                  </ul>
                </ul>

                <h2>3. Section Formula</h2>
                <ul>
                  <li>The section formula is used to find the coordinates of a point that divides the line segment joining two points in a given ratio.</li>
                  <li>If a point P divides the line segment joining A(x₁, y₁) and B(x₂, y₂) in the ratio m:n, then the coordinates of P are:</li>
                  <ul>
                    <li>P = ( (mx₂ + nx₁) / (m + n), (my₂ + ny₁) / (m + n) )</li>
                  </ul>
                </ul>

                <h2>4. Locus and its Equation</h2>
                <ul>
                  <li>The locus of a point is the set of all points that satisfy a given condition.</li>
                  <li>The equation of the locus represents the geometric place of points that satisfy the condition.</li>
                  <li>For example, the equation of a circle is the locus of points equidistant from a fixed point (the center).</li>
                </ul>

                <h2>5. Slope of a Line</h2>
                <ul>
                  <li>The slope (m) of a line is defined as the tangent of the angle θ that the line makes with the positive direction of the x-axis.</li>
                  <ul>
                    <li>Slope, m = (y₂ - y₁) / (x₂ - x₁)</li>
                  </ul>
                  <li>If two lines are parallel, their slopes are equal. If two lines are perpendicular, the product of their slopes is -1.</li>
                </ul>

                <h2>6. Parallel and Perpendicular Lines</h2>
                <ul>
                  <li>Two lines are parallel if they have the same slope.</li>
                  <li>Two lines are perpendicular if the product of their slopes is -1.</li>
                </ul>

                <h2>7. Intercepts of a Line on the Coordinate Axis</h2>
                <ul>
                  <li>The x-intercept of a line is the point where the line intersects the x-axis, and similarly, the y-intercept is where the line intersects the y-axis.</li>
                  <li>If the equation of a line is in the form Ax + By + C = 0, the intercepts are:</li>
                  <ul>
                    <li>x-intercept = -C / A, y-intercept = -C / B</li>
                  </ul>
                </ul>

                <h2>8. Equation of a Straight Line</h2>
                <ul>
                  <li>The equation of a straight line can be represented in various forms:</li>
                  <ul>
                    <li>**Point-Slope Form**: y - y₁ = m(x - x₁)</li>
                    <li>**Slope-Intercept Form**: y = mx + c</li>
                    <li>**General Form**: Ax + By + C = 0</li>
                  </ul>
                </ul>

                <h2>9. Angle Between Two Lines</h2>
                <ul>
                  <li>The angle θ between two lines with slopes m₁ and m₂ is given by:</li>
                  <ul>
                    <li>tan(θ) = |(m₁ - m₂) / (1 + m₁m₂)|</li>
                  </ul>
                </ul>

                <h2>10. Concurrence of Three Lines</h2>
                <ul>
                  <li>Three lines are said to be concurrent if they intersect at a single point.</li>
                  <li>For three lines with equations L₁: A₁x + B₁y + C₁ = 0, L₂: A₂x + B₂y + C₂ = 0, and L₃: A₃x + B₃y + C₃ = 0, they are concurrent if the determinant of the coefficients is zero:</li>
                  <ul>
                    <li>Determinant = |A₁ B₁ C₁| = 0</li>
                    <li>|A₂ B₂ C₂|</li>
                    <li>|A₃ B₃ C₃|</li>
                  </ul>
                </ul>

                <h2>11. Distance of a Point from a Line</h2>
                <ul>
                  <li>The distance of a point P(x₁, y₁) from a line Ax + By + C = 0 is given by:</li>
                  <ul>
                    <li>Distance = |Ax₁ + By₁ + C| / √(A² + B²)</li>
                  </ul>
                </ul>

                <h2>12. Centroid, Orthocenter, and Circumcenter of a Triangle</h2>
                <ul>
                  <li>The **centroid** of a triangle is the point of intersection of the medians, and it divides each median in a 2:1 ratio.</li>
                  <li>The **orthocenter** is the point of intersection of the altitudes of a triangle.</li>
                  <li>The **circumcenter** is the point of intersection of the perpendicular bisectors of the sides of the triangle, and it is equidistant from all three vertices of the triangle.</li>
                </ul>

                <h2>13. Circle</h2>
                <ul>
                  <li>The equation of a circle with center (h, k) and radius r is:</li>
                  <ul>
                    <li>(x - h)² + (y - k)² = r²</li>
                  </ul>
                  <li>The general form of the equation of a circle is:</li>
                  <ul>
                    <li>x² + y² + 2gx + 2fy + c = 0</li>
                  </ul>
                  <li>The center is (-g, -f) and the radius is √(g² + f² - c).</li>
                  <li>If the endpoints of a diameter of a circle are given, the equation of the circle can be derived using the midpoint formula for the center and the distance formula for the radius.</li>
                </ul>

                <h2>14. Conic Sections</h2>
                <ul>
                  <li>Conic sections are the curves formed by the intersection of a plane and a cone. The three primary types of conic sections are:</li>
                  <ul>
                    <li>**Parabola**: The equation of a parabola in standard form is y² = 4ax or x² = 4ay.</li>
                    <li>**Ellipse**: The standard form of an ellipse is (x² / a²) + (y² / b²) = 1.</li>
                    <li>**Hyperbola**: The standard form of a hyperbola is (x² / a²) - (y² / b²) = 1.</li>
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

export default CoordinateGeometry;
