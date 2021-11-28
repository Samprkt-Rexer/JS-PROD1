import React from 'react'
import Cse from "../Pages/cs";
import './Navbar.css';

import { Link, Routes, Route } from 'react-router-dom'
const Navbar = () => {
  return (
    <div id="navbar" >
      <Link to="/">Home </Link>
      <Link to="/welcome">Wlcome </Link>
      <Link to="/contact">Contact Us</Link>
      <Routes>
      <Route path='/welcome' element={<Cse />} />
    </Routes>
    </div>
  );
}

export default Navbar;
