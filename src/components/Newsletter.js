import React from 'react';

import {MdEmail} from "react-icons/md";

const Newsletter = () => {
  return (
      <section className = "section-sm lg:section-lg bg-green min-h-[520px]">
        <div className = "container mx-auto">
          <div className = "border-[8px] border-green-300 rounded-lg text-center pt-24 pb-12"
               data-aos = "fade-up" data-aos-delay = "300" data-aos-offset = "300">
            <h4 className = "text-4xl lg:text-6xl text-white font-semibold lg:font-bold mb-3 lg:mb-4"
                data-aos = "fade-up" data-aos-delay = "500" data-aos-offset = "250">Subscribe</h4>
            <p className = "text-lg lg:text-xl mb-6 lg:mb-12 text-green-200"
               data-aos = "fade-up" data-aos-delay = "600" data-aos-offset = "200">Subscribe to our newsletter for further updates</p>
          <form className = "mx-auto max-w-[750px] relative flex items-center flex-col lg:flex-row gap-y-6 gap-x-4"
                data-aos = "fade-up" data-aos-delay = "900">
            <div className = "w-full relative flex">
              <div className = "absolute left-2 h-full w-12 flex justify-center items-center text-2xl text-green-300">
                <MdEmail/>
              </div>
              <input type = "text"
                     placeholder = "Enter your @email"
                     className = "form-control w-full border-x-0 lg:border-x lg:border-x-white border-t border-green-300
                     lg:border-b-white bg-transparent outline-none
                     text-white pl-[60px] placeholder:text-green-200" />
            </div>
            <button className = "btn btn-lg btn-orange text-white w-5/6 lg:max-w-[180px]">Get started</button>
          </form>
          </div>
        </div>
      </section>
  );
};

export default Newsletter;










