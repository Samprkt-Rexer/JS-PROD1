
import Cse from "../Pages/cs";
import './Navbar.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';


import { Link, Routes, Route } from 'react-router-dom'

//   return (
//     <div id="navbar" >
//       <Link to="/">Home </Link>
//       <Link to="/welcome">Wlcome </Link>
//       <Link to="/contact">Contact Us</Link>
//       <Routes>
//       <Route path='/welcome' element={<Cse />} />
//     </Routes>
//     </div>

const Navbar = () => {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography>
          <nav>
          <Link className="MuiTypography-root MuiTypography-button MuiLink-root MuiLink-underlineAlways css-1xkhg5k-MuiTypography-root-MuiLink-root nav" to="/">HOME </Link>
            <Link className="MuiTypography-root MuiTypography-button MuiLink-root MuiLink-underlineAlways css-1xkhg5k-MuiTypography-root-MuiLink-root nav" to="/welcome">COMING SOON </Link>
        <Link className="MuiTypography-root MuiTypography-button MuiLink-root MuiLink-underlineAlways css-1xkhg5k-MuiTypography-root-MuiLink-root nav" to="/contact">CONTACT</Link>
            
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
      <Route path='/welcome' element={<Cse />} />
     </Routes>
    </React.Fragment>
  );
}

export default Navbar;