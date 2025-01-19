
interface FaqCardProps {
    title: string;
    desc: string;
}

const FaqCard: React.FC<FaqCardProps> = ({title, desc}) => {
    return (
        <>
            <div className="flex flex-col gap-4 p-4 bg-[#f1f3f9]">
                <h4 className="text-xl font-semibold text-slate-700" >{title}</h4>
                <p className="text-gray-700">{desc}</p>
            </div>
        </>
    )
}

export default FaqCard;