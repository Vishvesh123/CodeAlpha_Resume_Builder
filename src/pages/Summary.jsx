import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../components/css/details.css";

function Summary(props) {
  console.log(props.formData);

  props.setLogin(false);
  props.setResister(false);

  const navigate = useNavigate();
  const [isclicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };
  if (isclicked) {
    navigate("/heading");
  }

  return (
    <div className="Details">
      <div className="summary" onSubmit={props.handleSubmit}>
        <h2>Summary</h2>
        <textarea
          rows="7"
          cols="40"
          type="text"
          name="summ"
          placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          value={props.formData.summ}
          onChange={props.handleChange}
        />
        <button className="button" type="submit" onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Summary;
