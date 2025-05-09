import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const Gravitation = () => {
  const [Tags] = useState([
    'Physics', 'Gravitation', 'JEE Mains', 'Universal Law of Gravitation', 'Kepler’s Laws'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Gravitation" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Gravitation – JEE Mains Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Universal Law of Gravitation</h2>
                <ul>
                  <li>Every particle attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them.</li>
                  <li>Formula:
                    <pre>F = G * (m₁ * m₂) / r²</pre>
                    where G = gravitational constant.
                  </li>
                </ul>

                <h2>2. Acceleration due to Gravity (g)</h2>
                <ul>
                  <li>Acceleration experienced by a body due to Earth&apos;s gravitational pull.</li>
                  <li>On the surface:
                    <pre>g = GM / R²</pre>
                    where M = mass of Earth and R = radius of Earth.
                  </li>
                </ul>

                <h2>3. Variation of g with Altitude and Depth</h2>
                <ul>
                  <li>At altitude h:
                    <pre>g&apos; = g (1 - 2h/R)</pre> for h ≪ R
                  </li>
                  <li>At depth d:
                    <pre>g&apos; = g (1 - d/R)</pre>
                  </li>
                </ul>

                <h2>4. Kepler’s Laws of Planetary Motion</h2>
                <ul>
                  <li><strong>First Law (Law of Orbits):</strong> Planets move in elliptical orbits with the Sun at one focus.</li>
                  <li><strong>Second Law (Law of Areas):</strong> The line joining a planet and the Sun sweeps out equal areas in equal time intervals.</li>
                  <li><strong>Third Law (Law of Periods):</strong> Square of the orbital period is proportional to the cube of the semi-major axis of the orbit:
                    <pre>T² ∝ r³</pre>
                  </li>
                </ul>

                <h2>5. Gravitational Potential Energy</h2>
                <ul>
                  <li>Work done in bringing a mass from infinity to a point in a gravitational field.</li>
                  <li>Formula:
                    <pre>U = -G * (M * m) / r</pre>
                  </li>
                </ul>

                <h2>6. Gravitational Potential</h2>
                <ul>
                  <li>Potential energy per unit mass at a point in a gravitational field.</li>
                  <li>Formula:
                    <pre>V = U / m = -G * M / r</pre>
                  </li>
                </ul>

                <h2>7. Escape Velocity</h2>
                <ul>
                  <li>The minimum velocity needed to escape from the gravitational field of a planet without further propulsion.</li>
                  <li>Formula:
                    <pre>vₑ = √(2GM / R)</pre>
                  </li>
                </ul>

                <h2>8. Motion of a Satellite</h2>
                <ul>
                  <li>A satellite revolves around a planet due to the gravitational force providing the necessary centripetal force.</li>
                  <li>For a circular orbit:
                    <pre>F_gravity = F_centripetal</pre>
                  </li>
                </ul>

                <h2>9. Orbital Velocity</h2>
                <ul>
                  <li>Velocity needed to keep a satellite in orbit near a planet’s surface.</li>
                  <li>Formula:
                    <pre>v₀ = √(GM / R)</pre>
                  </li>
                </ul>

                <h2>10. Time Period and Energy of Satellite</h2>
                <ul>
                  <li><strong>Time Period (T):</strong>
                    <pre>T = 2π√(r³ / GM)</pre>
                  </li>
                  <li><strong>Energy of Satellite:</strong> Total energy (E) is negative and given by:
                    <pre>E = -GMm / (2r)</pre>
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

export default Gravitation;
