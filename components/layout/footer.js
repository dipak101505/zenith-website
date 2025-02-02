import Link from "next/link"
import FooterConstant from "../../constant/FooterConstant/FooterConstant"

const Footer=()=>{
return(
<div className="footer-area hrrd-footer-area positioning pb-100">
<div className="container">
<div className="row">
<div className="col-xl-12 col-lg-12 col-sm-12 col-12">
<div className="footer-wrap">
<div className="row justify-content-between">
    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
        <div className="single-widget">
            <div className="footer-logo">
                <Link href="/">
                <a><img src={FooterConstant.Logo} alt=""/></a>
                </Link>
                <p>{FooterConstant.subTitle}</p>
                <div className="footer-social wow animate flipInX" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <ul>
                        <li><Link href={FooterConstant.GoogleLink}><a><i className="bi bi-google"></i></a></Link></li>
                        <li><Link href={FooterConstant.LinkedinLink}><a><i className="bi bi-linkedin"></i></a></Link></li>
                        <li><Link href={FooterConstant.TwitterLink}><a><i className="bi bi-youtube"></i></a></Link></li>
                        <li><Link href={FooterConstant.InstagramLink}><a><i className="bi bi-instagram"></i></a></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
        <div className="single-widget">
            <div className="footer-title">
                <h3>Courses</h3>
            </div>
            <div className="footer-link">
                <ul>
                    <li><Link href="/"><a>IITJEE</a></Link></li>
                    <li><Link href="/"><a>WBJEE</a></Link></li>
                    <li><Link href="/"><a>NEET</a></Link></li>
                    <li><Link href="/"><a>Foundation</a></Link></li>
                    <li><Link href="/"><a>Robotics & AI</a></Link></li>
                    <li><Link href="/"><a>Olympiads - SOF</a></Link></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
        <div className="single-widget">
            <div className="footer-title">
                <h3>Company</h3>
            </div>
            <div className="footer-link">
                <ul>
                    <li><Link href="/"><a>About</a></Link></li>
                    <li><Link href="/"><a>Results</a></Link></li>
                    <li><Link href="/"><a>Franchisee</a></Link></li>
                    <li><Link href="/"><a>Job Openings</a></Link></li>
                    <li><Link href="/"><a>Privacy Policy</a></Link></li>
                    <li><Link href="/"><a>School Tie-up</a></Link></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6">
        <div className="single-widget">
            <div className="footer-title">
                <h3>Centres</h3>
            </div>
            <div className="footer-link">
                <ul>
                <li><Link href="/about/saltlake"><a>Saltlake</a></Link></li>
                    <li><Link href="/about/phoolbagan"><a>Phoolbagan</a></Link></li>
                    <li><Link href="/about/howrah"><a>Howrah</a></Link></li>
                    <li><Link href="/about/andul"><a>Andul</a></Link></li>
                    <li><Link href="/about/Serampore"><a>Serampore</a></Link></li>
                    <li><Link href="/about/chandannagar"><a>Chandannagar</a></Link></li>
                    <li><Link href="/about/mogra"><a>Mogra</a></Link></li>
                    <li><Link href="/about/rampurHat"><a>Rampurhat</a></Link></li>
                    <li><Link href="/about/Birnagar"><a>Birnagar</a></Link></li>
                    <li><Link href="/about/Narayanpur"><a>Narayanpur</a></Link></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6"> 
        <div className="single-widget">
            <div className="footer-title">
                <h3>Contact</h3>
            </div>
            <div className="contact-info">
                <ul>
                    <li><a href="tel:+919051509444">Call : <span>9051509444</span></a></li>
                    <li><a href="mailto:zenithinsti@gmail.com">Email : <span>zenithinsti@gmail.com</span></a></li>
                    <li>Address : <span>India</span></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
<div className="copy-right-area">
<p className="copy-text">{FooterConstant.copyrightText}</p>
</div>
</div>
</div>
</div>
<img className="shape hrrd-footer-shape" src="/assets/images/shape/hrrd-footer.png" alt=""/>
</div>
)
}
export default Footer