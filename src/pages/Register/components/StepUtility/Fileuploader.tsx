import React, {
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
    ChangeEvent,
    useRef,
} from "react";

import ImgUpload from "../../../../assets/images/upload-bill.webp"

interface InputFieldProps {
    id: string;
    name: string;
    label: string;
    value: File | null;
    onChange: Dispatch<SetStateAction<File | null>>;
    validationRegex?: RegExp;
    errorMessage?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    id,
    name,
    label,
    value,
    onChange,
    validationRegex,
    errorMessage,
}) => {
    // const [isFocused, setIsFocused] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [fileName, setFileName] = useState<string>("");
    const [uploadedImgUrl, setUploadedImgUrl] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setFileName(value ? value.name : "");
    }, [value]);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // if (type === "file") {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setFileName(file.name);
            setUploadedImgUrl(URL.createObjectURL(file));
            onChange(file);
            if (validationRegex) {
                setIsValid(validationRegex.test(file.name));
            } else {
                setIsValid(true);
            }
        } else {
            setFileName("");
            setUploadedImgUrl("");
            onChange(null);
            setIsValid(true);
        }
    };

    const handleRemoveFile = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation();
        setFileName("");
        setUploadedImgUrl("");
        onChange(null);
        setIsValid(true);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="flex justify-center gap-1 w-full">
            <div className=" w-[150px] h-[80px] flex justify-center items-center bg-white border border-gray-300 rounded-lg p-2 mt-2 cursor-pointer overflow-hidden">
                <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
                    <img
                        src={uploadedImgUrl || ImgUpload}
                        alt="Upload Bill"
                        className="w-full"
                        onClick={() => fileInputRef.current?.click()}
                    />
                    {uploadedImgUrl && (
                        <button
                            type="button"
                            onClick={handleRemoveFile}
                            className="absolute top-1 right-1 text-gray-500 text-[10px] hover:text-red-500 focus:outline-none"
                            aria-label="Remove selected file"
                        >
                            ✖️
                        </button>
                    )}
                </div>
            </div>
            <div
                className={`hidden flex justify-between items-center w-full rounded-lg border h-[54px] bg-white relative transition-colors cursor-pointer ${isValid
                    ? "border-[#dbdfe6]"
                    : "border-red-500"
                    }`}
            >
                <div className="relative w-full h-full px-[14px] py-2 flex items-center hidden">

                    <>
                        <input
                            id={id}
                            name={name}
                            type="file"
                            onChange={handleChange}
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                        />
                        <label
                            htmlFor={id}
                            className={`absolute left-[14px] top-[15px] pointer-events-none transition-all ${fileName
                                ? `text-xs top-[5px] left-[10px] ${!isValid ? "text-red-500" : "text-gray-400"
                                } bg-white`
                                : `text-base top-2.5 ${!isValid ? "text-red-500" : "text-gray-600"
                                }`
                                }`}
                        >
                            {label}
                        </label>
                        <span
                            className={`text-black mt-[20px] ${fileName ? "text-md truncate" : "text-md"} flex-1`}
                            title={fileName}
                        >
                            {fileName || ""}
                        </span>

                    </>
                </div>
            </div>
            {!isValid && errorMessage && (
                <span className="text-red-500 text-xs px-3 text-poppins">
                    {errorMessage}
                </span>
            )}
        </div>
    );
};

export default InputField;
