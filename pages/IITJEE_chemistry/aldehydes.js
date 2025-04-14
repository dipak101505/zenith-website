import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import CommentBox from '../../components/blog/CommentBox';
import { useState } from 'react';
import Image from 'next/image';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const AldehydesKetonesCarboxylicAcids = () => {
  const [Tags] = useState([
    'Chemistry', 'Aldehydes', 'Ketones', 'Carboxylic Acids', 'JEE Mains', 'Organic Chemistry'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Aldehydes, Ketones and Carboxylic Acids" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Aldehydes, Ketones and Carboxylic Acids – JEE Mains Chemistry</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Introduction</h2>
                <p>
                  This chapter covers the structure, preparation, physical and chemical properties of three important classes of organic compounds: aldehydes, ketones, and carboxylic acids. These contain the carbonyl group (&gt;C=O) or carboxyl group (–COOH).
                </p>

                <h2>2. Classification and Nomenclature</h2>
                <ul>
                  <li><strong>Aldehydes:</strong> Carbonyl group at the end of a carbon chain. Named by replacing –e with –al (e.g., ethanal).</li>
                  <li><strong>Ketones:</strong> Carbonyl group within the chain. Named by replacing –e with –one (e.g., propanone).</li>
                  <li><strong>Carboxylic Acids:</strong> Contain –COOH. Named by replacing –e with –oic acid (e.g., ethanoic acid).</li>
                </ul>

                <h2>3. Methods of Preparation</h2>
                <ul>
                  <li><strong>Aldehydes and Ketones:</strong> Oxidation of alcohols, ozonolysis of alkenes, hydration of alkynes.</li>
                  <li><strong>Carboxylic Acids:</strong> Oxidation of aldehydes, nitriles, or primary alcohols.</li>
                </ul>

                <h2>4. Physical Properties</h2>
                <ul>
                  <li>Aldehydes and ketones are polar and have dipole-dipole interactions.</li>
                  <li>Carboxylic acids form hydrogen bonds → higher boiling points and solubility in water.</li>
                </ul>

                <h2>5. Chemical Reactions</h2>
                <ul>
                  <li><strong>Nucleophilic Addition Reactions:</strong> Addition of HCN, NaHSO₃, Grignard reagents to aldehydes and ketones.</li>
                  <li><strong>Oxidation:</strong> Aldehydes → acids; ketones → resistant to mild oxidizing agents.</li>
                  <li><strong>Reduction:</strong> Aldehydes and ketones → alcohols; acids → alcohols via LiAlH₄.</li>
                  <li><strong>Reactions of Acids:</strong> Formation of acid chlorides, esters, and amides; decarboxylation reactions.</li>
                </ul>

                <h2>6. Tests and Identification</h2>
                <ul>
                  <li><strong>Tollen’s Test:</strong> Silver mirror test for aldehydes.</li>
                  <li><strong>Fehling’s Test:</strong> Red precipitate confirms aldehydes.</li>
                  <li><strong>2,4-DNP Test:</strong> Forms yellow/orange ppt. with aldehydes and ketones.</li>
                  <li><strong>Sodium bicarbonate Test:</strong> CO₂ effervescence indicates carboxylic acid.</li>
                </ul>

                <h2>7. Important Reactions</h2>
                <ul>
                  <li><strong>Aldol Condensation:</strong> Reaction between two aldehydes/ketones with α-hydrogens under basic conditions.</li>
                  <li><strong>Cannizzaro Reaction:</strong> Aldehydes without α-H undergo disproportionation.</li>
                  <li><strong>Hell-Volhard-Zelinsky Reaction:</strong> Halogenation of carboxylic acids at α-position.</li>
                </ul>

                <h2>8. Uses and Applications</h2>
                <ul>
                  <li><strong>Aldehydes:</strong> Formaldehyde in disinfectants, acetaldehyde in perfumes and dyes.</li>
                  <li><strong>Ketones:</strong> Acetone as a solvent in nail polish remover, paint thinners.</li>
                  <li><strong>Carboxylic Acids:</strong> Acetic acid in vinegar, benzoic acid as a food preservative.</li>
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

export default AldehydesKetonesCarboxylicAcids;
