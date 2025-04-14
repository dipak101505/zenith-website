import Header from '../../components/layout/header.js';
import BreadCrumb from '../../components/header/breadcrumb.js';
import CommentBox from '../../components/blog/CommentBox.js';
import { useState } from 'react';
import Image from 'next/image';
import SideSubjectFlotingBarIITJEE from '../../components/SubjectMatter/SideSubjectFlotingBarIITJEE.js';

const SetsRelationsFunctions = () => {
  const [Tags] = useState([
    'Mathematics', 'Sets', 'Relations', 'Functions', 'JEE Mains', 'Algebra'
  ]);

  return (
    <>
      <header>
        <Header />
        <BreadCrumb pagename="Sets, Relations and Functions" />
      </header>

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-post-wrap blog-post-details">
                <h1>Sets, Relations and Functions – JEE Mains Mathematics</h1>
                <ul>
                  <li><a href="#">by Zenith LMS</a></li>
                  <li><a href="#">Updated April 2025</a></li>
                </ul>

                <h2>1. Introduction to Sets</h2>
                <p>
                  A set is a well-defined collection of distinct objects. Sets are usually represented by capital letters.
                </p>
                <ul>
                  <li><strong>Roster form:</strong> Listing all elements, e.g., A = {'{1, 2, 3}'}</li>
                  <li><strong>Set-builder form:</strong> Describes properties, e.g., A = {'{x | x is a natural number < 5}'}</li>

                </ul>

                <h2>2. Types of Sets</h2>
                <ul>
                  <li>Empty set</li>
                  <li>Finite and Infinite sets</li>
                  <li>Equal sets</li>
                  <li>Subsets and Power Set</li>
                  <li>Universal set and Complement of a set</li>
                </ul>

                <h2>3. Set Operations</h2>
                <ul>
                  <li><strong>Union (A ∪ B):</strong> Elements in A or B or both</li>
                  <li><strong>Intersection (A ∩ B):</strong> Elements common to both A and B</li>
                  <li><strong>Complement (Aʹ):</strong> Elements not in A</li>
                  <li><strong>Algebra of sets:</strong> Includes laws like associative, commutative, distributive, De Morgan’s laws</li>
                </ul>

                <h2>4. Cartesian Product and Relations</h2>
                <ul>
                  <li><strong>Cartesian product (A × B):</strong> Set of all ordered pairs (a, b) where a ∈ A and b ∈ B</li>
                  <li><strong>Relation:</strong> A subset of Cartesian product A × B</li>
                  <li><strong>Types of relations:</strong> Reflexive, Symmetric, Transitive, and Equivalence</li>
                </ul>

                <h2>5. Functions</h2>
                <ul>
                  <li><strong>Function:</strong> A relation where every element of the domain has exactly one image in the co-domain</li>
                  <li><strong>Types:</strong> One-one (injective), Onto (surjective), Into, Bijective (both one-one and onto)</li>
                  <li><strong>Composition of functions:</strong> If f: A → B and g: B → C, then g ∘ f: A → C</li>
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

export default SetsRelationsFunctions;
