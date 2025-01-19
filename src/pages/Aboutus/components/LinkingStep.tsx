interface LinkingStepProps {
  num: number;
  title: string;
  desc: string;
}

const LinkingStep: React.FC<LinkingStepProps> = ({ num, title, desc }) => {
  return (
    <>
      <div className="flex gap-8">
        <div className="flex flex-col justify-center items-center">
          <div>
            <span className="border border-2 border-gray-300 flex justify-center items-center w-[30px] h-[30px] text-gray-800 font-semibold rounded-full">
              {num}
            </span>
          </div>
            <div className="w-[1px] grow bg-gray-300"></div>
        </div>
        <div className="flex flex-col gap-2 pb-7">
          <h3 className="text-xl font-semibold text-slate-700">{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default LinkingStep;
