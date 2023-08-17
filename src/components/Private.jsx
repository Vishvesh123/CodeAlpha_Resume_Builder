import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function Private() {
  const auth = localStorage.getItem("user");

  return auth ? <Outlet /> : <Navigate to="/resister" />;
}

export default Private;
