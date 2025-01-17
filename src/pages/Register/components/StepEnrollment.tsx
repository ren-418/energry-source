import Globe_image from "../../../assets/images/signup/globe.webp";
import Monitor_image from "../../../assets/images/signup/monitor.webp";
import Compare_image from "../../../assets/images/signup/compare.webp";
import Save_image from "../../../assets/images/signup/save.webp";
import Uploadbill_image from "../../../assets/images/signup/upload-bill.webp";

interface StepEnrollmentProps {
    handleNextStep: () => void;
    handlePreviousStep: () => void;
    selectedUtility: string;
}


const StepEnrollment: React.FC<StepEnrollmentProps> = ({ handlePreviousStep, selectedUtility, handleNextStep }) => {

    return (
        <>
            <div className="w-full bg-[#f5f5f7] flex flex-col justify-between gap-[10px] z-30 h-full overflow-auto">
                <div className="w-full bg-[#f5f5f7]">
                    <div className="rounded-[50px] w-[24px] h-[24px] bg-none hover:bg-[#6e7385] hover:opacity-60 transition-2s cursor-pointer flex justify-center items-center" onClick={() => handlePreviousStep()}>
                        <svg className="w-[18px] h-[18px]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WestIcon"><path d="m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"></path></svg>
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <div className="flex flex-col gap-1">
                        <div className="w-full flex justify-center items-center">
                            <img src={Globe_image} alt="globe image" className="h-[90px] w-[160px]" />

                        </div>
                        <div className="flex flex-col gap-[12px] justify-center items-center">
                            <h3 className="text-poppins text-2xl text-black font-bold text-center">
                                We&apos;re working on it.
                            </h3>
                            <span className="text-poppins text-lg text-black font-[700]">
                                Searching for available rates in your area.
                            </span>
                        </div>
                        <div className="flex w-full">
                            <span className="text-[#6e7385] text-poppins text-xs">
                                Here&apos;s how it works.
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <div className="flex flex-row gap-[10px]">
                            <div className="pt-2">
                                <img src={Monitor_image} alt="" className="max-w-[70px] w-[70px]" />
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <span className="text-[#0e0f19] text-base text-poppins font-[700]">
                                    {/* We monitor the market */}
                                    We Track The Market For You
                                </span>
                                <span className="text-[#404350] text-sm text-poppins">
                                    {/* We scan the market to find better rates for {selectedUtility} customers. */}
                                    We monitor the market to find the best energy supplier rates in {selectedUtility} company.
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-row gap-[10px]">
                            <div className="pt-2">
                                <img src={Compare_image} alt="" className="max-w-[70px] w-[70px]" />
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <span className="text-[#0e0f19] text-base text-poppins font-[700]">
                                    {/* We help you select */}
                                    Your choice
                                </span>
                                <span className="text-[#404350] text-sm text-poppins">
                                    {/* You can choose from our top pick or we can automatically do it for you. */}
                                    Choose from our top recommendations, or let us handle it for you automatically.
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[10px]">
                            <div className="pt-2">
                                <img src={Save_image} alt="" className="max-w-[70px] w-[70px]" />
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <span className="text-[#0e0f19] text-base text-poppins font-[700]">
                                    {/* You save */}
                                    Start saving
                                </span>
                                <span className="text-[#404350] text-sm text-poppins">
                                    {/* Start saving with no commitment or change to your {selectedUtility} service. */}
                                    Enjoy savings with no commitment or change your energy service to {selectedUtility} company.
                                </span>
                            </div>

                        </div>

                        <div className="flex flex-row gap-[10px]">
                            <div className="pt-2">
                                <img src={Uploadbill_image} alt="" className="max-w-[70px] w-[70px]" />
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <span className="text-[#0e0f19] text-base text-poppins font-[700]">
                                    {/* Upload energy bill here */}
                                    Upload your energy bill
                                </span>
                                <span className="text-[#404350] text-sm text-poppins">
                                    {/* Utility Bills will speed the process up to ensure You qualify for the Decreased energy costs. */}
                                    Submitting your utility bill will help expedite the process and ensure you qualify for the reduced energy costs.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`flex w-full justify-center items-center cursor-pointer py-[16px] rounded-lg bg-[#0e0f19]`} onClick={() => handleNextStep()}>
                    <span className={`text-poppins text-base font-[700] uppercase text-white`}>
                        Help Me Save
                    </span>
                </div>
            </div>
        </>
    )
}

export default StepEnrollment;