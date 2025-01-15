import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Eversource from "../../../assets/images/eversource.png"
import UI_image from "../../../assets/images/united.png"

interface StepUtilityProps {
    handleNextStep: () => void;
    handlePreviousStep: () => void;
}

const StepUtility: React.FC<StepUtilityProps> = ({ handleNextStep, handlePreviousStep }) => {
    const navigate = useNavigate();
    const [showUI, setShowUI] = useState<boolean>(false)
    
    const UIchange = (): void => {
        setShowUI((prevShowUI) => !prevShowUI);
    }

    const toUnsupported = (): void => {
        navigate('/unsupported-register');
    }

    return (
        <>
            <div className="w-full bg-[#f5f5f7] flex flex-col justify-between gap-[15px] z-30 h-full">
                <div className="flex flex-col gap-[15px]">
                    <div className="w-full mt-[-20px]">
                        <div className="rounded-[50px] w-[24px] h-[24px] bg-none hover:bg-[#6e7385] hover:opacity-60 transition-2s cursor-pointer flex justify-center items-center" onClick={() => handlePreviousStep()}>
                            <svg className="w-[18px] h-[18px]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WestIcon"><path d="m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"></path></svg>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-[32px]">
                        <div className="flex flex-col gap-[12px]">
                            <h3 className="text-poppins text-2xl text-black font-bold">
                                Select your electric utility
                            </h3>
                            <span className="text-poppins text-base text-black">
                                Select your utility so we can check if you&apos;re overpaying for energy.
                            </span>
                        </div>
                        <div className="">
                            <span className="text-[#6e7385] text-poppins text-xs">
                                Top Result for 06131
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <div className="cursor-pointer flex flex-row justify-between items-center py-[17px] px-[16px] bg-white box-shadow rounded-lg transition-colors transition-shadow duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]" style={{ boxShadow: " rgba(14, 15, 25, 0.06) 0px 5px 10px" }} onClick={() => handleNextStep()}>
                            <div className="flex flex-row gap-[16px] items-center">
                                <div className="h-[44px] flex justify-center items-center">
                                    <img alt="EverSource" src={Eversource} className="w-[44px] h-[44px]" />
                                </div>
                                <div className="">
                                    <span className="text-black text-[#0e0f19] text-base text-poppins">Eversource</span>
                                </div>
                            </div>
                            <div className="">
                                <svg className="w-[18px] h-[18px]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EastIcon"><path d="m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path></svg>
                            </div>
                        </div>
                        {showUI &&
                            <div className="cursor-pointer flex flex-row justify-between items-center py-[17px] px-[16px] bg-white box-shadow rounded-lg transition-colors transition-shadow duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]" style={{ boxShadow: " rgba(14, 15, 25, 0.06) 0px 5px 10px" }} onClick={() => handleNextStep()}>
                                <div className="flex flex-row gap-[16px] items-center">
                                    <div className="h-[44px] flex justify-center items-center">
                                        <img alt="United Illuminating" src={UI_image} className="w-[44px] h-[44px]" />
                                    </div>
                                    <div className="">
                                        <span className="text-black text-[#0e0f19] text-base text-poppins">United Illuminating</span>
                                    </div>
                                </div>
                                <div className="">
                                    <svg className="w-[18px] h-[18px]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EastIcon"><path d="m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path></svg>
                                </div>
                            </div>
                        }

                    </div>
                </div>
                <div className="flex w-full justify-center font-bold">
                    {showUI == false ?
                        <span className="text-black text-sm text-poppins underline cursor-pointer" onClick={UIchange}>
                            Show More Utilities
                        </span>
                        :
                        <span className="text-[#056100] text-sm text-poppins underline cursor-pointer" onClick={toUnsupported}>
                            My utility is not listed
                        </span>
                    }

                </div>
            </div>
        </>
    )
}

export default StepUtility;