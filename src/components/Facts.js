import React from 'react';
import CountUp from "react-countup";

import Image from '../assets/img/signature.png'

import {facts} from '../data'

const Facts = () => {
  return (
      <section className = "section-sm lg:section-lg">
        <div className = "container mx-auto flex flex-col lg:flex-row lg:gap-x-7">
          <div className = "flex flex-1 flex-wrap gap-x-[5%] gap-y-9">
            {facts.map((item,index) => {
              const {startNumber, endNumber, unit, title, desc} = item;
              return (
                  <div key={index} className = "w-[45%]">
                    <h2 className = "h2 mb-2 lg:mb-4">
                      <CountUp
                          start = {startNumber}
                          end = {endNumber}
                          duration = {2}
                          enableScrollSpy
                      />
                      {unit}+
                    </h2>
                    <div className = "text-xl font-bold text-heading mb-3">{title}</div>
                    <p className = "max-w-[240px]">{desc}</p>
                  </div>
              );
            })}
          </div>
            <div className = "flex-1 -order-1 lg:order-none">
                <div className = "flex flex-col justify-center h-full lg:pl-24">
                    <h2 className = "h2 mb-12 max-w-[295px] md:max-w-none">
                        Relax `n` Enjoy a Personalized Day Yoga With Us
                    </h2>
                    <div className = "mb-2">
                        <img src={Image} alt='signature'/>
                    </div>
                    <div className = "text-lg mb-6 font-bold text-heading">
                        Ann Miller <span className = "text-base text-paragraph font-normal">/Founder</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

  );
};

export default Facts;


















