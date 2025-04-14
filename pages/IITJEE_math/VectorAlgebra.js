import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const VectorAlgebra = () => {
  const [Tags] = useState([
    'Mathematics', 'Vectors', 'Scalars', 'JEE Mains', 'Physics'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Vector Algebra" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Vector Algebra – JEE Mains Mathematics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Vectors and Scalars</h2>
                <ul>
                  <li><strong>Scalars</strong> are quantities that are completely described by a magnitude alone, such as mass, temperature, and time.</li>
                  <li><strong>Vectors</strong> are quantities that are described by both magnitude and direction. Examples include force, velocity, and displacement.</li>
                </ul>

                <h2>2. Addition of Vectors</h2>
                <ul>
                  <li>The sum of two vectors is obtained by placing them head to tail and drawing a vector from the tail of the first vector to the head of the second.</li>
                  <li>The <strong>parallelogram law</strong> of vector addition states that the sum of two vectors can be represented by the diagonal of the parallelogram formed with the vectors as adjacent sides.</li>
                  <li>In component form, the sum of two vectors \(\mathbf{A} = A_x \hat{i} + A_y \hat{j} + A_z \hat{k}\) and \(\mathbf{B} = B_x \hat{i} + B_y \hat{j} + B_z \hat{k}\) is given by:</li>
                  <ul>
                    <li>\(\mathbf{A} + \mathbf{B} = (A_x + B_x)\hat{i} + (A_y + B_y)\hat{j} + (A_z + B_z)\hat{k}\)</li>
                  </ul>
                </ul>

                <h2>3. Components of a Vector</h2>
                <ul>
                  <li>The components of a vector in a coordinate system are the projections of the vector along the axes of the system. In two-dimensional space, the components of a vector \(\mathbf{A}\) are given by:</li>
                  <ul>
                    <li>\(\mathbf{A} = A_x \hat{i} + A_y \hat{j}\)</li>
                  </ul>
                  <li>In three-dimensional space, the components are:</li>
                  <ul>
                    <li>\(\mathbf{A} = A_x \hat{i} + A_y \hat{j} + A_z \hat{k}\)</li>
                  </ul>
                  <li>Where \(\hat{i}, \hat{j}, \hat{k}\) are unit vectors along the x, y, and z axes, respectively.</li>
                </ul>

                <h2>4. Scalar Product (Dot Product)</h2>
                <ul>
                  <li>The <strong>scalar product</strong> or <strong>dot product</strong> of two vectors \(\mathbf{A} = A_x \hat{i} + A_y \hat{j} + A_z \hat{k}\) and \(\mathbf{B} = B_x \hat{i} + B_y \hat{j} + B_z \hat{k}\) is given by:</li>
                  <ul>
                    <li>\(\mathbf{A} \cdot \mathbf{B} = A_x B_x + A_y B_y + A_z B_z\)</li>
                    <li>This is a scalar quantity.</li>
                  </ul>
                  <li>The dot product can also be expressed as:</li>
                  <ul>
                    <li>\(\mathbf{A} \cdot \mathbf{B} = |\mathbf{A}| |\mathbf{B}| \cos(\theta)\)</li>
                    <li>Where \(\theta\) is the angle between the two vectors.</li>
                  </ul>
                </ul>

                <h2>5. Vector Product (Cross Product)</h2>
                <ul>
                  <li>The <strong>vector product</strong> or <strong>cross product</strong> of two vectors \(\mathbf{A} = A_x \hat{i} + A_y \hat{j} + A_z \hat{k}\) and \(\mathbf{B} = B_x \hat{i} + B_y \hat{j} + B_z \hat{k}\) is given by:</li>
                  <ul>
                    <li>\(\mathbf{A} \times \mathbf{B} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ A_x & A_y & A_z \\ B_x & B_y & B_z \end{vmatrix}\)</li>
                    <li>This gives a vector perpendicular to both \(\mathbf{A}\) and \(\mathbf{B}\), with magnitude:</li>
                    <ul>
                      <li>\(|\mathbf{A} \times \mathbf{B}| = |\mathbf{A}| |\mathbf{B}| \sin(\theta)\)</li>
                    </ul>
                    <li>Where \(\theta\) is the angle between the two vectors.</li>
                  </ul>
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
      `}</style>
    </>
  );
};

export default VectorAlgebra;
