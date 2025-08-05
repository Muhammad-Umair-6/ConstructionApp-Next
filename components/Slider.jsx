'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SliderBtns from './SliderBtns'

const Slider = () => {
  return (
    <Swiper
      className="bg-white shadow-md border-2 rounded-md cursor-pointer border-[#ffc93c]  md:w-[430px]  mt-4  h-[120px]"
      spaceBetween={10}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="p-3 flex justify-center items-center gap-5">
          <div className="relative md:flex w-[80px] h-[80px] ">
            <Image
              src="/assets/assets/img/testimonials/avatar.jpg"
              fill
              className="object-cover rounded-md  mb-2"
              quality={100}
            />
          </div>
          <div className="flex-1 md:max-w-[340px]   flex flex-col gap-2">
            <p className="text-[#99a1af]">
              Exceeded expectations. On time, within budget and top quality work
            </p>
            <p className="text-[18px] font-semibold">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-3 flex justify-center items-center gap-5">
          <div className="relative md:flex w-[80px] h-[80px] ">
            <Image
              src="/assets/assets/img/testimonials/avatar.jpg"
              fill
              className="object-cover rounded-md  mb-2"
              quality={100}
            />
          </div>
          <div className="flex-1 md:max-w-[340px]   flex flex-col gap-2">
            <p className="text-[#99a1af]">
              Exceeded expectations. On time, within budget and top quality work
            </p>
            <p className="text-[18px] font-semibold">John</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-3 flex justify-center items-center gap-5">
          <div className="relative md:flex w-[80px] h-[80px] ">
            <Image
              src="/assets/assets/img/testimonials/avatar.jpg"
              fill
              className="object-cover rounded-md  mb-2"
              quality={100}
            />
          </div>
          <div className="flex-1 md:max-w-[340px]   flex flex-col gap-2">
            <p className="text-[#99a1af]">
              Exceeded expectations. On time, within budget and top quality work
            </p>
            <p className="text-[18px] font-semibold">AEdits</p>
          </div>
        </div>
      </SwiperSlide>
      <SliderBtns/>
    </Swiper>
  );
};

export default Slider;
