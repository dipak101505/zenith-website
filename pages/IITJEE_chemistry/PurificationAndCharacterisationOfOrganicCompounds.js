import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import CommentBox from '../../components/blog/CommentBox';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const PurificationAndCharacterisationOfOrganicCompounds = () => {
  const [Tags] = useState([
    'Purification of Organic Compounds', 'Crystallization', 'Distillation', 'Chromatography', 'Qualitative Analysis', 'Quantitative Analysis', 'IIT JEE Chemistry'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Purification and Characterisation of Organic Compounds" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Purification and Characterisation of Organic Compounds – JEE Mains Chemistry</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Introduction to Purification and Characterisation</h2>
                <p>
                  Purification is the process of removing impurities from organic compounds. Characterisation involves identifying the properties and structure of the compound. Various methods like crystallization, sublimation, distillation, differential extraction, and chromatography are used for purification, and qualitative and quantitative analyses are essential to determine the composition and purity of compounds.
                </p>

                <h2>2. Methods of Purification</h2>
                <h3>Crystallization</h3>
                <p>
                  Crystallization is a process in which a solid forms from a liquid or gas phase. It involves the formation of crystals from a solution. This technique is useful for purifying compounds based on their solubility in different solvents.
                </p>

                <h3>Sublimation</h3>
                <p>
                  Sublimation is the process in which a solid changes directly into a gas without passing through the liquid phase. It is used to purify solid compounds that can undergo sublimation, such as iodine and naphthalene.
                </p>

                <h3>Distillation</h3>
                <p>
                  Distillation is a technique used to separate liquids based on their boiling points. It is commonly used to purify liquids and separate volatile substances. Fractional distillation is used when the boiling points of the liquids are close.
                </p>

                <h3>Chromatography</h3>
                <p>
                  Chromatography is a technique used to separate and purify components from mixtures. It works by passing a mixture through a stationary phase and a mobile phase. Common types include paper chromatography, thin-layer chromatography (TLC), and column chromatography.
                </p>

                <h3>Differential Extraction</h3>
                <p>
                  Differential extraction is used to separate compounds based on their solubility in different solvents. It is often used to extract compounds from aqueous mixtures by adding an immiscible solvent.
                </p>

                <h2>3. Qualitative Analysis</h2>
                <p>
                  Qualitative analysis involves detecting the presence of specific elements or groups in a compound. The tests for detecting nitrogen, sulfur, phosphorus, and halogens are some of the common qualitative tests in organic chemistry.
                </p>

                <h3>Detection of Nitrogen</h3>
                <p>
                  The presence of nitrogen can be detected by the Lassaigne’s test, where sodium fusion is performed, followed by the addition of sodium picrate.
                </p>

                <h3>Detection of Sulphur</h3>
                <p>
                  Sulphur can be detected by the lead acetate test, where a white precipitate of lead sulphide is formed when the compound is heated with lead acetate.
                </p>

                <h3>Detection of Phosphorus</h3>
                <p>
                  Phosphorus is detected by the formation of a yellow precipitate of ammonium phosphomolybdate when a compound containing phosphorus is treated with molybdate solution.
                </p>

                <h3>Detection of Halogens</h3>
                <p>
                  Halogens can be detected using the silver nitrate test. When organic halides are treated with silver nitrate, the halogen ion reacts with silver ion to form a precipitate of silver halide.
                </p>

                <h2>4. Quantitative Analysis</h2>
                <p>
                  Quantitative analysis involves determining the amount of specific elements or compounds in a sample. Basic principles include the estimation of carbon, hydrogen, nitrogen, halogens, sulfur, and phosphorus.
                </p>

                <h3>Estimation of Carbon, Hydrogen, Nitrogen</h3>
                <p>
                  The estimation of carbon and hydrogen is done using the combustion method, where the organic compound is burned in excess oxygen, and the products are measured. Nitrogen estimation can be carried out using the Kjeldahl method.
                </p>

                <h3>Estimation of Halogens</h3>
                <p>
                  Halogens are estimated by the method of argentic salt formation, where the halogen reacts with silver nitrate to form a precipitate, which is weighed.
                </p>

                <h3>Estimation of Sulphur and Phosphorus</h3>
                <p>
                  Sulfur is estimated by combustion and absorbing the sulfur dioxide in a suitable solvent, while phosphorus estimation is typically done by forming phosphomolybdic acid.
                </p>

                <h2>5. Calculations of Empirical and Molecular Formulae</h2>
                <p>
                  The empirical formula of a compound is determined by calculating the simplest whole-number ratio of atoms in the compound. The molecular formula is determined by using the empirical formula and the molar mass of the compound. Numerical problems in organic quantitative analysis often involve these calculations.
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

export default PurificationAndCharacterisationOfOrganicCompounds;
