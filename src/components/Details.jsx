import React, { useState } from "react";

import jsPDF from "jspdf";

import "./css/details.css";

const Details = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    pnum: "",
    mail: "",
    current: "",
    inter: "",
    high: "",
    summ: "",
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    //Generate the PDF document

    const pdf = new jsPDF();

    // Use the custom font

    // Add custom styles
    const fontStyle = "courier";
    const fontSize = 15;

    // Header
    console.log(pdf.getFontList());

    pdf.setFillColor(194, 240, 252);
    pdf.rect(0.01, 0.01, 500, 500, "F"); // Draw a filled rectangle

    // Personal Information

    pdf.setFontSize(20);
    pdf.setTextColor(251, 37, 118);
    pdf.setFont(fontStyle, "bold");

    pdf.text(`${formData.fname} ${formData.lname}`, 20, 10);

    pdf.setFontSize(fontSize);
    pdf.text(`${formData.pnum}`, 20, 20);
    pdf.text(`${formData.mail}`, 20, 30);

    //Summary
    pdf.setFontSize(25);
    pdf.setFont(fontStyle, "bold");
    pdf.setTextColor(251, 37, 118);
    pdf.text("Summary", 20, 60);

    const maxWidth = 170;
    pdf.setFontSize(fontSize);
    pdf.setTextColor(0, 0, 0);
    pdf.setFont(fontStyle, "normal");
    pdf.text(`${formData.summ}`, 20, 75, { maxWidth });

    // Education
    pdf.setFontSize(25);
    pdf.setFont(fontStyle, "bold");
    pdf.setTextColor(251, 37, 118);
    pdf.text("Education", 20, 150);

    pdf.setFontSize(fontSize);
    pdf.setTextColor(0, 0, 0);
    pdf.setFont(fontStyle, "normal");
    pdf.text(`Current CPI: ${formData.current}`, 20, 160);
    pdf.text(`Intermediate Percentage: ${formData.inter}`, 20, 170);
    pdf.text(`Highschool Percentage: ${formData.high}`, 20, 180);

    //Skills
    pdf.setFontSize(25);
    pdf.setFont(fontStyle, "bold");
    pdf.setTextColor(251, 37, 118);
    pdf.text("Skills", 20, 200);

    pdf.setFontSize(fontSize);
    pdf.setTextColor(0, 0, 0);
    pdf.setFont(fontStyle, "normal");
    pdf.text(`1.${formData.skill1}`, 20, 210);
    pdf.text(`2.${formData.skill2}`, 20, 219);
    pdf.text(`3.${formData.skill3}`, 20, 228);
    pdf.text(`4.${formData.skill4}`, 20, 237);
    pdf.text(`5.${formData.skill5}`, 20, 246);

    //Declaration
    pdf.setFontSize(12);
    pdf.text(
      "I hereby declare that all above information is in correct with fact or truth up to my knowledge and I bear the responsibilities for the correctness of the above mentioned particulars",
      20,
      260,
      { maxWidth }
    );
    pdf.text("Date :", 20, 290);
    pdf.text(`${formData.fname} ${formData.lname}`, 160, 290);
    // Save the PDF as a file
    pdf.save("resume.pdf");
  };

  return (
    <div className="Details">
      <div className="summary">
        <h2>Summary</h2>
        <textarea
          rows="7"
          cols="120"
          type="text"
          name="summ"
          placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          value={formData.summ}
          onChange={handleChange}
        />
      </div>
      <div className="Detail">
        <div className="heading">
          <h2>Complete Resume Heading</h2>

          <form onSubmit={handleSubmit} className="form1">
            <div className="Name">
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="fname"
                  placeholder="ex.Aman"
                  value={formData.fname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lname"
                  placeholder="ex.chauhan"
                  value={formData.lname}
                  onChange={handleChange}
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
                  value={formData.pnum}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Email Address</label>
                <input
                  type="email"
                  name="mail"
                  placeholder="ex.asd@gmail.com"
                  value={formData.mail}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="Skills">
            <h2>Skills</h2>
            <label>1.</label>
            <input
              type="text"
              name="skill1"
              placeholder="Ex.HTML"
              value={formData.skill1}
              onChange={handleChange}
            />
            <label>2.</label>
            <input
              type="text"
              name="skill2"
              placeholder="Ex.HTML"
              value={formData.skill2}
              onChange={handleChange}
            />
            <label>3.</label>
            <input
              type="text"
              name="skill3"
              placeholder="Ex.HTML"
              value={formData.skill3}
              onChange={handleChange}
            />
            <label>4.</label>
            <input
              type="text"
              name="skill4"
              placeholder="Ex.HTML"
              value={formData.skill4}
              onChange={handleChange}
            />
            <label>5.</label>
            <input
              type="text"
              name="skill5"
              placeholder="Ex.HTML"
              value={formData.skill5}
              onChange={handleChange}
            />
            <button type="submit">Download PDF</button>
          </div>
        </form>

        <div className="Education">
          <h2>Education</h2>
          <form className="form2" onSubmit={handleSubmit}>
            <div className="gen">
              <label>Current Cpi</label>
              <input
                type="number"
                name="current"
                placeholder="Ex.8.0"
                value={formData.current}
                onChange={handleChange}
              />
            </div>
            <div className="gen">
              <label>Intermediate Percentage</label>
              <input
                type="number"
                name="inter"
                placeholder="Ex.80"
                value={formData.inter}
                onChange={handleChange}
              />
            </div>
            <div className="gen">
              <label>Highschool Percentage</label>
              <input
                type="number"
                name="high"
                placeholder="Ex.78"
                value={formData.high}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
