(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{6395:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services",function(){return i(5875)}])},4:function(e,s,i){"use strict";var n=i(5893),t=i(1664);s.Z=function(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"breadcrumb-area positioning",children:[(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12",children:(0,n.jsxs)("div",{className:"breadcrumb-text text-center",children:[(0,n.jsx)("h1",{children:e.pagename}),(0,n.jsxs)("p",{children:[(0,n.jsx)(t.default,{href:"/",children:(0,n.jsx)("a",{children:"Home"})})," / ",e.pagename]})]})})})}),(0,n.jsx)("img",{className:"shape hrrd-hero-shape-top",src:"assets/images/shape/hrrd-hero-shape-top.png",alt:""})]})})}},5628:function(e,s,i){"use strict";var n=i(5893);s.Z=function(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"single-client-testimonial text-center",children:[(0,n.jsx)("div",{className:"client-testimonial-img",children:(0,n.jsx)("img",{src:e.pic,alt:""})}),(0,n.jsxs)("div",{className:"client-testimonial-info",children:[(0,n.jsx)("h2",{children:e.name}),(0,n.jsx)("p",{children:e.position})]}),(0,n.jsxs)("div",{className:"client-testimonial-rating",children:[(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("i",{className:"bi bi-star-fill"})}),(0,n.jsx)("li",{children:(0,n.jsx)("i",{className:"bi bi-star-fill"})}),(0,n.jsx)("li",{children:(0,n.jsx)("i",{className:"bi bi-star-fill"})}),(0,n.jsx)("li",{children:(0,n.jsx)("i",{className:"bi bi-star-fill"})}),(0,n.jsx)("li",{children:(0,n.jsx)("i",{className:"bi bi-star-fill"})})]}),(0,n.jsx)("p",{children:"I\u2019ve downloaded Hrrd from my Google Play  about 1 years ago. This make the prototype process so easy and faster. I feel it is a best app for prototype."})]})]})})}},5875:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return W}});var n=i(5893),t=i(4),a=i(6365),l=i(7294),r=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,j=(e,s,i)=>s in e?d(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,f=(e,s)=>{for(var i in s||(s={}))h.call(s,i)&&j(e,i,s[i]);if(x)for(var i of x(s))p.call(s,i)&&j(e,i,s[i]);return e},g=(e,s)=>m(e,u(s)),b="undefined"==typeof window?l.useEffect:l.useLayoutEffect,v={easeInCubic:(e,s,i,n)=>i*(e/=n)*e*e+s,easeOutCubic:(e,s,i,n)=>(e/=n,i*(--e*e*e+1)+s),linear:(e,s,i,n)=>i*e/n+s},w=v.easeOutCubic,y=(e,s)=>e.replace(/\B(?=(\d{3})+(?!\d))/g,s),N=e=>(e.toString().split(".")[1]||"").length,S=(e,s)=>{let i=N(e),n=N(s||1);return i>=n?i:n},I=({isCounting:e=!1,start:s=0,end:i,duration:n,decimalPlaces:t=S(s,i),decimalSeparator:a=".",thousandsSeparator:r="",onComplete:c,easing:o=w,formatter:d,updateInterval:m,onUpdate:u})=>{let x=((e,s)=>{if("number"==typeof e)return"number"==typeof s?s:2})(i,n),h=e=>{let n;if(0===x&&"number"==typeof i)n=i;else if("number"==typeof i&&"number"==typeof x){let t=(e=>"function"==typeof e?e:v[e])(o);n=t(e<x?e:x,s,i-s,x)}else n=s+e;if("function"==typeof d)return d(n);if(0===t){let e=Math.round(n).toString();return y(e,r)}let[l,c]=n.toFixed(t).split(".");return`${y(l,r)}${a}${c}`},{elapsedTime:p,reset:j}=(({isPlaying:e,duration:s,startAt:i=0,updateInterval:n=0,onComplete:t,onUpdate:a})=>{let[r,c]=(0,l.useState)(i),o=(0,l.useRef)(-1e3*i),d=(0,l.useRef)(null),m=(0,l.useRef)(null),u=(0,l.useRef)(null),x=(0,l.useRef)({elapsedTimeRef:0,startAtRef:i,durationRef:s,updateIntervalRef:n});x.current=g(f({},x.current),{durationRef:s,updateIntervalRef:n});let h=e=>{let s=e/1e3;if(null===m.current)return m.current=s,void(d.current=requestAnimationFrame(h));let{durationRef:i,elapsedTimeRef:n,updateIntervalRef:t,startAtRef:a}=x.current,l=n+(s-m.current);m.current=s,x.current=g(f({},x.current),{elapsedTimeRef:l});let r="number"==typeof i&&a+l>=i;c(r?i:a+(0===t?l:(l/t|0)*t)),r||(d.current=requestAnimationFrame(h))},p=()=>{d.current&&cancelAnimationFrame(d.current),u.current&&clearTimeout(u.current),m.current=null},j=(0,l.useCallback)((s=>{let n="number"==typeof s?s:i;p(),x.current=g(f({},x.current),{elapsedTimeRef:0,startAtRef:n}),c(n),e&&(d.current=requestAnimationFrame(h))}),[e,i]);return b((()=>{if(null==a||a(r),s&&r>=s){o.current+=1e3*s;let{shouldRepeat:e=!1,delay:i=0,newStartAt:n}=(null==t?void 0:t(o.current/1e3))||{};e&&(u.current=setTimeout((()=>j(n)),1e3*i))}}),[r,s]),b((()=>(e&&(d.current=requestAnimationFrame(h)),p)),[e]),{elapsedTime:r,reset:j}})({isPlaying:e,duration:x,onComplete:c,updateInterval:m,onUpdate:"function"==typeof u?e=>u(h(e)):void 0});return{value:h(p),reset:j}},O=e=>{var s=e,{children:i}=s,n=((e,s)=>{var i={};for(var n in e)c.call(e,n)&&s.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&r)for(var n of r(e))s.indexOf(n)<0&&o.call(e,n)&&(i[n]=e[n]);return i})(s,["children"]);let t=I(n);return"function"==typeof i?i(t):t.value};O.displayName="CountUp";var T=function(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12",children:(0,n.jsxs)("div",{className:"counter-item text-center wow fadeInUp",children:[(0,n.jsx)("h1",{className:"odometer",children:(0,n.jsx)(O,{isCounting:!0,end:e.countUp,duration:5,thousandsSeparator:","})}),(0,n.jsx)("p",{children:e.title})]})})})},P=i(6830),A=function(){var e=(0,l.useRef)(),s=(0,P.Or)(e);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"counter-area pb-100",children:(0,n.jsx)("div",{className:"container",ref:e,children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12",children:(0,n.jsx)("div",{className:"counter-wrap",children:s?(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(T,{title:"Happy Customer",countUp:2e4}),(0,n.jsx)(T,{title:"Five Star Review",countUp:5e3}),(0,n.jsx)(T,{title:"Award Winner",countUp:100}),(0,n.jsx)(T,{title:"Country Using Our Service",countUp:50})]}):null})})})})})})},R=i(1664),F=function(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12",children:(0,n.jsxs)("div",{className:"pricing-plan-wrap",children:[(0,n.jsxs)("div",{className:"pricing-plan-info d-flex align-items-center",children:[(0,n.jsx)("div",{className:"pricing-plan-icon d-flex align-items-center justify-content-center",children:(0,n.jsx)("i",{className:"bi bi-person-bounding-box"})}),(0,n.jsxs)("div",{className:"pricing-plan-compare",children:[(0,n.jsx)("p",{children:e.name}),e.monthly?(0,n.jsx)("h1",{children:e.perMonth}):(0,n.jsx)("h1",{children:e.perYear})]})]}),(0,n.jsxs)("div",{className:"pricing-plan-details",children:[(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"1 Landingzone Asset"}),(0,n.jsx)("li",{children:"10 Illustration Asset"}),(0,n.jsx)("li",{children:"10 Template Animation"}),(0,n.jsx)("li",{children:"15 Icon Asset"}),(0,n.jsx)("li",{children:"10 Photos Asset"})]}),(0,n.jsx)("div",{className:"pricing-plan-btn-wrap",children:(0,n.jsx)(R.default,{href:"",children:(0,n.jsx)("a",{children:"Buy Package"})})})]})]})})})},C=function(){var e=(0,l.useState)(!1),s=e[0],i=e[1];return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"pricing-plan-area mt-100 mb-76",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsx)("div",{className:"col-xxl-3 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12",children:(0,n.jsx)("div",{className:"hrdd-section-title text-capitalize",children:(0,n.jsxs)("h1",{children:["Pricing ",(0,n.jsx)("span",{children:"Plans"})]})})}),(0,n.jsx)("div",{className:"col-xxl-5 col-xl-5 col-lg-4 col-md-12 col-sm-12 col-12 mobt-24",children:(0,n.jsx)("div",{className:"section-text wow animate flipInX","data-wow-delay":"300ms","data-wow-duration":"1500ms",children:(0,n.jsx)("p",{children:"Start connecting with all your team and plan payment for every product as you want. Let\u2019s start your package."})})}),(0,n.jsx)("div",{className:"col-xxl-4 col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 mobt-24",children:(0,n.jsxs)("div",{className:"toggle-btn pricing-plan-toggle",children:[(0,n.jsx)("span",{style:{marginRight:"30px"},children:"Yearly"}),(0,n.jsxs)("label",{className:"switch",children:[(0,n.jsx)("input",{type:"checkbox",id:"checbox",onChange:function(e){return i(!s)}}),(0,n.jsx)("span",{className:"slider round"})]}),(0,n.jsx)("span",{style:{marginLeft:"30px"},children:"Monthly"})]})})]}),(0,n.jsxs)("div",{className:"row mt-50",children:[(0,n.jsx)(F,{name:"Basic",perMonth:"$25",perYear:"$99",monthly:s}),(0,n.jsx)(F,{name:"Standard",perMonth:"$60",perYear:"$159",monthly:s}),(0,n.jsx)(F,{name:"Basic",perMonth:"$89",perYear:"$279",monthly:s}),(0,n.jsx)(F,{name:"Basic",perMonth:"$100",perYear:"$399",monthly:s})]})]})})})},D=function(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12",children:(0,n.jsxs)("div",{className:"all-services-box text-center",children:[(0,n.jsx)("div",{className:"all-services-icon",children:(0,n.jsx)("i",{className:e.Icon})}),(0,n.jsxs)("div",{className:"all-services-content",children:[(0,n.jsx)("h3",{children:e.title}),(0,n.jsx)("p",{children:e.desc}),(0,n.jsx)(R.default,{href:"/",children:(0,n.jsxs)("a",{children:[e.actionBtn,(0,n.jsx)("i",{className:"bi bi-arrow-right-short"})]})})]})]})})})},U=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"all-services-area pt-100 pb-76",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12",children:(0,n.jsxs)("div",{className:"hrdd-section-title text-capitalize text-center wow animate fadeInDown","data-wow-delay":"100ms","data-wow-duration":"1500ms",children:[(0,n.jsxs)("h1",{children:["See our all ",(0,n.jsx)("span",{children:"service"})]}),(0,n.jsx)("p",{className:"latest-text",children:"We are self-service data analytics software that lets you create visually appearing data visualizations and insightful dashboards in minutes."})]})})}),(0,n.jsxs)("div",{className:"row mt-50",children:[(0,n.jsx)(D,{Icon:"bi bi-file-code-fill",title:"Web Development",desc:"Web development refers to the building, creating, and maintaining of websites. It includes aspects.",actionBtn:"Learn More"}),(0,n.jsx)(D,{Icon:"bi bi-intersect",title:"Collaborate Securely",desc:"Share/publish your reports with your colleagues and collaborate securely with more than 25 users.",actionBtn:"Learn More"}),(0,n.jsx)(D,{Icon:"bi bi-graph-up",title:"Embedded Analytics",desc:"Get a powerful analytics tool in your own brand name and enhance the predictive behaviors.",actionBtn:"Learn More"}),(0,n.jsx)(D,{Icon:"bi bi-journal-text",title:"File Management",desc:"A file management software is an application that enables users to create, store, and access files.",actionBtn:"Learn More"}),(0,n.jsx)(D,{Icon:"bi bi-file-earmark-richtext",title:"UX Research",desc:"UX research is an important part of your project design because it protects you from designing.",actionBtn:"Learn More"}),(0,n.jsx)(D,{Icon:"bi bi-brush-fill",title:"UI Design",desc:"UI design is the process designers use to build interface in software, computerized devices.",actionBtn:"Learn More"})]})]})})})},M=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"hrrd-subscribe-area positioning pt-100 pb-100",children:[(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12",children:(0,n.jsx)("div",{className:"hrrd-subscribe-wrap",children:(0,n.jsx)("div",{className:"row align-items-center justify-content-center",children:(0,n.jsxs)("div",{className:"col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12",children:[(0,n.jsxs)("div",{className:"hrdd-section-title hrrd-subscribe-title text-center wow animate fadeInDown","data-wow-delay":"100ms","data-wow-duration":"1500ms",children:[(0,n.jsxs)("h1",{children:["Start Your ",(0,n.jsx)("span",{children:"15 Days Free"})," Trail!"]}),(0,n.jsx)("p",{children:"Distinctively supply accurate methods of empowerment before."})]}),(0,n.jsxs)("form",{action:"/",className:"wow animate flipInX","data-wow-delay":"300ms","data-wow-duration":"1500ms",children:[(0,n.jsx)("input",{type:"text",placeholder:"Email"}),(0,n.jsx)("button",{className:"common-btn btn-hrrd-1",children:"Submit Now"})]})]})})})})})}),(0,n.jsx)("img",{className:"shape hrrd-subscribe-shape",src:"assets/images/shape/hrrd-subscribe-left.png",alt:""})]})})},k={Title:"We provide best business <span>solutions</span>",coverImage:"/assets/images/service/service-solution.png",subTitle:"Saasland is a exclusive project management agency. we provide better solutions for you. We Create custom landing pages with Saasland and converts more visitors than any website. create visually appearing data visualizations and insightful dashboards in minutes.",btnTextOne:"Get Started Today",btnTextTwo:"Watch Demo"},E=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"solutions-area positioning pb-100",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row justify-content-between align-items-center",children:[(0,n.jsxs)("div",{className:"col-xxl-4 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12",children:[(0,n.jsx)("div",{className:"hrdd-section-title text-capitalize wow animate fadeInDown","data-wow-delay":"100ms","data-wow-duration":"1500ms",children:(0,n.jsx)("h1",{dangerouslySetInnerHTML:{__html:k.Title}})}),(0,n.jsx)("div",{className:"collaborate-info",children:(0,n.jsx)("p",{children:k.subTitle})}),(0,n.jsxs)("div",{className:"solutions-btn-wrap d-xl-flex align-items-center justify-content-xl-between g-1 wow animate fadeInUp","data-wow-delay":"500ms","data-wow-duration":"1500ms",children:[(0,n.jsx)(R.default,{href:"/",children:(0,n.jsx)("a",{className:"common-btn btn-hrrd-1",children:k.btnTextOne})}),(0,n.jsx)(R.default,{href:"/",children:(0,n.jsxs)("a",{className:"common-btn btn-hrrd-2 popup-youtube",children:[(0,n.jsx)("i",{className:"bi bi-play-circle-fill"}),k.btnTextTwo]})})]})]}),(0,n.jsx)("div",{className:"col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 mobt-50",children:(0,n.jsxs)("div",{className:"collaborate-img-wrap",children:[(0,n.jsx)("img",{src:k.coverImage,alt:""}),(0,n.jsx)("div",{className:"engagement-cart",children:(0,n.jsx)("img",{src:"assets/images/engagement-cart.png",alt:""})}),(0,n.jsxs)("div",{className:"testimonial-cart",children:[(0,n.jsxs)("div",{className:"testimonial-cart-people",children:[(0,n.jsx)("h3",{children:"Jenifar Goz"}),(0,n.jsx)("h6",{children:"CEO, Xavale"})]}),(0,n.jsx)("p",{children:"Everyone please read these condition ..."}),(0,n.jsx)("i",{className:"bx bxs-quote-right"})]})]})})]})})})})},_=i(5628),B=i(6066);function L(e,s,i){return s in e?Object.defineProperty(e,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[s]=i,e}function Z(e){for(var s=1;s<arguments.length;s++){var i=null!=arguments[s]?arguments[s]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(s){L(e,s,i[s])}))}return e}var $=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"about-testimonial-area",children:(0,n.jsxs)("div",{className:"container py-5",children:[(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsx)("div",{className:"col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12",children:(0,n.jsx)("div",{className:"hrdd-section-title text-capitalize",children:(0,n.jsxs)("h1",{children:["What  our ",(0,n.jsx)("span",{children:"client"})," say"]})})}),(0,n.jsx)("div",{className:"col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 mobt-24",children:(0,n.jsx)("div",{className:"section-text wow animate flipInX","data-wow-delay":"300ms","data-wow-duration":"1500ms",children:(0,n.jsx)("p",{children:"Trusted by over 40,000 worldwide customer since 2010. It\u2019s awesome service. Land from day very fill that midst stars one dominion."})})})]}),(0,n.jsx)("div",{className:"row pt-50",children:(0,n.jsx)("div",{className:"col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12",children:(0,n.jsx)("div",{className:"inner-slide-wrap",children:(0,n.jsxs)(B.Z,Z({},{dots:!0,speed:1e3,slidesToShow:4,slidesToScroll:1,arrows:!1,pauseOnDotsHover:!0,responsive:[{breakpoint:1224,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:800,settings:{slidesToShow:1,slidesToScroll:1}}]},{children:[(0,n.jsx)(_.Z,{name:"Sayem Ahmed",pic:"/assets/images/about/client-img-1.png",position:"Product Designer"}),(0,n.jsx)(_.Z,{name:"Sayem Ahmed",pic:"/assets/images/about/client-img-2.png",position:"Product Designer"}),(0,n.jsx)(_.Z,{name:"Sayem Ahmed",pic:"/assets/images/about/client-img-2.png",position:"Product Designer"}),(0,n.jsx)(_.Z,{name:"Sayem Ahmed",pic:"/assets/images/about/client-img-3.png",position:"Product Designer"}),(0,n.jsx)(_.Z,{name:"Sayem Ahmed",pic:"/assets/images/about/client-img-4.png",position:"Product Designer"}),(0,n.jsx)(_.Z,{name:"Sayem Ahmed",pic:"/assets/images/about/client-img-3.png",position:"Product Designer"})]}))})})})]})})})},z=i(7314),W=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("header",{children:[(0,n.jsx)(a.Z,{}),(0,n.jsx)(t.Z,{pagename:"Service Us"})]}),(0,n.jsx)(E,{}),(0,n.jsx)(U,{}),(0,n.jsx)(C,{}),(0,n.jsx)(A,{}),(0,n.jsx)($,{}),(0,n.jsx)(M,{}),(0,n.jsx)(z.Z,{})]})}}},function(e){e.O(0,[733,66,162,365,774,888,179],(function(){return s=6395,e(e.s=s);var s}));var s=e.O();_N_E=s}]);