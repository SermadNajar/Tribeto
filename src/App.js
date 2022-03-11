import React from "react";
import Home from ".//Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Price from "./Pages/Price";
import ErrorPage from "./Pages/ErrorPage";
import Profile from "./Pages/Profile";
import WithNav from "./components/WithNav";
import WithoutNav from "./components/WithoutNav";

function App() {
  return (
    <Router>
    <Routes>
      <Route element={<WithoutNav />}>
        <Route path="/Login" element={<Login />} />
        <Route path="/*" element={<ErrorPage />} />
      </Route>
      <Route element={<WithNav />}>
        <Route index element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Price" element={<Price />} />
        <Route path="/Profile/:username" element={<Profile />} />
      </Route>
    </Routes>
    </Router>
  );
}

export default App;
