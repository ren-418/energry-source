
import Renewables_image from "../../../assets/images/renewables.png";
import { useNavigate } from "react-router-dom";

interface StepUnsupportedProps {
    setCurrentStep: (step: 'area' | 'utility' | 'enrollment' | 'aboutRegister' | 'unsupported') => void;
}

const StepUnsupported: React.FC<StepUnsupportedProps> = ({ setCurrentStep }) => {
    const navigate = useNavigate();

    const toUnsupportedRegister = () => {
        navigate('/unsupported-register');
    }

    const backToArea = () => {
        setCurrentStep('area');
    }

    return (
        <div className="w-full bg-[#f5f5f7] flex flex-col justify-between gap-[15px] z-30 h-full">
            <div className="flex flex-col gap-[40px]">
                <div className="w-full mt-[-20px]">
                    <div className="rounded-[50px] w-[24px] h-[24px] bg-none hover:bg-[#6e7385] hover:opacity-60 transition-2s cursor-pointer flex justify-center items-center" onClick={backToArea}>
                        <svg className="w-[18px] h-[18px]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WestIcon"><path d="m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"></path></svg>
                    </div>
                </div>
                <div className="mt-[30%] w-full flex justify-center">
                    <img src={Renewables_image} alt="" className="max-h-[120px] max-w-[201px]" />
                </div>
                <div className="flex flex-col gap-[12px] w-full">
                    <h2 className="text-[#0e0f19] text-poppins text-3xl text-center">
                        Find out what incentives and savings are available in your area.
                    </h2>
                    <span className="text-[#404350] text-base text-poppins text-center">
                        Arbor helps anyone with a power bill take advantage of the best energy incentives, savings, and renewables in their area. It&apos;s 100% free.
                    </span>
                </div>
                <div className={`flex w-full justify-center items-center cursor-pointer py-[16px] rounded-lg mb-[20px] bg-[#0e0f19]`} >
                    <span className={`text-poppins text-base font-[700] uppercase text-white`} onClick={toUnsupportedRegister}>
                        Check Available Savings
                    </span>
                </div>
            </div>

        </div>
    )
}

export default StepUnsupported;
