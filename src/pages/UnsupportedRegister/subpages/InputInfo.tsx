import InputField, { InputRef } from "../components/InputField";
import Button from "../components/Button";
import { useRef } from "react";

interface InputInfoProps {
    show: boolean;
    handleNext: () => void;
    firstName: string;
    lastName: string;
    email: string;
    setFirstName: (value: string) => void;
    setLastName: (value: string) => void;
    setEmail: (value: string) => void;
}

const InputInfo: React.FC<InputInfoProps> = ({ show, handleNext, firstName, lastName, email, setFirstName, setLastName, setEmail }) => {

    const firstNameRef = useRef<InputRef>(null);
    const lastNameRef = useRef<InputRef>(null);
    const emailRef = useRef<InputRef>(null);

    const handleOK = () => {
        const firstNameValid = firstNameRef.current?.checkValidity();
        const lastNameValid = lastNameRef.current?.checkValidity();
        const emailValid = emailRef.current?.checkValidity();
        
        if (firstNameValid && lastNameValid && emailValid) {
            handleNext();
        }
    }

    return (
        <>
            <div
                className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#b5e7d6] overflow-hidden duration-300"
                style={
                    show ? {
                        maxHeight: '100vh',
                        opacity: 1,
                    } : {
                        maxHeight: '0',
                        opacity: 0,
                    }
                }
            >
                <div className="max-w-[720px] w-full flex flex-col gap-[32px]">
                    <div className="text-[22px] text-gray-900">
                        We are currently not available in your area, but we are working on being there soon. Sign up for our waitlist to be notified when we are available.This question is required.*
                    </div>
                    <div className="flex flex-col gap-[30px]">
                        <InputField
                            ref={firstNameRef}
                            id="firstName"
                            type="text"
                            label="First name"
                            isRequired
                            placeholder="Jane"
                            value={firstName}
                            onChange={setFirstName}
                        />
                        <InputField
                            ref={lastNameRef}
                            id="lastName"
                            type="text"
                            label="Last name"
                            isRequired
                            placeholder="Smith"
                            value={lastName}
                            onChange={setLastName}
                        />
                        <InputField
                            ref={emailRef}
                            id="email"
                            type="email"
                            label="Email"
                            isRequired
                            placeholder="name@example.com"
                            value={email}
                            onChange={setEmail}
                        />
                    </div>
                    <div className="w-full flex justify-start items-center">
                        <Button text="OK" onClick={() => handleOK()} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputInfo;