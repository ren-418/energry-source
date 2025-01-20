// import { useNavigate } from "react-router-dom";

interface RedirectBoxProps {
    title: string;
    buttonText: string;
    redirectTo: string;
}

const RedirectBox: React.FC<RedirectBoxProps> = ({ title, buttonText, redirectTo }) => {
    // const naviate = useNavigate();

    const handleClickButton = () => {
        // naviate(redirectTo);
        window.open(redirectTo, '_blank');
    }

    return (
        <>
            <div className="border bg-primary border-gray-500 shadow-lg max-w-[500px] w-full h-[200px] flex flex-col justify-around items-center py-4 my-2 md:m-2">
                <h3 className="text-white text-xl font-semibold text-center">{title}</h3>
                <div
                    className="border-2 border-white rounded-full px-8 py-3 text-white cursor-pointer hover:text-primary hover:bg-white duration-300 text-center"
                    onClick={() => {handleClickButton()}}
                >{buttonText}</div>
            </div>
        </>
    )
}

export default RedirectBox;