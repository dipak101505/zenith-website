import Link from "next/link"

const SubjectItem=(props)=>{
return(
<>
<div className="cart-post">
    {/* <div className="cart-post-img">
        <Link href="/blog/demo">
        <a>
            <img src={props.image} alt=""/>
        </a>
        </Link>
    </div> */}
    <div className="cart-post-content">
        <h4>
        <Link href={`/${props.slug}`}>
            {props.name}
        </Link>
        </h4>
        {/* <p>{props.date}</p> */}
    </div>
</div>
</>
)
}
export default SubjectItem


// import Link from "next/link"

// const SubjectItem = (props) => {
//   return (
//     <div className="cart-post">
//       <div className="cart-post-content">
//         <h4>
//           <Link href={`/${props.slug}`}>
//             {props.name}
//           </Link>
//         </h4>
//       </div>
//     </div>
//   )
// }

// export default SubjectItem

