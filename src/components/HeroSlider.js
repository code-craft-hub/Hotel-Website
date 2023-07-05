import React from "react";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
// import required modules

import { EffectFade, Autoplay } from "swiper";
import Img1 from "../assets/img/heroSlider/1.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
import Img3 from "../assets/img/heroSlider/3.jpg";

const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img1,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img2,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img3,
    btnText: "See our rooms",
  },
];

const HeroSlider = () => {
  return (
    <Swiper modules={[EffectFade, Autoplay]} effect={'fade'} loop={true} autoplay={{delay: 3000,disableOnInteraction: false}} className="heroSlider h-[600px] lg:h-[860px] ">
      {slides.map((slide, index) => {
        // destructure slide

        const { title, bg, btnText } = slide;

        return (
          <SwiperSlide
            className="w-full h-full  relative flex justify-center items-center"
            key={index}
          >
            {/* 
            z-50 text-white text-center items-center justify-center mx-auto 
            
            
            */}
            <div className="absolute inset-44 md:inset-44 lg:inset-64 flex flex-col items-center justify-center z-10 text-white text-center">
              <div className="uppercase font-tertiary  tracking-[6px]  mb-[36px]">
                Just Enjoy and relax
              </div>
              <h1 className=" text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
                {title}
              </h1>
              <button className="btn btn-lg btn-primary p-8 md:my-2 ">{btnText}</button>
            </div>
            <div className=" absolute  top-0 w-full h-full">
              <img className="object-cover h-full w-full " src={bg} alt="" />
            </div>
            {/* Overlay */}
            <div className="left-0 top-0 absolute w-full h-full bg-black/70 "></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
