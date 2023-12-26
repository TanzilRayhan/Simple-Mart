"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Parallax, Pagination,Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Parallax, Pagination]}
        className="mySwiper rounded-xl"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(https://images.unsplash.com/photo-1671159593332-d73d32ee2acc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="text-5xl lg:text-7xl text-center py-10 font-bold" data-swiper-parallax="-300">
            Electronics
          </div>
        
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-5xl lg:text-7xl text-center py-10 font-bold" data-swiper-parallax="-300">
          Jewelery
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-5xl lg:text-7xl text-center py-10 font-bold" data-swiper-parallax="-300">
          Men&apos;s clothing
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-5xl lg:text-7xl text-center py-10 font-bold" data-swiper-parallax="-300">
          Women&apos;s clothing
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
