import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import CommentBox from '../../components/blog/CommentBox';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const Equilibrium = () => {
  const [Tags] = useState([
    'Equilibrium', 'Dynamic Equilibrium', 'Le Chatelier’s Principle', 'Ionic Equilibrium', 'pH', 'JEE Mains Chemistry'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Equilibrium" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Equilibrium – JEE Mains Chemistry</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Concept of Equilibrium</h2>
                <p>
                  Equilibrium is a state in which the rate of the forward reaction equals the rate of the reverse reaction, indicating dynamic equilibrium. This applies to both physical and chemical processes.
                </p>

                <h2>2. Physical Equilibria</h2>
                <ul>
                  <li><strong>Solid-Liquid Equilibrium:</strong> Melting and freezing processes.</li>
                  <li><strong>Liquid-Gas Equilibrium:</strong> Evaporation and condensation.</li>
                  <li><strong>Gas-Gas Equilibrium:</strong> Gases in closed containers establish uniform composition.</li>
                  <li><strong>Solid-Gas Equilibrium:</strong> Sublimation and deposition.</li>
                  <li><strong>Henry’s Law:</strong> The solubility of a gas in a liquid is directly proportional to the pressure of the gas above the liquid.</li>
                </ul>

                <h2>3. General Characteristics of Physical Equilibrium</h2>
                <p>
                  Physical equilibria are dynamic, reversible, and occur under constant temperature and pressure with fixed equilibrium characteristics at a given condition.
                </p>

                <h2>4. Chemical Equilibrium</h2>
                <ul>
                  <li><strong>Law of Chemical Equilibrium:</strong> For a reaction aA + bB ⇌ cC + dD, the equilibrium constant K<sub>c</sub> is [C]^c[D]^d / [A]^a[B]^b.</li>
                  <li><strong>K<sub>p</sub> and K<sub>c</sub> Relationship:</strong> K<sub>p</sub> = K<sub>c</sub>(RT)<sup>Δn</sup></li>
                  <li><strong>ΔG and ΔG°:</strong> ΔG = ΔG° + RT lnQ. At equilibrium, ΔG = 0 and Q = K, hence ΔG° = -RT lnK.</li>
                </ul>

                <h2>5. Factors Affecting Equilibrium</h2>
                <ul>
                  <li><strong>Concentration:</strong> Changes shift equilibrium to oppose the change.</li>
                  <li><strong>Pressure:</strong> Affects reactions involving gases with different moles of reactants and products.</li>
                  <li><strong>Temperature:</strong> Increases or decreases the equilibrium constant based on exothermic/endothermic nature.</li>
                  <li><strong>Catalyst:</strong> Does not change equilibrium position; speeds up both forward and reverse reactions equally.</li>
                </ul>

                <h2>6. Le Chatelier’s Principle</h2>
                <p>
                  When a system at equilibrium is disturbed, it shifts in the direction that minimizes the disturbance to re-establish equilibrium.
                </p>

                <h2>7. Ionic Equilibrium in Solutions</h2>
                <ul>
                  <li><strong>Electrolytes:</strong> Strong electrolytes dissociate completely, weak ones partially.</li>
                  <li><strong>Ionization Concepts:</strong> Includes Arrhenius, Bronsted-Lowry, and Lewis definitions of acids and bases.</li>
                  <li><strong>Ionization Constants:</strong> K<sub>a</sub> and K<sub>b</sub> values indicate strength of acids and bases.</li>
                  <li><strong>pH and pOH:</strong> pH = -log[H⁺], pOH = -log[OH⁻], and pH + pOH = 14.</li>
                  <li><strong>Ionization of Water:</strong> K<sub>w</sub> = [H⁺][OH⁻] = 1 × 10⁻¹⁴ at 25°C.</li>
                  <li><strong>Common Ion Effect:</strong> Suppresses ionization of weak electrolytes by adding a common ion.</li>
                  <li><strong>Hydrolysis of Salts:</strong> Determines whether solution is acidic, basic or neutral.</li>
                  <li><strong>Solubility Product (K<sub>sp</sub>):</strong> Product of ion concentrations in saturated solution of a sparingly soluble salt.</li>
                  <li><strong>Buffer Solutions:</strong> Resist changes in pH upon addition of small amounts of acid or base.</li>
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

export default Equilibrium;
