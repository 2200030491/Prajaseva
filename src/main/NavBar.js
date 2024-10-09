import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import CitizenRegistration from '../citizens/CitizenRegistration';
import logo from '../images/NavbarLogo.png';
import './NavBar.css';
import CitizenLogin from '../citizens/CitizenLogin';
import PoliticianLogin from '../politicans/PoliticianLogin';
export default function NavBar() {
  return (
    <div className='app-container'>
    <nav className='navbar'>
      <div className="navbar-brand">
        <img src={logo} alt="LOGO" className='logo' />
        <h3>Praja Seva</h3>
      </div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/citizen">CITIZEN</Link></li>
        <li><Link to="/politician">POLITICIAN</Link></li>
        <li><Link to="/contactus">CONTACT US</Link></li>
        <li><Link to="/register" className='signup'>SignUp</Link></li>
        <li><Link to="/register" className='register'>Register</Link></li>
      </ul>
    </nav>
    <Routes>
    <Route path='/' element={<Home/>} exact />
        <Route path='/citizen' element={<CitizenLogin/>}  exact/>
        <Route path='/politician' element={<PoliticianLogin/>}  exact/>
        <Route path='/register' element={<CitizenRegistration/>} exact/>
        
    </Routes>
    
    </div>

  )
}