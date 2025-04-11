import Link from "next/link"
import { useState } from "react"
import AboutWorkItem from "../../components/AboutWork/Item"
import { v4 as uuidv4 } from "uuid"

import BreadCrumb from '../../components/header/breadcrumb';
import AboutFutured from '../../components/about/AboutFutured';
import AboutTeam from '../../components/about/AboutTeam';
import AboutWorkGrid from '../../components/about/AboutWorks';
import AboutDetailOne from '../../components/about/DetailOne';
import LayoutAppGrid from '../../components/layout/AppGrid';
import Header from '../../components/layout/header';
import LayoutNewsLater from '../../components/layout/NewsLater';
import Footer from '../../components/layout/footer';




const ScholTieUp=()=>{
const [Tab,setTab] = useState('all')
const [Items,setItems] = useState([
    {
        tab: ["all","2024"],
        img: "/assets/images/school tie up/1.png",
        name: "Zenith Institute",
        title: "An Altar for Science Enthusiasts"
    },{
        tab: ["all","2023"],
        img: "/assets/images/school tie up/2.png",
        name: "Zenith Institute",
        title: "An Altar for Science Enthusiasts"
    },{
        tab: ["all","2022"],
        img: "/assets/images/school tie up/3.png",
        name: "Zenith Institute",
        title: "An Altar for Science Enthusiasts"
    },{
        tab: ["all","2024"],
        img: "/assets/images/school tie up/4.png",
        name: "Zenith Institute",
        title: "An Altar for Science Enthusiasts"
    },{
        tab: ["all","2023"],
        img: "/assets/images/school tie up/5.png",
        name: "Zenith Institute",
        title: "An Altar for Science Enthusiasts"
    },{
        tab: ["all","2022"],
        img: "/assets/images/school tie up/6.png",
        name: "Zenith Institute",
        title: "An Altar for Science Enthusiasts"
    },{
        tab: ["all","2024"],
        img: "/assets/images/school tie up/7.png",
        name: "Zenith Institute",
        title: "An Altar for Science Enthusiasts"
    },{
        tab: ["all","2023"],
        img: "/assets/images/school tie up/8.png",
        name: "Zenith Institute",
        title: "An Altar for Science Enthusiasts"
    },{
        tab: ["all","2022"],
        img: "/assets/images/school tie up/9.png",
        name: "Zenith Institute",
        title: "An Altar for Science Enthusiasts"
    },{
        tab: ["all","2024"],
        img: "/assets/images/school tie up/10.png",
        name: "Zenith Institute",
        title: "An Altar for Science Enthusiasts"
    },{
        tab: ["all","2023"],
        img: "/assets/images/school tie up/11.png",
        name: "Zenith Institute",
        title: "An Altar for Science Enthusiasts"
    },{
        tab: ["all","2022"],
        img: "/assets/images/school tie up/12.png",
        name: "Zenith Institute",
        title: "An Altar for Science Enthusiasts"
    }
    
])

function setTTab(t){
    setTab(t)
    setItems([...Items])
}

return(
<>

    <Header />

<div className="latest-work-area pt-100 pb-76">
<div className="container">
<div className="row justify-content-center">
<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    <div className="hrdd-section-title text-center wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
        <h1>Our School Tie-Ups</h1>
        <p className="latest-text">Our students consistently excel, reflecting our commitment to academic excellence.</p>
    </div>
    
</div>
</div>
<div className="row mt-50">

{Items.map(list=>{
return(
<>    
{list.tab.includes(Tab)?
<div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInUp">
  <AboutWorkItem
   key={uuidv4()}
   img={list.img}
   name={list.name}
   title={list.title}
  />
</div>:null
}
</>
)
})}

</div>
</div>
</div>
<LayoutNewsLater />
<Footer />

</>
)
}
export default ScholTieUp