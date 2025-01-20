interface ButtonProps {
  title: string;
  type: "filled" | "bordered";
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, type, onClick }) => {
  const goToSchedule = () => {
    window.open("https://calendar.app.google/zkQmsRiCvuaRiM8Z7", "_blank");
  };

  return (
    <>
      {
        <button
          className={`px-8 py-3 font-semibold ${
            type === "bordered" && "border border-secondary border-2"
          } ${
            type === "filled" && "bg-secondary"
          }  rounded-full duration-300 hover:bg-teal-400`}
          onClick={() => {goToSchedule(); onClick();}}
        >
          {title}
        </button>
      }
    </>
  );
};

export default Button;
