import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const WorkEnergyPower = () => {
  const [Tags] = useState([
    'Physics', 'Work Energy Power', 'JEE Mains', 'Energy Conservation', 'Collisions'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Work, Energy and Power" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Work, Energy and Power – JEE Mains Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Work Done by a Constant Force</h2>
                <ul>
                  <li>Work (W) = Force (F) × Displacement (d) × cosθ, where θ is the angle between force and displacement.</li>
                  <li>Work is a scalar quantity and can be positive, negative, or zero.</li>
                </ul>

                <h2>2. Work Done by a Variable Force</h2>
                <ul>
                  <li>When force varies with position, work is calculated as:
                    <pre>W = ∫ F(x) dx</pre>
                    where F(x) is the force as a function of position x.
                  </li>
                </ul>

                <h2>3. Kinetic and Potential Energies</h2>
                <ul>
                  <li>Kinetic Energy (K.E.) = 
                    <pre>(1/2)mv²</pre>
                    where m = mass and v = velocity.
                  </li>
                  <li>Potential Energy (P.E.) is the energy possessed by a body due to its position or configuration.</li>
                </ul>

                <h2>4. Work-Energy Theorem</h2>
                <ul>
                  <li>The net work done by all forces on a particle equals the change in its kinetic energy.</li>
                  <li>Mathematically:
                    <pre>W<sub>net</sub> = ΔK.E. = K.E.<sub>final</sub> - K.E.<sub>initial</sub></pre>
                  </li>
                </ul>

                <h2>5. Power</h2>
                <ul>
                  <li>Power is the rate at which work is done.</li>
                  <li>Average Power = Work done / Time taken.</li>
                  <li>Instantaneous Power = 
                    <pre>P = F·v</pre>
                    where F = force and v = velocity.
                  </li>
                  <li>Units: Watt (W).</li>
                </ul>

                <h2>6. Potential Energy of a Spring</h2>
                <ul>
                  <li>For a spring obeying Hooke&apos;s law:
                    <pre>F = -kx</pre>
                    where k = spring constant and x = displacement.</li>
                  <li>Potential Energy stored:
                    <pre>U = (1/2)kx²</pre>
                  </li>
                </ul>

                <h2>7. Conservation of Mechanical Energy</h2>
                <ul>
                  <li>In the absence of non-conservative forces (like friction), the total mechanical energy (K.E. + P.E.) of a system remains constant.</li>
                  <li>Mathematically:
                    <pre>K.E. + P.E. = Constant</pre>
                  </li>
                </ul>

                <h2>8. Conservative and Non-Conservative Forces</h2>
                <ul>
                  <li>Conservative Forces: Work done is independent of path (e.g., gravitational force, spring force).</li>
                  <li>Non-Conservative Forces: Work done depends on path (e.g., friction, air resistance).</li>
                </ul>

                <h2>9. Motion in a Vertical Circle</h2>
                <ul>
                  <li>Analyzing an object (like a pendulum) moving in a vertical circle involves conservation of energy and forces acting at different points.</li>
                  <li>At the topmost point:
                    <ul>
                      <li>Minimum speed to maintain circular motion:
                        <pre>v = √(gR)</pre>
                        where g = gravitational acceleration and R = radius.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h2>10. Elastic and Inelastic Collisions</h2>
                <ul>
                  <li>Elastic Collision:
                    <ul>
                      <li>Both momentum and kinetic energy are conserved.</li>
                      <li>Example: Ideal collisions between hard spheres.</li>
                    </ul>
                  </li>
                  <li>Inelastic Collision:
                    <ul>
                      <li>Momentum is conserved, but kinetic energy is not.</li>
                      <li>Some energy is converted into heat, sound, deformation, etc.</li>
                    </ul>
                  </li>
                </ul>

                <h2>11. Collisions in One and Two Dimensions</h2>
                <ul>
                  <li>One-Dimensional Collision (Head-on collision):
                    <ul>
                      <li>Analyze using conservation of momentum and kinetic energy (if elastic).</li>
                    </ul>
                  </li>
                  <li>Two-Dimensional Collision:
                    <ul>
                      <li>Momentum conservation applied separately along x and y axes.</li>
                      <li>Common example: Collision of billiard balls.</li>
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

export default WorkEnergyPower;
