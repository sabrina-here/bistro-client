import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Fotter from "../Pages/Shared/Fotter";
import NavBar from "../Pages/Shared/NavBar";

export default function Main() {
  const location = useLocation();
  const isLogin =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      {isLogin || <NavBar />}
      <Outlet />
      {isLogin || <Fotter />}
    </div>
  );
}
