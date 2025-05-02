import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import CommentBox from '../../components/blog/CommentBox';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const Biomolecules = () => {
  const [Tags] = useState([
    'Biomolecules', 'Carbohydrates', 'Proteins', 'Vitamins', 'Nucleic Acids', 'Hormones', 'JEE Mains Chemistry'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Biomolecules" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Biomolecules – JEE Mains Chemistry</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. General Introduction to Biomolecules</h2>
                <p>
                  Biomolecules are organic molecules found in living organisms and are essential for life. They include carbohydrates, proteins, nucleic acids, lipids, and vitamins. These molecules play key roles in metabolism, structure, and regulation within the body. Their study is crucial for understanding biological processes and their application in medicine and biotechnology.
                </p>

                <h2>2. Carbohydrates</h2>
                <p>
                  Carbohydrates are organic compounds composed of carbon, hydrogen, and oxygen. They serve as a major source of energy in living organisms and are classified based on their structure.
                </p>
                <ul>
                  <li><strong>Classification of Carbohydrates:</strong> Carbohydrates are classified into monosaccharides, oligosaccharides, and polysaccharides based on the number of sugar units.</li>
                  <li><strong>Aldoses and Ketoses:</strong> Carbohydrates can be classified into aldoses (with an aldehyde group) and ketoses (with a ketone group), depending on the type of functional group present.</li>
                  <li><strong>Monosaccharides:</strong> Simple sugars like glucose (C₆H₁₂O₆) and fructose (C₆H₁₂O₆) are monosaccharides, and they form the building blocks of oligosaccharides and polysaccharides.</li>
                  <li><strong>Constituent Monosaccharides of Oligosaccharides:</strong> Oligosaccharides like sucrose (glucose + fructose), lactose (glucose + galactose), and maltose (glucose + glucose) are composed of two or more monosaccharide units.</li>
                </ul>

                <h2>3. Proteins</h2>
                <p>
                  Proteins are large, complex biomolecules composed of amino acids. They are responsible for a wide range of functions in living organisms, including catalyzing biochemical reactions, providing structure, and facilitating communication between cells.
                </p>
                <ul>
                  <li><strong>Amino Acids:</strong> Amino acids are the building blocks of proteins, each containing an amino group (-NH₂) and a carboxyl group (-COOH).</li>
                  <li><strong>Peptide Bond:</strong> Amino acids are linked together by peptide bonds to form polypeptides, which fold into functional proteins.</li>
                  <li><strong>Protein Structures:</strong> Proteins have four levels of structure:
                    <ul>
                      <li>Primary: The sequence of amino acids in a polypeptide chain.</li>
                      <li>Secondary: The folding of the polypeptide chain into alpha-helices or beta-pleated sheets.</li>
                      <li>Tertiary: The three-dimensional structure formed by the folding of the secondary structures.</li>
                      <li>Quaternary: The interaction between multiple polypeptide chains to form a functional protein.</li>
                    </ul>
                  </li>
                  <li><strong>Denaturation of Proteins:</strong> Denaturation refers to the loss of protein structure and function due to factors like heat, pH changes, or chemical agents.</li>
                  <li><strong>Enzymes:</strong> Enzymes are proteins that act as biological catalysts, speeding up biochemical reactions.</li>
                </ul>

                <h2>4. Vitamins</h2>
                <p>
                  Vitamins are organic compounds required by the body in small amounts for proper functioning. They play important roles in various metabolic processes.
                </p>
                <ul>
                  <li><strong>Classification of Vitamins:</strong> Vitamins are classified into two categories: fat-soluble (A, D, E, K) and water-soluble (B-complex, C).</li>
                  <li><strong>Functions of Vitamins:</strong> Each vitamin has a specific function, such as supporting immune function, aiding in vision, or acting as antioxidants.</li>
                </ul>

                <h2>5. Nucleic Acids</h2>
                <p>
                  Nucleic acids, including DNA and RNA, are biomolecules that store and transfer genetic information. They are polymers made up of nucleotide monomers.
                </p>
                <ul>
                  <li><strong>Chemical Constitution of DNA and RNA:</strong> DNA is composed of deoxyribonucleic acid, while RNA is composed of ribonucleic acid. Both consist of a sugar-phosphate backbone with nitrogenous bases (adenine, thymine/uracil, cytosine, and guanine).</li>
                  <li><strong>Biological Functions of Nucleic Acids:</strong> DNA carries genetic information, while RNA is involved in protein synthesis and gene expression.</li>
                </ul>

                <h2>6. Hormones</h2>
                <p>
                  Hormones are chemical messengers that regulate physiological processes in the body, including metabolism, growth, and reproduction. They can be proteins, peptides, or lipids.
                </p>
                <ul>
                  <li><strong>General Introduction to Hormones:</strong> Hormones are secreted by various glands such as the pituitary, thyroid, and adrenal glands. They act on target cells or organs to regulate various functions in the body.</li>
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

export default Biomolecules;
