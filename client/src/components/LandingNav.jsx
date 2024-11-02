import React from 'react';
import { Link } from 'react-router-dom';

const LandingNav = () => {
  const linkStyle="p-2 cursor-pointer hover:scale-110 active:scale-95 transition-all duration-200";
  return (
    <div className="bg-[#FCCD2A] w-full fixed top-0 left-0 z-50">
      <nav className="flex justify-between py-2 items-center md:px-4 px-2">
        <ul className="flex space-x-6 text-white text-lg font-medium">
          <li className={linkStyle}>
            <Link to="/signin" className="text-black">Sign In</Link>
          </li>
          <li className={linkStyle}>
            <Link to="/signup" className="text-black">Sign Up</Link>
          </li>
        </ul>
        <ul className="flex space-x-6 text-white text-lg font-medium">
          <li className={linkStyle}>
            <Link to="/about" className="text-black">About Us</Link>
          </li>
          <li className={linkStyle}>
            <Link to="/contact" className="text-black">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingNav;
