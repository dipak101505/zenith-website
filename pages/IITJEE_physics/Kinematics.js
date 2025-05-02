import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const Kinematics = () => {
  const [Tags] = useState([
    'Physics', 'Kinematics', 'JEE Mains', 'Projectile Motion', 'Circular Motion'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Kinematics" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Kinematics – JEE Mains Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Frame of Reference</h2>
                <ul>
                  <li>A frame of reference is a coordinate system along with a clock used to describe and measure motion.</li>
                  <li>It is necessary to specify a reference frame to study the motion of an object.</li>
                  <li>Motion is always relative to the chosen frame of reference.</li>
                </ul>

                <h2>2. Motion in a Straight Line</h2>
                <ul>
                  <li>Also called one-dimensional motion.</li>
                  <li>Examples: A car moving along a straight road, a ball dropped from a height.</li>
                </ul>

                <h2>3. Speed and Velocity</h2>
                <ul>
                  <li>Speed: The rate of change of distance with time; scalar quantity.</li>
                  <li>Velocity: The rate of change of displacement with time; vector quantity (has both magnitude and direction).</li>
                </ul>

                <h2>4. Uniform and Non-Uniform Motion</h2>
                <ul>
                  <li>Uniform Motion: When an object covers equal distances in equal intervals of time.</li>
                  <li>Non-Uniform Motion: When an object covers unequal distances in equal intervals of time.</li>
                </ul>

                <h2>5. Average Speed and Instantaneous Velocity</h2>
                <ul>
                  <li>Average Speed = Total distance / Total time.</li>
                  <li>Instantaneous Velocity: Velocity of an object at a particular instant of time.</li>
                </ul>

                <h2>6. Uniformly Accelerated Motion</h2>
                <ul>
                  <li>Acceleration is constant in magnitude and direction.</li>
                  <li>Important formulas:
                    <pre>
v = u + at
s = ut + ½at²
v² = u² + 2as
s = [(u + v)/2]·t
                    </pre>
                    Where, <br/>
                    u = initial velocity, <br/>
                    v = final velocity, <br/>
                    a = acceleration, <br/>
                    s = displacement, <br/>
                    t = time.
                  </li>
                </ul>

                <h2>7. Velocity-Time and Position-Time Graphs</h2>
                <ul>
                  <li>Velocity-Time Graph:
                    <ul>
                      <li>Area under the graph gives displacement.</li>
                      <li>Slope gives acceleration.</li>
                    </ul>
                  </li>
                  <li>Position-Time Graph:
                    <ul>
                      <li>Slope gives velocity.</li>
                    </ul>
                  </li>
                </ul>

                <h2>8. Relative Velocity</h2>
                <ul>
                  <li>Velocity of one object with respect to another.</li>
                  <li>In one dimension:
                    <pre>v(AB) = v(A) - v(B)</pre>
                  </li>
                  <li>Important in analyzing problems involving two moving bodies.</li>
                </ul>

                <h2>9. Motion in a Plane</h2>
                <ul>
                  <li>Two-dimensional motion: Requires two coordinates (x and y) to describe position.</li>
                  <li>Example: A ball thrown at an angle, motion of a bird.</li>
                </ul>

                <h2>10. Projectile Motion</h2>
                <ul>
                  <li>A type of two-dimensional motion under constant acceleration due to gravity.</li>
                  <li>Key points:
                    <ul>
                      <li>Horizontal velocity remains constant (ignoring air resistance).</li>
                      <li>Vertical velocity changes due to gravity.</li>
                      <li>Path followed is a parabola.</li>
                    </ul>
                  </li>
                  <li>Important Formulas:
                    <pre>
Time of flight (T) = (2u sinθ)/g
Maximum height (H) = (u² sin²θ)/(2g)
Horizontal range (R) = (u² sin2θ)/g
                    </pre>
                  </li>
                </ul>

                <h2>11. Uniform Circular Motion</h2>
                <ul>
                  <li>When an object moves in a circle at constant speed.</li>
                  <li>Although speed is constant, velocity changes due to change in direction.</li>
                  <li>Important quantities:
                    <ul>
                      <li>Angular velocity (ω) = θ/t</li>
                      <li>Centripetal acceleration (a<sub>c</sub>) = v²/r</li>
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

export default Kinematics;
