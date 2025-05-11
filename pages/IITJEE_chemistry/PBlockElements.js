import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import CommentBox from '../../components/blog/CommentBox';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const PBlockElements = () => {
  const [Tags] = useState([
    'p-Block Elements', 'Group 13 Elements', 'Group 18 Elements', 'Periodic Trends', 'Chemical Properties', 'JEE Mains Chemistry'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="p-BLOCK ELEMENTS (Group 13 to Group 18 Elements)" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>p-BLOCK ELEMENTS (Group 13 to Group 18 Elements) – JEE Mains Chemistry</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. General Introduction to p-Block Elements</h2>
                <p>
                  p-block elements are located in Groups 13 to 18 of the periodic table. They include a wide variety of elements, including metals, metalloids, and non-metals. The electronic configuration of p-block elements ends in the p-orbital, which determines their chemical properties.
                </p>

                <h2>2. Electronic Configuration and General Trends</h2>
                <p>
                  The electronic configuration of p-block elements follows the general pattern of (n-1)d¹⁰ ns² np¹–⁶. These elements exhibit periodic trends in their physical and chemical properties as you move across the periods and down the groups.
                </p>
                <ul>
                  <li><strong>Across a Period:</strong> As you move from left to right across a period, the atomic radius decreases, ionization energy increases, and electron affinity becomes more negative.</li>
                  <li><strong>Down a Group:</strong> As you move down a group, the atomic radius increases, ionization energy decreases, and metallic character increases.</li>
                </ul>

                <h2>3. Group 13 Elements (Boron Group)</h2>
                <p>
                  Group 13 elements include boron, aluminum, gallium, indium, and thallium. These elements have three valence electrons and exhibit a variety of oxidation states, with +3 being the most common. The first element, boron, has unique properties due to its small size and high ionization energy.
                </p>

                <h2>4. Group 14 Elements (Carbon Group)</h2>
                <p>
                  Group 14 elements include carbon, silicon, germanium, tin, and lead. These elements have four valence electrons and can form covalent bonds with a variety of elements. Carbon, the first element, is unique due to its ability to form long chains and its extensive role in organic chemistry.
                </p>

                <h2>5. Group 15 Elements (Nitrogen Group)</h2>
                <p>
                  Group 15 elements include nitrogen, phosphorus, arsenic, antimony, and bismuth. These elements have five valence electrons and exhibit oxidation states of -3, +3, and +5. Nitrogen, the first element, has unique properties such as its ability to form diatomic nitrogen (N₂), which is highly stable.
                </p>

                <h2>6. Group 16 Elements (Oxygen Group)</h2>
                <p>
                  Group 16 elements include oxygen, sulfur, selenium, tellurium, and polonium. These elements have six valence electrons and typically exhibit oxidation states of -2, +2, +4, and +6. Oxygen, being the first element, is highly reactive and forms compounds like water and oxides.
                </p>

                <h2>7. Group 17 Elements (Halogens)</h2>
                <p>
                  Group 17 elements include fluorine, chlorine, bromine, iodine, and astatine. These elements have seven valence electrons and are highly reactive, especially fluorine, the first element. They commonly form halide salts by combining with metals.
                </p>

                <h2>8. Group 18 Elements (Noble Gases)</h2>
                <p>
                  Group 18 elements include helium, neon, argon, krypton, xenon, and radon. These elements have eight valence electrons (except for helium, which has two) and are chemically inert due to their stable electron configuration.
                </p>

                <h2>9. Unique Behaviour of the First Element in Each Group</h2>
                <p>
                  The first element in each group (B, C, N, O, F, Ne) displays unique properties due to its small size, high electronegativity, and relatively high ionization energies. For example, boron exhibits both metallic and non-metallic properties, carbon forms strong covalent bonds, and fluorine is the most electronegative element.
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

export default PBlockElements;
