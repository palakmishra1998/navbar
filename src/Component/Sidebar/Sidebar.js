import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Service from './Page/Service';
import Contact from './Page/Contact';
import About from './Page/About';
import Home from './Page/Home';

export default function Sidebar() {
    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <Router>
            <nav className='navbar'>
                <div className='website-logo'>Website</div>
                <div className='menu' onClick={toggleMenu}>
                    <div className='menu-icon'></div>
                    <div className='menu-icon'></div>
                    <div className='menu-icon'></div>
                </div>
                <ul className={isMenuOpen ? 'navbar-list active' : 'navbar-list'} >
                    <li>
                        <NavLink to='/' onClick={toggleMenu}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' onClick={toggleMenu}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/service' onClick={toggleMenu}>Service</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' onClick={toggleMenu}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
               <Route path='/' element={<Home/> }/>
               <Route path='/about' element={<About/>}/>
               <Route path='/service' element={<Service/>}/>
               <Route path='/contact' element={<Contact/>}/>
            
            </Routes>
        </Router>

    )
}
