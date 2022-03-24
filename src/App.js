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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            // Dashboard
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="overview" element={<Overview />} />
              <Route path="settings" element={<Settings />} />
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
