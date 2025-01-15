"use client";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Globe_image from "../../../public/image/globe.png";
import Monitor_image from "../../../public/image/monitor.png";
import Compare_image from "../../../public/image/compare.png";
import Save_image from "../../../public/image/save.png";
export default function Enroll() {
    return (
        <>
            <Header />
            < div className="relative bg-white w-full  sm:h-[100vh] h-[900px]" >
                <div className="absolute inset-0 bg-black opacity-60" > </div>
                < div className="relative flex justify-center items-center w-full h-full pt-[50px]" >
                    <div className="flex flex-col w-[420px] h-[750px] px-[16px] py-[32px] rounded-lg bg-[#f5f5f7] z-10" >
                        <div className="w-full bg-[#f5f5f7] flex flex-col justify-between gap-[15px] z-30 h-full">
                            <div className="flex flex-col gap-[30px] w-full">
                                <div className="w-full flex justify-center items-center">
                                    <Image src={Globe_image} alt="globe image" width={160} className="h-[90px]" />
                                </div>
                                <div className="flex flex-col gap-[12px] justify-center items-center">
                                    <h3 className="text-poppins text-2xl text-black font-bold text-center">
                                        We're working on it.
                                    </h3>
                                    <span className="text-poppins text-lg text-black font-[700]">
                                        Searching for available rates in your area.
                                    </span>
                                </div>
                                <div className="flex w-full">
                                    <span className="text-[#6e7385] text-poppins text-xs">
                                        Here&apos;s how it works.
                                    </span>
                                </div>
                                <div className="flex flex-col gap-[16px]">
                                    <div className="flex flex-row gap-[25px]">
                                        <div className="">
                                            <Image src={Monitor_image} alt="" className="max-w-[69px] max-h-[45px]" />
                                        </div>
                                        <div className="flex flex-col gap-[4px]">
                                            <span className="text-[#0e0f19] text-base text-poppins font-[700]">
                                                We monitor the market
                                            </span>
                                            <span className="text-[#404350] text-base text-poppins">
                                                We scan the market to find better rates for United Illuminating customers.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-[25px]">
                                        <div className="">
                                            <Image src={Compare_image} alt="" className="max-w-[69px] max-h-[45px]" />
                                        </div>
                                        <div className="flex flex-col gap-[4px]">
                                            <span className="text-[#0e0f19] text-base text-poppins font-[700]">
                                                We help you select
                                            </span>
                                            <span className="text-[#404350] text-base text-poppins">
                                                You can choose from our top pick or we can automatically do it for you.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-[25px]">
                                        <div className="">
                                            <Image src={Save_image} alt="" className="max-w-[69px] max-h-[45px]" />
                                        </div>
                                        <div className="flex flex-col gap-[4px]">
                                            <span className="text-[#0e0f19] text-base text-poppins font-[700]">
                                                You save
                                            </span>
                                            <span className="text-[#404350] text-base text-poppins">
                                                Start saving with no commitment or change to your United Illuminating service.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex w-full justify-center items-center cursor-pointer py-[16px] rounded-lg mb-[20px] bg-[#0e0f19]`} >
                                <span className={`text-poppins text-base font-[700] uppercase text-white`}>
                                    Help Me Save
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            < Footer />
        </>
    );

}