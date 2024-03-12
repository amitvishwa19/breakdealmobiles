import { useEffect, useState } from "react";

import { close, logo, menu, logo_dark } from "../assets";
import { navLinks } from "../constants";
import { Link, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const path = useResolvedPath().pathname



  const getRoute = () => {
    //console.log('path', path.pathname)
  }



  const setPath = (link) => {
    console.log('link', link)
    console.log('path', path.pathname)
    //path === link ? setActive(path) : ''
  }



  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">

      <Link to={'/'}><img src={logo_dark} alt="hoobank" className="w-[220px] h-[25px]" /></Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${path === '/' ? "text-white" : "text-dimWhite"} `} >
          <Link to='/' onClick={() => { }}>Home</Link>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${path === '/product' ? "text-white" : "text-dimWhite"} `} >
          <Link to='/product' onClick={() => { }}>Product</Link>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${path === '/about' ? "text-white" : "text-dimWhite"} `} >
          <Link to='/about' onClick={() => { }}>About</Link>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${path === '/contact' ? "text-white" : "text-dimWhite"} `} >
          <Link to='/contact' onClick={() => { }}>Contact</Link>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">


            <li className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 ${path === '/' ? "text-white" : "text-dimWhite"} `} >
              <Link to='/' onClick={() => { }}>Home</Link>
            </li>
            <li className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 ${path === '/product' ? "text-white" : "text-dimWhite"} `} >
              <Link to='/product' onClick={() => { }}>Product</Link>
            </li>
            <li className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 ${path === '/about' ? "text-white" : "text-dimWhite"} `} >
              <Link to='/about' onClick={() => { }}>About</Link>
            </li>
            <li className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 ${path === '/contact' ? "text-white" : "text-dimWhite"} `} >
              <Link to='/contact' onClick={() => { }}>Contact</Link>
            </li>




          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
