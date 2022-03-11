import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from 'react-router';

export default () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};