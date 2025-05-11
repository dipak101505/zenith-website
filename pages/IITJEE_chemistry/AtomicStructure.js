import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import CommentBox from '../../components/blog/CommentBox';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const AtomicStructure = () => {
  const [Tags] = useState([
    'Atomic Structure', 'Quantum Mechanics', 'Bohr Model', 'Quantum Numbers', 'JEE Mains', 'Chemistry'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Atomic Structure" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Atomic Structure – JEE Mains Chemistry</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Nature of Electromagnetic Radiation</h2>
                <p>
                  Electromagnetic radiation consists of oscillating electric and magnetic fields that travel through space. It includes gamma rays, X-rays, UV, visible light, IR, microwaves, and radio waves.
                </p>

                <h2>2. Photoelectric Effect</h2>
                <p>
                  When light of sufficient frequency strikes a metal surface, electrons are ejected. This phenomenon supports the particle nature of light, explained by Einstein using photons (E = hν).
                </p>

                <h2>3. Spectrum of Hydrogen Atom</h2>
                <p>
                  The hydrogen spectrum consists of line spectra in different regions (Lyman, Balmer, Paschen series). These lines are due to electronic transitions between energy levels in hydrogen.
                </p>

                <h2>4. Bohr Model of Hydrogen Atom</h2>
                <ul>
                  <li><strong>Postulates:</strong> Electrons revolve in fixed orbits without radiating energy. Angular momentum is quantized.</li>
                  <li><strong>Energy of Electron:</strong> ( E_n = -13.6 eV/n^2 )</li>
                  <li><strong>Radius of Orbit:</strong> ( r_n = 0.529 * n^2/Z  Å )</li>
                  <li><strong>Limitations:</strong> Fails for multi-electron systems and doesn&apos;t explain Zeeman or Stark effect.</li>
                </ul>

                <h2>5. Dual Nature of Matter</h2>
                <p>
                  Proposed by de Broglie: Matter exhibits both particle and wave-like properties. Wavelength λ = h/p = h/mv.
                </p>

                <h2>6. Heisenberg Uncertainty Principle</h2>
                <p>
                  It is impossible to determine both position and momentum of an electron simultaneously with absolute accuracy:<br />
                  <p>Δx · Δp ≥ h / 4π</p>

                </p>

                <h2>7. Quantum Mechanical Model of Atom</h2>
                <p>
                  Developed by Schrödinger using wave equations. It describes electrons as wave functions (ψ). Important features include the probabilistic nature of electron position and energy quantization.
                </p>

                <h2>8. Atomic Orbitals as One-Electron Wave Functions</h2>
                <p>
                  Orbitals are solutions to Schrödinger’s equation and represent regions with high probability of finding an electron. Each orbital corresponds to a unique set of quantum numbers.
                </p>

                <h2>9. Quantum Numbers and Their Significance</h2>
                <ul>
                  <li><strong>Principal (n):</strong> Size and energy level of orbital</li>
                  <li><strong>Azimuthal (l):</strong> Shape of orbital (s, p, d, f)</li>
                  <li><strong>Magnetic (m):</strong> Orientation of orbital in space</li>
                  <li><strong>Spin (s):</strong> Spin of electron (+½ or –½)</li>
                </ul>

                <h2>10. Shapes of Orbitals</h2>
                <ul>
                  <li><strong>s-orbitals:</strong> Spherical shape</li>
                  <li><strong>p-orbitals:</strong> Dumbbell shape (along x, y, z axes)</li>
                  <li><strong>d-orbitals:</strong> Cloverleaf shapes and donut-ring types</li>
                </ul>

                <h2>11. Radial Distribution Function (ψ and ψ²) for 1s and 2s Orbitals</h2>
                <p>
                  ψ² represents the probability density of finding an electron at a distance r from the nucleus. For 1s and 2s, ψ² varies with r and shows a node in 2s orbital.
                </p>

                <h2>12. Rules for Filling Electrons in Orbitals</h2>
                <ul>
                  <li><strong>Aufbau Principle:</strong> Electrons fill orbitals in increasing order of energy.</li>
                  <li><strong>Pauli Exclusion Principle:</strong> No two electrons in an atom can have the same set of quantum numbers.</li>
                  <li><strong>Hund’s Rule:</strong> Electrons occupy degenerate orbitals singly with parallel spins first.</li>
                </ul>

                <h2>13. Electronic Configuration and Stability</h2>
                <p>
                  The arrangement of electrons in orbitals follows specific rules and results in greater stability for elements with half-filled and completely filled subshells (e.g., Cr, Cu).
                </p>

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

export default AtomicStructure;
