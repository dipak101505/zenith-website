import Header from '../../components/layout/header';
import BreadCrumb from '../../components/header/breadcrumb';
import CommentBox from '../../components/blog/CommentBox';
import { useState } from 'react';
import Image from 'next/image';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const RayOptics = () => {
  const [Tags] = useState([
    'Physics', 'Ray Optics', 'Class 11', 'Mirrors', 'Lenses', 'Refraction', 'Optical Instruments'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Ray Optics and Optical Instruments" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Ray Optics and Optical Instruments – Class 11 Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Introduction</h2>
                <p>
                  Ray optics (or geometrical optics) is a branch of optics that describes the behavior of light in terms of rays. It deals with reflection, refraction, and the formation of images by mirrors and lenses.
                </p>

                <h2>2. Reflection of Light</h2>
                <ul>
                  <li>Law of Reflection: Angle of incidence = Angle of reflection</li>
                  <li>Plane mirror: Image is virtual, erect, and laterally inverted</li>
                  <li>Spherical mirrors (concave & convex): Use the mirror equation <code>1/f = 1/v + 1/u</code></li>
                </ul>

                <h2>3. Refraction of Light</h2>
                <p>
                  Refraction is the bending of light when it passes from one medium to another due to a change in speed. Described by Snell&apos;s Law:
                  <code> n₁ sinθ₁ = n₂ sinθ₂ </code>
                </p>

                <h2>4. Total Internal Reflection (TIR)</h2>
                <ul>
                  <li>Occurs when light travels from a denser to rarer medium</li>
                  <li>Condition: Angle of incidence &gt; critical angle</li>
                  <li>Applications: Optical fibers, mirage, diamond sparkle</li>
                </ul>

                <h2>5. Lenses and Image Formation</h2>
                <ul>
                  <li>Convex lens: Can form real/inverted or virtual/erect images</li>
                  <li>Concave lens: Always forms virtual, erect, and diminished images</li>
                  <li>Lens formula: <code>1/f = 1/v - 1/u</code></li>
                  <li>Magnification: <code>m = h&apos;/h = v/u</code></li>
                </ul>

                <h2>6. Power of a Lens</h2>
                <p>
                  Power is defined as the reciprocal of focal length in meters. <code>P = 100/f (in cm)</code> <br/>
                  Unit: Diopter (D)
                </p>

                <h2>7. Combination of Lenses</h2>
                <p>
                  When two or more lenses are placed in contact:
                  <code> 1/F = 1/f₁ + 1/f₂ + ... </code> <br/>
                  Total magnification: Product of individual magnifications.
                </p>

                <h2>8. Optical Instruments</h2>
                <ul>
                  <li><strong>Simple Microscope:</strong> Uses convex lens to enlarge close objects</li>
                  <li><strong>Compound Microscope:</strong> Two convex lenses for higher magnification</li>
                  <li><strong>Telescope:</strong> Used to view distant objects, uses objective and eyepiece lenses</li>
                  <li><strong>Human Eye:</strong> Natural optical instrument with adjustable lens</li>
                  <li><strong>Defects of Vision:</strong> Myopia, hypermetropia, presbyopia, corrected using lenses</li>
                </ul>

                <h2>9. Important Diagrams to Practice</h2>
                <ul>
                  <li>Ray diagrams for concave and convex mirrors</li>
                  <li>Ray diagrams for convex and concave lenses</li>
                  <li>Diagrams for microscope and telescope working</li>
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

export default RayOptics;
