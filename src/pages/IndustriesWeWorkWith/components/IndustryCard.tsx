interface IndustryCardProps {
  image: string;
  title: string;
  desc: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ image, title, desc }) => {
  return (
    <div className="px-6 sm:px-0 w-full sm:w-[375px] max-w-[500px] flex">
      <div className="flex flex-col gap-8 grow">
        <div className="group relative flex flex-col grow justify-center items-center py-4 gap-2">
          <div className="image-box group-hover:opacity-0 ">
            <img
              src={image}
              alt={title}
              className="w-[375px] h-[250px] overflow-hidden object-cover"
            />
          </div>
          <div className="w-full h-full flex justify-center items-center group-hover:opacity-0">
            <h4 className="font-bold max-w-[220px] text-center transition-colors uppercase">
              {title}
            </h4>
          </div>

          <div className="description-box absolute top-0 left-0 w-full h-full flex justify-center items-center p-5 shadow-[0px_0px_18px_3px_rgba(0,0,0,0.1)] bg-white text-black rounded-2xl p-4 opacity-0 group-hover:opacity-85 transition-opacity duration-300">
            <p className="text-center">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
