import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import CommentBox from '../../components/blog/CommentBox';
import { useState } from 'react';
import Image from 'next/image';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const AlcoholsPhenolsEthers = () => {
  const [Tags] = useState([
    'Chemistry', 'Alcohols', 'Phenols', 'Ethers', 'JEE Mains', 'Organic Chemistry'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Alcohols, Phenols and Ethers" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Alcohols, Phenols and Ethers – JEE Mains Chemistry</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Introduction</h2>
                <p>
                  This chapter deals with the structure, nomenclature, properties, and reactions of alcohols, phenols, and ethers — important functional groups in organic chemistry.
                </p>

                <h2>2. Classification</h2>
                <ul>
                  <li><strong>Alcohols:</strong> Classified as primary (1°), secondary (2°), and tertiary (3°) based on the number of alkyl groups attached to the carbon with –OH.</li>
                  <li><strong>Phenols:</strong> Hydroxy derivatives of benzene (–OH directly attached to aromatic ring).</li>
                  <li><strong>Ethers:</strong> Compounds with the structure R–O–R&quot;, where R and R&quot; are alkyl or aryl groups.</li>
                </ul>

                <h2>3. Nomenclature</h2>
                <ul>
                  <li><strong>Alcohols:</strong> Named by replacing –e of alkane with –ol (e.g., Ethanol)</li>
                  <li><strong>Phenols:</strong> Use &apos;phenol&apos; as parent compound, name substituents accordingly</li>
                  <li><strong>Ethers:</strong> Common names use alkyl groups alphabetically + &apos;ether&apos; (e.g., ethyl methyl ether)</li>
                </ul>

                <h2>4. Preparation Methods</h2>
                <ul>
                  <li><strong>Alcohols:</strong> Hydration of alkenes, hydrolysis of alkyl halides, fermentation</li>
                  <li><strong>Phenols:</strong> From cumene, benzene sulfonic acid, diazonium salts</li>
                  <li><strong>Ethers:</strong> Williamson ether synthesis (R–X + R&quot;O⁻ → R–O–R&quot;)</li>
                </ul>

                <h2>5. Physical Properties</h2>
                <ul>
                  <li>Hydrogen bonding in alcohols and phenols → higher boiling points</li>
                  <li>Ethers have lower boiling points, are volatile and less soluble in water</li>
                </ul>

                <h2>6. Chemical Reactions</h2>
                <ul>
                  <li><strong>Alcohols:</strong> Oxidation, dehydration to alkenes, esterification</li>
                  <li><strong>Phenols:</strong> Electrophilic substitution (nitration, halogenation), reactions with metals</li>
                  <li><strong>Ethers:</strong> Cleavage by strong acids like HI, HBr</li>
                </ul>

                <h2>7. Tests and Identification</h2>
                <ul>
                  <li><strong>Lucas Test:</strong> Differentiates 1°, 2°, and 3° alcohols</li>
                  <li><strong>Ferric Chloride Test:</strong> Violet color indicates presence of phenol</li>
                  <li><strong>Iodoform Test:</strong> Positive for ethanol and methyl ketones</li>
                </ul>

                <h2>8. Uses and Applications</h2>
                <ul>
                  <li><strong>Alcohols:</strong> Solvents, antiseptics (ethanol), fuel (methanol)</li>
                  <li><strong>Phenols:</strong> Antiseptics (Dettol), manufacturing of plastics</li>
                  <li><strong>Ethers:</strong> Solvents in labs, anesthetics (diethyl ether)</li>
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

export default AlcoholsPhenolsEthers;
