"use client"
import React,{ useRef, useState } from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { EffectCards,Pagination,Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/pagination";

function MySwiper() {
    const swiperRef = useRef();

    return (
        <>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                effect={"cards"}
                grabCursor={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[EffectCards,Pagination,Navigation]}
                className="mySwiper h-96"
            >
                <SwiperSlide style={{backgroundImage: "url('https://pics.freeartbackgrounds.com/Sky_Cloud_Background-649.jpg')"}}>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
                <div className="flex justify-center gap-x-44 mt-3">
                    <button className={"text-4xl"} onClick={() => swiperRef.current.slidePrev()}>
                        <i className="bi bi-arrow-left-circle"></i>
                    </button>
                    <button className={"text-4xl"} onClick={() => swiperRef.current.slideNext()}>
                        <i className="bi bi-arrow-right-circle"></i>
                    </button>
                </div>
            </Swiper>
        </>
    );
}

export default MySwiper;