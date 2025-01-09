"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
    const images = [
        "/slide/slide3.png",
        "/slide/slide1.png",
        "/slide/slide2.png"
    ];

    return (
        <div className="carousel-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop
                className="mySwiper"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <Image src={src} alt={`Slide ${index + 1}`} height={500} width={500} className="w-full h-[500px] object-cover" />
                    </SwiperSlide>
                ))}
                <div className="swiper-button-prev-custom">
                    <svg className="caret-left-icon--small" viewBox="0 0 9 16">
                        <polyline fill="none" strokeMiterlimit="10" points="7.3,14.7 2.5,8 7.3,1.2 "></polyline>
                    </svg>
                </div>
                <div className="swiper-button-next-custom">
                    <svg className="caret-right-icon--small" viewBox="0 0 9 16">
                        <polyline fill="none" strokeMiterlimit="10" points="1.6,1.2 6.5,7.9 1.6,14.7 "></polyline>
                    </svg>
                </div>
            </Swiper>
        </div>
    );
};

export default Carousel;
