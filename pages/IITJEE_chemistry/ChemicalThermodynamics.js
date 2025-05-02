import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import CommentBox from '../../components/blog/CommentBox';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const ChemicalThermodynamics = () => {
  const [Tags] = useState([
    'Thermodynamics', 'Entropy', 'Enthalpy', 'First Law', 'Second Law', 'JEE Mains'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Chemical Thermodynamics" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Chemical Thermodynamics – JEE Mains Chemistry</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Fundamentals of Thermodynamics</h2>
                <ul>
                  <li><strong>System and Surroundings:</strong> The part under study is the system; everything else is the surroundings.</li>
                  <li><strong>Extensive Properties:</strong> Depend on the amount of matter (e.g., volume, energy).</li>
                  <li><strong>Intensive Properties:</strong> Independent of the amount of matter (e.g., temperature, pressure).</li>
                  <li><strong>State Functions:</strong> Properties like internal energy (U), enthalpy (H), and entropy (S) that depend only on the state.</li>
                  <li><strong>Types of Processes:</strong> Isothermal, adiabatic, isobaric, isochoric, reversible, irreversible.</li>
                </ul>

                <h2>2. First Law of Thermodynamics</h2>
                <ul>
                  <li><strong>Concept:</strong> Energy can neither be created nor destroyed. ΔU = q + w</li>
                  <li><strong>Work (w):</strong> Work done by/on the system (e.g., expansion work).</li>
                  <li><strong>Heat (q):</strong> Energy exchanged due to temperature difference.</li>
                  <li><strong>Internal Energy (U):</strong> Total energy of the system.</li>
                  <li><strong>Enthalpy (H):</strong> H = U + PV, useful in constant pressure processes.</li>
                  <li><strong>Heat Capacity (C):</strong> Amount of heat required to raise temperature.</li>
                  <li><strong>Molar Heat Capacity:</strong> Heat required to raise the temperature of one mole by 1°C (or 1 K).</li>
                </ul>

                <h2>3. Hess’s Law of Constant Heat Summation</h2>
                <p>
                  The total enthalpy change of a reaction is the same, irrespective of the number of steps taken. It allows calculation of enthalpies of complex reactions using simpler known reactions.
                </p>

                <h2>4. Types of Enthalpies</h2>
                <ul>
                  <li><strong>Bond Dissociation Enthalpy:</strong> Energy required to break one mole of bonds in gaseous molecules.</li>
                  <li><strong>Enthalpy of Combustion:</strong> Heat released when one mole of a substance burns completely in oxygen.</li>
                  <li><strong>Enthalpy of Formation:</strong> Heat change when one mole of compound forms from its elements in their standard states.</li>
                  <li><strong>Enthalpy of Atomization:</strong> Energy to convert one mole of a substance into its atoms in gaseous state.</li>
                  <li><strong>Enthalpy of Sublimation:</strong> Heat required to convert solid directly into gas.</li>
                  <li><strong>Enthalpy of Phase Transition:</strong> Includes fusion and vaporization enthalpies.</li>
                  <li><strong>Enthalpy of Hydration:</strong> Heat released when 1 mole of ions is hydrated.</li>
                  <li><strong>Enthalpy of Ionization:</strong> Energy to remove electrons from atoms or ions.</li>
                  <li><strong>Enthalpy of Solution:</strong> Heat change when 1 mole of solute dissolves in solvent.</li>
                </ul>

                <h2>5. Second Law of Thermodynamics</h2>
                <ul>
                  <li><strong>Spontaneity:</strong> Process that occurs naturally without external work. Driven by increase in entropy or decrease in free energy.</li>
                  <li><strong>Entropy (ΔS):</strong> Measure of randomness or disorder; increases in spontaneous processes.</li>
                  <li><strong>ΔS<sub>universe</sub>:</strong> For spontaneous processes, ΔS<sub>univ</sub> &gt; 0.</li>
                  <li><strong>Gibbs Free Energy (&Delta;G):</strong> &Delta;G = &Delta;H - T&Delta;S. Process is spontaneous if &Delta;G &lt; 0.</li>
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

export default ChemicalThermodynamics;
