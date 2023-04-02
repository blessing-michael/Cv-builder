import React from "react";

function Static() {
  return (
    <div className="displayStatic">
      <h2>Personal Information</h2>
      <div className="linethrough"></div>
      <div className="displayPinfo">
        <div className="firstname">
          <h4>first Name:</h4>
          <p id="staticp">Required</p>
        </div>
        <div className="firstname">
          <h4>last Name:</h4>
          <p id="staticp">Required</p>
        </div>
        <div className="firstname">
          <h4>professional title:</h4>
          <p id="staticp">Required</p>
        </div>
        <div className="firstname">
          <h4>email:</h4>
          <p id="staticp">Required</p>
        </div>
        <div className="firstname">
          <h4>phone:</h4>
          <p id="staticp">Required</p>
        </div>
      </div>

      {/* education section */}
      <div className="main-StaticEdu">
        {/* <h1>{university}</h1> */}
        {/* <InfoDisplay/> */}

        <h2>Education</h2>
        <div className="linethroughEdu"></div>
        <div className="displayPinfoEdu">
          <div className="firstname">
            <h4>university:</h4>
            <p id="staticp">Required</p>
          </div>
          <div className="firstname">
            <h4>university:</h4>
            <p id="staticp">Required</p>
          </div>
          <div className="firstname">
            <h4>university:</h4>
            <p id="staticp">Required</p>
          </div>
          <div className="firstname">
            <h4>university:</h4>
            <p id="staticp">Required</p>
          </div>
        </div>

        {/* experience section */}
      </div>

      <div className="main-StaticExp">
        {/* <h1>{university}</h1> */}
        {/* <InfoDisplay/> */}

        <h2>Experience</h2>
        <div className="linethroughEdu"></div>
        <div className="displayPinfoEdu">
          <div className="firstname">
            <h4>university:</h4>
            <p id="staticp">Required</p>
          </div>
          <div className="firstname">
            <h4>university:</h4>
            <p id="staticp">Required</p>
          </div>
          <div className="firstname">
            <h4>university:</h4>
            <p id="staticp">Required</p>
          </div>
          <div className="firstname">
            <h4>university:</h4>
            <p id="staticp">Required</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Static;
