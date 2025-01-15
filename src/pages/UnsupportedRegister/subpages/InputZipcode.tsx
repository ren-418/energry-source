import InputField, { InputRef } from "../components/InputField";
import Button from "../components/Button";
import { useRef } from "react";

interface InputZipcodeProps {
    show: boolean;
    handleNext: () => void;
    zipcode: string;
    setZipcode: (value: string) => void;
}

const InputZipcode: React.FC<InputZipcodeProps> = ({ show, handleNext, zipcode, setZipcode }) => {

    const zipcodeRef = useRef<InputRef>(null);

    const handleOK = () => {
        const zipcodeValid = zipcodeRef.current?.checkValidity();
        if (zipcodeValid) {
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
                    <div className="text-[24px] text-gray-900">
                        What is your zip code?*
                    </div>
                    <div className="w-full flex flex-col gap-[50px]">
                        <InputField
                            ref={zipcodeRef}
                            id="zipcode"
                            type="text"
                            label="Zipcode"
                            isRequired
                            placeholder="Type your answer here"
                            value={zipcode}
                            onChange={setZipcode}
                        />
                    </div>
                    <div className="w-full flex justify-start items-center">
                        <Button text="Submit" onClick={handleOK} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputZipcode;