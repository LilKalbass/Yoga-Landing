import React from 'react';
import {Parallax} from "react-parallax";

import Image from '../assets/img/hero/guy.png'

import Header from "./Header";

const Hero = () => {
  return(
      <section className = "min-h-[620px] lg:min-h-[815px] pt-10 lg:bg-circle lg:bg-no-repeat lg:bg-right-top">
          <div className= "container mx-auto">
              <Header/>
              <div className = "flex flex-col items-center lg:flex-row lg:items-start pt-24 lg:pt-20">
                  <div className = "flex-1 lg:mt-10 ">
                      <h1 className = "h1 mb-2 lg:mb-6"
                          data-aos = "fade-down" data-aos-delay = "300">
                          Yoga to <br/> Release stress
                      </h1>
                      <p className = "mb-4 lg:mb-12 max-w-md lg:text-lg"
                         data-aos = "fade-down" data-aos-delay = "400">
                          Yoga is a way of life, rather than a chore.
                          Counteract the stress of modern life by becoming more mindful and compassionate.
                      </p>
                      <div className = "space-x-4 mb-12"
                           data-aos = "fade-down" data-aos-delay = "500">
                          <button className = "btn btn-sm lg:btn-lg btn-orange ">Get started
                          </button>
                          <button className = "btn btn-sm lg:btn-lg text-heading bg-transparent border
                          border-stroke-1 px-5 hover:bg-stroke-3 transition">Learn more
                          </button>
                      </div>
                  </div>
                  <div className = "w-full bg-circle bg-cover lg:bg-none lg:w-auto">
                      <div className = "flex-1 flex justify-center lg:justify-end"
                           data-aos = "fade-left" data-aos-delay = "300">
                          <div className = " w-32 h-64 lg:w-[504px] lg:h-[784px]">
                              <Parallax
                                  className = "w-full h-full p-24 lg:p-16"
                                  bgImage = {Image}
                                  bgImageAlt = "guy_img"
                                  strength = {200}
                              />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Hero;