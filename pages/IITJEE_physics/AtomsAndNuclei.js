import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const AtomsAndNuclei = () => {
  const [Tags] = useState([
    'Physics', 'Atoms', 'Nuclei', 'Rutherford', 'Bohr Model', 'Nuclear Fission', 'Nuclear Fusion'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Atoms and Nuclei" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Atoms and Nuclei – JEE Mains Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Alpha-particle Scattering Experiment</h2>
                <ul>
                  <li>In Rutherford&apos;s alpha-particle scattering experiment, alpha particles were directed at a thin gold foil. The experiment showed that atoms have a tiny, dense nucleus at their center, and most of the atom is empty space.</li>
                </ul>

                <h2>2. Rutherford&apos;s Model of Atom</h2>
                <ul>
                  <li>Rutherford proposed that atoms consist of a small, dense, positively charged nucleus surrounded by electrons. The electrons revolve around the nucleus in orbits, similar to how planets orbit the Sun.</li>
                </ul>

                <h2>3. Bohr Model</h2>
                <ul>
                  <li>Bohr improved upon Rutherford’s model by quantizing the electron&apos;s orbits. According to Bohr’s model, electrons move in circular orbits around the nucleus without radiating energy. The allowed orbits correspond to specific energy levels.</li>
                </ul>

                <h2>4. Energy Levels and Hydrogen Spectrum</h2>
                <ul>
                  <li>In Bohr&apos;s model, energy levels of the hydrogen atom are quantized. The energy of an electron in the nth orbit is given by:</li>
                  <pre>Eₙ = -13.6 eV/n²</pre>
                  <li>The hydrogen spectrum results from electrons transitioning between these energy levels, emitting or absorbing photons corresponding to specific wavelengths.</li>
                </ul>

                <h2>5. Composition and Size of Nucleus</h2>
                <ul>
                  <li>The nucleus is composed of protons and neutrons, collectively known as nucleons. The size of the nucleus is of the order of 10⁻¹⁵ meters, and the radius of the nucleus (R) is proportional to the cube root of the mass number (A):</li>
                  <pre>R = R₀A^(1/3)</pre>
                </ul>

                <h2>6. Atomic Masses and Mass-Energy Relation</h2>
                <ul>
                  <li>Atomic mass is the mass of an atom, typically measured in atomic mass units (amu). According to Einstein&apos;s mass-energy relation, the energy (E) of a particle is related to its mass (m) by:</li>
                  <pre>E = mc²</pre>
                  <li>This equation is fundamental in understanding nuclear processes like fission and fusion.</li>
                </ul>

                <h2>7. Mass Defect and Binding Energy</h2>
                <ul>
                  <li>The mass defect is the difference between the mass of a nucleus and the sum of the masses of its constituent nucleons. This missing mass is converted into binding energy, which holds the nucleus together. The binding energy per nucleon increases with mass number up to iron and then decreases for heavier nuclei.</li>
                </ul>

                <h2>8. Nuclear Fission and Fusion</h2>
                <ul>
                  <li>Nuclear fission is the process where a heavy nucleus splits into two or more lighter nuclei, releasing a large amount of energy. It is the principle behind nuclear reactors.</li>
                  <li>Nuclear fusion is the process where two light nuclei combine to form a heavier nucleus, releasing energy. Fusion powers stars, including the Sun, and is being researched for energy production on Earth.</li>
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

        .blog-post-details ul {
          list-style-type: disc;
          padding-left: 20px;
          margin-bottom: 20px;
        }

        .blog-post-details li {
          display: list-item;
          margin-bottom: 8px;
        }

        .blog-post-details pre {
          background: #f5f5f5;
          padding: 10px;
          border-radius: 5px;
          font-family: monospace;
          overflow-x: auto;
        }
      `}</style>
    </>
  );
};

export default AtomsAndNuclei;
