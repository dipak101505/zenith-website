import SubjectItem from "./SubjectItem"

const SideSubjectFlotingBarIITJEE=()=>{
return(
<>
<div className="single-cart">
    <div className="cart-title">
    <h2>Class 11 Physics</h2>
    </div>

    <SubjectItem name="Newton&apos;s Law Of Motion" slug="physics11/lawofmotion" />

    <SubjectItem name="Electromagnetic Waves" slug="physics11/emwaves" />

    <SubjectItem name="Ray Optics and Optical Instruments" slug="physics11/rayoptics" />

</div>
<div className="single-cart">
    <div className="cart-title">
    <h2>Class 11 Chemistry</h2>
    </div>

    <SubjectItem name="Haloalkanes and Haloarenes" slug="chemistry11/haloalkanes" />

    <SubjectItem name="Alcohol, Phenols and Ethers" slug="chemistry11/alcohol" />

    <SubjectItem name="Aldehydes, Ketones and Carboxylic Acid" slug="chemistry11/aldehydes" />

</div>
<div className="single-cart">
    <div className="cart-title">
    <h2>Class 11 Mathematics</h2>
    </div>

    <SubjectItem name="Integrals" slug="math11/integrals" />

    <SubjectItem name=" Application of Derivatives" slug="math11/applicationderivative" />

    <SubjectItem name="Continuity and Differentiability" slug="math11/continuityanddifferentiability" />

</div>
</>
)
}
export default SideSubjectFlotingBarIITJEE