interface IndustryCardProps {
  image: string;
  title: string;
  desc: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ image, title, desc }) => {
  return (
    <>
      <div className="px-6 sm:px-0 w-full sm:w-[375px] max-w-[500px]">
        <div className="flex flex-col gap-8">
          <div className="relative flex justify-center items-center">
            <div>
              <img src={image} alt={title} className="w-[375px] h-[375px] overflow-hidden object-cover" />
            </div>
            <div className="absolute w-full h-full flex justify-center items-center z-1 top-0 left-0">
                <h4 className="text-white text-2xl font-bold max-w-[220px] text-center text-gray-700" >{title}</h4>
            </div>
          </div>
          <div>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryCard;
