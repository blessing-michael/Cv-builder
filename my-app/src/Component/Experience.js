import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uniqid from "uniqid";
// import { useState } from 'react'

function Experience() {
  const [experience, setExperience] = useState({
    position: "",
    company: "",
    job: "",
    start: "",
    end: "",
  });
  const [expdetails, setExpdetails] = useState([]);

  const handleExpeChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setExperience({ ...experience, [name]: value });
    console.log(name, value);
  };

  const handleExpSubmit = (e) => {
    e.preventDefault();
    // create a new variable to hold the state value "eXPERIENCE"
    const newExperience = { ...experience, id: uniqid() };
    console.log(newExperience);

    setExpdetails([...expdetails, newExperience]);
  };

  return (
    <div>
      <h2>Experience</h2>

      <form onSubmit={handleExpSubmit}>
        <input
          type="text"
          id="position"
          name="position"
          required
          placeholder="position"
          value={experience.position}
          onChange={handleExpeChange}
        />
        <input
          type="text"
          id="company"
          name="company"
          required
          placeholder="company"
          value={experience.company}
          onChange={handleExpeChange}
        />
        <input
          type="text"
          id="job"
          name="job"
          required
          placeholder="job"
          value={experience.job}
          onChange={handleExpeChange}
        />
        <input
          type="date"
          id="start"
          name="start"
          placeholder="start"
          value={experience.start}
          onChange={handleExpeChange}
        />
        <input
          type="date"
          id="end"
          name="end"
          placeholder="end"
          value={experience.end}
          onChange={handleExpeChange}
        />

        <div className="edubtn-Container">
          <button type="submit" id="eduAddbtn">
            <span className="addbtn">
              <FontAwesomeIcon icon="fa-solid fa-plus" />
            </span>{" "}
            add
          </button>
        </div>
      </form>

      <div className="Exdel-container">
        <button type="submit" id="eduDelbtn">
          <span className="delbtn">
            <FontAwesomeIcon icon="fa-solid fa-trash-can-arrow-up del" />
          </span>{" "}
          delete
        </button>
      </div>

      {expdetails.map((detail) => {
        console.log(expdetails);
        const { position, company, job, start, end, id } = detail;
        return (
          <div key={id} className="displayExperience">
            <h2>Experience</h2>
            <div className="linethroughEdu"></div>

            <div className="displayPinfoEdu">
              <div className="firstname">
                <h4>position:</h4>
                <p>{position}</p>
              </div>
              <div className="firstname">
                <h4>company:</h4>
                <p>{company}</p>
              </div>
              <div className="firstname">
                <h4>job:</h4>
                <p>{job}</p>
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

          // console.log('hi')
          // <h1>{position}</h1>

          // </div>
        );
      })}
    </div>
  );
}

export default Experience;
