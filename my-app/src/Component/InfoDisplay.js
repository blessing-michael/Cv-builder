import React from "react";

function InfoDisplay(props) {
  const { people } = props;
  return (
    <div>
      {people.map((person) => {
        const { id, firstName, lastName, title, email, phone } = person;
        return (
          <div key={id} className="display" id="formele">
            <h2>Personal Information</h2>
            <div className="linethrough"></div>
            <div className="displayPinfo">
              <div className="firstname">
                <h4>first Name:</h4>
                <p>{firstName}</p>
              </div>
              <div className="firstname">
                <h4>last Name:</h4>
                <p>{lastName}</p>
              </div>
              <div className="firstname">
                <h4>professional title:</h4>
                <p>{title}</p>
              </div>
              <div className="firstname">
                <h4>email:</h4>
                <p>{email}</p>
              </div>
              <div className="firstname">
                <h4>phone:</h4>
                <p>{phone}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default InfoDisplay;
