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
         <button 
  onClick={() => window.open('https://github.com/student-imran', '_blank')}
  className="btn text-white  flex items-center gap-2 bg-gradient-to-tr from-[#632EE3] to-[#9F62F2]"
>
  <span className='flex justify-around gap-2'><img src={github} alt="" /> <p>Contribute</p> </span>
</button>
      </ul>
    </div>
   <Link to='/' className='pl-2 md:pl-8 lg:pl-10 flex items-center gap-2 btn-ghost text-xl'>
  <img src={logo} alt="Logo" className='w-9 h-9' />
  <p className='m-0 bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold text-3xl'>Hero.IO</p>
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
  <div className="navbar-end pr-2 md:pr-8 lg:pr-10 hidden lg:flex">
    <button 
  onClick={() => window.open('https://github.com/student-imran', '_blank')}
  className="btn text-white  flex items-center gap-2 bg-gradient-to-tr from-[#632EE3] to-[#9F62F2]"
>
  <span className='flex justify-around gap-2'><img src={github} alt="" /> <p>Contribute</p> </span>
</button>
  </div>
</div>
    );
};

export default Navbar;