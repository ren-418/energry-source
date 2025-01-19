interface ButtonProps {
  title: string;
  type: "filled" | "bordered";
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, type, onClick }) => {
  return (
    <>
      {
        <button
          className={`px-8 py-3 font-semibold ${
            type === "bordered" && "border border-secondary border-2"
          } ${type === "filled" && "bg-secondary"}  rounded-full duration-300 hover:bg-teal-400`}
          onClick={() => onClick()}
        >
          {title}
        </button>
      }
    </>
  );
};

export default Button;
