import React, {useState} from 'react';

import ModalVideo from "react-modal-video";
import '../video.scss'

import {BsPlayCircleFill} from 'react-icons/bs'

const Features = () => {
  const [isOpen, setOpen] = useState(false);
  return (
      <section className = "bg-section min-h-[428px] pt-8 pb-9 lg:pb-32 mt-28 lg:mt-[132px]">
        <div className = "container mx-auto">
          <div className = "bg-video h-[310px] bg-cover bg-center bg-no-repeat
          lg:h-[622px] w-full flex justify-center items-center rounded-md -mt-36 mb-7 lg:mb-20">
            <div onClick={() => setOpen(!isOpen)}
                 className = "text-6xl text-orange lg:text-[120px] cursor-pointer hover:scale-110 transition">
              <BsPlayCircleFill />
            </div>
          </div>
          <div className = "flex ">
            <div className = "flex-1">
              <div className = "w-9 h-[2px] bg-orange mb-2 lg:w-[90px] rounded-full"></div>
              <h2 className = "h2 mb-3 lg:mb-6">The Better Way to <br/> Start Yoga</h2>
            </div>
          </div>
          <div>
            <p className = "max-w-[360px] mb-4 lg:mb-10">
              Practice anywhere, anytime. Explore a new way to exercise and learn more about yourself.
              We`re providin` the best
            </p>
            <button className = "btn btn-sm btn-orange">Get started</button>
          </div>
        </div>
        <ModalVideo
            channel = "youtube"
            autoplay
            isOpen = {isOpen}
            onClose = {() => setOpen(false)}
            videoId = "klmBssEYkdU"
        />
      </section>
  );
};

export default Features;