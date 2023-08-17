import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../components/css/navbarmain.css";

function NavbarMain(props) {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/resister");
  };

  return (
    <div className="NavbarMain">
      <h3>Resume Builder</h3>
      {auth ? <h4>{JSON.parse(auth).name}</h4> : null}
      <nav className="main">
        <ul className={props.isLogin || props.isResister ? "ULisLogin" : null}>
          <li className={props.isLogin || props.isResister ? "LisLogin" : null}>
            <NavLink to="/">Build</NavLink>
          </li>

          {auth ? (
            <li
              className={props.isLogin || props.isResister ? "LisLogin" : null}
            >
              <NavLink onClick={logout} to="/resister">
                Logout
              </NavLink>
            </li>
          ) : (
            <>
              <li
                className={
                  props.isLogin || props.isResister ? "LisLogin" : null
                }
              >
                <NavLink to="/login">Login</NavLink>
              </li>
              <li
                className={
                  props.isLogin || props.isResister ? "LisLogin" : null
                }
              >
                <NavLink to="/resister">Resister</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavbarMain;
