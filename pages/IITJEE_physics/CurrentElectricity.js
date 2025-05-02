import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const CurrentElectricity = () => {
  const [Tags] = useState([
    'Physics', 'Current Electricity', 'JEE Mains', 'Ohm\'s Law', 'Electrical Resistance'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Current Electricity" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Current Electricity – JEE Mains Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Electric Current: Drift Velocity and Mobility</h2>
                <ul>
                  <li>Electric current is the flow of electric charge, usually through conductors like wires. The drift velocity is the average velocity of charge carriers due to the applied electric field.</li>
                  <li>The mobility of charge carriers relates the drift velocity to the applied electric field and is given by: 
                    <pre>v_d = μE</pre>
                    where v_d is the drift velocity, μ is the mobility, and E is the electric field.</li>
                </ul>

                <h2>2. Ohm&apos;s Law and Electrical Resistance</h2>
                <ul>
                  <li>Ohm&apos;s law states that the current (I) through a conductor is directly proportional to the potential difference (V) across it and inversely proportional to its resistance (R):
                    <pre>V = IR</pre>
                    where V is the voltage, I is the current, and R is the resistance.</li>
                  <li>Electrical resistance is a measure of the opposition to current flow and is given by:
                    <pre>R = ρ (L/A)</pre>
                    where ρ is the resistivity, L is the length, and A is the cross-sectional area of the conductor.</li>
                </ul>

                <h2>3. I-V Characteristics of Ohmic and Non-Ohmic Conductors</h2>
                <ul>
                  <li>For an Ohmic conductor, the current is directly proportional to the voltage, and its I-V graph is a straight line.</li>
                  <li>Non-ohmic conductors do not follow Ohm&apos;s law, and their I-V characteristics may be nonlinear (e.g., for a diode, the current increases exponentially with voltage).</li>
                </ul>

                <h2>4. Electrical Energy and Power</h2>
                <ul>
                  <li>The electrical energy (E) consumed by a device is given by the product of voltage, current, and time:
                    <pre>E = VIt</pre></li>
                  <li>The electrical power (P) is the rate at which energy is consumed:
                    <pre>P = VI</pre></li>
                </ul>

                <h2>5. Electrical Resistivity and Conductivity</h2>
                <ul>
                  <li>Resistivity (ρ) is a material property that determines how much a material resists the flow of electric current.</li>
                  <li>Conductivity (σ) is the reciprocal of resistivity and represents how well a material allows current to pass through it:
                    <pre>σ = 1/ρ</pre></li>
                </ul>

                <h2>6. Series and Parallel Combinations of Resistors</h2>
                <ul>
                  <li>In series, the total resistance (R_total) is the sum of individual resistances:
                    <pre>R_total = R₁ + R₂ + ...</pre></li>
                  <li>In parallel, the total resistance is given by the reciprocal sum of the individual resistances:
                    <pre>1/R_total = 1/R₁ + 1/R₂ + ...</pre></li>
                </ul>

                <h2>7. Temperature Dependence of Resistance</h2>
                <ul>
                  <li>The resistance of most materials increases with temperature. The temperature dependence is given by:
                    <pre>R(T) = R₀ [1 + α(T - T₀)]</pre>
                    where α is the temperature coefficient of resistance, and T₀ is the reference temperature.</li>
                </ul>

                <h2>8. Internal Resistance and Potential Difference of a Cell</h2>
                <ul>
                  <li>A cell has an internal resistance (r) that causes a voltage drop when a current flows through it.</li>
                  <li>The potential difference across the terminals of a cell is less than its emf due to this internal resistance.</li>
                </ul>

                <h2>9. Combination of Cells in Series and Parallel</h2>
                <ul>
                  <li>In series, the emf of the combined cells adds up, but the internal resistance also increases.</li>
                  <li>In parallel, the emf remains the same, but the equivalent internal resistance decreases.</li>
                </ul>

                <h2>10. Kirchhoff&apos;s Laws and Their Applications</h2>
                <ul>
                  <li>Kirchhoff’s current law (KCL) states that the total current entering a junction equals the total current leaving the junction.</li>
                  <li>Kirchhoff’s voltage law (KVL) states that the sum of potential differences (voltage) around any closed loop is zero.</li>
                </ul>

                <h2>11. Wheatstone Bridge and Metre Bridge</h2>
                <ul>
                  <li>The Wheatstone bridge is used to measure unknown resistance by balancing two legs of a bridge circuit.</li>
                  <li>The Metre Bridge is a practical implementation of the Wheatstone bridge for measuring resistances in laboratory setups.</li>
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

export default CurrentElectricity;
