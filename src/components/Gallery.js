
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import 'swiper/css';
import 'swiper/css/effect-coverflow';


import { EffectCoverflow } from 'swiper/modules';

import slide_image_1 from "../assets/images/img_1.jpg";
import slide_image_2 from "../assets/images/img_2.jpg";
import slide_image_3 from "../assets/images/img_3.jpg";
import slide_image_4 from "../assets/images/img_4.jpg";
import slide_image_5 from "../assets/images/img_5.jpg";
import slide_image_6 from "../assets/images/img_6.jpg";
import { Fade } from 'react-reveal';
function Gallery() {
  return  (
    <>
      <section id="gallery">
        <div className="gallery__container">
        <Fade Left delay={1000}>
            <center>
            <div className="gallery__title">
                  <h1>ทางลัด สู่ ผิวดี หน้าเด็ก</h1>
                  <h1>เสริมจมูก สโลป ปลาย พุ่ง</h1>
                  <h1>ตา สอง ชั้น ยก คิ้ว </h1>
                  </div>
              <div className="gallery__box">
                <motion.div className="intro__subtitle" animate={{ rotate: [0, 360] }}
      transition={{ duration: 60, loop: Infinity }}>
                  </motion.div>
               
                    <div className="gallery__title">
                    <h2>ห่างไกลริ้วรอย
                    ผิวนุ่มเนียนเหมือนเด็กใน 7 วัน ปรึกษาฟรี
                   </h2>
                  
                </div>
              </div>
            </center>
          </Fade>
          <Swiper
                 effect={'coverflow'}
                 grabCursor={true}
                 centeredSlides={true}
                 loop={true}
                 slidesPerView={'auto'}
                 coverflowEffect={{
                   rotate: 0,
                   stretch: 0,
                   depth: 100,
                   modifier: 2.5
                 }}
                 pagination={{ el: '.swiper-pagination', clickable: true }}
                 navigation={{
                   nextEl: '.swiper-button-next',
                   prevEl: '.swiper-button-prev',
                   clickable: true,
                 } }
                 modules={[EffectCoverflow]}
                 className='swiper-container'>
          <SwiperSlide>
            <img src={slide_image_1} alt="slide-image1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide-image2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide-image3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide-image4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide-image5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_6} alt="slide-image6" />
          </SwiperSlide>


        </Swiper>
          </div>
        </section>
    </>
  )
}
export default Gallery;

