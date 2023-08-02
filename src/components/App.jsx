import React, { useState } from "react";
import jsPDF from "jspdf";

import "../components/css/app.css";
import "../components/css/graphics.css";

import { Routes, Route } from "react-router-dom";

import Heading from "../pages/Heading";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Summary from "../pages/Summary";

import Navbar from "./Navbar";
function App() {
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
    skill6: "",
  });

  //changing states of pages

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
    pdf.text(`6.${formData.skill6}`, 20, 255);

    //Declaration
    pdf.setFontSize(12);
    pdf.text(
      "I hereby declare that all above information is in correct with fact or truth up to my knowledge and I bear the responsibilities for the correctness of the above mentioned particulars",
      20,
      270,
      { maxWidth }
    );
    pdf.text("Date :", 20, 290);
    pdf.text(`${formData.fname} ${formData.lname}`, 160, 290);
    // Save the PDF as a file
    pdf.save("resume.pdf");
  };
  return (
    <div className="Head">
      <div>
        <h1>
          Buid Your <span>Resume!</span> For <span>Free</span>
        </h1>
        <div class="swatch">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Summary
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path="/heading"
            element={
              <Heading
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path="/education"
            element={
              <Education
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path="/skills"
            element={
              <Skills
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
