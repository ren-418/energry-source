import { Link, useLocation } from "react-router-dom";
import ImgFooter from "../../assets/images/layout/footer.webp";
import { useEffect, useState } from "react";

export default function Footer() {
  const location = useLocation();
  const currentPath = window.location.pathname;
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    if (currentPath == "/layouts/aboutus") {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location]);

  return (
    <footer
      style={{
        backgroundImage: `url(${ImgFooter})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: showFooter ? 'flex' : 'none'
      }}
    >
      <div className="text-white w-full flex flex-col justify-center items-center py-8 gap-8 px-10">
        <h3 className="text-2xl font-bold text-center text">
          Partnerships that work for you!
        </h3>
        <p className="text-center">
          MSE works with utilities, government agencies and energy program
          partners to obtain critical incentives and rebates that significantly
          reduce our customers energy solution costs
        </p>
        <div>
          <Link
            to={"https://calendar.app.google/zkQmsRiCvuaRiM8Z7"}
            target="_blank"
            className="border border-2 border-white px-8 py-3 rounded-full"
          >
            Help me save
          </Link>
        </div>
      </div>
      {/* <div className="pt-[16.25px] pb-[40px] padding-control flex flex-row justify-between w-full max-[473px]:flex-col max-[473px]:gap-2 max-[473px]:items-center">
        <div className="flex flex-col max-[473px]:items-center">
          <div className="text-white text-base text-poppins">
            <div>Follow us.</div>
          </div>
          <div className="flex flex-row gap-[10px] justify-center items-center">
            <Link to="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="36"
                height="36"
                viewBox="0 0 64 64"
                fill="#FFF"
              >
                <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M25,44h-5V26h5V44z M22.485,24h-0.028C20.965,24,20,22.888,20,21.499C20,20.08,20.995,19,22.514,19c1.521,0,2.458,1.08,2.486,2.499 C25,22.887,24.035,24,22.485,24z M44,44h-5v-9c0-3-1.446-4-3-4c-1.445,0-3,1-3,4v9h-5V26h5v3c0.343-0.981,1.984-3,5-3c4,0,6,3,6,8 V44z"></path>
              </svg>
            </Link>
            <Link to="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 50 50"
                fill="#FFF"
              >
                <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23c12.683,0,23-10.317,23-23S37.683,2,25,2z M32,16h-3.29 C26.772,16,26,16.455,26,17.806V21h6l-1,5h-5v13h-6V26h-3v-5h3v-2.774C20,14.001,21.686,11,26.581,11C29.203,11,32,12,32,12V16z"></path>
              </svg>
            </Link>
            <Link to="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Instagram w/circle"
                viewBox="0 0 19.2 19.2"
                width="32"
                height="32"
                fill="#FFF"
              >
                <path d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.029 2.02.029s1.493-.005 2.02-.03a2.766 2.766 0 0 0 .929-.171 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.029-.685.029-2.02s-.005-1.493-.03-2.02a2.766 2.766 0 0 0-.171-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6zM11.267 9.6A1.667 1.667 0 1 1 9.6 7.933 1.667 1.667 0 0 1 11.267 9.6zM9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.661a3.67 3.67 0 0 1-.233 1.214 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .232-1.213 2.556 2.556 0 0 1 1.463-1.463 3.67 3.67 0 0 1 1.213-.232c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.232 2.556 2.556 0 0 1 1.462 1.463 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-poppins text-white items-end max-[473px]:items-center">
          <Link to="" className="underline max-[473px]:text-center">
            {" "}
            888-296-0005{" "}
          </Link>
          <Link to="" className="underline">
            {" "}
            save@millstreetenergy.com
          </Link>
        </div>
      </div> */}
    </footer>
  );
}
