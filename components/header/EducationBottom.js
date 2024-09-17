import React, { useState } from 'react';
import Link from "next/link";
import EducationDetailOne from "../../constant/education/DetailOne";
import StudentForm from './StudentForm';  // Make sure to adjust the import path as needed

const EducationHeaderBottom = () => {
  const [showForm, setShowForm] = useState(false);

  const handleActionButtonClick = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className="edu-hero-style">
        <div className="container">
          <div className="row justify-content-lg-between align-items-center pb-5 pb-lg-0">
            <div className="col-lg-5 order-1 order-lg-0">
              <div className="edu-hero-content">
                <h2 className="edu-hero-title">
                  {EducationDetailOne.Title}
                </h2>
                <p>
                  {EducationDetailOne.subTitle}
                </p>
                <div className="edu-hero-btn">
                  <a href="#" className="edu-btn-fill" onClick={handleActionButtonClick}>
                    {EducationDetailOne.actionBtn}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-10 py-lg-5 py-4 order-0 order-lg-1">
              <div className="ag-hero-figure">
                <img src="/assets/images/education/edu-hero-figure.png" alt="" className="img-fulid"/>

                <div className="florting-mail-label">
                  <div className="icon"><i className="bi bi-envelope"></i></div>
                  <h6>{EducationDetailOne.flotingMail.title}</h6>
                  <p>{EducationDetailOne.flotingMail.subTitle}</p>
                </div>
                <div className="florting-mail-label-two">
                  <div className="icon"><i className="bi bi-heart"></i></div>
                  <h4>{EducationDetailOne.flotingStudent.number}</h4>
                  <p>{EducationDetailOne.flotingStudent.title}</p>
                  <img src={EducationDetailOne.flotingStudent.groupImg} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showForm && <StudentForm onClose={handleCloseForm} />}
    </>
  );
};

export default EducationHeaderBottom;