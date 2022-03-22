import React from "react";
import Home from ".//Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Ctacampaign from "./Pages/Ctacampaign";
import WithNav from "./components/WithNav";
import WithoutNav from "./components/WithoutNav";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
        <Route element={<WithNav />}>
          <Route index element={<Home />} />
          <Route path="/Ctacampaign" element={<Ctacampaign />} />
        </Route>
        <Route element={<WithNav />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
