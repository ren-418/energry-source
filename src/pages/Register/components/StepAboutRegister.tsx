import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import InputForm from "../../../components/InputForm";
import InputField from "../../../components/InputField";
import Fileuploader from "./StepUtility/Fileuploader";
import DocPrivacyPolicy from "../../../assets/docs/PRIVACY POLICY MSE.pdf";
import DocLetterOfAuthorization from "../../../assets/docs/LETTER OF AUTHORIZATION FOR WEBSITE.pdf";
import DocTermsOfService from "../../../assets/docs/Terms Of Service.pdf";

import config from "../../../config";
const { backendUrl } = config;

interface StepAboutRegisterProps {
    handleNextStep: () => void;
    handlePreviousStep: () => void;
    firstname: string;
    setFirstName: Dispatch<SetStateAction<string>>;
    lastname: string;
    setLastName: Dispatch<SetStateAction<string>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    phonenumber: string;
    setPhoneNumber: Dispatch<SetStateAction<string>>;
    bill: File | null;
    setBill: Dispatch<SetStateAction<File | null>>;
}

const StepAboutRegister: React.FC<StepAboutRegisterProps> = ({ handlePreviousStep, firstname, setFirstName, lastname, setLastName, email, setEmail, phonenumber, setPhoneNumber, bill, setBill }) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    const isFormValid = isEmailValid && firstname && lastname && phonenumber;

    // const handleSubmit = () => {
    //     window.location.href = "https://calendar.app.google/zkQmsRiCvuaRiM8Z7";
    // }

    const handlePrivacyPolicy = () => {
        window.open(DocPrivacyPolicy, "_blank");
    }

    const handleLetterOfAuthorization = () => {
        window.open(DocLetterOfAuthorization, "_blank");
    }

    const handleTermsOfService = () => {
        window.open(DocTermsOfService, "_blank");
    }

    const handleSubmit = async () => {
        // const data = new FormData();
        // data.append('email', email);
        // data.append('firstname', firstname);
        // data.append('lastname', lastname);
        // data.append('phonenumber', phonenumber);
        // if (bill) data.append('bill', bill);

        const data = {
            email, firstname, lastname, phonenumber
        }

        try {
            axios.post(`${backendUrl}/api/auth/register`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    toast.success(JSON.stringify(response.data), {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                })
                .catch(error => {
                    toast.error(JSON.stringify(error.response.data.error), {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                })
        } catch (error) {
            console.error('Error submitting data:', error);
            toast.error(JSON.stringify(error), {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    return (
        <div className="overflow-auto">
            <div className="w-full bg-[#f5f5f7]">
                <div className="rounded-[50px] w-[24px] h-[24px] bg-none hover:bg-[#6e7385] hover:opacity-60 transition-2s cursor-pointer flex justify-center items-center" onClick={() => handlePreviousStep()}>
                    <svg className="w-[18px] h-[18px]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WestIcon"><path d="m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"></path></svg>
                </div>
            </div>
            <div className="flex flex-col gap-[12px]">
                <h3 className="text-[#0e0f19] text-poppins text-2xl pt-[15px] font-[700]">
                    Create your account
                </h3>
                <span className="text-[#0e0f19] text-poppins text-sm py-[8px]">
                    {/* Sign up and start saving money on your utility bill. We&apos;ll never sell your personal info. */}
                    Sign up with us, and we&apos;ll do the heavy lifting so you can start saving! Rest assured, we keep all personal information secured.
                </span>
                <div className="flex flex-col gap-[10px]">
                    <InputForm

                        id="firstname"
                        name="firstname"
                        type="text"
                        label="First Name"
                        value={firstname}
                        onChange={setFirstName}
                    />
                    <InputForm
                        id="lastname"
                        name="lastname"
                        type="text"
                        label="Last Name"
                        value={lastname}
                        onChange={setLastName}
                    />
                    <InputField
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        value={email}
                        onChange={setEmail}
                        validationRegex={emailRegex}
                        errorMessage=""
                    />
                    <InputForm
                        id="phonenumber"
                        name="phonenumber"
                        type="text"
                        label="Phone Number"
                        value={phonenumber}
                        onChange={setPhoneNumber}
                    />
                    <Fileuploader
                        id="phonenumber"
                        name="upload bill"
                        label="Upload Utility (Image of upload file) Bill Here"
                        value={bill}
                        onChange={setBill}
                        errorMessage="Please select a valid image file."
                    />
                </div>
                <div className="flex flex-col gap-[13px]">
                    <span className="text-xs text-poppins text-[#0e0f19] text-center font-bold">
                        Mill Street Energy
                    </span>
                    <span className="text-xs text-poppins text-[#6e7385] text-center leading-[20px]">
                        By clicking “Agree and Continue” I am agreeing to contract electronically and assenting to Mill Street Energy&apos;s <span className="text-[#056100] underline cursor-pointer" onClick={handleTermsOfService}>Terms of Service,</span> <span className="text-[#056100] underline cursor-pointer" onClick={handlePrivacyPolicy}> Privacy Policy,</span> and <span className="text-[#056100] underline cursor-pointer" onClick={handleLetterOfAuthorization}>Letter&nbsp;of&nbsp;authorization.</span>
                    </span>
                </div>
                <div className={`flex w-full justify-center items-center cursor-pointer py-[16px] rounded-lg mb-[20px] ${isFormValid ? "bg-[#0e0f19]" : "bg-[#dbdfe6]"}`} onClick={() => handleSubmit()}>
                    <span className={`text-poppins text-base font-[700] uppercase ${isFormValid ? "text-white" : " text-black opacity-40"}`}>
                        Agree and continue
                    </span>
                </div>
            </div>
        </div>
    )
}

export default StepAboutRegister;