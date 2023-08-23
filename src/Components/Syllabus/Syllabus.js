import React from "react";
import "./Syllabus.css";

const Syllabus = () => {
  return (
      <div className="container">
        <h5 className="">Course</h5>
        <hr className="my-4" /> 
        <h6 className=" mb-2 text-muted">
          FSD MERN -
          <a href="/" download>
            {" "}
            Download
          </a>
        </h6>
      </div>
  );
};

export default Syllabus;
