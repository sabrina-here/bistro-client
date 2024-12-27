import React from "react";
import { Outlet } from "react-router-dom";
import Fotter from "../Pages/Shared/Fotter";
import NavBar from "../Pages/Shared/NavBar";

export default function Main() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Fotter />
    </div>
  );
}
