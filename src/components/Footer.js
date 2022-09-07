import React from 'react';

import Logo from '../assets/img/logo.png'

import {FaYoutube, FaInstagram, FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
      <footer className = "pb-16"
              data-aos = "fade-up" data-aos-offset = "0">
        <div className = "container mx-auto">
          <div className = "flex flex-col justify-between items-center lg:flex-row gap-y-5 lg:px-12">
              <a className = "" href = "#" >
                  <img  src = {Logo} alt = "logo_img"/>
              </a>
              <p className = "lg:ml-[19%]">&copy; 2022. All right reserved.</p>
              <div className = "flex gap-x-4 text-orange text-2xl">
                  <div className = "footer-icon">
                      <FaYoutube/>
                  </div>
                  <div className = "footer-icon">
                      <FaInstagram/>
                  </div>
                  <div className = "footer-icon">
                      <FaGithub/>
                  </div>
              </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;






























