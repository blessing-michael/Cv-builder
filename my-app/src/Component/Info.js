import { useState } from "react";

import React from "react";

function Info() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "mike",
    title: "doctor",
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
    const newPerson = { ...person, id: new Date().getTime().toString() };
    setPeople([...people, newPerson]);
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <div className="linethrough"></div>
      <form>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="first name"
          value={person.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="last name"
          value={person.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          id="title"
          name="title"
          placeholder="title"
          value={person.title}
          onChange={handleChange}
        />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          value={person.email}
          onChange={handleChange}
        />
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="phone"
          value={person.phone}
          onChange={handleChange}
        />

        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
      <div className="linethrough"></div>

      {people.map((person) => {
        const { id, firstName, lastName, title, email, phone } = person;
        return (
          <div key={id} className="display">
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

export default Info;
