
interface InputFieldProps {
    id: string;
    type: string;
    label: string;
    placeholder: string;
    isRequired?: boolean;
    value: string;
    onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ id, type, label, placeholder, isRequired, value, onChange }) => {

    return (
        <>
            <div className="flex flex-col gap-[8px]">
                <label htmlFor={id} className="text-gray-900 text-[20px]">
                    {label} {isRequired && '*'}
                </label>
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => { onChange(e.target.value) }}
                    className="bg-transparent border-b-[1px] focus:border-b-[2px] border-gray-500 focus:border-gray-900 pb-[2px] focus:pb-[1px] outline-none text-[24px] pb-[5px] placeholder-gray-500 text-gray-900"
                />
            </div>
        </>
    );
}

export default InputField;