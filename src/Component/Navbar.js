import React from 'react'


import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/welcome">Wlcome </Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
}

export default Navbar;
