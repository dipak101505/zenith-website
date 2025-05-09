import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import CommentBox from '../../components/blog/CommentBox';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const ChemicalBonding = () => {
  const [Tags] = useState([
    'Chemical Bonding', 'Molecular Structure', 'Ionic Bond', 'Covalent Bond', 'MOT', 'JEE Mains'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Chemical Bonding and Molecular Structure" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Chemical Bonding and Molecular Structure – JEE Mains Chemistry</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Kossel-Lewis Approach to Bond Formation</h2>
                <p>
                  Kossel and Lewis proposed that atoms achieve stability by attaining noble gas configuration through the transfer or sharing of electrons, forming ionic or covalent bonds respectively.
                </p>

                <h2>2. Ionic Bonding</h2>
                <ul>
                  <li><strong>Formation:</strong> Involves transfer of electrons from a metal to a non-metal, resulting in oppositely charged ions held by electrostatic force.</li>
                  <li><strong>Factors Affecting Formation:</strong> Ionization energy, electron affinity, lattice energy.</li>
                  <li><strong>Lattice Enthalpy:</strong> Energy released when one mole of an ionic compound is formed from its gaseous ions.</li>
                </ul>

                <h2>3. Covalent Bonding</h2>
                <ul>
                  <li><strong>Concept:</strong> Formed by mutual sharing of electrons between atoms.</li>
                  <li><strong>Electronegativity:</strong> Tendency of an atom to attract shared electrons. Influences bond polarity.</li>
                  <li><strong>Fajan’s Rule:</strong> Predicts covalent character in ionic bonds based on polarizing power and polarizability.</li>
                  <li><strong>Dipole Moment:</strong> Measure of bond polarity; product of charge and distance between charges.</li>
                </ul>

                <h2>4. VSEPR Theory and Molecular Shapes</h2>
                <p>
                  Valence Shell Electron Pair Repulsion (VSEPR) theory predicts shapes of molecules based on repulsions between electron pairs (bonding and lone pairs).
                </p>

                <h2>5. Valence Bond Theory and Hybridization</h2>
                <ul>
                  <li><strong>Features:</strong> Bonds are formed by overlap of atomic orbitals with paired electrons.</li>
                  <li><strong>Hybridization:</strong> Mixing of atomic orbitals (s, p, d) to form equivalent hybrid orbitals. Types include sp, sp2, sp3, etc.</li>
                  <li><strong>Resonance:</strong> Delocalization of electrons in molecules having more than one valid Lewis structure.</li>
                </ul>

                <h2>6. Molecular Orbital Theory (MOT)</h2>
                <ul>
                  <li><strong>Features:</strong> Atomic orbitals combine to form molecular orbitals (MOs) using Linear Combination of Atomic Orbitals (LCAO).</li>
                  <li><strong>Types:</strong> Bonding and antibonding orbitals; sigma (σ) and pi (π) bonds.</li>
                  <li><strong>Electronic Configurations:</strong> Applied to diatomic molecules (e.g., O₂, N₂, B₂).</li>
                  <li><strong>Bond Order:</strong> (Number of bonding electrons – antibonding electrons)/2. Indicates bond strength and stability.</li>
                  <li><strong>Bond Length and Bond Energy:</strong> Inversely related to bond order.</li>
                </ul>

                <h2>7. Other Types of Bonding</h2>
                <ul>
                  <li><strong>Metallic Bonding:</strong> Positive metal ions surrounded by a sea of delocalized electrons.</li>
                  <li><strong>Hydrogen Bonding:</strong> Attractive interaction between a hydrogen atom bonded to a highly electronegative atom (like F, O, N) and another electronegative atom. Affects boiling points, solubility, etc.</li>
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

export default ChemicalBonding;
