import Bulb from "../../../assets/images/bulb.png";
import InputField from "../../../components/InputField";
import { useState } from "react";

interface Step1Props {
    zipcode: string;
    setZipcode: (zipcode: string) => void;
    handleNextStep: () => void;
}

const StepArea: React.FC<Step1Props> = ({ zipcode, setZipcode, handleNextStep }) => {

    const [email, setEmail] = useState("");

    const zipRegex = /^\d{5}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isZipValid = zipRegex.test(zipcode);
    const isEmailValid = emailRegex.test(email);

    const isFormValid = isZipValid && isEmailValid;

    return (
        <>
            <div className="w-full bg-[#f5f5f7] flex flex-col gap-[30px] z-30">
                <div className="w-full flex justify-center items-center">
                    <img src={Bulb} alt="Bulb Icon" className="h-[185px]" />
                </div>

                <div className="flex flex-col gap-3">
                    <h2 className="text-poppins text-black text-3xl font-bold text-center">
                        Are you overpaying for energy?
                    </h2>
                    <span className="text-poppins text-gray-600 text-base text-center">
                        Did you know there are hundreds of rates in some areas? Let us compare plans and shop for you to get our best rate - for free.
                    </span>
                </div>

                <div className="flex flex-col gap-[16px]">
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
                >
                    <span className={`text-poppins text-base font-[700] uppercase ${isFormValid ? "text-white" : " text-black opacity-40"}`} onClick={() => handleNextStep()}>
                        Check My Eligibility
                    </span>
                </div>
            </div >
        </>
    );
}


export default StepArea;