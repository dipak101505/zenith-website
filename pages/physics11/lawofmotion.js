import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import CommentBox from '../../components/blog/CommentBox';
import { useState } from 'react';
import Image from 'next/image';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const LawsOfMotion = () => {
  const [Tags] = useState([
    'Physics', 'Laws of Motion', 'Class 11', 'Mechanics', 'Newton’s Laws', 'Friction', 'Pulley Systems'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Laws of Motion" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Laws of Motion – Class 11 Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>
                {/* <div className="details-post-img">
                  <Image
                    src="/assets/images/physics/laws-of-motion-banner.png"
                    alt="Laws of Motion"
                    width={616}
                    height={95}
                  />
                </div> */}

                <h2>1. Understanding Force</h2>
                <p>
                  A force is any interaction that causes a change in the motion of an object or its state of rest. It is a vector quantity and measured in newtons (N).
                </p>

                <h2>2. Newton’s Three Laws of Motion</h2>
                <ul>
                  <li>
                    <strong>First Law (Law of Inertia):</strong> An object remains in its state of rest or uniform motion unless acted upon by an external force.
                  </li>
                  <li>
                    <strong>Second Law:</strong>The acceleration of an object is directly proportional to the net force acting on it, 
                    given by <code>F = ma</code>, where <em>m</em> is inertial mass.
                    </li>

                  <li>
                    <strong>Third Law:</strong> For every action, there is an equal and opposite reaction.
                  </li>
                </ul>

                <h2>3. Frequently Encountered Forces</h2>
                <ul>
                  <li><strong>Normal Force:</strong> Acts perpendicular to the surface in contact.</li>
                  <li><strong>Weight:</strong> Force due to gravity; given by <code>W = mg</code>.</li>
                  <li><strong>Tension:</strong> Force in a string, always directed away from the body.</li>
                </ul>

                <h2>4. Pulley and Connected Mass Systems</h2>
                <p>
                  Ideal pulleys and strings are assumed massless unless stated otherwise. Let&apos;s analyze a few scenarios:
                </p>

                <h4>(i) Vertical Pulley System (Unequal Masses)</h4>
                <p>
                  If masses <code>m₁ &gt; m₂</code>:
                  <br />Acceleration: <code>a = ((m₁ – m₂) / (m₁ + m₂)) * g</code>
                  <br />Tension: <code>T = (2m₁m₂ / (m₁ + m₂)) * g</code>
                </p>

                <h4>(ii) One Mass on a Smooth Horizontal Surface</h4>
                <p>
                  Acceleration: <code>a = (m₁g) / (m₁ + m₂)</code><br />
                  Tension: <code>T = (m₁m₂g) / (m₁ + m₂)</code>
                </p>

                <h4>(iii) Horizontal Surface with Friction</h4>
                <p>
                  Acceleration: <code>a = ((m₁ – μm₂) / (m₁ + m₂)) * g</code><br />
                  Tension: <code>T = (m₁m₂(1 + μ) / (m₁ + m₂)) * g</code>
                </p>

                <h4>(iv) System with Connecting Block M</h4>
                <p>
                  <code>
                    a = ((m₁ – m₂) / (m₁ + m₂ + M)) * g <br />
                    T₁ = ((2m₂ + M) / (m₁ + m₂ + M)) * m₁g <br />
                    T₂ = ((2m₁ + M) / (m₁ + m₂ + M)) * m₂g
                  </code>
                </p>

                <h4>(v) Inclined Plane (Smooth)</h4>
                <p>
                  Acceleration: <code>a = ((m₁ – m₂ sinθ) / (m₁ + m₂)) * g</code><br />
                  Tension: <code>T = (m₁m₂(1 + sinθ) / (m₁ + m₂)) * g</code>
                </p>

                <h4>(vi) Two Inclined Planes with Angles θ₁ and θ₂</h4>
                <p>
                  Acceleration: <code>a = (m₁ sinθ₁ – m₂ sinθ₂) * g / (m₁ + m₂)</code><br />
                  Tension: <code>T = (m₁m₂ / (m₁ + m₂)) * (sinθ₁ – sinθ₂) * g</code>
                </p>

                <h2>5. Solving Motion Problems – Step-by-Step</h2>
                <ol>
                  <li>Identify forces and accelerations involved.</li>
                  <li>Draw Free Body Diagrams (FBDs).</li>
                  <li>Resolve forces along and perpendicular to motion.</li>
                  <li>Apply Newton’s laws: <code>F = ma</code> and <code>a = 0</code> where applicable.</li>
                  <li>Use constraint relations if necessary.</li>
                  <li>Solve the resulting system of equations.</li>
                </ol>

                <h2>6. Pseudo Force in Non-Inertial Frames</h2>
                <p>
                  In accelerating frames, an additional force must be introduced for Newton’s laws to apply. For linear acceleration <em>a</em>, the pseudo force is <code>-ma</code>. For rotating frames, the centrifugal force <code>mω²r</code> acts outward.
                </p>

                <h2>7. Conical Pendulum</h2>
                <p>
                  A conical pendulum consists of a bob revolving in a horizontal circle, with its string tracing a cone. The tension and angle depend on centripetal force requirements.
                </p>

                <h2>8. Apparent Weight in an Elevator</h2>
                <ul>
                  <li><strong>At rest/constant speed:</strong> Apparent weight = <code>mg</code></li>
                  <li><strong>Accelerating upward:</strong> <code>m(g + a)</code></li>
                  <li><strong>Accelerating downward:</strong> <code>m(g – a)</code></li>
                  <li><strong>Free fall:</strong> Apparent weight = 0</li>
                  <li><strong>Downward acceleration &gt; g:</strong> The body lifts off the floor.</li>
                </ul>

                <h2>9. Frictional Forces</h2>
                <p>
                  Friction arises from intermolecular forces between contacting surfaces. It opposes motion and can be static or kinetic.
                </p>

                <h2>10. Types of Friction</h2>
                <ul>
                  <li><strong>Static Friction:</strong> Self-adjusting, ≤ <code>μₛN</code></li>
                  <li><strong>Limiting Friction:</strong> Maximum static friction, <code>fₘₐₓ = μₛN</code></li>
                  <li><strong>Kinetic Friction:</strong> Constant friction while sliding, <code>fₖ = μₖN</code></li>
                </ul>

                <p>
                  Since <code>μₖ &lt; μₛ</code>, rolling an object requires less force than sliding it.
                </p>

                <h2>Angle of Repose</h2>
                <p>
                  The smallest angle of incline at which an object starts sliding. Given by: <code>μ = tanα</code>
                </p>

                <ul>
                  <li>If θ &lt; tan⁻¹μ: No motion</li>
                  <li>If θ = tan⁻¹μ: Body just begins to slide</li>
                  <li>If θ &gt; tan⁻¹μ: Motion begins with acceleration</li>
                </ul>

                <CommentBox />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mobt-50">
              <div className="cart-wrap">
                {/* <div className="single-cart search-cart">
                  <form action="#" className="cart-form">
                    <a href="#">
                      <i className="bi bi-search"></i>
                    </a>
                    <input type="text" placeholder="Search here..." />
                  </form>
                </div> */}

                <SideSubjectFlotingBarIITJEE/>

                

                {/* <div className="single-cart">
                  <div className="cart-title">
                    <h2>Keywords</h2>
                  </div>
                  <div className="keywords-tag">
                    <ul>
                      {Tabs.map((tab) => {
                        return (
                          <li key={uuidv4()}>
                            <a href="#">{tab}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
  .blog-post-details h2 {
    font-size: 28px;
    color: #1a237e; /* dark blue */
    margin-top: 32px;
    margin-bottom: 16px;
    border-left: 4px solid #3f51b5;
    padding-left: 12px;
  }
    .blog-post-details p {
     margin-top: 0px; 
     margin-bottom: 20px; 
      }
}
`}</style>

    </>
  );
};

export default LawsOfMotion;
