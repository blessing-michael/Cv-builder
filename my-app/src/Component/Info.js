import { useState } from "react";
import uniqid from "uniqid";

import React from "react";
import InfoDisplay from "./InfoDisplay";
// import EduDisplay from "./EduDisplay";

function Info() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
  });

  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPerson({ ...person, [name]: value });
    console.log(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { ...person, id: uniqid() };
    setPeople([...people, newPerson]);
  };

  return (
    <div>
      <h2>Personal Information</h2>

      <form>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          placeholder="first name"
          value={person.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          placeholder="last name"
          value={person.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="title"
          value={person.title}
          onChange={handleChange}
        />
        <input
          type="text"
          id="email"
          name="email"
          required
          placeholder="email"
          value={person.email}
          onChange={handleChange}
        />
        <input
          type="text"
          id="phone"
          name="phone"
          required
          placeholder="phone"
          value={person.phone}
          onChange={handleChange}
        />

        <button type="submit" id="infobtn" onClick={handleSubmit}>
          Add
        </button>
      </form>
      <div className="linethrough"></div>

      <InfoDisplay people={people} />

      {/* <EduDisplay/> */}
    </div>
  );
}

export default Info;
