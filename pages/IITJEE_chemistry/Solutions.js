import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import CommentBox from '../../components/blog/CommentBox';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const Solutions = () => {
  const [Tags] = useState([
    'Solutions', 'Concentration Units', 'Raoult’s Law', 'Colligative Properties', 'van’t Hoff Factor', 'JEE Mains Chemistry'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Solutions" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Solutions – JEE Mains Chemistry</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Concentration Units</h2>
                <ul>
                  <li><strong>Molality (m):</strong> Moles of solute per kg of solvent.</li>
                  <li><strong>Molarity (M):</strong> Moles of solute per litre of solution.</li>
                  <li><strong>Mole Fraction:</strong> Ratio of moles of a component to total moles in solution.</li>
                  <li><strong>Percentage:</strong> By mass or volume – amount of solute per 100 parts of solution.</li>
                </ul>

                <h2>2. Vapour Pressure of Solutions and Raoult’s Law</h2>
                <ul>
                  <li><strong>Raoult’s Law:</strong> Partial vapour pressure of a component is proportional to its mole fraction.</li>
                  <li><strong>Ideal Solutions:</strong> Follow Raoult’s Law at all concentrations and have ΔH_mix = 0, ΔV_mix = 0.</li>
                  <li><strong>Non-Ideal Solutions:</strong> Show positive or negative deviations from Raoult’s Law.</li>
                  <li><strong>Vapour Pressure-Composition Plots:</strong> Graphical representation helps identify ideal and non-ideal behavior.</li>
                </ul>

                <h2>3. Colligative Properties of Dilute Solutions</h2>
                <ul>
                  <li><strong>Relative Lowering of Vapour Pressure:</strong> Proportional to mole fraction of solute.</li>
                  <li><strong>Depression of Freezing Point:</strong> ΔT_f = K_f · m.</li>
                  <li><strong>Elevation of Boiling Point:</strong> ΔT_b = K_b · m.</li>
                  <li><strong>Osmotic Pressure (π):</strong> π = CRT (C is molar concentration, R is gas constant, T is temperature).</li>
                </ul>

                <h2>4. Determination of Molecular Mass</h2>
                <p>
                  Colligative properties are used to calculate molar masses of solutes, especially in dilute solutions.
                </p>

                <h2>5. Abnormal Molar Mass and van’t Hoff Factor</h2>
                <ul>
                  <li><strong>Abnormal Molar Mass:</strong> Occurs due to association or dissociation of solute in solution.</li>
                  <li><strong>van’t Hoff Factor (i):</strong> Accounts for actual number of particles in solution. Adjusts colligative property formulas.</li>
                  <li><strong>Significance:</strong> Helps identify ionization and aggregation in electrolytes and solutes.</li>
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

export default Solutions;
