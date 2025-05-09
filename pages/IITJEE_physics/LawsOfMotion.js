import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const LawsOfMotion = () => {
  const [Tags] = useState([
    'Physics', 'Laws of Motion', 'JEE Mains', 'Friction', 'Circular Motion'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Laws of Motion" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Laws of Motion – JEE Mains Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Force and Inertia</h2>
                <ul>
                  <li>Force: An interaction that changes or tends to change the state of motion of a body.</li>
                  <li>Inertia: The natural tendency of a body to resist any change in its state of rest or motion.</li>
                </ul>

                <h2>2. Newton’s First Law of Motion</h2>
                <ul>
                  <li>Also known as the Law of Inertia.</li>
                  <li>An object remains at rest or in uniform motion unless acted upon by an external force.</li>
                </ul>

                <h2>3. Momentum</h2>
                <ul>
                  <li>Momentum (p) = mass (m) × velocity (v).</li>
                  <li>It is a vector quantity and is conserved in isolated systems.</li>
                </ul>

                <h2>4. Newton’s Second Law of Motion</h2>
                <ul>
                  <li>Force is the rate of change of momentum.</li>
                  <li>In formula form: 
                    <pre>F = ma</pre>
                    where F is force, m is mass, and a is acceleration.
                  </li>
                </ul>

                <h2>5. Impulse</h2>
                <ul>
                  <li>Impulse is the product of force and time interval during which the force acts.</li>
                  <li>Impulse = Change in momentum.</li>
                  <li>Units: Newton-second (Ns).</li>
                </ul>

                <h2>6. Newton’s Third Law of Motion</h2>
                <ul>
                  <li>For every action, there is an equal and opposite reaction.</li>
                  <li>Action and reaction forces act on different bodies.</li>
                </ul>

                <h2>7. Law of Conservation of Linear Momentum</h2>
                <ul>
                  <li>The total linear momentum of an isolated system remains constant if no external force acts on it.</li>
                  <li>Applications:
                    <ul>
                      <li>Recoil of a gun.</li>
                      <li>Rocket propulsion.</li>
                    </ul>
                  </li>
                </ul>

                <h2>8. Equilibrium of Concurrent Forces</h2>
                <ul>
                  <li>Concurrent forces act at a single point.</li>
                  <li>For equilibrium:
                    <ul>
                      <li>Sum of all forces in horizontal and vertical directions must be zero.</li>
                    </ul>
                  </li>
                </ul>

                <h2>9. Static and Kinetic Friction</h2>
                <ul>
                  <li>Static Friction: Friction that prevents relative motion between two surfaces.</li>
                  <li>Kinetic Friction: Friction acting when two surfaces are in relative motion.</li>
                </ul>

                <h2>10. Laws of Friction</h2>
                <ul>
                  <li>Friction is independent of the area of contact.</li>
                  <li>Friction is proportional to the normal force.</li>
                  <li>Coefficient of friction (μ) relates frictional force (F) and normal force (N):
                    <pre>F = μN</pre>
                  </li>
                </ul>

                <h2>11. Rolling Friction</h2>
                <ul>
                  <li>Occurs when a body rolls over a surface.</li>
                  <li>Rolling friction is generally much smaller than static or kinetic friction.</li>
                </ul>

                <h2>12. Dynamics of Uniform Circular Motion</h2>
                <ul>
                  <li>An object moving in a circle at constant speed experiences a centripetal force directed towards the center of the circle.</li>
                  <li>Centripetal force (F<sub>c</sub>) is given by:
                    <pre>F<sub>c</sub> = (mv²)/r</pre>
                    where m = mass, v = speed, r = radius of circle.
                  </li>
                </ul>

                <h2>13. Applications of Centripetal Force</h2>
                <ul>
                  <li>Vehicle on a Level Circular Road:
                    <ul>
                      <li>Friction provides the necessary centripetal force to turn the vehicle.</li>
                    </ul>
                  </li>
                  <li>Vehicle on a Banked Road:
                    <ul>
                      <li>Banking of roads reduces the dependence on friction and provides safer turns at higher speeds.</li>
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

export default LawsOfMotion;
