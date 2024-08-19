import Link from 'next/link';

const TrustedCompanList = (props) => {
  return (
    <>
      <div className="edu-client-logobox">
        <Link href="/">
          <a>
            {/* <img src={props.img} alt=""/> */}
            {props.val}
          </a>
        </Link>
      </div>
    </>
  );
};
export default TrustedCompanList;
