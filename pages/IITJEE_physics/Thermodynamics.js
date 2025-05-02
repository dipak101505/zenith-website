import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const Thermodynamics = () => {
  const [Tags] = useState([
    'Physics', 'Thermodynamics', 'JEE Mains', 'First Law of Thermodynamics', 'Second Law of Thermodynamics'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Thermodynamics" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Thermodynamics – JEE Mains Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Thermal Equilibrium and the Concept of Temperature</h2>
                <ul>
                  <li>Thermal equilibrium refers to the condition where two objects are at the same temperature and no heat flows between them.</li>
                  <li>Temperature is the measure of the average kinetic energy of the particles in a system.</li>
                </ul>

                <h2>2. Zeroth Law of Thermodynamics</h2>
                <ul>
                  <li>The Zeroth Law states that if two systems are each in thermal equilibrium with a third system, they are in thermal equilibrium with each other.</li>
                </ul>

                <h2>3. Heat, Work, and Internal Energy</h2>
                <ul>
                  <li>Heat is the energy transferred due to a temperature difference.</li>
                  <li>Work is the energy transferred when a force is applied to a system causing it to move.</li>
                  <li>Internal Energy (U) is the total energy contained within a system, including both kinetic and potential energy of particles.</li>
                </ul>

                <h2>4. The First Law of Thermodynamics</h2>
                <ul>
                  <li>The First Law states that energy cannot be created or destroyed, only transformed from one form to another.</li>
                  <li>Formula:
                    <pre>ΔU = Q - W</pre>
                    where ΔU is the change in internal energy, Q is the heat supplied, and W is the work done by the system.
                  </li>
                </ul>

                <h2>5. Isothermal and Adiabatic Processes</h2>
                <ul>
                  <li><strong>Isothermal Process:</strong> A process that occurs at a constant temperature. The change in internal energy is zero, and the heat supplied equals the work done by the system.</li>
                  <li><strong>Adiabatic Process:</strong> A process in which no heat is exchanged with the surroundings. The change in internal energy is equal to the work done.</li>
                </ul>

                <h2>6. The Second Law of Thermodynamics</h2>
                <ul>
                  <li>The Second Law states that the entropy of an isolated system always increases over time, and natural processes tend to move towards equilibrium.</li>
                </ul>

                <h2>7. Reversible and Irreversible Processes</h2>
                <ul>
                  <li><strong>Reversible Process:</strong> A process that can be reversed without leaving any change in the system or surroundings.</li>
                  <li><strong>Irreversible Process:</strong> A process that cannot be reversed to return to the initial state without external changes.</li>
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

export default Thermodynamics;
