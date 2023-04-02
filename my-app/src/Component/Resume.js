import React from "react";
import Static from "./Static";
import Education from "./Education";
import Experience from "./Experience";
import Info from "./Info";
// import Footer from './Footer'

function Resume() {
  return (
    <div className="resume">
      <Info />

      <Education />
      <Static />
      <Experience />
      {/* <Footer/> */}
    </div>
  );
}

export default Resume;
