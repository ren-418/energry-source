import { useState } from "react";
import StepArea from "./components/StepArea";
import StepUtility from "./components/StepUtility/StepUtility";
import StepEnrollment from "./components/StepEnrollment";
import StepAboutRegister from "./components/StepAboutRegister";
import StepUnsupported from "./components/StepUnsupported";

const Register: React.FC = () => {

    const [zipcode, setZipcode] = useState('');
    const [fistName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [selectedUtility, setSelectedUtility] = useState('');

    const [currentStep, setCurrentStep] = useState<'area' | 'utility' | 'enrollment' | 'aboutRegister' | 'unsupported'>('area');


    const handleNextStep = () => {
        setCurrentStep(prevStep => (prevStep === 'area' ? 'utility' : prevStep === 'utility' ? 'enrollment' : 'aboutRegister'));
    };

    const handlePreviousStep = () => {
        setCurrentStep(prevStep => (prevStep === 'aboutRegister' ? 'enrollment' : prevStep === 'enrollment' ? 'utility' : 'area'));
    };


    return (
        <div className="w-[100vw] h-[100vh]">
            <div className="w-full h-full bg-black/80 flex justify-center items-center">
                <div className="flex flex-col w-full md:w-[400px] h-full md:h-[750px] px-[16px] py-[16px] md:rounded-lg bg-[#f5f5f7] z-10 overflow-auto">
                    {currentStep === 'area' && <StepArea zipcode={zipcode} setZipcode={setZipcode} email={email} setEmail={setEmail} handleNextStep={handleNextStep} />}
                    {currentStep === 'utility' && <StepUtility handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} setCurrentStep={setCurrentStep} setSelectedUtility={setSelectedUtility} zipcode={zipcode} />}
                    {currentStep === 'enrollment' && <StepEnrollment handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} selectedUtility={selectedUtility} />}
                    {currentStep === 'aboutRegister' && <StepAboutRegister handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} firstname={fistName} setFirstName={setFirstName} lastname={lastName} setLastName={setLastName} email={email} setEmail={setEmail} phonenumber={phoneNumber} setPhoneNumber={setPhoneNumber} />}
                    {currentStep === 'unsupported' && <StepUnsupported setCurrentStep={setCurrentStep} />}
                </div>
            </div>
        </div>
    )
}

export default Register;