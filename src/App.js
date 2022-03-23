import React from "react";
import Home from ".//Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Ctacampaign from "./Pages/Ctacampaign";
import WithNav from "./components/WithNav";
import WithoutNav from "./components/WithoutNav";
import Overview from "./Dashboard/Pages/Overview";
import Settings from "./Dashboard/Pages/Settings";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Dashboard/Inner/Footer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            // Dashboard
            <Route path="/Dashboard" element={<Dashboard />}>
              <Route exact path="/Dashboard/overview" element={<Overview />} />
              <Route exact path="/Dashboard/settings" element={<Settings />} />
              <Route path="*/Dashboard" element={<Footer />} />
            </Route>
          </Route>
          // Error page without Main navigaiton bar
          <Route element={<WithoutNav />}>
            <Route path="/*" element={<ErrorPage />} />
          </Route>
          // Home and rest with Main navigaiton bar
          <Route element={<WithNav />}>
            <Route index element={<Home />} />
            <Route path="/Ctacampaign" element={<Ctacampaign />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
