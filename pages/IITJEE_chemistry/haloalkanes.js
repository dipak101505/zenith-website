import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import Image from 'next/image';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const HaloalkanesHaloarenes = () => {
  const [Tags] = useState([
    'Chemistry', 'Haloalkanes', 'Haloarenes', 'JEE Mains', 'Organic Chemistry'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Haloalkanes and Haloarenes" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Haloalkanes and Haloarenes – JEE Mains Chemistry</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Introduction</h2>
                <p>
                  This chapter deals with compounds containing halogen atoms attached to aliphatic or aromatic carbon chains. These are known as haloalkanes (alkyl halides) and haloarenes (aryl halides).
                </p>

                <h2>2. Classification and Nomenclature</h2>
                <ul>
                  <li><strong>Haloalkanes:</strong> Based on the number of halogen atoms: mono, di, tri, etc. Named using IUPAC rules by replacing –e of alkane with halogen prefix (e.g., chloromethane).</li>
                  <li><strong>Haloarenes:</strong> Aromatic rings with halogen substitution. Named using benzene as the base (e.g., chlorobenzene).</li>
                </ul>

                <h2>3. Nature of C–X Bond</h2>
                <ul>
                  <li>The carbon-halogen bond is polar due to electronegativity difference.</li>
                  <li>Bond strength decreases from C–F to C–I.</li>
                </ul>

                <h2>4. Methods of Preparation</h2>
                <ul>
                  <li><strong>Haloalkanes:</strong> From alcohols using HX, PCl₅, SOCl₂; from alkanes via halogenation.</li>
                  <li><strong>Haloarenes:</strong> Electrophilic substitution of benzene with halogens in presence of Lewis acid (e.g., FeCl₃).</li>
                </ul>

                <h2>5. Physical Properties</h2>
                <ul>
                  <li>Boiling points increase with molecular mass and are higher than corresponding alkanes due to polarity.</li>
                  <li>Insoluble in water, soluble in organic solvents.</li>
                </ul>

                <h2>6. Chemical Reactions</h2>
                <ul>
                  <li><strong>Nucleophilic Substitution:</strong> SN1 and SN2 mechanisms in haloalkanes.</li>
                  <li><strong>Reactions of Haloarenes:</strong> Less reactive toward nucleophilic substitution due to resonance and partial double bond character.</li>
                  <li><strong>Electrophilic Substitution:</strong> Halogens are ortho-para directing in haloarenes.</li>
                </ul>

                <h2>7. Mechanisms</h2>
                <ul>
                  <li><strong>SN1:</strong> Two-step mechanism with carbocation intermediate; favored in tertiary haloalkanes.</li>
                  <li><strong>SN2:</strong> One-step mechanism with backside attack; favored in primary haloalkanes.</li>
                </ul>

                <h2>8. Environmental Effects</h2>
                <ul>
                  <li><strong>Chlorofluorocarbons (CFCs):</strong> Cause ozone layer depletion.</li>
                  <li><strong>Halogenated waste:</strong> Can be persistent and toxic to ecosystems.</li>
                </ul>

                <h2>9. Uses and Applications</h2>
                <ul>
                  <li><strong>Haloalkanes:</strong> Used as solvents, anesthetics (chloroform), and refrigerants.</li>
                  <li><strong>Haloarenes:</strong> Used in pesticides, pharmaceuticals, and polymers.</li>
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

export default HaloalkanesHaloarenes;
