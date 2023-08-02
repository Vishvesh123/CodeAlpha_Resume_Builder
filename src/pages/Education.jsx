import React, { useState } from "react";
import "../components/css/details.css";
import { useNavigate } from "react-router-dom";

function Education(props) {
  const navigate = useNavigate();
  const [isclicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };
  if (isclicked) {
    navigate("/skills");
  }
  return (
    <div className="Details">
      <div className="Education" onSubmit={props.handleSubmit}>
        <h2>Education</h2>

        <div className="gen">
          <label> Current CGPA </label>
          <input
            type="number"
            name="current"
            placeholder="Ex.80"
            value={props.formData.current}
            onChange={props.handleChange}
          />
        </div>
        <div className="gen">
          <label>Intermediate Percentage</label>
          <input
            type="number"
            name="inter"
            placeholder="Ex.80"
            value={props.formData.inter}
            onChange={props.handleChange}
          />
        </div>
        <div className="gen">
          <label>Highschool Percentage</label>
          <input
            type="number"
            name="high"
            placeholder="Ex.78"
            value={props.formData.high}
            onChange={props.handleChange}
          />
        </div>
        <button type="submit" onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Education;
