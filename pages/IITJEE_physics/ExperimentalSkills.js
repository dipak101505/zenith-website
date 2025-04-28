import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const ExperimentalSkills = () => {
  const [Tags] = useState([
    'Physics', 'Experimental Skills', 'Measurement', 'Elasticity', 'Optics', 'Electronics'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Experimental Skills" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Experimental Skills – JEE Mains Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Vernier Calipers</h2>
                <ul>
                  <li>Vernier calipers are used to measure the internal and external diameters, and the depth of a vessel with high precision.</li>
                </ul>

                <h2>2. Screw Gauge</h2>
                <ul>
                  <li>The screw gauge is used to measure the thickness or diameter of a thin sheet or wire accurately.</li>
                </ul>

                <h2>3. Simple Pendulum</h2>
                <ul>
                  <li>The simple pendulum can be used to study the dissipation of energy by plotting a graph between the square of amplitude and time.</li>
                </ul>

                <h2>4. Metre Scale</h2>
                <ul>
                  <li>A metre scale can be used to determine the mass of a given object by the principle of moments.</li>
                </ul>

                <h2>5. Young&apos;s Modulus of Elasticity</h2>
                <ul>
                  <li>This experiment helps determine the Young&apos;s modulus of elasticity of a metallic wire.</li>
                </ul>

                <h2>6. Surface Tension of Water</h2>
                <ul>
                  <li>The surface tension of water can be determined by capillary rise, and the effect of detergents can be studied as well.</li>
                </ul>

                <h2>7. Coefficient of Viscosity</h2>
                <ul>
                  <li>The coefficient of viscosity of a given viscous liquid can be measured by determining the terminal velocity of a spherical body.</li>
                </ul>

                <h2>8. Speed of Sound in Air</h2>
                <ul>
                  <li>The speed of sound in air at room temperature can be determined using a resonance tube.</li>
                </ul>

                <h2>9. Specific Heat Capacity</h2>
                <ul>
                  <li>The specific heat capacity of a given solid and liquid can be measured by the method of mixtures.</li>
                </ul>

                <h2>10. Resistivity of a Wire</h2>
                <ul>
                  <li>The resistivity of a material of a given wire can be determined using a metre bridge.</li>
                </ul>

                <h2>11. Resistance of a Wire</h2>
                <ul>
                  <li>The resistance of a given wire can be calculated using Ohm&apos;s law.</li>
                </ul>

                <h2>12. Figure of Merit of a Galvanometer</h2>
                <ul>
                  <li>The resistance and figure of merit of a galvanometer can be determined using the half deflection method.</li>
                </ul>

                <h2>13. Focal Length of Mirrors and Lenses</h2>
                <ul>
                  <li>The focal length of (i) a convex mirror, (ii) a concave mirror, and (iii) a convex lens can be determined using the parallax method.</li>
                </ul>

                <h2>14. Angle of Deviation vs Angle of Incidence</h2>
                <ul>
                  <li>A plot of the angle of deviation vs angle of incidence for a triangular prism can be made to study its properties.</li>
                </ul>

                <h2>15. Refractive Index of Glass Slab</h2>
                <ul>
                  <li>The refractive index of a glass slab can be determined using a travelling microscope.</li>
                </ul>

                <h2>16. Characteristic Curves of a p-n Junction Diode</h2>
                <ul>
                  <li>The characteristic curves of a p-n junction diode can be plotted for forward and reverse bias.</li>
                </ul>

                <h2>17. Zener Diode and Breakdown Voltage</h2>
                <ul>
                  <li>The characteristic curves of a Zener diode can be studied, and the reverse breakdown voltage can be determined.</li>
                </ul>

                <h2>18. Identification of Components</h2>
                <ul>
                  <li>The identification of diode, LED, resistor, and capacitor from a mixed collection of such items can be done based on their characteristics.</li>
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

export default ExperimentalSkills;
