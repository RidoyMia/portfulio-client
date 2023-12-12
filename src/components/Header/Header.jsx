import React from 'react';
import logo from "../../assets/log.jpg"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className="navbar bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      
      <Link className='text-lg px-3 bold' to="/">Home</Link>
    <Link className='text-lg px-3 bold' to="/">Projects</Link>
      
    <Link className='text-lg px-3 bold' to="/f">About</Link>
    <Link className='text-lg px-3 bold' to="/">Skills</Link>
    <Link className='text-lg px-3 bold' to="/">Contact</Link>
      </ul>
    </div>
    <a className=" text-xl text-yellow-500 font-bold">RIDOY-MIA</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Link className='text-lg px-3 bold' to="/">Home</Link>
    <Link className='text-lg px-3 bold' to="/">Projects</Link>
      
    <Link className='text-lg px-3 bold' to="/d">About</Link>
    <Link className='text-lg px-3 bold' to="/">Skills</Link>
    <Link className='text-lg px-3 bold' to="/">Contact</Link>
     
      
      
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Header;