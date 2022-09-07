import React from 'react';

import cardImage1 from '../assets/img/cards/card-1.png'
import cardImage2 from '../assets/img/cards/card-2.png'
import cardImage3 from '../assets/img/cards/card-3.png'

const Cards = () => {
  return (
      <section className = "bg-cardsBg min-h-0 min-h-[256px] pb-14 lg:-mt-24"
               data-aos = "fade-up" data-aos-delay = "800" data-aos-duration = "1200">
        <div className = "container mx-auto flex flex-col lg:flex-row gap-x-8">
          <div className = "flex-1 flex gap-x-4 lg:gap-x-8 -mt-8 z-10 lg:-mt-20 mx-auto">
            <div className = "bg-white w-full max-w-[282px] p-3.5 lg:p-7 shadow-2xl rounded-md max-h-[282px]"
                 data-aos = "fade-up" data-aos-delay = "400">
                <div className = "flex items-center mb-4 lg:mb-6">
                    <h4 className = "text-lg lg:text-2xl
                    font-bold text-heading mr-8">Make Your Own Plan For Yoga.</h4>
                    <h2 className = "h2 text-stroke-2">1</h2>
                </div>
                <div>
                    <img src = {cardImage1} alt='cardImg1'/>
                </div>
            </div>
              <div className = "bg-white w-full max-w-[282px] p-3.5 lg:p-7 shadow-2xl rounded-md max-h-[282px]"
                   data-aos = "fade-up" data-aos-delay = "600">
                  <div className = "flex items-center mb-4 lg:mb-6">
                      <h4 className = "text-lg lg:text-2xl
                      font-bold text-heading mr-8">Make Your Own Plan For Yoga.</h4>
                      <h2 className = "h2 text-stroke-2">2</h2>
                  </div>
                  <div>
                      <img src = {cardImage2} alt='cardImg1'/>
                  </div>
              </div>
          </div>
            <div className = "bg-white w-full max-w-xl mx-auto p-3.5
            lg:p-7 mt-4 lg:-mt-20 z-10 shadow-2xl rounded-md flex justify-between items-start"
                 data-aos = "fade-up" data-aos-delay = "800">
                <div className = "max-w-[240px]">
                    <div className = "flex items-center mb-3 lg:mb-6 lg:leading-7 font-bold text-heading mr-8">
                        <h4 className = "text-lg lg:text-2xl">Every-Day Open Master Classes.</h4>
                        <h2 className = "h2 text-stroke-2">3</h2>
                    </div>
                    <p className = "mb-5 lg:mb-3 ">
                        We`re boostin` online yoga by enabling anyone in the world to learn from the best
                    </p>
                    <a href= "#" className = "text-xs lg:text-sm font-bold text-heading">Read More</a>
                </div>
                <div>
                    <img src={cardImage3} alt= 'cardImg3'/>
                </div>
            </div>
        </div>
      </section>
  );
};

export default Cards;