import Link from "next/link"
import EducationDepertmentItem from "./Deperments/Item"

const EducationDepertment=()=>{
return(
<>
<div className="edu-department-style position-relative ">
<div className="vactor-shape position-absolute d-none d-lg-block end-0 wow animated fadeInRight" data-wow-duration="2000ms">
    <img src="/assets/images/education/shapes/edu-vactor2.svg" alt=""/>
</div>
<div className="container">
    <div className="row justify-content-center">
        <div className="col-xxl-4 col-lg-6">
            <h2 className="edu-section-title">Why Zenith?</h2>
        </div>
    </div>
    <div className="row gy-4 mt-45">

    <EducationDepertmentItem
     img="assets/images/education/departments/depertment2.png"
     name="Experienced Mentors"
     desc="Our Mentors have immense experience of guiding students to premiere institutes of India and abroad."
    />

    <EducationDepertmentItem
     img="assets/images/education/departments/depertment2.png"
     name="Structured Course"
     desc="Our course is designed for in depth understanding and application of concepts for entrance as well as boards."
    />

    <EducationDepertmentItem
     img="assets/images/education/departments/depertment2.png"
     name="Hybrid Learning"
     desc="We also have option for Live/Recorded classes to facilitate learning from remote areas."
    />

    <EducationDepertmentItem
     img="assets/images/education/departments/depertment2.png"
     name="Regular Mock Test"
     desc="Our course includes regular proctored mock tests so that students can gauge themselves and improve upon the exam taking strategy."
    />

    <EducationDepertmentItem
     img="assets/images/education/departments/depertment2.png"
     name="Scholarship"
     desc="ZST - Zenith Scholarship Test can be taken in offline or online mode, it helps meritorious students in their preparation."
    />

    <EducationDepertmentItem
     img="assets/images/education/departments/depertment2.png"
     name="Best Results"
     desc="We have consistently produced best results in Kolkata for JEE/ NEET examination by each passing year since our inception."
    />

    </div>

    {/* <div className="row justify-content-center mt-60">
        <div className="col-lg-5 text-center">
            <div className="view-more-btn">
                <Link href="/"><a className="edu-btn-fill">View All Department</a></Link>
            </div>
        </div>
    </div> */}
</div>
</div>
</>
)
}
export default EducationDepertment