import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import './CSS/carousel.css'
// import required modules
import {Autoplay, EffectCoverflow, Pagination } from "swiper/modules";


import img1 from '../Assest/ScreenShots/1.jpg'
import img2 from '../Assest/ScreenShots/12.jpg'
import img3 from '../Assest/ScreenShots/6.jpg'
import img4 from '../Assest/ScreenShots/5.jpg'
import img5 from '../Assest/ScreenShots/BlueDeerLoginForm.png'
import img6 from '../Assest/ScreenShots/FoxLoginForm.png'
import img7 from '../Assest/ScreenShots/NeonButton.png'


function Carousel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4,
          slideShadows: true,
        }}
        autoplay={{
          delay: 500,
        }}
        loop = {true}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carousel
