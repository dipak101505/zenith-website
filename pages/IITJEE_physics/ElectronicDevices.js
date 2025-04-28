import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const ElectronicDevices = () => {
  const [Tags] = useState([
    'Physics', 'Electronic Devices', 'Semiconductors', 'Diodes', 'Logic Gates', 'Nuclear Physics'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Electronic Devices" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Electronic Devices – JEE Mains Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Semiconductors</h2>
                <ul>
                  <li>Semiconductors are materials that have conductivity between conductors and insulators. The conductivity of semiconductors can be increased by doping, introducing impurities into the material.</li>
                </ul>

                <h2>2. Semiconductor Diode: I-V Characteristics in Forward and Reverse Bias</h2>
                <ul>
                  <li>A semiconductor diode is a device that allows current to flow in one direction only. In forward bias, the diode conducts current after a threshold voltage is reached. In reverse bias, the current is negligible until the breakdown voltage is exceeded.</li>
                </ul>

                <h2>3. Diode as a Rectifier</h2>
                <ul>
                  <li>Diodes are widely used as rectifiers, converting alternating current (AC) into direct current (DC). In a half-wave rectifier, the diode allows current to pass during only one half of the AC cycle, while a full-wave rectifier uses two diodes to conduct during both halves of the cycle.</li>
                </ul>

                <h2>4. I-V Characteristics of LED</h2>
                <ul>
                  <li>The LED (Light Emitting Diode) exhibits the property of emitting light when current passes through it. The I-V characteristics show that the diode has a forward voltage, and its emission intensity increases with the forward current.</li>
                </ul>

                <h2>5. The Photodiode</h2>
                <ul>
                  <li>A photodiode is a diode that generates a photocurrent when illuminated by light. It works in reverse bias, and the current produced depends on the intensity of the light incident on the diode.</li>
                </ul>

                <h2>6. Solar Cell</h2>
                <ul>
                  <li>A solar cell is a device that converts light energy directly into electrical energy using the photovoltaic effect. It is essentially a photodiode optimized for energy generation from sunlight.</li>
                </ul>

                <h2>7. Zener Diode and Zener Diode as Voltage Regulator</h2>
                <ul>
                  <li>The Zener diode is a special-purpose diode designed to allow current to flow in the reverse direction when the voltage exceeds a certain value (Zener breakdown). It is commonly used as a voltage regulator to maintain a constant voltage level in circuits.</li>
                </ul>

                <h2>8. Logic Gates (OR, AND, NOT, NAND, NOR)</h2>
                <ul>
                  <li>Logic gates are the fundamental building blocks of digital circuits. The most common logic gates include:</li>
                  <ul>
                    <li><b>OR Gate</b>: Outputs 1 if at least one input is 1.</li>
                    <li><b>AND Gate</b>: Outputs 1 if both inputs are 1.</li>
                    <li><b>NOT Gate</b>: Outputs the opposite of the input (inverts the input).</li>
                    <li><b>NAND Gate</b>: Outputs 0 only when both inputs are 1.</li>
                    <li><b>NOR Gate</b>: Outputs 0 if at least one input is 1.</li>
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

export default ElectronicDevices;
