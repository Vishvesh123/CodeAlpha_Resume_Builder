import React, { useState } from "react";
import "../components/css/details.css";
import { useNavigate } from "react-router-dom";

function Heading(props) {
  const navigate = useNavigate();
  const [isclicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };
  if (isclicked) {
    navigate("/education");
  }
  return (
    <div className="Details">
      <div className="heading" onSubmit={props.handleSubmit}>
        <h2>Complete Resume Heading</h2>

        <div className="Name">
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="fname"
              placeholder="ex.Aman"
              value={props.formData.fname}
              onChange={props.handleChange}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lname"
              placeholder="ex.chauhan"
              value={props.formData.lname}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="Number">
          <div>
            <label>Phone Number</label>
            <input
              type="number"
              name="pnum"
              placeholder="ex.4567345676"
              value={props.formData.pnum}
              onChange={props.handleChange}
            />
          </div>
          <div>
            <label>Email Address</label>
            <input
              type="email"
              name="mail"
              placeholder="ex.asd@gmail.com"
              value={props.formData.mail}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <button className="button" type="submit" onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Heading;
