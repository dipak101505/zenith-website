import Link from 'next/link';

const ServiceNewsletterRobotics=()=>{
return(
<>
<div className="hrrd-subscribe-area positioning pt-100 pb-100">
<div className="container">
<div className="row">
<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    <div className="hrrd-subscribe-wrap">
        <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="hrdd-section-title hrrd-subscribe-title text-center wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
                    <h1>Want to <span>Discuss</span> about Robotics and AI?</h1> 
                    <Link href="/contact"legacyBehavior>
                        <button className="edu-btn-fill" style={{marginTop: "40px", border: "none", cursor: 'pointer'}}>
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
<img className="shape hrrd-subscribe-shape" src="assets/images/shape/hrrd-subscribe-left.png" alt=""/>
</div>
</>
)
}

export default ServiceNewsletterRobotics