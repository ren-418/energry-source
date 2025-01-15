import { useState } from "react";
import { forwardRef, useImperativeHandle } from "react";

interface InputFieldProps {
    id: string;
    type: string;
    label: string;
    placeholder: string;
    isRequired?: boolean;
    value: string;
    onChange: (value: string) => void;
    errorMessage?: string;
}

export interface InputRef {
    checkValidity: () => boolean;
}

const InputField = forwardRef<InputRef, InputFieldProps>(
    ({ id, type, label, placeholder, isRequired, value, onChange, errorMessage }, ref) => {
        const [isValid, setIsValid] = useState(true);

        const checkValid = (forceValue?: string) => {
            setIsValid(isRequired && (!value && !forceValue) ? false : true);
            return isRequired && (!value && !forceValue) ? false : true;
        }

        useImperativeHandle(ref, () => ({
            checkValidity: checkValid
        }));

        return (
            <>
                <div className="flex flex-col gap-[8px]">
                    <label htmlFor={id} className="text-gray-900 text-[16px] md:text-[20px]">
                        {label} {isRequired && '*'}
                    </label>
                    <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => { onChange(e.target.value); checkValid(e.target.value); }}
                        className={`bg-transparent ${!isValid && 'border-[red]'} border-b-[1px] focus:border-b-[2px] border-gray-500 focus:border-gray-900 pb-[2px] focus:pb-[4px] outline-none text-[18px] md:text-[24px] pb-[5px] placeholder-gray-500 text-gray-900`}
                    />
                    <div className="h-[20px]">
                        {!isValid && <p className="text-red-500 text-[12px] md:text-[16px]">{errorMessage ?? 'Please fill this in'}</p>}
                    </div>
                </div>
            </>
        );
    })

export default InputField;