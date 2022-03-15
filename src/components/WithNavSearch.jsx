import React from "react";
import NavbarSearch from "./NavbarSearch";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default () => {
  return (
    <>
      <NavbarSearch />
      <Outlet />
      <Footer />
    </>
  );
};
