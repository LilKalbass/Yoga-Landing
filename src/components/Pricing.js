import React, {useState} from 'react';

import {pricing} from "../data";

const Pricing = () => {
    const [index, setIndex] = useState(0);
    return (
      <section className = "section-sm lg:section-lg bg-section">
        <div className = "container mx-auto">
          {/* text*/}
          <div className = "text-center mb-8 lg:mb-16">
            <h2 className = "h2 mb-3 lg:mb-9">Pick a Pricing plan</h2>
            <p className = "max-w-[400px] mx-auto">
              Pick a pricing plan and get started your journey with us.
              Build your body and mind
            </p>
          </div>
        {/*  cards*/}
          <div className = "flex flex-col lg:flex-row mx-auto items-center gap-y-7 lg:gap-x-8">
              {pricing.map((card, currentIndex) => {
                  const {title, price, list, buttonIcon, buttonText, delay} = card;
                  return (
                      <div
                          key={currentIndex}
                          onClick={() => setIndex(currentIndex)}
                          className = "bg-white rounded-md w-full max-w-sm
                          min-h-[680px] h-full cursor-pointer relative">
                          {/*   card top*/}
                          <div className = {`${index === currentIndex ? 
                               "bg-orange text-white" : "bg-white text-heading"} 
                               text-center pt-16 pb-8 border-b border-stroke-3 transition rounded-t-md`}>
                              <div className = "text-2xl font-medium mb-2.5">
                                  {title}
                              </div>
                              <div className = "text-4xl font-semibold">
                                  {price}
                              </div>
                          </div>
                          <div className = "px-8 pt-4 pb-8">
                              <p className = "text-center mb-6 text-sm">Discover your favorite class!</p>
                              <ul className = "flex flex-col gap-3 mb-10">
                                  {list.map((item,index) => {
                                      const {icon, name} = item;
                                      return (
                                        <li key={index} className = "border border-r-green
                                        p-4 rounded-md flex items-center gap-4">
                                            <div className = "flex justify-center items-center
                                            bg-green-100 rounded-full w-7 h-7 text-2xl text-green-300">
                                                {icon}
                                            </div>
                                                {name}
                                        </li>
                                      );
                                  })}
                              </ul>
                          {/*    btn*/}
                              <button>button</button>
                          </div>
                      </div>
                  );
              })}
          </div>
        </div>
      </section>
  );
};

export default Pricing;














