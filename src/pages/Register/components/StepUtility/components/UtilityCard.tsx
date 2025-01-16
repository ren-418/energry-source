import { Dispatch, SetStateAction } from "react";

interface UtilityCardProps {
    handleNextStep: () => void;
    setSelectedUtility: Dispatch<SetStateAction<string>>;
    utility: string;
    image: string;

}

const UtilityCard: React.FC<UtilityCardProps> = ({ handleNextStep, setSelectedUtility, utility, image }) => {
    return (
        <div
            className="cursor-pointer flex flex-row justify-between items-center py-[17px] px-[16px] bg-white box-shadow rounded-lg transition-colors transition-shadow duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ boxShadow: " rgba(14, 15, 25, 0.06) 0px 5px 10px" }}
            onClick={() => { handleNextStep(); setSelectedUtility(utility) }}
        >
            <div className="flex flex-row gap-[16px] items-center">

                <div className="h-[44px] flex justify-center items-center">
                    <img alt={utility} src={image} className="w-[44px]" />
                </div>
                <div className="">
                    <span className="text-black text-[#0e0f19] text-base text-poppins">{utility}</span>
                </div>
            </div>
            <div className="">
                <svg className="w-[18px] h-[18px]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EastIcon"><path d="m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path></svg>
            </div>
        </div>
    )
}

export default UtilityCard;