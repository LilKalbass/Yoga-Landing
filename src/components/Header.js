import React, {useState, useEffect} from 'react';

import Logo from '../assets/img/logo.png'

import Nav from './Nav';
import NavMobile from "./NavMobile";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          window.scrollY > 32 ? setHeader(true) : setHeader(false);
      });
  });

  return (
      <header className = {`${header ? "top-0" : "top-5 lg:top-8"} fixed bg-white w-full max-w-[90vw] lg:max-w-[1170px]
      mx-auto rounded-md h-24  shadow-primary px-6 lg:px-12 z-20 transition-all duration-500
      flex items-center justify-between`}>
          <div className = "flex items-center">
              <a href = "#">
                  <img src={Logo} alt = "logo_img"/>
              </a>
              <div className = "hidden lg:flex">
                  <Nav/>
              </div>
          </div>
          <div className = "flex items-center">
              <div className = "flex gap-x-4 lg:gap-x-8">
                  <button className = "text-heading font-medium text-sm lg:text-lg
                  hover:text-orange transition">Sign in
                  </button>
                  <button className = "btn btn-md lg:px-8 bg-orange-100 border border-orange text-orange
                  font-medium text-sm lg:text-lg hover:bg-orange-200 hover:text-white transition">Sign up
                  </button>
              </div>
              <NavMobile/>
          </div>
      </header>
  );
};

export default Header;




























