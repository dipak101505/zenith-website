import { useState } from "react";
import PricingItem from "./pricingitem";

const RoboticsPricing = () => {
  const [monthly, setMonthly] = useState(false);

  return (
    <>
      <div className="pricing-plan-area mt-100 mb-76">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="hrdd-section-title text-capitalize">
                <h1>Pricing <span>Plans</span></h1>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-4 col-md-12 col-sm-12 col-12 mobt-24">
              <div className="section-text wow animate flipInX" data-wow-delay="300ms" data-wow-duration="1500ms">
                <p>Choose a plan that suits your preparation level: Basic, Intermediate, or Advanced.</p>
              </div>
            </div>
          </div>
          <div className="row mt-50">
            <PricingItem
              name="Basic Level"
              perMonth="₹999"
              perYear="₹999"
            //   prize="Rs. 1000 Cash Prize"
            //   monthly={monthly}
            //   list={["3 Mock Tests for Class X Boards", "Physics, Chemistry, Biology & Maths", "Sample Solution Provided"]}
            />

            <PricingItem
              name="Intermediate Level"
              perMonth="₹999"
              perYear="₹999"
            //   prize="Rs. 2000 Cash Prize"
            //   monthly={monthly}
            //   list={["5 Mock Tests for Class XII Boards", "Physics, Chemistry, Biology & Maths", "Sample Solution Provided"]}
            />

            <PricingItem
              name="Advanced Level"
              perMonth="₹999"
              perYear="₹999"
            //   prize="Rs. 3000 Cash Prize"
            //   monthly={monthly}
            //   list={["20 Mock Tests for NEET & JEE", "10 Full Syllabus Tests", "Detailed Solutions Provided"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoboticsPricing;
