
interface BenefitCardProps {
    title: string;
    description: string;
    imgUrl: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, imgUrl }) => {
    return (
        <>
            <div className="p-3 w-[33.3333%] flex min-w-[300px] grow">
                <div className="flex flex-col gap-6 border-secondary border p-6 grow">
                    <div>
                        <img src={imgUrl} alt={title} className="rounded-full w-[44px] h-[44px]" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    </div>
                    <div className="text-base text-gray-700">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BenefitCard;