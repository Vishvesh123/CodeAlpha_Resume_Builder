import React, { useState, useEffect } from "react";
import "../components/css/loginResister.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const {data}=await axios.post('https://resume-builder-backend-ft2g.onrender.com/login',{
        email,password
      });
      //console.log(data.user);
   

      if (data.user.name) {
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else {
        toast.error("Enter the entities correctly");
      }
    }
    catch(error){
      console.log(error);
    }
   

    // let result = await fetch("http://localhost:4000/login", {
    //   method: "post",
    //   body: JSON.stringify({ email, password }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((res)=>{
    //   console.log(res.data);
    // }).catch((err)=>{
    //   console.log(err);
    // });
    // console.log(result);


    // fetch("https://resume-builder-rn31.onrender.com/login", {
    //   method: "post",
    //   body: JSON.stringify({ email, password }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }
    //   return response.json();    
    // })
    // .then(result => {
    //   if (result.name) {
    //     localStorage.setItem("user", JSON.stringify(result));
    //     navigate("/");
    //   } else {
    //     toast.error("Enter the entities correctly");
    //   }
    // })
    // .catch(error => {
    //   console.error("Error:", error);
    // });
    


    //console.log(email, password);
  };

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  props.setLogin(true);
  return (
    <div className="Login">
      <form>
        <div className="loginInput">
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
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
        </div>
        <button type="submit" className="loginButton" onClick={handleSubmit}>
          Login
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

export default Login;
