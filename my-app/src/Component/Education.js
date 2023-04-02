import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uniqid from "uniqid";
import EduDisplay from "./EduDisplay";

function Education() {
  const [education, setEducation] = useState({
    university: "",
    major: "",
    start: "",
    end: "",
  });
  const [edudetails, setEdudetails] = useState([]);

  const handleEduChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (education.length !== 0) {
      console.log("i am not empty");
    } else {
      console.log("input value is empty");
    }
    // console.log('heeeee', name, value)

    setEducation({ ...education, [name]: value });
  };

  const handleEduSubmit = (e) => {
    e.preventDefault();

    const filledEdu = { ...education, id: uniqid() };
    setEdudetails([...edudetails, filledEdu]);
  };
  const handleEdudel = (id) => {
    const newEdu = edudetails.filter((del) => del.id !== id);
    setEdudetails([]);
    console.log(id, newEdu);
  };

  return (
    <div>
      <h2>Education</h2>
      <form action="">
        <label htmlFor="university"></label>
        <input
          type="text"
          placeholder="university"
          name="university"
          id="university"
          value={education.university}
          onChange={handleEduChange}
          minLength="1"
        />
        <input
          type="text"
          placeholder="major"
          name="major"
          id="major"
          value={education.major}
          onChange={handleEduChange}
        />
        <input
          type="date"
          name="start"
          id="start"
          placeholder="start"
          value={education.start}
          onChange={handleEduChange}
        />
        <input
          type="date"
          name="end"
          id="end"
          placeholder="end"
          value={education.end}
          onChange={handleEduChange}
        />

        <div className="edubtn-Container">
          <button type="submit" id="eduAddbtn" onClick={handleEduSubmit}>
            <span className="addbtn">
              <FontAwesomeIcon icon="fa-solid fa-plus" />
            </span>{" "}
            add
          </button>
        </div>

        <div className="linethrough"></div>
      </form>
      <div className="del-container">
        <button type="submit" id="eduDelbtn" onClick={handleEdudel}>
          <span className="delbtn">
            <FontAwesomeIcon icon="fa-solid fa-trash-can-arrow-up del" />
          </span>{" "}
          delete
        </button>
      </div>

      {/* map education to dispaly */}

      <EduDisplay edudetails={edudetails} />
    </div>
  );
}

export default Education;
