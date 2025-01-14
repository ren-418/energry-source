"use client";
import React, { useEffect, useState, useMemo } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import InputForm from "@/components/InputForm";
import InputField from "@/components/InputField";
import RadioButton from "@/components/RadioButton";
const Availability: React.FC = () => {
    const [streetaddress, setStreetAddress] = useState("");
    const [apt, setApt] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [selectedSecOption, setSelectedSecOption] = useState<string>('');

    const [isFormValid, setIsFormValid] = useState(false);
    const handleRadioChange = (value: string) => {
        setSelectedOption(value);
    };
    const handleSecRadioChange = (value: string) => {
        setSelectedSecOption(value);
    };


    const zipRegex = useMemo(() => /^\d{5}$/, []);

    useEffect(() => {
        if (selectedOption && city && streetaddress && apt && zipRegex.test(zipcode) && state && selectedSecOption) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [selectedOption, city, streetaddress, apt, zipcode, state, selectedSecOption, zipRegex]);


    const returnArea = (): void => {
        window.location.href = "/area "
    }
    const toAboutAddress = (): void => {};
    return (
        <>
            <Header />
            < div className="relative bg-white w-full sm:h-[100vh] h-[900px]" >
                <div className="absolute inset-0 bg-black opacity-60" > </div>
                < div className="relative flex justify-center items-center w-full h-full pt-[50px]" >
                    <div className="flex flex-col w-[420px] h-[750px] px-[16px] pt-[32px] pb-[16px] rounded-lg bg-[#f5f5f7] z-10" >
                        <div className="w-full mt-[-20px] bg-[#f5f5f7]">
                            <div className="rounded-[50px] w-[24px] h-[24px] bg-none hover:bg-[#6e7385] hover:opacity-60 transition-2s cursor-pointer flex justify-center items-center" onClick={returnArea}>
                                <svg className="w-[18px] h-[18px]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WestIcon"><path d="m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"></path></svg>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-[16px] mb-[8px] gap-[10px]">
                            <div className="flex flex-col w-full ">
                                <span className="text-[#000000de] text-poppins text-sm mb-[6px] font-[600]">
                                    About you
                                </span>
                                <span className="w-full bg-[#7bae9d] rounded-[1px] h-[2px]"></span>
                            </div>
                            <div className="flex flex-col w-full ">
                                <span className="text-[#0009] text-poppins text-sm mb-[6px] font-[600]">
                                    Preferences
                                </span>
                                <span className="w-full bg-[#dbdfe6] rounded-[1px] h-[2px]"></span>
                            </div>
                            <div className="flex flex-col w-full ">
                                <span className="text-[#0009] text-poppins text-sm mb-[6px] font-[600]">
                                    Savings Options
                                </span>
                                <span className="w-full bg-[#dbdfe6] rounded-[1px] h-[2px]"></span>
                            </div>

                        </div>
                        <div className="flex flex-col gap-[12px]">
                            <h3 className="text-[#0e0f19] text-poppins text-2xl pt-[20px] font-[700]">
                                Enter your address
                            </h3>
                            {/* <span className="text-[#0e0f19] text-poppins text-base pt-[8px] pb-[16px]">
                                Sign up and start saving money on your utility bill. We&apos;ll never sell your personal info.
                            </span> */}
                            <div className="flex flex-col gap-[12px] pt-[20px]">
                                <InputForm
                                    id="streetaddress"
                                    name="streetaddress"
                                    type="text"
                                    label="Street Address"
                                    value={streetaddress}
                                    onChange={setStreetAddress}
                                />
                                <InputForm
                                    id="apt"
                                    name="apt"
                                    type="text"
                                    label="Apt/Suite"
                                    value={apt}
                                    onChange={setApt}
                                />
                                <InputForm
                                    id="city"
                                    name="city"
                                    type="text"
                                    label="City"
                                    value={city}
                                    onChange={setCity}
                                />
                                <div className="flex flex-row gap-[12px]">
                                    <InputForm
                                        id="state"
                                        name="state"
                                        type="text"
                                        label="State"
                                        value={state}
                                        onChange={setState}
                                    />
                                    <InputField
                                        id="zipcode"
                                        name="zipcode"
                                        type="text"
                                        label="Zip Code"
                                        value={zipcode}
                                        onChange={setZipcode}
                                        validationRegex={zipRegex}
                                        errorMessage=""
                                    />
                                </div>
                            </div>
                            {/* <div className="flex flex-col gap-[13px]">
                                <span className="text-base text-poppins text-base text-[#404350]">
                                    For your security, we&apos;ll email or text you a code whenever you want to access your account.
                                </span>
                                <span className="text-xs text-poppins text-[#0e0f19] text-center font-bold">
                                    We Care About Your Privacy.
                                </span>
                                <span className="text-xs text-poppins text-[#6e7385] text-center leading-[20px]">
                                    By clicking “Agree and Continue” I am agreeing to contract electronically and assenting to Arbor's <span className="text-[#056100] underline cursor-pointer">Terms of Service,</span> <span className="text-[#056100] underline cursor-pointer">Privacy Policy,</span> and <span className="text-[#056100] underline cursor-pointer">Letter of authorization.</span>
                                </span>
                            </div> */}
                            <div className="mt-[15px] flex flex-col gap-[8px]">
                                <span className="text-poppins text-[#0e0f19] text-lg font-bold">
                                    Is this a home or business?
                                </span>
                                <div className="flex flex-row gap-[12px] w-full">
                                    <RadioButton
                                        id="home"
                                        name="userType"
                                        value="home"
                                        label="Home"
                                        checked={selectedOption === 'home'}
                                        onChange={handleRadioChange}
                                    />
                                    <RadioButton
                                        id="business"
                                        name="userType"
                                        value="business"
                                        label="Business"
                                        checked={selectedOption === 'business'}
                                        onChange={handleRadioChange}
                                    />
                                </div>
                            </div>
                            {
                                selectedOption === "home" &&
                                <div className="mt-[15px] flex flex-col gap-[8px]">
                                    <span className="text-poppins text-[#0e0f19] text-lg font-bold">
                                        Is this a home or business?
                                    </span>
                                    <div className="flex flex-row gap-[12px] w-full">
                                        <RadioButton
                                            id="own"
                                            name="ownership"
                                            value="own"
                                            label="Own"
                                            checked={selectedSecOption === 'own'}
                                            onChange={handleSecRadioChange}
                                        />
                                        <RadioButton
                                            id="ownership"
                                            name="rent"
                                            value="rent"
                                            label="Rent"
                                            checked={selectedSecOption === 'rent'}
                                            onChange={handleSecRadioChange}
                                        />
                                    </div>
                                </div>
                            }
                            <div 
                                className={`flex w-full justify-center items-center cursor-pointer py-[16px] rounded-lg mb-[20px] ${isFormValid === true ? "bg-[#0e0f19]" : "bg-[#dbdfe6]"}`} 
                                onClick={() => {
                                    if (isFormValid) {
                                        toAboutAddress();
                                    }
                                }}
                            >
                                <span className={`text-poppins text-base font-[700] uppercase ${isFormValid === true ? "text-white" : " text-black opacity-40"}`}>
                                    Continue
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            < Footer />
        </>
    );
};

export default Availability;
