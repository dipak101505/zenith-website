import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const PropertiesOfSolidsAndLiquids = () => {
  const [Tags] = useState([
    'Physics', 'Properties of Solids and Liquids', 'JEE Mains', 'Elastic Behaviour', 'Surface Tension'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Properties of Solids and Liquids" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Properties of Solids and Liquids – JEE Mains Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Elastic Behaviour and Stress-Strain Relationship</h2>
                <ul>
                  <li>Elastic behaviour refers to the ability of a material to return to its original shape after the removal of a deforming force.</li>
                  <li>Stress-Strain Relationship describes how materials deform under applied forces.</li>
                  <li>Formula for Stress (σ) and Strain (ϵ):
                    <pre>σ = F / A, ϵ = ΔL / L₀</pre>
                    where F is the force, A is the cross-sectional area, ΔL is the change in length, and L₀ is the original length.
                  </li>
                </ul>

                <h2>2. Hooke’s Law</h2>
                <ul>
                  <li>Hooke’s Law states that the strain in a solid is proportional to the applied stress within the elastic limit.</li>
                  <li>Formula:
                    <pre>F = kx</pre>
                    where F is the force, k is the spring constant, and x is the displacement.
                  </li>
                </ul>

                <h2>3. Young’s Modulus</h2>
                <ul>
                  <li>Young’s Modulus (Y) is a measure of the stiffness of a solid material.</li>
                  <li>Formula:
                    <pre>Y = (Stress / Strain) = (F / A) / (ΔL / L₀) = (FL₀) / (AΔL)</pre>
                  </li>
                </ul>

                <h2>4. Bulk Modulus</h2>
                <ul>
                  <li>Bulk Modulus (B) describes the material&apos;s response to uniform pressure applied in all directions.</li>
                  <li>Formula:
                    <pre>B = - (ΔP / ΔV) * V</pre>
                    where ΔP is the change in pressure, and ΔV is the change in volume.
                  </li>
                </ul>

                <h2>5. Modulus of Rigidity</h2>
                <ul>
                  <li>Modulus of Rigidity (G) is a measure of the material&apos;s response to shear stress.</li>
                  <li>Formula:
                    <pre>G = (Shear Stress / Shear Strain) = (F / A) / (x / L)</pre>
                  </li>
                </ul>

                <h2>6. Pressure Due to a Fluid Column</h2>
                <ul>
                  <li>Pressure at a point in a fluid is given by:
                    <pre>P = ρgh</pre>
                    where ρ is the fluid density, g is acceleration due to gravity, and h is the height of the fluid column.
                  </li>
                </ul>

                <h2>7. Pascal’s Law and Its Applications</h2>
                <ul>
                  <li>Pascal’s Law states that any change in pressure applied to an enclosed fluid is transmitted undiminished to all portions of the fluid and to the walls of its container.</li>
                  <li>Applications: Hydraulic presses, car lifts, etc.</li>
                </ul>

                <h2>8. Viscosity</h2>
                <ul>
                  <li>Viscosity is the measure of a fluid’s resistance to flow.</li>
                  <li>Formula for Viscosity (η):
                    <pre>η = (F * L) / (A * v)</pre>
                    where F is the force, L is the length, A is the area, and v is the velocity of the fluid flow.
                  </li>
                </ul>

                <h2>9. Stoke’s Law and Terminal Velocity</h2>
                <ul>
                  <li>Stoke’s Law describes the force of viscosity on a spherical object moving through a fluid.</li>
                  <li>Formula:
                    <pre>F = 6πηrv</pre>
                    where η is the fluid viscosity, r is the radius of the sphere, and v is the velocity of the sphere.</li>
                  <li>Terminal Velocity is the constant velocity a freely falling object eventually reaches when the resistance of the medium prevents further acceleration.</li>
                </ul>

                <h2>10. Streamline and Turbulent Flow</h2>
                <ul>
                  <li>Streamline Flow: Fluid moves in parallel layers with no disruption between them.</li>
                  <li>Turbulent Flow: Irregular and chaotic flow of fluid with eddies and vortices.</li>
                  <li>Critical Velocity is the velocity at which the flow of the fluid changes from laminar to turbulent.</li>
                </ul>

                <h2>11. Bernoulli’s Principle and Its Applications</h2>
                <ul>
                  <li>Bernoulli’s Principle states that for an incompressible, non-viscous fluid, the total mechanical energy (pressure energy, kinetic energy, and potential energy) remains constant along a streamline.</li>
                  <li>Formula:
                    <pre>P + ½ρv² + ρgh = constant</pre>
                  </li>
                  <li>Applications: Airplane wings, fluid dynamics in pipes, etc.</li>
                </ul>

                <h2>12. Surface Energy and Surface Tension</h2>
                <ul>
                  <li>Surface Tension is the force acting at the surface of a liquid, causing it to behave like a stretched elastic membrane.</li>
                  <li>Surface Energy is the energy required to increase the surface area of a liquid.</li>
                </ul>

                <h2>13. Angle of Contact and Excess Pressure</h2>
                <ul>
                  <li>Angle of contact is the angle formed between the tangent to the surface of the liquid and the solid surface.</li>
                  <li>Excess Pressure across a curved surface:
                    <pre>P = 2T / r</pre>
                    where T is the surface tension, and r is the radius of curvature.</li>
                </ul>

                <h2>14. Applications of Surface Tension</h2>
                <ul>
                  <li>Applications include drops, bubbles, and capillary rise.</li>
                </ul>

                <h2>15. Heat, Temperature, and Thermal Expansion</h2>
                <ul>
                  <li>Heat is the energy transferred between bodies at different temperatures.</li>
                  <li>Temperature is a measure of the average kinetic energy of particles in a substance.</li>
                  <li>Thermal Expansion describes the change in the dimensions of a material when heated.</li>
                </ul>

                <h2>16. Specific Heat Capacity and Calorimetry</h2>
                <ul>
                  <li>Specific Heat Capacity (c) is the amount of heat required to change the temperature of 1 kg of a substance by 1°C.</li>
                  <li>Calorimetry is the science of measuring the heat of chemical reactions or physical changes.</li>
                </ul>

                <h2>17. Change of State and Latent Heat</h2>
                <ul>
                  <li>Latent Heat is the heat required to change the state of a substance without changing its temperature.</li>
                </ul>

                <h2>18. Heat Transfer: Conduction, Convection, and Radiation</h2>
                <ul>
                  <li>Conduction: Transfer of heat through a material without the movement of the material itself.</li>
                  <li>Convection: Transfer of heat by the movement of fluids (liquids or gases).</li>
                  <li>Radiation: Transfer of heat through electromagnetic waves.</li>
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

export default PropertiesOfSolidsAndLiquids;
