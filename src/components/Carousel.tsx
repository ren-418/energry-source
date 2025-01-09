"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SlideContent from "./SlideContent";

const Carousel = () => {
    const slides = [
        {
            src: "/slide/IMG_9028.jpg",
            alt: "Slide 1",
            content: <SlideContent title="Heat Pump Technology" description="Electricity is the future and heat pumps are leading the way, click here to learn about the simple installation and how cost effective these solutions can be." />,
        },
        {
            src: "/slide/IMG_9032.jpg",
            alt: "Slide 2",
            content: <SlideContent title="Efficiency Solutions" description="Discover how simple it can be to upgrade your business with energy-efficient solutions that lower both costs and energy use." />,
        },
        {
            src: "/slide/IMG_9027.jpg",
            alt: "Slide 3",
            content: <SlideContent title="EV Charging Solutions" description="Stay ahead of the curve with our state-of-the-art EV Charging Solutions. Sow your commitment to progress, and provide an essential service to your clients and team. Plug into the future of your business with us." />,
        },
        {
            src: "/slide/IMG_9008.jpg",
            alt: "Slide 4",
            content: <SlideContent title="Electricity Procurement" description="We are a licensed broker of electricity. We can help you negotiate the purchase of electric supply to help your business lower the pricing" />,
        },
        {
            src: "/slide/IMG_9012.jpg",
            alt: "Slide 5",
            content: <SlideContent title="Renewables" description="Our team can aid you in structuring a deal that suits your financial needs and meets your renewable standards." />,
        },
    ];

    return (
        <div className="carousel-container relative">
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
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative h-[500px]">
                        {/* Wrapper div to control Image dimensions */}
                        <div className="w-full h-full relative" style={{ height: "500px" }}>
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                layout="fill"
                                objectFit="cover"
                                quality={75}
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            {slide.content}
                        </div>
                    </SwiperSlide>
                ))}

                {/* Navigation Buttons */}
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
