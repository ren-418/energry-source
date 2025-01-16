import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../../../components/InputForm";
import InputField from "../../../components/InputField";

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
}

const StepAboutRegister: React.FC<StepAboutRegisterProps> = ({ handlePreviousStep, firstname, setFirstName, lastname, setLastName, email, setEmail, phonenumber, setPhoneNumber }) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    const isFormValid = isEmailValid && firstname && lastname && phonenumber;

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (isFormValid) {
            navigate("/");
        } else {
            console.log("Form is invalid");
        }
    }

    return (
        <div className="overflow-auto">
            <div className="w-full bg-[#f5f5f7]">
                <div className="rounded-[50px] w-[24px] h-[24px] bg-none hover:bg-[#6e7385] hover:opacity-60 transition-2s cursor-pointer flex justify-center items-center" onClick={() => handlePreviousStep()}>
                    <svg className="w-[18px] h-[18px]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WestIcon"><path d="m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"></path></svg>
                </div>
            </div>
            <div className="flex flex-col gap-[12px]">
                <h3 className="text-[#0e0f19] text-poppins text-2xl pt-[20px] font-[700]">
                    Create your account
                </h3>
                <span className="text-[#0e0f19] text-poppins text-base pt-[8px] pb-[16px]">
                    Sign up and start saving money on your utility bill. We&apos;ll never sell your personal info.
                </span>
                <div className="flex flex-col gap-[12px]">
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
                </div>
                <div className="flex flex-col gap-[13px]">
                    <span className="text-base text-poppins text-base text-[#404350]">
                        For your security, we&apos;ll email or text you a code whenever you want to access your account.
                    </span>
                    <span className="text-xs text-poppins text-[#0e0f19] text-center font-bold">
                    Mill Street Energy
                    </span>
                    <span className="text-xs text-poppins text-[#6e7385] text-center leading-[20px]">
                        By clicking “Agree and Continue” I am agreeing to contract electronically and assenting to Mill Street Energy&apos;s <span className="text-[#056100] underline cursor-pointer">Terms of Service,</span> <span className="text-[#056100] underline cursor-pointer">Privacy Policy,</span> and <span className="text-[#056100] underline cursor-pointer">Letter of authorization.</span>
                    </span>
                </div>
                <div className={`flex w-full justify-center items-center cursor-pointer py-[16px] rounded-lg mb-[20px] ${isFormValid ? "bg-[#0e0f19]" : "bg-[#dbdfe6]"}`} onClick={() => handleSubmit()}>
                    <span className={`text-poppins text-base font-[700] uppercase ${isFormValid ? "text-white" : " text-black opacity-40"}`}>
                        Check My Eligibility
                    </span>
                </div>
            </div>
        </div>
    )
}

export default StepAboutRegister;