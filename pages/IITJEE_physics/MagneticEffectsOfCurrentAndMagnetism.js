import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const MagneticEffectsOfCurrentAndMagnetism = () => {
  const [Tags] = useState([
    'Physics', 'Magnetic Effects of Current', 'Magnetism', 'Biot-Savart Law', 'Ampere’s Law'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Magnetic Effects of Current and Magnetism" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Magnetic Effects of Current and Magnetism – JEE Mains Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Biot-Savart Law and Its Application to Current Carrying Circular Loop</h2>
                <ul>
                  <li>Biot-Savart law gives the magnetic field due to a small current element in a conductor. The magnetic field (dB) at a point due to a current element (Idl) is given by the equation:
                    <pre>dB = (μ₀/4π) * (Idl × r) / r²</pre>
                    where μ₀ is the permeability of free space, Idl is the current element, r is the distance vector, and r² is the square of the distance from the current element to the point of observation.</li>
                  <li>For a circular loop, the magnetic field at the center is given by:
                    <pre>B = (μ₀I) / (2R)</pre>
                    where I is the current and R is the radius of the loop.</li>
                </ul>

                <h2>2. Ampere&apos;s Law and Its Applications</h2>
                <ul>
                  <li>Ampere&apos;s law relates the magnetic field around a current-carrying conductor to the current passing through it. It is mathematically expressed as:
                    <pre>∮B • dl = μ₀I_enclosed</pre>
                    where B is the magnetic field, dl is an infinitesimal length element, and I_enclosed is the total current enclosed by the path.</li>
                  <li>For an infinitely long straight wire, the magnetic field at a distance (r) from the wire is given by:
                    <pre>B = (μ₀I) / (2πr)</pre></li>
                  <li>For a solenoid, the magnetic field is:
                    <pre>B = μ₀nI</pre>
                    where n is the number of turns per unit length and I is the current.</li>
                </ul>

                <h2>3. Force on a Moving Charge in Uniform Magnetic and Electric Fields</h2>
                <ul>
                  <li>The force on a moving charge q in a uniform magnetic field B with velocity v is given by:
                    <pre>F = q(v × B)</pre>
                    The force is perpendicular to both the velocity and the magnetic field.</li>
                  <li>The force on a moving charge in an electric field E is given by:
                    <pre>F = qE</pre>
                    The force is in the direction of the electric field.</li>
                </ul>

                <h2>4. Force on a Current-Carrying Conductor in a Uniform Magnetic Field</h2>
                <ul>
                  <li>The force on a current-carrying conductor of length L in a uniform magnetic field B is given by:
                    <pre>F = ILB sin(θ)</pre>
                    where I is the current, L is the length of the conductor, B is the magnetic field, and θ is the angle between the magnetic field and the current.</li>
                </ul>

                <h2>5. Force Between Two Parallel Current-Carrying Conductors</h2>
                <ul>
                  <li>The force per unit length between two parallel current-carrying conductors is given by:
                    <pre>F/L = (μ₀I₁I₂) / (2πr)</pre>
                    where I₁ and I₂ are the currents, r is the distance between the conductors, and μ₀ is the permeability of free space.</li>
                  <li>This force is attractive if the currents flow in the same direction and repulsive if they flow in opposite directions. The definition of the ampere is based on this interaction.</li>
                </ul>

                <h2>6. Torque Experienced by a Current Loop in a Uniform Magnetic Field</h2>
                <ul>
                  <li>The torque (τ) experienced by a current loop of area A carrying current I in a uniform magnetic field B is given by:
                    <pre>τ = IAB sin(θ)</pre>
                    where θ is the angle between the normal to the loop and the magnetic field.</li>
                  <li>The moving coil galvanometer, which works on the principle of torque on a current loop in a magnetic field, can be converted into an ammeter or voltmeter by appropriately shunting the galvanometer.</li>
                </ul>

                <h2>7. Current Loop as a Magnetic Dipole and Its Magnetic Dipole Moment</h2>
                <ul>
                  <li>A current loop can be treated as a magnetic dipole with a magnetic dipole moment (μ) given by:
                    <pre>μ = I A</pre>
                    where A is the area of the loop and I is the current flowing through it.</li>
                </ul>

                <h2>8. Bar Magnet as an Equivalent Solenoid</h2>
                <ul>
                  <li>A bar magnet can be considered as a solenoid with a magnetic dipole moment. It produces a magnetic field similar to that of a solenoid.</li>
                </ul>

                <h2>9. Magnetic Field Lines and Magnetic Field Due to a Magnetic Dipole</h2>
                <ul>
                  <li>Magnetic field lines represent the direction of the magnetic field. They form closed loops and never intersect.</li>
                  <li>The magnetic field due to a bar magnet at a point along its axis is given by:
                    <pre>B = (μ₀/4π) * (2M) / r³</pre>
                    where M is the magnetic moment and r is the distance from the center of the magnet.</li>
                  <li>The magnetic field at a point perpendicular to the axis of the bar magnet is given by:
                    <pre>B = (μ₀/4π) * M / r³</pre></li>
                </ul>

                <h2>10. Torque on a Magnetic Dipole in a Uniform Magnetic Field</h2>
                <ul>
                  <li>The torque (τ) on a magnetic dipole in a uniform magnetic field B is given by:
                    <pre>τ = μB sin(θ)</pre>
                    where θ is the angle between the magnetic moment and the magnetic field.</li>
                </ul>

                <h2>11. Para-, Dia-, and Ferromagnetic Substances</h2>
                <ul>
                  <li><strong>Paramagnetic substances:</strong> Substances that are weakly attracted to a magnetic field (e.g., aluminum).</li>
                  <li><strong>Diamagnetic substances:</strong> Substances that are weakly repelled by a magnetic field (e.g., copper, water).</li>
                  <li><strong>Ferromagnetic substances:</strong> Substances that are strongly attracted to a magnetic field and can be magnetized (e.g., iron, nickel, cobalt).</li>
                </ul>

                <h2>12. Effect of Temperature on Magnetic Properties</h2>
                <ul>
                  <li>The magnetic properties of materials change with temperature. For ferromagnetic materials, as the temperature increases, the magnetization decreases, and at a certain temperature (Curie temperature), they lose their ferromagnetic properties and become paramagnetic.</li>
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

export default MagneticEffectsOfCurrentAndMagnetism;
