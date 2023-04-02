import React from "react";
// import InfoDisplay from './InfoDisplay'

function EduDisplay(props) {
  const { edudetails } = props;
  return (
    <div>
      {/* <InfoDisplay/> */}
      {edudetails.map((details) => {
        console.log(details);
        const { id, university, major, start, end } = details;
        console.log(details);
        return (
          <div className="displayEducation" key={id}>
            <h2>Education</h2>
            <div className="linethroughEdu"></div>

            <div className="displayPinfoEdu">
              <div className="firstname">
                <h4>university:</h4>
                <p>{university}</p>
              </div>
              <div className="firstname">
                <h4>major:</h4>
                <p>{major}</p>
              </div>
              <div className="firstname">
                <h4>start:</h4>
                <p>{start}</p>
              </div>
              <div className="firstname">
                <h4>end:</h4>
                <p>{end}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EduDisplay;
