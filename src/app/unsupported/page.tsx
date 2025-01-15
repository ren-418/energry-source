"use client";
import React from "react";
// import Header from "@/components/header";
// import Footer from "@/components/footer";
import Image from "next/image";
import Renewables_image from "../../../public/image/renewables.png";

const Unsupported: React.FC = () => {

    const returnArea = (): void => {
        window.location.href = "/area"

    }

    return (
        <>
            {/* <Header /> */}
            <div className="relative bg-white w-full  sm:h-[100vh] h-[900px]">
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative flex justify-center items-center w-full h-full">
                    <div className="flex flex-col w-[400px] h-[750px] px-[16px] py-[32px] rounded-lg bg-[#f5f5f7] z-10">

                        <div className="w-full bg-[#f5f5f7] flex flex-col justify-between gap-[15px] z-30 h-full">
                            <div className="flex flex-col gap-[40px]">
                                <div className="w-full mt-[-20px]">
                                    <div className="rounded-[50px] w-[24px] h-[24px] bg-none hover:bg-[#6e7385] hover:opacity-60 transition-2s cursor-pointer flex justify-center items-center" onClick={returnArea}>
                                        <svg className="w-[18px] h-[18px]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WestIcon"><path d="m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"></path></svg>
                                    </div>
                                </div>
                                <div className="mt-[30%] w-full flex justify-center">
                                    <Image src={Renewables_image} alt="" className="max-h-[120px] max-w-[201px]" />
                                </div>
                                <div className="flex flex-col gap-[12px] w-full">
                                    <h2 className="text-[#0e0f19] text-poppins text-3xl text-center">
                                        Find out what incentives and savings are available in your area.
                                    </h2>
                                    <span className="text-[#404350] text-base text-poppins text-center">
                                        Arbor helps anyone with a power bill take advantage of the best energy incentives, savings, and renewables in their area. It&apos;s 100% free.
                                    </span>
                                </div>
                                <div className={`flex w-full justify-center items-center cursor-pointer py-[16px] rounded-lg mb-[20px] bg-[#0e0f19]`} >
                                    <span className={`text-poppins text-base font-[700] uppercase text-white`}>
                                        Check Available Savings
                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Unsupported;
