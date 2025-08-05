'use client'
import React from "react";
import { useSwiper } from 'swiper/react'
import { RiArrowLeftLine,RiArrowRightLine } from "react-icons/ri";

const SliderBtns = () => {
    const swiper = useSwiper();
  return (
    <div className=" w-auto absolute bottom-2 right-2 flex gap-1 z-10 ">
    <button  className="bg-[#ffc93c] text-black  text-[18px] w-[35px] h-[35px] flex justify-center items-center transition-all cursor-pointer"  onClick={()=> swiper.slidePrev()}>
        <RiArrowLeftLine/>
    </button>
    <button  className="bg-[#ffc93c] text-black  text-[18px] w-[35px] h-[35px] flex justify-center items-center transition-all cursor-pointer" onClick={()=> swiper.slideNext() }>
        <RiArrowRightLine/>
    </button>
    </div>
  );
};

export default SliderBtns;
