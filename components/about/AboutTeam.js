import Carousel from 'react-slick';
import AboutTeamItem from './Team/item';

const AboutTeam=()=>{

const SliderSetting = {
    dots: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnDotsHover: true,
    responsive: [
        {
            breakpoint: 1224,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 800,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
};
       

return(
<>
<div className="about-team-area pb-100 pt-100">
<div className="container">
<div className="row align-items-center">
    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="hrdd-section-title text-capitalize">
            <h1>Best Dedicated <span>Mentors</span></h1>
        </div>
    </div>
    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 mobt-24">
        <div className="section-text wow animate flipInX" data-wow-delay="300ms" data-wow-duration="1500ms">
            <p>The faculty members at Zenith are dedicated educators, fostering a collaborative environment that encourages critical thinking and personal growth among students.</p>
        </div>
    </div>
</div>
<div className="row pt-50">
    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
     <Carousel
      {...SliderSetting}
     >


    <AboutTeamItem 
       pic="/assets/images/education/instructors/ins1.png"
       name="Varun Goenka"
       position={
        <>
            Chief Mentor Physics <br />
            IIT Kharagpur, NIT Trichy
        </>
    }
    />
        <AboutTeamItem 
            pic="/assets/images/education/instructors/ins2.png"
            name="Amit Bachhawat"
            position={
                <>
                    Chief Mentor Mathematics<br />
                    IIT Roorkee
                </>
            }
        />

        <AboutTeamItem 
            pic="/assets/images/education/instructors/ins3.png"
            name="Dr Ritesh Pandey"
            position={
                <>
                    Chief Mentor Chemistry<br />
                    St Xavier’s College
                </>
            }
        />

        <AboutTeamItem 
            pic="/assets/images/about/1. Payel Kundu - Mentor Biology - M.Sc in Zoology.png"
            name="Payel Kundu"
            position={
                <>
                    Biology Mentor<br />
                    MSc Calcutta University
                </>
            }
        />

        <AboutTeamItem 
            pic="/assets/images/about/2. Sandipan Shah - Mentor Physics - M.Sc Astrophysics.png"
            name="Sandipan Shah"
            position={
                <>
                    Physics Mentor<br />
                    MSc Astrophysics
                </>
            }
        />

        <AboutTeamItem 
            pic="/assets/images/about/3. Swagata Saha - M.Sc in Chemistry - IIT Hyderabad.png"
            name="Swagata Saha"
            position={
                <>
                    Chemistry Mentor<br />
                    IIT Hyderabad
                </>
            }
        />

        <AboutTeamItem 
            pic="/assets/images/about/Amit Sarkar - Mentor Maths - Msc Mathematics.png"
            name="Amit Sarkar"
            position={
                <>  
                    Mathematics Mentor<br />
                    MSc Mathematics
                </>
            }
        />

        <AboutTeamItem 
            pic="/assets/images/about/Alpheswar Pandit - Administration Head - University of Bath.png"
            name="Alpheswar Pandit"
            position={
                <>
                    Career Counsellor<br />
                    University of Bath
                </>
            }
        />
     </Carousel>
    </div>
</div>
</div>
</div>
</>
)
}
export default AboutTeam