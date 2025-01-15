
interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
    return (
        <button className="bg-gray-900 text-white px-[20px] py-[6px] rounded-[5px] text-[14px] md:text-[20px] font-bold" onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button;