import React, { useState } from "react";
import "../components/css/details.css";

function Skills(props) {
  const [skills, setSkills] = useState([]);

  const handleAddSkill = () => {
    const newSkill = {
      id: skills.length + 7,
      name: `skill${skills.length + 7}`,
      value: "",
    };

    setSkills((prevSkills) => [...prevSkills, newSkill]);
  };

  return (
    <div className="Details">
      <div className="Skills">
        <form onSubmit={props.handleSubmit}>
          <h2>Skills</h2>
          <div className="Skill">
            <div>
              <label>1.</label>
              <input
                type="text"
                name="skill1"
                placeholder="Ex.HTML"
                value={props.formData.skill1}
                onChange={props.handleChange}
              />
            </div>
            <div>
              <label>2.</label>
              <input
                type="text"
                name="skill2"
                placeholder="Ex.HTML"
                value={props.formData.skill2}
                onChange={props.handleChange}
              />
            </div>
            <div>
              <label>3.</label>
              <input
                type="text"
                name="skill3"
                placeholder="Ex.HTML"
                value={props.formData.skill3}
                onChange={props.handleChange}
              />
            </div>
            <div>
              <label>4.</label>
              <input
                type="text"
                name="skill4"
                placeholder="Ex.HTML"
                value={props.formData.skill4}
                onChange={props.handleChange}
              />
            </div>
            <div>
              <label>5.</label>
              <input
                type="text"
                name="skill5"
                placeholder="Ex.HTML"
                value={props.formData.skill5}
                onChange={props.handleChange}
              />
            </div>
            <div>
              <label>6.</label>
              <input
                type="text"
                name="skill6"
                placeholder="Ex.HTML"
                value={props.formData.skill6}
                onChange={props.handleChange}
              />
            </div>

            {skills.map((skill) => (
              <div key={skill.id}>
                <label>{skill.id}.</label>
                <input
                  type="text"
                  name={skill.name}
                  placeholder="Ex.HTML"
                  value={props.formData[skill.name]}
                  onChange={props.handleChange}
                />
              </div>
            ))}

            <button className="button" type="submit" id="submit">
              Download PDF
            </button>
          </div>
        </form>
        <button onClick={handleAddSkill}>Add Another Skill</button>
      </div>
    </div>
  );
}

export default Skills;
