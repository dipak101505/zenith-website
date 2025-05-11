import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const ElectromagneticWaves = () => {
  const [Tags] = useState([
    'Physics', 'Electromagnetic Waves', 'Displacement Current', 'Electromagnetic Spectrum', 'Applications of Electromagnetic Waves'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Electromagnetic Waves" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Electromagnetic Waves – JEE Mains Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Displacement Current</h2>
                <ul>
                  <li>Displacement current is a concept introduced by Maxwell to account for the changing electric field in a capacitor. It is defined as:
                    <pre>I_d = ε₀ (dΦ_E / dt)</pre>
                    where I_d is the displacement current, ε₀ is the permittivity of free space, and dΦ_E / dt is the rate of change of the electric flux.</li>
                  <li>Displacement current is essential for the continuity of current in an electric circuit, especially in capacitive circuits.</li>
                </ul>

                <h2>2. Electromagnetic Waves and Their Characteristics</h2>
                <ul>
                  <li>Electromagnetic waves are transverse waves that propagate through space carrying both electric and magnetic fields. These waves do not require a medium and can travel through a vacuum.</li>
                  <li>The speed of electromagnetic waves in a vacuum is the speed of light (c), given by:
                    <pre>c = 1 / √(ε₀μ₀)</pre>
                    where ε₀ is the permittivity of free space and μ₀ is the permeability of free space.</li>
                  <li>Electromagnetic waves exhibit properties such as reflection, refraction, diffraction, and polarization.</li>
                </ul>

                <h2>3. Transverse Nature of Electromagnetic Waves</h2>
                <ul>
                  <li>Electromagnetic waves are transverse in nature, meaning that the oscillations of both the electric and magnetic fields are perpendicular to the direction of wave propagation.</li>
                  <li>In an electromagnetic wave, the electric field (E) oscillates in one plane, and the magnetic field (B) oscillates in a plane perpendicular to it. Both fields are perpendicular to the direction of propagation.</li>
                </ul>

                <h2>4. Electromagnetic Spectrum</h2>
                <ul>
                  <li>The electromagnetic spectrum is the range of all possible frequencies of electromagnetic radiation. It is divided into different regions based on frequency and wavelength:</li>
                  <ul>
                    <li><strong>Radio Waves:</strong> These waves have the longest wavelength and are used for communication.</li>
                    <li><strong>Microwaves:</strong> Used for cooking and communication, they have shorter wavelengths than radio waves.</li>
                    <li><strong>Infrared:</strong> Invisible to the human eye, infrared waves are used for thermal imaging and remote controls.</li>
                    <li><strong>Visible Light:</strong> The narrow range of electromagnetic waves that can be detected by the human eye.</li>
                    <li><strong>Ultraviolet (UV):</strong> UV radiation is used for sterilization and can cause skin burns.</li>
                    <li><strong>X-rays:</strong> These waves are used in medical imaging and have high energy.</li>
                    <li><strong>Gamma Rays:</strong> With the highest energy, gamma rays are used in cancer treatment and come from radioactive decay.</li>
                  </ul>
                </ul>

                <h2>5. Applications of Electromagnetic Waves</h2>
                <ul>
                  <li><strong>Communication:</strong> Electromagnetic waves are used for radio, television, and mobile communication.</li>
                  <li><strong>Medical Applications:</strong> X-rays and gamma rays are used for medical imaging and cancer treatment.</li>
                  <li><strong>Microwave Cooking:</strong> Microwaves are used in ovens for cooking food.</li>
                  <li><strong>Remote Controls:</strong> Infrared waves are commonly used in remote control devices for TVs and other appliances.</li>
                  <li><strong>Radar:</strong> Radio waves are used in radar systems for navigation and weather monitoring.</li>
                  <li><strong>Satellite Communication:</strong> Electromagnetic waves are essential for satellite communication in space.</li>
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

export default ElectromagneticWaves;
