import React from 'react'
import Home from './/Pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Price from './Pages/Price';
import ErrorPage from './Pages/ErrorPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './Pages/Profile';

function App() {
  return (
  <Router>

    <nav>
      <Navbar />
    </nav>

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Dashboard" element={<Dashboard />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Price" element={<Price />}/>
      <Route path="/Profile/:username" element={<Profile />}/>


      <Route path="/*" element={<ErrorPage />}/>

    </Routes>

    <footer>
      <Footer />
    </footer>

  </Router>
  );
}

export default App;