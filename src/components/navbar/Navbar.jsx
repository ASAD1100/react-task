import { useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import './navbar.css'
const Navbar = () => {
  // Example: Managing the state for a simple navigation menu
  const [isMenuOpen, setMenuOpen] = useState(true);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" id='logo'>Your Logo/Brand</Link>
      </div>
      <div className="pages">
        <div className="home">
         <Link to='/'><HomeRoundedIcon id='homeicon'/></Link>

        </div>
        <div className="profile">
         <Link to='/dashboard'><PersonRoundedIcon id='profileicon'/></Link> 
        </div>
        <button className="navbar-toggle" onClick={() => setMenuOpen(!isMenuOpen)}>
        <MenuRoundedIcon/>
        </button>

      </div>

      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

     
    </nav>
  );
};

export default Navbar;
