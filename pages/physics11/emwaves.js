import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import CommentBox from '../../components/blog/CommentBox';
import { useState } from 'react';
import Image from 'next/image';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const ElectromagneticWaves = () => {
  const [Tags] = useState([
    'Physics', 'Electromagnetic Waves', 'Class 11', 'Maxwell’s Equations', 'EM Spectrum', 'Displacement Current'
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
                <h1>Electromagnetic Waves – Class 11 Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Introduction</h2>
                <p>
                  Electromagnetic waves (EM waves) are waves that are created as a result of vibrations between an electric field and a magnetic field. They carry energy and can travel through the vacuum of space.
                </p>

                <h2>2. Displacement Current</h2>
                <p>
                  Maxwell introduced the concept of displacement current to modify Ampere’s Law for non-steady currents. It is given by:
                  <code> I<sub>d</sub> = ε₀ (dΦ<sub>E</sub>/dt) </code>, where Φ<sub>E</sub> is the electric flux.
                </p>

                <h2>3. Maxwell’s Equations (in vacuum)</h2>
                <ul>
                  <li>Gauss’s Law for Electricity: <code>∇·E = ρ/ε₀</code></li>
                  <li>Gauss’s Law for Magnetism: <code>∇·B = 0</code></li>
                  <li>Faraday’s Law of Induction: <code>∇×E = -dB/dt</code></li>
                  <li>Ampère-Maxwell Law: <code>∇×B = μ₀J + μ₀ε₀(dE/dt)</code></li>
                </ul>

                <h2>4. Properties of Electromagnetic Waves</h2>
                <ul>
                  <li>Transverse in nature</li>
                  <li>Do not require a medium</li>
                  <li>Travel at the speed of light in vacuum: <code>c = 1/√(μ₀ε₀)</code></li>
                  <li>Electric and magnetic fields are perpendicular to each other and to the direction of wave propagation</li>
                </ul>

                <h2>5. Electromagnetic Spectrum</h2>
                <p>The full range of EM waves is categorized based on frequency or wavelength:</p>
                <ul>
                  <li><strong>Radio Waves:</strong> Used in communication</li>
                  <li><strong>Microwaves:</strong> Radar, cooking (microwave ovens)</li>
                  <li><strong>Infrared (IR):</strong> Night vision, remote controls</li>
                  <li><strong>Visible Light:</strong> ROYGBIV, only part we can see</li>
                  <li><strong>Ultraviolet (UV):</strong> Sterilization, Vitamin D synthesis</li>
                  <li><strong>X-rays:</strong> Medical imaging</li>
                  <li><strong>Gamma Rays:</strong> Produced in nuclear reactions, highly penetrating</li>
                </ul>

                <h2>6. Energy and Momentum of EM Waves</h2>
                <p>
                  EM waves carry both energy and momentum. Energy density is given by:
                  <code> u = ε₀E² = B²/μ₀ </code><br />
                  Momentum carried is <code> p = E/c </code>
                </p>

                <h2>7. Applications of Electromagnetic Waves</h2>
                <ul>
                  <li>Communication: Radio, TV, mobile networks</li>
                  <li>Medical: MRI, X-ray, radiation therapy</li>
                  <li>Scientific: Spectroscopy, astronomy</li>
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
      `}</style>
    </>
  );
};

export default ElectromagneticWaves;
