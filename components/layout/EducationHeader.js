import { useRef } from "react"
import Link from "next/link"
import NavConstant from "../../constant/HeaderConstant/NavConstant"
import Image from "next/image"
import { useIsVisible } from "react-is-visible"

const EducationHeader=()=>{
const navToggle = useRef(null)
const navHambargar = useRef(null)

const navRef = useRef()
const isVisible = useIsVisible(navRef)


// toggle nav
async function ToggleNav(){
    try{
    navHambargar.current.classList.toggle('h-active')
    navToggle.current.classList.toggle('slidenav')
    }catch(err){}
}

// toggle sub menu
async function ToggleSubMenu(e){
    try{
    if(e.target.nextSibling.style.display==="block"){
        e.target.nextSibling.style.display="none"
        e.target.innerHTML="+"
    }else{
        e.target.nextSibling.style.display="block"
        e.target.innerHTML="-"
    }
    }catch(err){}
}

return(
<>
<nav ref={navRef}>
<div className={`header-menu-area eu-menu ${isVisible?'':'sticky'} `}>
<div className="container">
<div className="row align-items-center">
    <div className="col-xxl-3 col-xl-2 col-lg-2 col-sm-6 col-6">
        <div className="logo text-left">
            <Link href="/"legacyBehavior>
                <a><Image src={NavConstant.Logo} alt="" width="173" height="50"/></a>
            </Link>    
        </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-8 col-sm-6 col-6">
        <div className="hidden-lg hamburger" ref={navHambargar} onClick={ToggleNav}>
            <span className="h-top"></span>
            <span className="h-middle"></span>
            <span className="h-bottom"></span>
        </div>
        <nav className="main-nav" ref={navToggle}> 
            <div className="logo mobile-ham-logo d-lg-none d-block text-left">
                <Link href="/"legacyBehavior>
                    <a><Image src={NavConstant.Logo} alt="" width="173" height="50"/></a>
                </Link>    
            </div>
            <ul>
                <li className="has-child-menu">
                    <Link href="/"legacyBehavior><a className="active">Home</a></Link>
                    <i className="fl flaticon-plus"  onClick={ToggleSubMenu}>+</i>
                    <ul className="sub-menu">
                        <li><Link href="https://lms-eight-chi.vercel.app"legacyBehavior><a>Online Course</a></Link></li>
                        <li><Link href="https://zenithinstitute.theonlinetests.com/"legacyBehavior><a>Online Test</a></Link></li>
                        {/* <li><Link href="/education"legacyBehavior><a>Education</a></Link></li>
                        <li><Link href="/job"legacyBehaviorlegacyBehavior><a>Job Finding</a></Link></li>
                        <li><Link href="/agency"legacyBehavior><a>Digital Agency</a></Link></li> */}
                    </ul>
                </li>
                <li><Link href="/about"legacyBehavior><a >About</a></Link></li>
                {/* <li className="has-child-menu">
                    <Link href="/about"legacyBehavior><a >About</a></Link>
                    <i className="fl" >+</i>
                    <ul className="sub-menu">
                        <li><Link href="/about/howrah"legacyBehavior><a>Howrah</a></Link></li>
                        <li><Link href="/about/Serampore"legacyBehavior><a>Serampore</a></Link></li>
                        <li><Link href="/about/andul"legacyBehavior><a>Andul</a></Link></li>
                        <li><Link href="/about/phoolbagan"legacyBehavior><a>Phoolbagan</a></Link></li>
                        <li><Link href="/about/saltlake"legacyBehavior><a>Salt Lake</a></Link></li>
                        <li><Link href="/about/chandannagar"legacyBehavior><a>Chandannagar</a></Link></li>
                        <li><Link href="/about/mogra"legacyBehavior><a>Mogra</a></Link></li>
                        <li><Link href="/about/Rampurhat"legacyBehavior><a>Rampurhat</a></Link></li>
                        <li><Link href="/about/viproad"legacyBehavior><a>VIP Road</a></Link></li>
                        <li><Link href="/about/dunlop"legacyBehavior><a>Dunlop</a></Link></li>
                        <li><Link href="/about/Raiganj"legacyBehavior><a>Raiganj</a></Link></li>
                        <li><Link href="/about/Balurghat"legacyBehavior><a>Balurghat</a></Link></li>
                    </ul>
                </li> */}
                
                <li className="has-child-menu">
                    <Link href="/about"legacyBehavior><a >Courses</a></Link>
                    <i className="fl" >+</i>
                    <ul className="sub-menu">
                        <li><Link href="/IITJEE"legacyBehavior><a>IIT JEE</a></Link></li>
                        <li><Link href="/NEET"legacyBehavior><a>NEET</a></Link></li>
                        <li><Link href="/robotics"legacyBehavior><a>Robotics & AI</a></Link></li>
                        <li><Link href="/foundation"legacyBehavior><a>Foundation Class 7-10</a></Link></li>
                        <li><Link href="/olympiad"legacyBehavior><a>Olympiad</a></Link></li>
                    </ul>
                </li>
                <li><Link href="/results"legacyBehavior><a>Results</a></Link></li>

                <li className="has-child-menu">
                    <Link href="/about/howrah"legacyBehavior><a >Our Centers</a></Link>
                    <i className="fl" >+</i>
                    <ul className="sub-menu">
                        <li><Link href="/about/howrah"legacyBehavior><a>Howrah</a></Link></li>
                        <li><Link href="/about/Serampore"legacyBehavior><a>Serampore</a></Link></li>
                        <li><Link href="/about/andul"legacyBehavior><a>Andul</a></Link></li>
                        <li><Link href="/about/phoolbagan"legacyBehavior><a>Phoolbagan</a></Link></li>
                        <li><Link href="/about/saltlake"legacyBehavior><a>Salt Lake</a></Link></li>
                        <li><Link href="/about/chandannagar"legacyBehavior><a>Chandannagar</a></Link></li>
                        <li><Link href="/about/mogra"legacyBehavior><a>Mogra</a></Link></li>
                        <li><Link href="/about/Rampurhat"legacyBehavior><a>Rampurhat</a></Link></li>
                        <li><Link href="/about/viproad"legacyBehavior><a>VIP Road</a></Link></li>
                        <li><Link href="/about/dunlop"legacyBehavior><a>Dunlop</a></Link></li>
                        <li><Link href="/about/Raiganj"legacyBehavior><a>Raiganj</a></Link></li>
                        <li><Link href="/about/Balurghat"legacyBehavior><a>Balurghat</a></Link></li>
                        <li><Link href="/about/Berhampore"legacyBehavior><a>Berhampore</a></Link></li>
                        <li><Link href="/about/agartala"legacyBehavior><a>Agartala</a></Link></li>
                        <li><Link href="/about/gariahat"legacyBehavior><a>Gariahat</a></Link></li>

                    </ul>
                </li>
                
                {/* <li><Link href="/results"legacyBehavior><a>Results</a></Link></li>
                <li className="has-child-menu">
                    <a>Blog</a>
                    <i className="fl flaticon-plus" onClick={ToggleSubMenu}>+</i>
                    <ul className="sub-menu">
                        <li><Link href="/"legacyBehavior><a>Blog</a></Link></li>
                        <li><Link href="/"legacyBehavior><a>Blog Details</a></Link></li>
                    </ul>
                </li> */}
                <li><Link href="/contact"legacyBehavior><a>Contact </a></Link></li>
            </ul>
            <div className="menu-btn-wrap d-block d-lg-none">
                <Link href="/contact"legacyBehavior><a className="edu-btn">Contact</a></Link>
            </div>
        </nav>
    </div>
    <div className="col-xxl-3 col-xl-4 col-lg-2 d-none d-lg-block">
        <div className="menu-btn-wrap">
            <a href="tel:+919051509444" className="edu-btn">Contact Now</a>
        </div>
    </div>
</div>
</div>
</div>
</nav>
</>
)
}
export default EducationHeader