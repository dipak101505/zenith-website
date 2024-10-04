import Link from "next/link"
import EduTeacherItem from "./Teacher/item"

const EducationTeacher=()=>{
return(
<>
<div className="edu-instructor-style position-relative">
<div className="vactor-shape position-absolute d-none d-lg-block start-0 top-0 wow animated fadeInLeft" data-wow-duration="2000ms">
<img src="assets/images/education/shapes/edu-vactor3.svg" alt=""/>
</div>
<div className="container">
<div className="row align-items-center gy-4">
    <div className="col-xxl-4 col-lg-5">
    <div className="edu-section-title text-start">Our Mentors</div>
    </div>
    <div className="col-xxl-8 col-lg-7 text-lg-end">
        <div className="more-btn">
            <a href="about.html" className="edu-btn-fill">View All Mentors</a>
        </div>
    </div>
</div>
<div className="row mt-45 gy-4 ">
    
    <EduTeacherItem 
     img="assets/images/education/instructors/ins1.png"
     name="Varun Goenka"
     position="Chief Mentor Physics"
    />

    <EduTeacherItem 
     img="assets/images/education/instructors/ins2.png"
     name="Amit Bachhawat"
     position="Chief Mentor Maths"
    />

    <EduTeacherItem 
     img="assets/images/education/instructors/ins3.png"
     name="Dr. Ritesh Pandey"
     position="Cheif Mentor Chemistry"
    />
</div>
</div>
</div>
</>
)
}
export default EducationTeacher