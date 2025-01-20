import { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import config from "../../../config";
import InputField from "../../../components/InputField";
import ImgPowerLine from "../../../assets/images/signup/powerline.webp";
import ElementLoader from "../../../components/loaders/ElementLoader";

interface Step1Props {
  zipcode: string;
  setZipcode: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  handleNextStep: () => void;
  setUtilities: Dispatch<SetStateAction<{ name: string; logo: string }[]>>;
}

const StepArea: React.FC<Step1Props> = ({
  zipcode,
  setZipcode,
  email,
  setEmail,
  handleNextStep,
  setUtilities,
}) => {
  const zipRegex = /^\d{5}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isZipValid = zipRegex.test(zipcode);
  const isEmailValid = emailRegex.test(email);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (isZipValid) {
      if (email && !isEmailValid) {
        toast.warning("Please input valid email address.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        setIsLoading(true);
        try {
          axios
            .get(`${config.backendUrl}/api/auth/zipcode/${zipcode}`)
            .then((response) => {
              setIsLoading(false);
              if (response.data.utilities) {
                setUtilities(response.data.utilities);
                handleNextStep();
              } else {
                toast.warning('There is no utility', {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }
            })
            .catch((error) => {
              console.error(error);
              toast.error(JSON.stringify(error.response.data.error), {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
              setIsLoading(false);
            });
        } catch (error) {
          console.error(error);
          toast.error(JSON.stringify(error), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          setIsLoading(false);
        }
      }
    } else {
      toast.warning("Please input valid zipcode.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  if (isLoading) return <ElementLoader />;

  return (
    <>
      <div className="w-full bg-[#f5f5f7] flex flex-col gap-[30px] z-30 overflow-auto">
        <div className="w-full flex justify-center items-center mt-4">
          <img src={ImgPowerLine} alt="Bulb Icon" className="h-full" />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-poppins text-black text-2xl font-bold text-center">
            {/* Are you overpaying for energy? */}
            When was the last time you reviewed your energy costs?
          </h2>
          <span className="text-poppins text-gray-600 text-base text-center">
            {/* Did you know there are hundreds of rates in some areas? Let us compare plans and shop for you to get our best rate - for free. */}
            In deregulated energy states, you don’t have to settle for high,
            never-ending energy bills. We're here to help you find lower prices
            and aim to reduce your monthly expenses on electricity.
          </span>
        </div>

        <div className="flex flex-col gap-[16px]">
          <InputField
            id="zipcode"
            name="zipcode"
            type="text"
            label="Zip Code"
            value={zipcode}
            onChange={setZipcode}
            validationRegex={zipRegex}
            errorMessage="Please enter a valid 5-digit zip code."
          />

          <InputField
            id="email"
            name="email"
            type="email"
            label="Email"
            value={email}
            onChange={setEmail}
            validationRegex={emailRegex}
            errorMessage="Please enter a valid email address."
          />
        </div>

        <div
          className={`flex w-full justify-center items-center cursor-pointer py-[16px] rounded-lg mb-[20px] ${
            isZipValid ? "bg-[#0e0f19]" : "bg-[#dbdfe6]"
          }`}
        >
          <span
            className={`text-poppins text-base font-[700] uppercase ${
              isZipValid ? "text-white" : " text-black opacity-40"
            }`}
            onClick={() => handleSubmit()}
          >
            Check My Eligibility
          </span>
        </div>
      </div>
    </>
  );
};

export default StepArea;
