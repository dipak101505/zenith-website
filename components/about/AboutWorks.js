import Link from "next/link"
import { useState } from "react"
import AboutWorkItem from "../AboutWork/Item"
import { v4 as uuidv4 } from "uuid"

const AboutWorkGrid=()=>{
const [Tab,setTab] = useState('all')
const [Items,setItems] = useState([
    {
        tab: ["all","2023"],
        img: "/assets/images/Results/R1.jpg",
        name: "Zenith Institute",
        title: "An Altar for Science Enthusiasts"
    },
    {
        tab: ["all","2022"],
        img: "/assets/images/Results/R2.jpg",
        name: "Zenith Institute",
        title: "An Altar for Science Enthusiasts"
    },
    {
        tab: ["all","2021"],
        img: "/assets/images/Results/R3.jpg",
        name: "Zenith Institute",
        title: "An Altar for Science Enthusiasts"
    },
    {
        tab: ["all","2020"],
        img: "/assets/images/Results/R4.jpg",
        name: "Zenith Institute",
        title: "An Altar for Science Enthusiasts"
    },
    {
        tab: ["all","2019"],
        img: "/assets/images/Results/R5.jpg",
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
<div className="latest-work-area pt-100 pb-76">
<div className="container">
<div className="row justify-content-center">
<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    <div className="hrdd-section-title text-center wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
        <h1>Our <span>Results</span></h1>
        <p className="latest-text">Our students consistently excel, reflecting our commitment to academic excellence.</p>
    </div>
    <div className="work-link text-center">
        <ul>
            <li className={`filter ${Tab==='all'?'active':''}`} onClick={e=>setTTab('all')}>Results</li>
            <li className={`filter ${Tab==='ui'?'active':''}`} onClick={e=>setTTab('2023')}>2023</li>
            <li className={`filter ${Tab==='development'?'active':''}`} onClick={e=>setTTab('2022')}>2022</li>
            <li className={`filter ${Tab==='graphic'?'active':''}`} onClick={e=>setTTab('2021')}>2021</li>
            <li className={`filter ${Tab==='motion'?'active':''}`} onClick={e=>setTTab('2020')}>2020</li>
            <li className={`filter ${Tab==='branding'?'active':''}`} onClick={e=>setTTab('2019')}>2019</li>
        </ul>
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
</>
)
}
export default AboutWorkGrid