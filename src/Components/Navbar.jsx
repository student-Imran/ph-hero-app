import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import github from '../assets/fi_2111432.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><NavLink className="font-semibold" to="/">Home</NavLink></li>
        <li><NavLink className="font-semibold" to="/apps">Apps</NavLink></li>
        <li><NavLink className="font-semibold" to="/installed">Installation</NavLink></li>
      </ul>
    </div>
   <Link to='/' className='pl-2 md:pl-8 lg:pl-10 flex items-center gap-2 btn-ghost text-xl'>
  <img src={logo} alt="Logo" className='w-8 h-8' />
  <p className='m-0 text-blue-500'>Hero.IO</p>
  </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-4 px-1">
        <li>
  <NavLink className="font-semibold" to="/">Home</NavLink>
</li>
        <li><NavLink className="font-semibold" to="/apps">Apps</NavLink></li>
        <li><NavLink className="font-semibold" to="/installed">Installation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end pr-2 md:pr-8 lg:pr-10">
    <button 
  onClick={() => window.open('https://github.com/student-imran', '_blank')}
  className="btn btn-primary flex items-center gap-2"
>
  <span className='flex justify-around gap-2'><img src={github} alt="" /> <p>Contribute</p> </span>
</button>
  </div>
</div>
    );
};

export default Navbar;