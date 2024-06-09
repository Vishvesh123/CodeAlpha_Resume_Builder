import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/css/loginResister.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Resister(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [password2, setPass2] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const submitData = async (e) => {
    e.preventDefault();
    //console.log(name, email, password, password2);
    // Input Field Validation
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!nameRegex.test(name)) {
      toast.info("Name should only contain letters from a to z.");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.info("Please enter a valid email address.");
      return;
    }
    if (!passwordRegex.test(password)) {
      toast.info(
        "Password should be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character."
      );
      return;
    }

    if (name === "" || email === "" || password === "" || password2 === "") {
      return;
    }
    if (password === password2) {
      // let result = await fetch("https://resume-builder-backend-ft2g.onrender.com/resister", {
      //   method: "post",
      //   body: JSON.stringify({ name, email, password, password2 }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // result = await result.json();
      try {
        const response = await fetch(
          "https://resume-builder-backend-ft2g.onrender.com/resister",
          {
            method: "post",
            body: JSON.stringify({ name, email, password, password2 }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        localStorage.setItem("user", JSON.stringify(result));
        console.log(result); // Process the result here
      } catch (error) {
        console.error("Error:", error);
      }

      navigate("/");
    } else {
      toast.error("Wrong Password!");
    }
  };

  props.setResister(true);
  return (
    <div className="Resister">
      <form className="resisterForm">
        <div className="Input">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Enter Password"
            required
          />
          <input
            type="password"
            value={password2}
            onChange={(e) => setPass2(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        </div>

        <button onClick={submitData} className="ResisterSubmit" type="submit">
          Resister
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Resister;
