import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const RotationalMotion = () => {
  const [Tags] = useState([
    'Physics', 'Rotational Motion', 'JEE Mains', 'Centre of Mass', 'Moment of Inertia'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Rotational Motion" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Rotational Motion – JEE Mains Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Centre of Mass</h2>
                <ul>
                  <li>Centre of Mass (COM) is the point where the entire mass of a system appears to be concentrated.</li>
                  <li>For a two-particle system:
                    <pre>x<sub>com</sub> = (m₁x₁ + m₂x₂) / (m₁ + m₂)</pre>
                  </li>
                  <li>For a rigid body, COM depends on the shape and mass distribution.</li>
                </ul>

                <h2>2. Basic Concepts of Rotational Motion</h2>
                <ul>
                  <li>Rotational motion involves a body rotating about a fixed axis.</li>
                  <li>Angular Displacement (θ), Angular Velocity (ω), and Angular Acceleration (α) describe rotational motion.</li>
                </ul>

                <h2>3. Moment of a Force (Torque)</h2>
                <ul>
                  <li>Torque (τ) is the rotational analog of force.</li>
                  <li>Torque is given by:
                    <pre>τ = r × F</pre>
                    where r = position vector and F = force vector.
                  </li>
                </ul>

                <h2>4. Angular Momentum</h2>
                <ul>
                  <li>Angular momentum (L) for a particle is given by:
                    <pre>L = r × p</pre>
                    where p = linear momentum.</li>
                  <li>For a rotating rigid body:
                    <pre>L = Iω</pre>
                    where I = moment of inertia and ω = angular velocity.</li>
                </ul>

                <h2>5. Conservation of Angular Momentum</h2>
                <ul>
                  <li>If no external torque acts on a system, its angular momentum remains conserved.</li>
                  <li>Applications:
                    <ul>
                      <li>Ice skater pulling arms inward to spin faster.</li>
                      <li>Neutron stars spinning rapidly after collapsing.</li>
                    </ul>
                  </li>
                </ul>

                <h2>6. Moment of Inertia</h2>
                <ul>
                  <li>Moment of Inertia (I) is the rotational analog of mass in linear motion.</li>
                  <li>Depends on the mass distribution about the axis of rotation:
                    <pre>I = Σ mᵢrᵢ²</pre>
                  </li>
                </ul>

                <h2>7. Radius of Gyration</h2>
                <ul>
                  <li>Radius of gyration (k) is defined as:
                    <pre>k = √(I/M)</pre>
                    where I = moment of inertia and M = total mass.</li>
                </ul>

                <h2>8. Values of Moments of Inertia for Simple Objects</h2>
                <ul>
                  <li>Thin Rod (about center) = 
                    <pre>I = (1/12)ML²</pre>
                  </li>
                  <li>Ring (about center) = 
                    <pre>I = MR²</pre>
                  </li>
                  <li>Solid Sphere (about diameter) = 
                    <pre>I = (2/5)MR²</pre>
                  </li>
                  <li>Solid Cylinder (about axis) = 
                    <pre>I = (1/2)MR²</pre>
                  </li>
                </ul>

                <h2>9. Parallel and Perpendicular Axes Theorems</h2>
                <ul>
                  <li>Parallel Axis Theorem:
                    <pre>I = I<sub>cm</sub> + Md²</pre>
                    where d = distance between axes.</li>
                  <li>Perpendicular Axis Theorem (for planar bodies):
                    <pre>I<sub>z</sub> = I<sub>x</sub> + I<sub>y</sub></pre>
                  </li>
                </ul>

                <h2>10. Equilibrium of Rigid Bodies</h2>
                <ul>
                  <li>For a body to be in mechanical equilibrium:
                    <ul>
                      <li>Net external force = 0 (translational equilibrium).</li>
                      <li>Net external torque = 0 (rotational equilibrium).</li>
                    </ul>
                  </li>
                </ul>

                <h2>11. Rigid Body Rotation and Equations of Rotational Motion</h2>
                <ul>
                  <li>Rotational analogs of linear equations:
                    <pre>ω = ω₀ + αt</pre>
                    <pre>θ = ω₀t + (1/2)αt²</pre>
                    <pre>ω² = ω₀² + 2αθ</pre>
                  </li>
                </ul>

                <h2>12. Comparison of Linear and Rotational Motions</h2>
                <ul>
                  <li>Linear Motion ↔ Rotational Motion</li>
                  <li>Displacement (x) ↔ Angular displacement (θ)</li>
                  <li>Velocity (v) ↔ Angular velocity (ω)</li>
                  <li>Acceleration (a) ↔ Angular acceleration (α)</li>
                  <li>Mass (m) ↔ Moment of inertia (I)</li>
                  <li>Force (F) ↔ Torque (τ)</li>
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

export default RotationalMotion;
