import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import Image from 'next/image';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const MatricesDeterminants = () => {
  const [Tags] = useState([
    'Mathematics', 'Matrices', 'Determinants', 'JEE Mains', 'Algebra'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Matrices and Determinants" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Matrices and Determinants – JEE Mains Mathematics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Matrices</h2>
                <ul>
                  <li>A matrix is a rectangular array of numbers arranged in rows and columns.</li>
                  <li>Order of a matrix: m × n (m rows and n columns)</li>
                </ul>

                <h2>2. Types of Matrices</h2>
                <ul>
                  <li><strong>Square Matrix:</strong> Number of rows = number of columns</li>
                  <li><strong>Diagonal Matrix:</strong> All non-diagonal elements are zero</li>
                  <li><strong>Scalar Matrix:</strong> A diagonal matrix with equal diagonal elements</li>
                  <li><strong>Identity Matrix:</strong> A diagonal matrix with all diagonal elements = 1</li>
                  <li><strong>Zero Matrix:</strong> All elements are zero</li>
                  <li><strong>Row Matrix:</strong> Only one row</li>
                  <li><strong>Column Matrix:</strong> Only one column</li>
                  <li><strong>Symmetric and Skew-Symmetric Matrices</strong></li>
                </ul>

                <h2>3. Algebra of Matrices</h2>
                <ul>
                  <li>Addition and Subtraction (only possible if matrices are of same order)</li>
                  <li>Multiplication (A × B is defined only if the number of columns in A = number of rows in B)</li>
                  <li>Scalar multiplication and Transpose of a Matrix</li>
                </ul>

                <h2>4. Determinants</h2>
                <ul>
                  <li>Defined only for square matrices</li>
                  <li>Determinants of 2×2 and 3×3 matrices</li>
                  <li>Used in finding area of triangle: If points are (x₁, y₁), (x₂, y₂), (x₃, y₃):</li>
                  <li>
                    Area = (1/2) × |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|
                  </li>
                </ul>

                <h2>5. Properties of Determinants</h2>
                <ul>
                  <li>Interchanging rows/columns changes the sign</li>
                  <li>Two identical rows/columns ⇒ determinant = 0</li>
                  <li>If a row/column is multiplied by a scalar, determinant is also multiplied by the scalar</li>
                </ul>

                <h2>6. Adjoint and Inverse of a Matrix</h2>
                <ul>
                  <li><strong>Adjoint:</strong> Transpose of the cofactor matrix</li>
                  <li><strong>Inverse of matrix A:</strong> A⁻¹ = adj(A)/|A| (only if |A| ≠ 0)</li>
                </ul>

                <h2>7. Solving System of Linear Equations</h2>
                <p>Using matrix method:</p>
                <ul>
                  <li>AX = B ⇒ X = A⁻¹B, where A is coefficient matrix, X is variable matrix, B is constant matrix</li>
                  <li>Applicable only if A⁻¹ exists (i.e., |A| ≠ 0)</li>
                  <li>Used for 2 or 3 variable systems</li>
                </ul>

                <h2>8. Consistency of System</h2>
                <ul>
                  <li><strong>Consistent:</strong> Has at least one solution</li>
                  <li><strong>Inconsistent:</strong> No solution</li>
                  <li>Tested using rank or determinant</li>
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

export default MatricesDeterminants;
