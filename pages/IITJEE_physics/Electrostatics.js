import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const Electrostatics = () => {
  const [Tags] = useState([
    'Physics', 'Electrostatics', 'JEE Mains', 'Coulomb\'s Law', 'Electric Potential'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Electrostatics" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Electrostatics – JEE Mains Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Electric Charges</h2>
                <ul>
                  <li>Electric charges are conserved, meaning the total charge in an isolated system remains constant.</li>
                  <li>Coulomb’s Law describes the force between two point charges as:
                    <pre>F = k * (q₁ * q₂) / r²</pre>
                    where q₁ and q₂ are the charges, r is the distance between them, and k is Coulomb&apos;s constant.</li>
                  <li>The superposition principle states that the net force on a charge due to multiple other charges is the vector sum of the forces from each individual charge.</li>
                </ul>

                <h2>2. Electric Field</h2>
                <ul>
                  <li>The electric field (E) due to a point charge is given by:
                    <pre>E = k * q / r²</pre>
                    where q is the charge and r is the distance from the charge.</li>
                  <li>Electric field lines represent the direction of the electric field and indicate how positive test charges would move in the field.</li>
                  <li>An electric dipole consists of two equal and opposite charges separated by a distance, and the field due to a dipole can be calculated based on its moment.</li>
                </ul>

                <h2>3. Torque on a Dipole in a Uniform Electric Field</h2>
                <ul>
                  <li>A dipole experiences a torque in a uniform electric field, which tends to align the dipole with the field.</li>
                  <li>The torque (τ) on a dipole is given by:
                    <pre>τ = pE sin(θ)</pre>
                    where p is the dipole moment, E is the electric field, and θ is the angle between p and E.</li>
                </ul>

                <h2>4. Electric Flux and Gauss&apos;s Law</h2>
                <ul>
                  <li>Electric flux (Φ) is the product of the electric field and the area through which the field lines pass:
                    <pre>Φ = E * A * cos(θ)</pre>
                    where E is the electric field, A is the area, and θ is the angle between the field and the normal to the surface.</li>
                  <li>Gauss’s law relates the electric flux through a closed surface to the charge enclosed by the surface:
                    <pre>∮ E · dA = (Q_enclosed / ε₀)</pre>
                    where ε₀ is the permittivity of free space.</li>
                </ul>

                <h2>5. Applications of Gauss&apos;s Law</h2>
                <ul>
                  <li>Gauss&apos;s law can be used to find the electric field due to infinitely long uniformly charged straight wires, uniformly charged infinite plane sheets, and uniformly charged thin spherical shells.</li>
                </ul>

                <h2>6. Electric Potential</h2>
                <ul>
                  <li>The electric potential (V) due to a point charge is given by:
                    <pre>V = k * q / r</pre>
                    where q is the charge and r is the distance from the charge.</li>
                  <li>The potential difference between two points is the work done in moving a charge between those points.</li>
                </ul>

                <h2>7. Equipotential Surfaces</h2>
                <ul>
                  <li>Equipotential surfaces are surfaces where the electric potential is constant. No work is done when a charge moves along an equipotential surface.</li>
                </ul>

                <h2>8. Electric Potential Energy</h2>
                <ul>
                  <li>The electric potential energy of a system of two point charges is given by:
                    <pre>U = k * (q₁ * q₂) / r</pre>
                    where q₁ and q₂ are the charges, and r is the distance between them.</li>
                  <li>The potential energy of an electric dipole in an electric field is given by:
                    <pre>U = -pE cos(θ)</pre>
                    where p is the dipole moment, E is the electric field, and θ is the angle between p and E.</li>
                </ul>

                <h2>9. Conductors and Insulators</h2>
                <ul>
                  <li>Conductors are materials that allow the free flow of electric charge (e.g., metals), while insulators prevent the flow of charge (e.g., rubber, wood).</li>
                </ul>

                <h2>10. Dielectrics and Electric Polarization</h2>
                <ul>
                  <li>Dielectrics are insulating materials that, when placed in an electric field, become polarized and reduce the effective field inside the material.</li>
                </ul>

                <h2>11. Capacitors and Capacitance</h2>
                <ul>
                  <li>A capacitor is a device used to store electric charge. The capacitance (C) of a capacitor is defined as:
                    <pre>C = Q / V</pre>
                    where Q is the charge stored and V is the potential difference across the plates.</li>
                </ul>

                <h2>12. Combination of Capacitors</h2>
                <ul>
                  <li>Capacitors can be combined in series or parallel:</li>
                  <ul>
                    <li><strong>Series combination:</strong> 1 / C_total = 1 / C₁ + 1 / C₂ + ...</li>
                    <li><strong>Parallel combination:</strong> C_total = C₁ + C₂ + ...</li>
                  </ul>
                </ul>

                <h2>13. Capacitance of a Parallel Plate Capacitor</h2>
                <ul>
                  <li>The capacitance of a parallel plate capacitor with a dielectric medium between the plates is given by:
                    <pre>C = (ε₀ * A) / d</pre>
                    where A is the area of the plates, d is the distance between them, and ε₀ is the permittivity of free space.</li>
                </ul>

                <h2>14. Energy Stored in a Capacitor</h2>
                <ul>
                  <li>The energy (U) stored in a capacitor is given by:
                    <pre>U = (1/2) * C * V²</pre>
                    where C is the capacitance and V is the potential difference across the capacitor.</li>
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

export default Electrostatics;
