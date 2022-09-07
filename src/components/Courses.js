import React from 'react';

import {BsStarFill, BsStarHalf} from 'react-icons/bs'

import {courses} from "../data";

const Courses = () => {
  return (
      <section className = "section-sm lg:section-lg">
        <div className = "container mx-auto">
        {/*  text*/}
          <div className = "text-center mb-16 lg:mb-32">
            <h2 className = "h2 mb-2 lg:mb-4"
                data-aos = "fade-down" data-aos-delay = "200">Popular Courses</h2>
            <p className = "max-w-lg mx-auto"
               data-aos = "fade-down" data-aos-delay = "300">
                Practice anywhere, anytime. Explore a new way to exercise and learn more about yourself.
                We`re providin` the best
            </p>
          </div>
        {/*  course list*/}
          <div className = "flex flex-col lg:flex-row lg:gap-x-8 gap-y-20 mb-8 lg:mb-16">
              {courses.map((item, index) => {
                  const {image, title, desc, link, delay} = item;
                  return (
                      <div key={index}
                           className = "w-full bg-white hover:shadow-primary max-w-[368px]
                           px-4  pb-6 lg:px-7 lg:pb-9 flex flex-col rounded-xl mx-auto transition"
                           data-aos = "fade-up" data-aos-delay = {delay}>
                          <div className = "-mt-9 lg:-mt-12 mb-6 lg:mb-8">
                              <img src={image}/>
                          </div>
                          <div>
                              <h4 className = "text-lg lg:text-xl lg:text-center font-semibold mb-2 lg:mb-4">{title}</h4>
                              <p>{desc}</p>
                          </div>
                          <div>
                          {/*    bottom*/}
                          </div>
                          <div className = "flex items-center justify-between mt-6 mb-2 lg:mb-0">
                          {/*    starts*/}
                              <div className = "flex text-orange gap-x-2">
                                  <BsStarFill/>
                                  <BsStarFill/>
                                  <BsStarFill/>
                                  <BsStarFill/>
                                  <BsStarHalf/>
                              </div>
                              <a href='#' className = "font-medium text-heading">{link}</a>
                          </div>
                      </div>
                  );
              })}
          </div>
        {/*  btn*/}
          <div className = "flex justify-center">
            <button className = "btn btn-sm btn-orange"
                    data-aos = "fade-up" data-aos-delay = "600">Browse all</button>
          </div>
        </div>
      </section>
  );
};

export default Courses;







