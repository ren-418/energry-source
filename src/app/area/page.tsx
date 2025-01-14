"use client";
import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Bulb from "../../../public/image/bulb.png";
import InputField from "@/components/InputField";

const Availability: React.FC = () => {
    const [zipcode, setZipcode] = useState("");
    const [email, setEmail] = useState("");

    const zipRegex = /^\d{5}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isZipValid = zipRegex.test(zipcode);
    const isEmailValid = emailRegex.test(email);

    const isFormValid = isZipValid && isEmailValid;
    const toUtility = () =>{
        window.location.href="/utility"
    }
    return (
        <>
            <Header />
            <div className="relative bg-white w-full sm:h-[100vh] h-[900px]">
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative flex justify-center items-center w-full h-full pt-[50px]">
                    <div className="flex flex-col w-[420px] h-[750px] px-[16px] py-[32px] rounded-lg bg-[#f5f5f7] z-10">

                        <div className="w-full bg-[#f5f5f7] flex flex-col gap-[30px] z-30">
                            <div className="w-full flex justify-center items-center">
                                <Image src={Bulb} alt="Bulb Icon" height={185} />
                            </div>

                            <div className="flex flex-col gap-3">
                                <h2 className="text-poppins text-black text-3xl font-bold text-center">
                                    Are you overpaying for energy?
                                </h2>
                                <span className="text-poppins text-black text-base text-center">
                                    Did you know there are hundreds of rates in some areas? Let us compare plans and shop for you to get our best rate - for free.
                                </span>
                            </div>

                            <div className="flex flex-col gap-[25px]">
                                <InputField
                                    id="zipcode"
                                    name="zipcode"
                                    type="text"
                                    label="Zip Code"
                                    value={zipcode}
                                    onChange={setZipcode}
                                    validationRegex={zipRegex}
                                    errorMessage="Please enter a valid 5-digit zip code."
                                />

                                <InputField
                                    id="email"
                                    name="email"
                                    type="email"
                                    label="Email"
                                    value={email}
                                    onChange={setEmail}
                                    validationRegex={emailRegex}
                                    errorMessage="Please enter a valid email address."
                                />
                            </div>

                            <div 
                                className={`flex w-full justify-center items-center cursor-pointer py-[16px] rounded-lg mb-[20px] ${isFormValid ? "bg-[#0e0f19]" : "bg-[#dbdfe6]"}`} 
                                onClick={() => {
                                    if (isFormValid) {
                                        toUtility();
                                    }
                                }}
                            >
                                <span className={`text-poppins text-base font-[700] uppercase ${isFormValid ? "text-white" : " text-black opacity-40"}`}>
                                    Check My Eligibility
                                </span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Availability;
