import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
