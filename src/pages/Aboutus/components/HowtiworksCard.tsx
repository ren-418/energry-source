interface HowitworksCardProps {
  num: number;
  title: string;
  desc: string;
}

const HowitworksCard: React.FC<HowitworksCardProps> = ({
  num,
  title,
  desc,
}) => {
  return (
    <>
      <div className="flex flex-col p-6 gap-6 bg-white rounded-xl">
        <div>
          <span className="rounded-full py-2 px-5 bg-secondary">{num}</span>
        </div>
        <h3 className="text-2xl font-semibold text-gray-700">{title}</h3>
        <p className="text-base text-gray-600">{desc}</p>
      </div>
    </>
  );
};

export default HowitworksCard;
