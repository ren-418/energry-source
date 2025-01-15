import { useState } from "react";
import InputInfo from "./subpages/InputInfo";
import InputZipcode from "./subpages/InputZipcode";
import End from "./subpages/End";
import ImgLogo from "../../assets/images/logo.png";

const UnsupportedRegister: React.FC = () => {

    const [currentPage, setCurrentPage] = useState<'inputInfo' | 'inputZipcode' | 'end'>('inputInfo');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [zipcode, setZipcode] = useState('');

    const handleNext = () => {
        setCurrentPage(currentPage === 'inputInfo' ? 'inputZipcode' : 'end');
    }

    return (
        <>
            <div className="w-[100vw] h-[100vh] bg-[#b5e7d6]">
                <div className="fixed top-[20px] left-[20px] w-full h-[63px] bg-white flex justify-start items-center bg-transparent z-10">
                    <img src={ImgLogo} alt="logo" className="h-[63px]" />
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <InputInfo show={currentPage === 'inputInfo'} handleNext={handleNext} firstName={firstName} lastName={lastName} email={email} setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} />
                    <InputZipcode show={currentPage === 'inputZipcode'} handleNext={handleNext} zipcode={zipcode} setZipcode={setZipcode} />
                    <End show={currentPage === 'end'} />
                </div>
            </div>
        </>
    )
}

export default UnsupportedRegister;