import React, { useEffect, useState } from "react";
import avatar1 from "./emp.images/avatar1.png";
import avatar2 from "./emp.images/avatar2.png";
import avatar3 from "./emp.images/avatar3.png";
import avatar4 from "./emp.images/avatar4.png";
import avatar5 from "./emp.images/avatar5.png";
import avatar6 from "./emp.images/avatar6.png";
import avatar7 from "./emp.images/avatar7.png";
import avatar8 from "./emp.images/avatar8.png";

const images = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
];

export function EmployeeForm({ onFormSubmit, editEmpInfo }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });
  useEffect(()=>{
    if (editEmpInfo!==-1)
    setFormData(editEmpInfo)
    //yu hiih ystoig n helne

  },[editEmpInfo])
  
  const onFormValueChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData((currState) => ({
      ...currState,
      [fieldName]: fieldValue,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("child", formData);
    onFormSubmit({
      ...formData,
      picture: images[Math.floor(Math.random() * images.length)],
    });

    setFormData({
      firstName: "",
      lastName: "",
      role: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
    });
  };
  return (
    <div className="submit-section">
      <form className="form-section" onSubmit={onSubmit}>
        Employee Contact Form
        <div className="submit-section2">
          <label>
            <input
              className="emp-row"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => onFormValueChange(e)}
            ></input>

            <input
              className="emp-row"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => onFormValueChange(e)}
            ></input>

            <input
              className="emp-row"
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={(e) => onFormValueChange(e)}
            ></input>

            <input
              className="emp-row"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={(e) => onFormValueChange(e)}
            ></input>

            <input
              className="emp-row"
              name="address1"
              placeholder="Address 1"
              value={formData.address1}
              onChange={(e) => onFormValueChange(e)}
            ></input>
            <input
              className="emp-row"
              name="address2"
              placeholder="Address 2"
              value={formData.address2}
              onChange={(e) => onFormValueChange(e)}
            ></input>
            <input
              className="emp-row"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => onFormValueChange(e)}
            ></input>
          </label>
        </div>
        <div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
