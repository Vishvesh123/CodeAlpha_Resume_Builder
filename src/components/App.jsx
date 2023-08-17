import React, { useState } from "react";
import jsPDF from "jspdf";

import "../components/css/app.css";
import "../components/css/graphics.css";

import { Routes, Route } from "react-router-dom";

import Private from "./Private";
import Heading from "../pages/Heading";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Summary from "../pages/Summary";
import Login from "../pages/Login";
import Resister from "../pages/Resister";
import NavbarMain from "./NavbarMain";

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
  });

  const [skills, setSkills] = useState({
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSkillChange = (event) => {
    const { name, value } = event.target;
    setSkills({
      ...skills,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    console.log(skills);

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

    let ct = 1;
    let y = 210;
    pdf.setFontSize(25);
    pdf.setFont(fontStyle, "bold");
    pdf.setTextColor(251, 37, 118);
    pdf.text("Skills", 20, 200);

    pdf.setFontSize(fontSize);
    pdf.setTextColor(0, 0, 0);
    pdf.setFont(fontStyle, "normal");
    for (const key in skills) {
      if (skills[key] && skills[key] !== "") {
        pdf.text(`${ct}.${skills[key]}`, 20, y);
        y += 9;
        ct++;
      }
    }

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

  // Handling navbars
  const [isLogin, setLogin] = useState(false);
  const [isResister, setResister] = useState(false);

  return (
    <div>
      <NavbarMain isLogin={isLogin} isResister={isResister} />
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
          {isLogin || isResister ? null : <Navbar />}

          <Routes>
            <Route element={<Private />}>
              <Route
                path="/"
                element={
                  <Summary
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    setLogin={setLogin}
                    setResister={setResister}
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
                    formData={skills}
                    handleChange={handleSkillChange}
                    handleSubmit={handleSubmit}
                  />
                }
              />
            </Route>
            <Route path="/login" element={<Login setLogin={setLogin} />} />
            <Route
              path="/resister"
              element={<Resister setResister={setResister} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
