import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const Optics = () => {
  const [Tags] = useState([
    'Physics', 'Optics', 'Reflection of Light', 'Refraction of Light', 'Lens Formula', 'Wave Optics'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Optics" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Optics – JEE Mains Physics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Reflection of Light and Spherical Mirrors</h2>
                <ul>
                  <li>Reflection is the change in direction of a wave at a surface. The mirror formula is given by:
                    <pre>1/f = 1/v + 1/u</pre>
                    where f is the focal length, v is the image distance, and u is the object distance.</li>
                  <li>The magnification (m) produced by a spherical mirror is given by:
                    <pre>m = v/u</pre></li>
                </ul>

                <h2>2. Refraction of Light at Plane and Spherical Surfaces</h2>
                <ul>
                  <li>Refraction is the bending of light as it passes from one medium to another. The refractive index (n) is given by:
                    <pre>n = sin(i) / sin(r)</pre>
                    where i is the angle of incidence and r is the angle of refraction.</li>
                  <li>For spherical surfaces, the refraction at a spherical surface can be expressed as:
                    <pre>n₁/s₁ - n₂/s₂ = (n₂ - n₁)/R</pre>
                    where n₁ and n₂ are the refractive indices of the two media, s₁ and s₂ are the object and image distances, and R is the radius of curvature of the surface.</li>
                </ul>

                <h2>3. Thin Lens Formula and Lens Maker Formula</h2>
                <ul>
                  <li>The thin lens formula relates the object distance (u), image distance (v), and focal length (f) as:
                    <pre>1/f = 1/v - 1/u</pre></li>
                  <li>The lens maker&apos;s formula provides the focal length of a lens in terms of the radii of curvature (R₁ and R₂) and the refractive index (n) as:
                    <pre>1/f = (n - 1) [(1/R₁) - (1/R₂)]</pre></li>
                </ul>

                <h2>4. Total Internal Reflection and Its Applications</h2>
                <ul>
                  <li>Total internal reflection occurs when light passes from a denser medium to a rarer medium with an angle of incidence greater than the critical angle. This principle is used in optical fibers, prisms, and binoculars.</li>
                </ul>

                <h2>5. Magnification and Power of a Lens</h2>
                <ul>
                  <li>The magnification produced by a lens is given by:
                    <pre>m = v/u</pre></li>
                  <li>The power (P) of a lens is the reciprocal of its focal length (f):
                    <pre>P = 1/f</pre></li>
                </ul>

                <h2>6. Combination of Thin Lenses in Contact</h2>
                <ul>
                  <li>For a combination of thin lenses in contact, the effective focal length (F) is given by:
                    <pre>1/F = 1/f₁ + 1/f₂ + ... + 1/fₖ</pre>
                    where f₁, f₂, ..., fₖ are the focal lengths of the individual lenses.</li>
                </ul>

                <h2>7. Refraction of Light through a Prism</h2>
                <ul>
                  <li>The deviation produced by a prism is given by:
                    <pre>δ = (A + D) - A</pre>
                    where A is the angle of the prism and D is the angle of deviation.</li>
                </ul>

                <h2>8. Microscope and Astronomical Telescope (Reflecting and Refracting) and Their Magnifying Powers</h2>
                <ul>
                  <li>The magnifying power of a microscope is given by:
                    <pre>MP = 1 + D/f₁</pre>
                    where D is the near point distance and f₁ is the focal length of the objective lens.</li>
                  <li>The magnifying power of an astronomical telescope is given by:
                    <pre>MP = f₁/f₂</pre>
                    where f₁ is the focal length of the objective lens and f₂ is the focal length of the eyepiece lens.</li>
                </ul>

                <h2>9. Wave Optics: Wavefront and Huygens&apos; Principle</h2>
                <ul>
                  <li>Wavefront is the locus of points having the same phase of vibration. According to Huygens&apos; Principle, each point on a wavefront behaves as a source of secondary spherical wavelets.</li>
                </ul>

                <h2>10. Laws of Reflection and Refraction Using Huygens&apos; Principle</h2>
                <ul>
                  <li>According to Huygens&apos; principle, the law of reflection states that the angle of incidence equals the angle of reflection. The law of refraction states that the ratio of the sine of the angle of incidence to the sine of the angle of refraction is constant and equal to the refractive index.</li>
                </ul>

                <h2>11. Interference: Young&apos;s Double-Slit Experiment and Expression for Fringe Width</h2>
                <ul>
                  <li>In Young&apos;s double-slit experiment, the interference fringes are produced due to the superposition of light waves from two coherent sources. The fringe width (β) is given by:
                    <pre>β = λD/d</pre>
                    where λ is the wavelength, D is the distance between the screen and the slits, and d is the distance between the slits.</li>
                </ul>

                <h2>12. Coherent Sources and Sustained Interference of Light</h2>
                <ul>
                  <li>Coherent sources are sources of light that maintain a constant phase relationship. Sustained interference of light occurs when the sources are coherent and the interference pattern remains stable.</li>
                </ul>

                <h2>13. Diffraction Due to a Single Slit, Width of Central Maximum</h2>
                <ul>
                  <li>In single-slit diffraction, the central maximum is the brightest and widest. The angular width of the central maximum (θ) is given by:
                    <pre>θ = λ/a</pre>
                    where λ is the wavelength of light and a is the width of the slit.</li>
                </ul>

                <h2>14. Polarization: Plane-Polarized Light, Brewster&apos;s Law, Uses of Plane-Polarized Light, and Polaroids</h2>
                <ul>
                  <li>Plane-polarized light oscillates in a single plane. Brewster&apos;s law gives the angle of polarization (θᵦ) as:
                    <pre>tan(θᵦ) = n₂/n₁</pre>
                    where n₁ and n₂ are the refractive indices of the media.</li>
                  <li>Polaroids are used to produce plane-polarized light. Applications of polarized light include in sunglasses, 3D movies, and stress analysis in materials.</li>
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

export default Optics;
