import Link from "next/link"
import FooterConstant from "../../constant/FooterConstant/FooterConstant"

const EducationFooter=()=>{
return(
<>
<div className="edu-footer-style">
<div className="container">
<div className="edu-footer-main-wrap">
<div className="row">
<div className="col-lg-3 col-md-7">
    <div className="edu-footer-about">
        <div className="logo">
            <Link href="/"><a>
            <img src={FooterConstant.Logo} alt=""/>
            </a>
            </Link>
        </div>
        <p className="f-about-texts">{FooterConstant.subTitle}</p>
        <ul className="footer-social-links d-flex gap-3 ">
            <li><Link href={FooterConstant.GoogleLink}><a><i className="bi bi-google"></i></a></Link></li>
            <li><Link href={FooterConstant.TwitterLink}><a><i className="bi bi-youtube"></i></a></Link></li>
            <li><Link href={FooterConstant.InstagramLink}><a><i className="bi bi-instagram"></i></a></Link></li>
            <li><Link href={FooterConstant.LinkedinLink}><a><i className="bi bi-linkedin"></i></a></Link></li>
        </ul>
    </div>
</div>
<div className="col-lg-6">
    <div className="row">
        <div className="col-lg-4 col-md-4 col-6 d-flex justify-content-lg-center pt-4 pt-lg-0">
            <div className="footer-widget">
                <h4 className="footer-widget-title">Courses</h4>
                <ul className="footer-links">
                    <li><Link href="/"><a>IIT JEE</a></Link></li>
                    <li><Link href="/"><a>WBJEE</a></Link></li>
                    <li><Link href="/"><a>NEET</a></Link></li>
                    <li><Link href="/"><a>Foundation</a></Link></li>
                    <li><Link href="/"><a>Robotics & AI	</a></Link></li>
                    <li><Link href="/"><a>Olympiads - SOF</a></Link></li>
                </ul>
            </div>
        </div>  
        <div className="col-lg-4 col-md-4 col-6 d-flex justify-content-lg-center pt-4 pt-lg-0">
            <div className="footer-widget ">
                <h4 className="footer-widget-title">Company</h4>
                <ul className="footer-links">
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/results"><a>Results</a></Link></li>
                    <li><Link href="/franchisee"><a>Franchisee</a></Link></li>
                    <li><Link href="/job-openings"><a>Job Openings</a></Link></li>  
                    <li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>  
                    <li><Link href="/school-tie-up"><a>School Tie-up	</a></Link></li>       
                </ul>
            </div>
        </div>
        <div className="col-lg-4 col-md-4 d-flex justify-content-lg-center pt-4 pt-lg-0">
            <div className="footer-widget">
                <h4 className="footer-widget-title">Centres</h4>
                <ul className="footer-links">
                    <li><Link href="/"><a>Saltlake</a></Link></li>
                    <li><Link href="/"><a>Phoolbagan</a></Link></li>
                    <li><Link href="/"><a>Howrah</a></Link></li>
                    <li><Link href="/"><a>Andul</a></Link></li>
                    <li><Link href="/"><a>Serampore</a></Link></li>
                    <li><Link href="/"><a>Chandannagar</a></Link></li>
                    <li><Link href="/"><a>Mogra</a></Link></li> 
                    <li><Link href="/"><a>Rampurhat</a></Link></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div className="col-lg-3 col-md-6 d-lg-flex justify-content-end pt-4 pt-lg-0">
    <div className="footer-widget">
        <h4 className="footer-widget-title">Contact</h4>
        <ul className="footer-contact-links">
            <li><span>Call :</span><Link href="/"><a> {FooterConstant.phone}</a></Link></li>
            <li><span>Email :</span><Link href="/"><a> {FooterConstant.email}</a></Link></li>
            <li><span>Address :</span><Link href="/"><a> {FooterConstant.address[0]}</a></Link></li>
        </ul>
    </div>

</div>
</div>
</div>
<div className="row">
<div className="col-lg-12">
    <div className="footer-copyright text-center" dangerouslySetInnerHTML={{__html: FooterConstant.copyrightTwo}}>
    </div>
</div>
</div>
</div>
</div>
</>
)
}
export default EducationFooter