import { Dispatch, useState, SetStateAction } from "react";
import UtilityCard from "./components/UtilityCard";

// import Eversource from "../../../../assets/images/utilities/eversource.png"
// import ImgNationalGrid from "../../../../assets/images/utilities/national-grid.webp"
// import ImgUnitil from "../../../../assets/images/utilities/unitil.webp"
// import ImgConsumersEnergy from "../../../../assets/images/utilities/consumers-energy.webp"
// import ImgJerseyCentralPowerLight from "../../../../assets/images/utilities/jersey-central-powserlight.webp"
// import ImgDukeEnergyOhio from "../../../../assets/images/utilities/duke-energy.webp"
// import ImgLiberty from "../../../../assets/images/utilities/liberty.webp";
// import ImgDelmarvaPower from "../../../../assets/images/utilities/delmarva-powser.webp";
// import ImgClearriver from "../../../../assets/images/utilities/clear-river.webp";

interface StepUtilityProps {
    handleNextStep: () => void;
    handlePreviousStep: () => void;
    setCurrentStep: Dispatch<SetStateAction<'area' | 'utility' | 'enrollment' | 'aboutRegister' | 'unsupported'>>;
    setSelectedUtility: Dispatch<SetStateAction<string>>;
    zipcode: string;
    utilities: {name: string, logo: string}[]
}



const StepUtility: React.FC<StepUtilityProps> = ({ handleNextStep, handlePreviousStep, setCurrentStep, setSelectedUtility, zipcode, utilities }) => {
    const [showUI, setShowUI] = useState<boolean>(false)

    // const utilities = [
    //     {
    //         utility: 'Eversource',
    //         image: Eversource
    //     },
    //     {
    //         utility: 'National Grid',
    //         image: ImgNationalGrid
    //     },
    //     {
    //         utility: 'Unitil',
    //         image: ImgUnitil
    //     },
    //     {
    //         utility: 'Consumers Energy',
    //         image: ImgConsumersEnergy
    //     },
    //     {
    //         utility: 'Jersey Central Power & Light (JCP&L)',
    //         image: ImgJerseyCentralPowerLight
    //     },
    //     {
    //         utility: 'Duke Energy Ohio',
    //         image: ImgDukeEnergyOhio
    //     },
    //     {
    //         utility: 'Liberty Utilities',
    //         image: ImgLiberty
    //     },
    //     {
    //         utility: 'Delmarva Power',
    //         image: ImgDelmarvaPower
    //     },
    //     {
    //         utility: 'Clear River',
    //         image: ImgClearriver
    //     }

    // ]

    const UIchange = (): void => {
        setShowUI((prevShowUI) => !prevShowUI);
    }

    const toUnsupported = (): void => {
        setCurrentStep('unsupported')
    }

    return (
        <>
            <div className="w-full bg-[#f5f5f7] flex flex-col justify-between gap-[15px] z-30 h-full overflow-auto">
                <div className="flex flex-col gap-[15px]">
                    <div className="w-full">
                        <div className="rounded-[50px] w-[24px] h-[24px] bg-none hover:bg-[#6e7385] hover:opacity-60 transition-2s cursor-pointer flex justify-center items-center" onClick={() => handlePreviousStep()}>
                            <svg className="w-[18px] h-[18px]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WestIcon"><path d="m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"></path></svg>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-[32px]">
                        <div className="flex flex-col gap-[12px]">
                            <h3 className="text-poppins text-2xl text-black font-bold">
                                {/* Select your electric utility */}
                                Choose your current electricity utility company
                            </h3>
                            <span className="text-poppins text-base text-black">
                                {/* Select your utility so we can check if you&apos;re overpaying for energy. */}
                                This will help us to evaluate the surrounding energy suppliers costs and determine if you&apos;re paying more than needed.
                            </span>
                        </div>
                        <div className="">
                            <span className="text-[#6e7385] text-poppins text-xs">
                                Top Result for {zipcode}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <UtilityCard key={utilities[0].name} utility={utilities[0].name} logo={utilities[0].logo} handleNextStep={handleNextStep} setSelectedUtility={setSelectedUtility} />
                        {showUI &&
                            utilities.map((utility, index) => (
                                index !== 0 &&
                                <UtilityCard key={utility.name} utility={utility.name} logo={utility.logo} handleNextStep={handleNextStep} setSelectedUtility={setSelectedUtility} />
                            ))

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