import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import CommentBox from '../../components/blog/CommentBox';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const SomeBasicConceptsChemistry = () => {
  const [Tags] = useState([
    'Chemistry', 'Basic Concepts', 'Stoichiometry', 'Mole Concept', 'JEE Mains', 'Atomic Theory'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Some Basic Concepts in Chemistry" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Some Basic Concepts in Chemistry – JEE Mains Chemistry</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Matter and Its Nature</h2>
                <p>
                  Matter is anything that occupies space and has mass. It exists in three physical states: solid, liquid, and gas. Matter can be classified as elements, compounds, and mixtures.
                </p>

                <h2>2. Dalton’s Atomic Theory</h2>
                <p>
                  Proposed by John Dalton in 1808, the theory states that all matter is composed of indivisible atoms, which combine in fixed ratios to form compounds. While some aspects have been modified, it laid the foundation for modern atomic theory.
                </p>

                <h2>3. Concept of Atom, Molecule, Element, and Compound</h2>
                <ul>
                  <li><strong>Atom:</strong> The smallest unit of an element that retains its properties.</li>
                  <li><strong>Molecule:</strong> Two or more atoms chemically bonded together.</li>
                  <li><strong>Element:</strong> A substance made up of only one type of atom.</li>
                  <li><strong>Compound:</strong> A substance composed of two or more different atoms chemically bonded.</li>
                </ul>

                <h2>4. Laws of Chemical Combination</h2>
                <ul>
                  <li><strong>Law of Conservation of Mass:</strong> Mass is neither created nor destroyed in a chemical reaction.</li>
                  <li><strong>Law of Definite Proportions:</strong> A compound always contains the same elements in the same proportion by mass.</li>
                  <li><strong>Law of Multiple Proportions:</strong> When two elements combine in more than one proportion, the ratios of masses are simple whole numbers.</li>
                </ul>

                <h2>5. Atomic and Molecular Masses</h2>
                <ul>
                  <li><strong>Atomic Mass:</strong> Relative mass of an atom compared to 1/12 of a carbon-12 atom.</li>
                  <li><strong>Molecular Mass:</strong> Sum of atomic masses of all atoms in a molecule.</li>
                </ul>

                <h2>6. Mole Concept</h2>
                <p>
                  A mole is the amount of substance that contains as many entities as there are atoms in 12 g of carbon-12. One mole = 6.022 × 10²³ entities (Avogadro’s number).
                </p>

                <h2>7. Molar Mass</h2>
                <p>
                  The mass of one mole of a substance (element or compound), expressed in grams per mole (g/mol).
                </p>

                <h2>8. Percentage Composition</h2>
                <p>
                  It represents the percentage by mass of each element in a compound. Calculated as:<br />
                  (Mass of element in 1 mole of compound / Molar mass of compound) × 100
                </p>

                <h2>9. Empirical and Molecular Formulae</h2>
                <ul>
                  <li><strong>Empirical Formula:</strong> The simplest whole number ratio of atoms in a compound.</li>
                  <li><strong>Molecular Formula:</strong> Actual number of atoms of each element in a molecule. It is a multiple of the empirical formula.</li>
                </ul>

                <h2>10. Chemical Equations and Stoichiometry</h2>
                <p>
                  A chemical equation represents the reactants and products of a reaction. Stoichiometry involves calculations based on balanced chemical equations to determine the quantities of reactants and products.
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

export default SomeBasicConceptsChemistry;
