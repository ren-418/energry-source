"use client"
import { useState } from "react";
// import Header from "./components/Header";
import Carousel from "./components/Carousel";
// import Footer from "./components/Footer";
import { toast } from "react-toastify";
// import LoaderComponent from "@/components/onLoad";

import Home_back from "../../assets/images/home-background.jpg";
import Provider from "../../assets/images/provider.webp";
// import Map from "../../assets/images/map.png";
import Blue_dot from "../../assets/images/blue-dot-copy.png";
import Green_dot from "../../assets/images/green-dot-copy.png";
import Grey_dot from "../../assets/images/grey-dot-copy.png";
import Location_Map from "./components/Location_Map";

export default function Home() {
    const [zipcode, setZipcode] = useState<string>("");
    // const [loading, setLoading] = useState<boolean>(true)
    function isValidZipCode(zipCode: string): boolean {
        const zipCodePattern = /^\d{5}(-\d{4})?$/;
        const caPattern = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
        const usPattern = /^\d{5}(-\d{4})?$/;

        return usPattern.test(zipCode) || caPattern.test(zipCode) || zipCodePattern.test(zipCode);
    }

    const goToAvailibility = (): void => {
        if (!isValidZipCode(zipcode)) {
            toast.warning("Please input correct information", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
        else {
            console.log(zipcode);
            window.location.href = "/register";
        }
    }
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            goToAvailibility();
        }
    };
    return (
        <>
            {/* <Header /> */}
            <div className="w-full h-full flex flex-col">
                <div className="relative md:min-h-[830px] min-h-[750px] overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <img
                            alt="Home Background"
                            src={Home_back}
                            className="h-full w-full object-fit"
                        />
                    </div>


                    <div className="padding-control flex flex-col pb-10 gap-8 lg:pb-20 md:pt-[15rem] pt-[8rem] md:gap-[50px] z-10 relative sm:items-start items-center">
                        <h1 className="font-poppins text-4xl text-white leading-[70px] font-bold md:text-7xl md:leading-[90px] sm:text-start text-center">
                            Help Change How Our World Is Powered
                        </h1>
                        <p className="font-poppins text-lg text-white leading-[35px] md:text-2xl md:leading-[40px] sm:text-start text-center">
                            We are bridging the gap between today&apos;s aging infrastructure
                            and tomorrow&apos;s technology, helping build a cleaner, more
                            efficient energy space packaged with lower energy pricing.
                        </p>
                        <div className="md:pt-0 pt-5">
                            <a
                                href="/learn-more"
                                className="text-base font-poppins py-5 px-7 uppercase bg-[#549F57] rounded-md w-[160px] text-center cursor-pointer hover:bg-[#448e49] transition-colors"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col padding-control bg-white pt-[50px] pb-[70px] md:pb-[8.5%] gap-5 md:!pr-0 md:flex-row">
                    <div className="flex flex-col gap-5 w-full justify-center grow md:w-[47%]">
                        <h3 className="font-poppins text-black text-2xl sm:text-3xl whitespace-pre-wrap xl:text-4xl sm:text-start text-center">
                            We are your energy management partner.
                        </h3>
                        <h4 className="font-poppins text-[#000000] text-md sm:text-lg sm:text-start text-center">
                            Whether you&apos;re part of an enterprise, municipality, industrial operation, healthcare provider, or any sector within the commercial or energy industries, leave the heavy lifting to our network. We&apos;ll manage your energy service needs, delivering solutions that free up your resources so you can focus on your business&apos;s core operations and redirect additional revenue back into your business rather than toward high energy costs.
                        </h4>
                    </div>
                    <div className="grow flex justify-end mx-[-11%] md:w-[50%] md:mx-[0px]">
                        <img
                            alt="Provider image"
                            src={Provider}
                            className="h-[240px] object-cover w-[100%] xl:w-[900px] xl:h-[480px] md:w-full md:h-full"
                        />
                    </div>
                </div>
                <div className="">
                    <Carousel />
                </div>
                <div className="md:py-[128px] py-[50px] padding-control bg-white flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center w-[100%] lg:w-[80%] xl:w-[60%] items-center gap-[20px] sm:mb-[60px] mb-[20px]">
                        <h1 className="font-poppins text-[#022e34] sm:text-4xl text-2xl w-full text-center sm:leading-[60px] leading-[40px]">
                            We deliver an energy management solution tailored for our clients
                        </h1>
                        <p className="font-poppins text-[#4e6064] sm:text-md w-full text-center sm:leading-[30px] leading-[20px]">
                            Our Energy Management Platform is designed for clients seeking savings and aiming to reduce high energy expenses. It provides an efficient, low-maintenance solution to optimize energy use, lower costs, and explore alternative options beyond simply paying monthly bill
                        </p>
                    </div>
                    <div className="flex flex-row grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-10 gap-5">
                        <div className="sm:py-[40px] sm:px-[24px] p-[24px] rounded-lg bg-white border border-[#1f7a5933] flex flex-col sm:gap-[30px] gap-[10px] sm:items-start items-center">
                            <div className="w-[80px] h-[80px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="71"
                                    height="73"
                                    viewBox="0 0 71 73"
                                    fill="none"
                                >
                                    <path
                                        d="M61 5.15387V23.4534C61 51.3556 36.9114 60.6128 32.0885 62.1852C31.0585 62.5285 29.9415 62.5285 28.9115 62.1852C24.0823 60.6128 0 51.3556 0 23.4534V5.15387C0 3.83256 0.535564 2.56537 1.48887 1.63107C2.44218 0.696762 3.73515 0.171875 5.08333 0.171875H55.9167C57.2649 0.171875 58.5578 0.696762 59.5111 1.63107C60.4644 2.56537 61 3.83256 61 5.15387Z"
                                        fill="#56D690"
                                    />
                                    <path
                                        d="M39.4365 27.7802L34.3032 28.3804C34.1591 28.4083 34.011 28.4039 33.8687 28.3674C33.7263 28.3308 33.5929 28.2628 33.477 28.168C33.3611 28.0733 33.2654 27.9537 33.1961 27.8173C33.1269 27.6808 33.0855 27.5305 33.0749 27.376L33.7818 13.9023C33.7818 12.9469 32.4029 12.4937 31.8582 13.2899L21.7424 28.3437C21.302 28.9929 21.9741 29.8504 22.8432 29.7524L27.9649 29.1399C28.1099 29.1119 28.2589 29.1167 28.402 29.154C28.5451 29.1913 28.6791 29.2602 28.7952 29.3563C28.9112 29.4524 29.0067 29.5733 29.0753 29.7113C29.1439 29.8492 29.1841 30.001 29.1931 30.1565L28.4863 43.6303C28.4863 44.5857 29.8768 45.0389 30.4098 44.2427L40.5257 29.2011C40.9661 28.5274 40.3056 27.6699 39.4365 27.7802Z"
                                        fill="#092D2E"
                                    />
                                </svg>
                            </div>
                            <div className="text-[#022e34] font-poppins text-2xl pb-[16px]">
                                Minimize risk
                            </div>
                            <div className="text-[#4e6064] font-poppins text-base text-center sm:text-start">
                                Avoid paying more than necessary for electricity with protection from the energy market, billing mistakes and the consistent rise in energy pricing.
                            </div>
                        </div>
                        <div className="sm:py-[40px] sm:px-[24px] p-[24px] rounded-lg bg-white border border-[#1f7a5933] flex flex-col sm:gap-[30px] gap-[10px] sm:items-start items-center">
                            <div className="w-[80px] h-[80px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="78"
                                    height="75"
                                    viewBox="0 0 78 75"
                                    fill="none"
                                >
                                    <path
                                        d="M62.0068 37.6278C62.0068 50.6649 51.2716 61.2574 37.9996 61.2574C24.7275 61.2574 13.9924 50.6649 13.9924 37.6278C13.9924 24.5907 24.7275 13.9983 37.9996 13.9983C51.2716 13.9983 62.0068 24.5907 62.0068 37.6278Z"
                                        fill="#56D690"
                                        stroke="#56D690"
                                        strokeWidth="1.83245"
                                    />
                                    <path
                                        d="M74 37.6269C74 18.0456 57.882 2.17188 37.9995 2.17188C18.117 2.17188 1.99902 18.0456 1.99902 37.6269"
                                        stroke="#56D690"
                                        strokeWidth="3.13043"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M44.9234 32.9509C47.6385 32.9509 49.8599 30.7801 49.8599 28.0773C49.8599 25.3745 47.6385 23.2037 44.9234 23.2037C42.2084 23.2037 39.9869 25.3745 39.9869 28.0773C39.9869 30.7801 42.2084 32.9509 44.9234 32.9509Z"
                                        fill="#092D2E"
                                        stroke="#2CAA7C"
                                        strokeWidth="1.56522"
                                    />
                                </svg>
                            </div>
                            <div className="text-[#022e34] font-poppins text-2xl pb-[16px]">
                                Reduce usage
                            </div>
                            <div className="text-[#4e6064] font-poppins text-base text-center sm:text-start">
                                Stay ahead of underperforming equipment with our in-person
                                assessments, tailored to enhance your property&apos;s energy
                                efficiency
                            </div>
                        </div>
                        <div className="sm:py-[40px] sm:px-[24px] p-[24px] rounded-lg bg-white border border-[#1f7a5933] flex flex-col sm:gap-[30px] gap-[10px] sm:items-start items-center">
                            <div className="w-[80px] h-[80px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="87"
                                    height="88"
                                    viewBox="0 0 87 88"
                                    fill="none"
                                >
                                    <path
                                        d="M18.9664 82.7747C17.2873 82.7725 15.6613 82.1854 14.3682 81.1145C13.0751 80.0436 12.1955 78.5557 11.8806 76.9067L0.816122 18.8153C0.46642 16.939 0.87398 15.0005 1.94932 13.4236C3.02467 11.8467 4.68036 10.7595 6.55499 10.3996L34.7061 5.04414C36.5826 4.69449 38.5214 5.10171 40.0986 6.17689C41.6757 7.25207 42.7631 8.90778 43.1231 10.7821L54.1954 68.8735C54.5449 70.7509 54.1365 72.6903 53.0596 74.2674C51.9827 75.8445 50.3247 76.931 48.4487 77.2892L20.3055 82.6446C19.8644 82.7311 19.4159 82.7747 18.9664 82.7747ZM36.0604 6.02335C35.6778 6.02141 35.2961 6.0573 34.9205 6.13047L6.77692 11.4859C5.99146 11.6328 5.2428 11.9336 4.57403 12.3708C3.90526 12.8081 3.32985 13.3733 2.88039 14.0338C2.43093 14.6944 2.11648 15.4373 1.9553 16.2199C1.79412 17.0024 1.78927 17.809 1.9411 18.5934L13.0131 76.6772C13.16 77.4618 13.4606 78.2095 13.8974 78.8776C14.3343 79.5457 14.8987 80.1209 15.5586 80.5702C16.2184 81.0195 16.9606 81.3341 17.7424 81.4957C18.5242 81.6574 19.3302 81.6631 20.1142 81.5124L48.2653 76.1569C49.8438 75.8454 51.2362 74.925 52.1412 73.5949C53.0463 72.2648 53.391 70.6318 53.1011 69.0494L42.0291 10.9428C41.7526 9.5612 41.0077 8.31736 39.9204 7.42115C38.833 6.52493 37.4696 6.03118 36.0604 6.02335Z"
                                        fill="#56D690"
                                    />
                                    <path
                                        d="M28.9204 60.1726C28.8061 60.1701 28.6948 60.1357 28.5991 60.0732C28.4758 59.9857 28.3908 59.8542 28.3618 59.7059L27.8417 56.9899H27.742C23.0208 56.9899 19.4092 54.3046 18.2538 49.8749C18.2328 49.799 18.2281 49.7195 18.24 49.6418C18.2518 49.564 18.2803 49.4896 18.3229 49.4235C18.3639 49.3565 18.4183 49.2988 18.4828 49.254C18.5474 49.2092 18.6205 49.1783 18.6976 49.1633L23.6254 48.23C23.7693 48.2 23.9192 48.2272 24.0435 48.3057C24.1677 48.3842 24.2565 48.508 24.2912 48.6508C24.8957 51.0072 26.778 52.0629 29.4715 51.5503C30.7952 51.2978 32.9455 50.5175 32.4941 48.1458C32.341 47.3272 31.8971 46.2331 29.8694 46.1872L24.2071 46.0342C20.4271 45.9654 17.7642 43.8232 17.0985 40.3039C16.3333 36.272 18.5676 32.9057 22.9674 31.4215L22.4701 28.7973C22.4557 28.7229 22.4559 28.6464 22.4712 28.5722C22.4866 28.498 22.5167 28.4277 22.5594 28.3651C22.6021 28.3025 22.6566 28.249 22.7201 28.2076C22.7836 28.1662 22.8548 28.1378 22.9293 28.124L26.8008 27.359C26.9502 27.3317 27.1043 27.3647 27.2293 27.4508C27.2919 27.4925 27.3451 27.5467 27.3859 27.6099C27.4267 27.6731 27.4542 27.7439 27.4666 27.8181L28.0098 30.6641C32.249 30.8707 35.4092 33.3036 36.3121 37.0907C36.3304 37.1659 36.3332 37.2441 36.32 37.3204C36.3068 37.3967 36.278 37.4696 36.2356 37.5344C36.1928 37.599 36.1377 37.6547 36.0734 37.698C36.0091 37.7413 35.9368 37.7715 35.8608 37.7868L30.9712 38.7202C30.8264 38.748 30.6767 38.7189 30.5527 38.6391C30.4288 38.5593 30.3401 38.435 30.3054 38.2918C29.6626 35.7364 27.2829 35.7976 25.9209 36.0577C25.0988 36.1696 24.3263 36.5148 23.6945 37.0524C23.4551 37.2768 23.2799 37.5611 23.1871 37.8758C23.0943 38.1905 23.0869 38.5242 23.1662 38.8426C23.2346 39.3058 23.4806 39.7243 23.8518 40.0098C24.223 40.2953 24.6904 40.4254 25.1557 40.3727L30.7186 40.5793C35.1337 40.717 37.7506 42.7444 38.4851 46.608C39.2962 50.8618 37.1923 54.3352 32.846 55.9954L33.3586 58.7037C33.3879 58.8529 33.3566 59.0074 33.272 59.1336C33.1873 59.2598 33.056 59.3474 32.9069 59.377L29.0276 60.1421L28.9204 60.1726Z"
                                        fill="#092D2E"
                                    />
                                    <path
                                        d="M81.6816 14.6828L54.7536 4.88325C51.3027 3.62742 47.487 5.40642 46.231 8.8568L26.001 64.4298C24.7449 67.8802 26.5242 71.6953 29.9751 72.9511L56.9032 82.7506C60.3541 84.0065 64.1698 82.2275 65.4258 78.7771L85.6558 23.2041C86.9118 19.7537 85.1325 15.9386 81.6816 14.6828Z"
                                        fill="#56D690"
                                    />
                                    <path
                                        d="M53.7818 56.3863L52.6647 59.4465L48.961 58.1L50.0785 55.0398C45.9465 52.8364 44.041 48.8657 45.3189 44.4436L50.0325 46.1574C49.2673 48.7815 50.5221 50.9696 53.3533 52.0025C55.5264 52.7675 57.6155 52.5227 58.4342 50.2811C58.8704 49.0723 58.7786 47.718 56.9498 46.5704L52.1596 43.5102C48.8616 41.4598 48.2112 38.3843 49.2135 35.6301C50.5756 31.8889 54.2257 30.3511 58.6408 31.4757L59.7273 28.4844L63.4307 29.8385L62.2829 32.983C65.864 35.171 67.4019 38.7515 66.2695 42.3474L61.5943 40.6488C62.2906 38.3536 60.9591 36.6246 58.6177 35.7754C56.6358 35.0562 54.7918 35.2551 54.0878 37.1066C53.8477 37.6654 53.8322 38.2953 54.0445 38.8652C54.2568 39.4352 54.6809 39.9013 55.2281 40.1668L59.9033 43.2271C62.8646 45.1168 64.7087 47.7334 63.2626 51.6964C61.7245 55.889 57.9444 57.2738 53.7818 56.3863Z"
                                        fill="#092D2E"
                                    />
                                </svg>
                            </div>
                            <div className="text-[#022e34] font-poppins text-2xl pb-[16px]">
                                Save Now
                            </div>
                            <div className="text-[#4e6064] font-poppins text-base text-center sm:text-start">
                                Save now by replacing old, outdated equipment, leveraging energy
                                pricing, and optimizing for energy efficiency.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:py-[8rem] py-[64px] flex xl:flex-row flex-col items-center bg-[#0f352d] justify-between gap-[20px] xl:!px-[8%] lg:px-[4%] padding-control">
                    <div className="flex flex-col gap-[16px]  justify-center items-center lg:hidden w-[100%]">
                        <h1 className="font-poppins text-[#c2f7ad] sm:text-4xl text-3xl text-center sm:text-center">
                            Why do I need Mill Street Energy?
                        </h1>
                        <p className="font-poppins text-[#FFFFFF] sm:text-xl text-lg text-center sm:text-center">
                            Energy is a big expense for most businesses, and it only gets bigger as they grow. There are plenty of opportunities to reduce energy costs, but they&apos;re not always easy to spot. Missing out on these opportunities can be costly.
                        </p>
                    </div>
                    <div className="flex md:flex-row gap-[30px] !justify-center w-full flex-col">
                        <div className="flex flex-col bg-[#072223] rounded-[8px] pt-[32px] pb-[16px] px-[16px] gap-[1.5rem] justify-center items-center lg:w-[35%] md:w-[50%] w-[100%]">
                            <div className="text-center font-poppins text-white text-2xl">
                                Risks
                            </div>
                            <div className="flex flex-col gap-[16px]">
                                <div className="p-[32px] flex flex-col gap-[16px] rounded-[8px] bg-[#203939] sm:items-start items-center">
                                    <div className="font-poppins text-[#c2f7ad] text-xs">
                                        Coffee Chain
                                    </div>
                                    <div className="flex flex-col font-poppins text-[#c2f7ad] text-3xl text-center sm:text-start">
                                        <span>$65,000</span>
                                        <span>Overpaid</span>
                                    </div>
                                    <div className="font-poppins text-white text-base text-center sm:text-start">
                                        on electricity due to an incorrect rate class on their bill
                                    </div>
                                </div>
                                <div className="p-[32px] flex flex-col gap-[16px] rounded-[8px] bg-[#203939] sm:items-start items-center">
                                    <div className="font-poppins text-[#c2f7ad] text-xs">QSR</div>
                                    <div className="flex flex-col font-poppins text-[#c2f7ad] text-3xl text-center sm:text-start">
                                        <span>40%</span>
                                        <span>overpaid</span>
                                    </div>
                                    <div className="font-poppins text-white text-base text-center sm:text-start">
                                        on an electricity supply rates overpaid due to annual
                                        electric rate increases
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex hidden flex-col gap-[16px] w-[30%] justify-center items-center text-center">
                            <h1 className="font-poppins text-[#c2f7ad] sm:text-4xl text-3xl text-center sm:text-center">
                                Why do I need Mill Street Energy?
                            </h1>
                            <p className="font-poppins text-[#FFFFFF] sm:text-xl text-lg text-center sm:text-center">
                                Energy is a big expense for most businesses, and it only gets bigger as they grow. There are plenty of opportunities to reduce energy costs, but they&apos;re not always easy to spot. Missing out on these opportunities can be costly.
                            </p>
                        </div>
                        <div className="flex flex-col bg-[#c2f7ad] rounded-[8px] pt-[32px] pb-[16px] px-[16px] gap-[1.5rem] justify-center items-center lg:w-[35%] md:w-[50%] w-[100%]">
                            <div className="text-center font-poppins text-black text-2xl">
                                Opportunities
                            </div>
                            <div className="flex flex-col gap-[16px]">
                                <div className="p-[32px] flex flex-col gap-[16px] rounded-[8px] bg-[#fff9] sm:items-start items-center">
                                    <div className="font-poppins text-[#1f7a59] text-xs">
                                        {/* Community Food Storage Center */}
                                        Local Business
                                    </div>
                                    <div className="flex flex-col font-poppins text-[#000000] text-3xl text-center sm:text-start">
                                        <span>$26,000</span>
                                        <span>saved</span>

                                    </div>
                                    <div className="font-poppins text-black text-base text-center sm:text-start">
                                        leverage Mill Street Energy to secure custom energy pricing
                                        for your business
                                    </div>
                                </div>
                                <div className="p-[32px] flex flex-col gap-[16px] rounded-[8px] bg-[#fff9] sm:items-start items-center">
                                    <div className="font-poppins text-[#1f7a59] text-xs">
                                        Community Boys & Girls Club
                                    </div>
                                    <div className="flex flex-col font-poppins text-[#000000] text-3xl text-center sm:text-start">
                                        <span>$42,000</span>
                                        <span>earned</span>
                                    </div>
                                    <div className="font-poppins text-black text-base text-center sm:text-start">
                                        by enrolling and participating in Demand Response programs
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:py-[128px] py-[64px] w-full flex flex-col bg-white padding-control justify-center items-center mt-[-10px]">
                    <div className="flex flex-col gap-[16px] justify-center items-center sm:w-[80%] w-full">
                        {/* <div className="font-poppins text-[#022e34] sm:text-5xl text-3xl text-center"> */}
                        <div className="font-poppins text-[#000000] lg:text-5xl text-3xl font-bold w-full text-center pt-[50px]">
                            {/* We keep an eye on everything so you don&apos;t have to */}
                            Let us deal with the energy monitoring for you
                        </div>
                        {/* <div className="font-poppins text-[#022e34] text-lg text-center"> */}
                        <div className="font-poppins text-[#000000] lg:text-2xl text-xl w-full text-center pt-[30px]">
                            Don&apos;t want another thing to think about? We get it. Once you&apos;re connected to our platform, we handle everything behind the scenes. The only time you&apos;ll hear from us is when we have updates on your savings or opportunities to save even more.
                        </div>
                    </div>
                </div>
                <div className="py-[40px] padding-control flex flex-col justify-center items-center bg-white gap-[40px]">
                    {/* <div className="font-poppins text-black lg:text-5xl text-3xl text-center">
            Simplifying the clean energy transition.
          </div> */}
                    <div className="flex flex-row grid xl:grid-cols-2 grid-cols-1 gap-[15px] sm:text-start text-center">
                        <div className="text-[#549f57] font-poppins lg:text-base text-sm lg:pl-[70px] pl-[20px] flex flex-row justify-top">
                            <span className="lg:text-5xl text-3xl text-[#549f57] font-poppins">
                                95+
                            </span>
                            <span className="text-black"> &nbsp;|&nbsp;</span>
                            <span>Energy Accounts Under Management</span>
                        </div>
                        <div className="text-[#549f57] font-poppins lg:text-base text-sm lg:pl-[70px] pl-[20px] flex flex-row justify-top">
                            <span className="lg:text-5xl text-3xl text-[#549f57] font-poppins">
                                400K
                            </span>
                            <span className="text-black"> &nbsp;|&nbsp;</span>
                            <span>Cost Savings Achieved by the Energy Management Team</span>
                        </div>
                    </div>
                    <div className="font-poppins text-[#000000] lg:text-5xl text-3xl font-bold w-full text-center pt-[50px]">
                        We Can&apos;t Work Without You!
                    </div>
                    <div className="font-poppins text-[#000000] lg:text-2xl text-xl w-full text-center pt-[30px]">
                        At Mill Street Energy, we&apos;re committed to maximizing energy
                        efficiency and helping as many properties as possible reduce their
                        carbon footprint. However, we can&apos;t do it alone — and
                        that&apos;s where you come in!
                    </div>
                    {/* <div className="font-poppins text-[#000000] lg:text-2xl text-xl w-full text-center pt-[15px]"> */}
                    <div className="font-poppins text-[#000000] lg:text-2xl text-xl w-full text-center pt-[30px]">
                        Schedule below to begin the discovery process and learn how we can help!
                    </div>
                    <div className="schedule-btn font-poppins cursor-pointer text-center max-[1024px]:text-3xl max-[1024px]:font-bold">
                        Schedule Your Assessment Here
                    </div>
                </div>
                <div className="flex padding-control py-[50px] flex-col gap-[10px] bg-[#0f352d] items-center">
                    <div className="text-[#549f57] text-base text-poppins location-before-event rounded-[50px] cursor-poitner p-[10px] text-center">
                        <i className="bi bi-globe-central-south-asia rotating-icon mr-[10px]"></i>
                        What States Do We Work In?
                    </div>
                    <div className="text-white lg:text-5xl text-3xl text-poppins font-bold text-center">
                        Where Are We Located?
                    </div>
                    <div className="text-white text-base text-poppins text-center">
                        We work in different states across the nation. Here is a map showing
                        the states where we primarily do work.
                    </div>
                    <div className="text-base font-poppins py-[12px] px-[24px] bg-[#549F57] rounded-md w-[130px] text-center">
                        Click here
                    </div>
                </div>
                <div className="sm:p-[30px] py-[30px] flex xl:flex-row flex-col xl:gap-0 gap-[30px] bg-[#0f352d] items-center">
                    <div className="w-full flex lg:flex-row flex-col gap-[50px] items-center">
                        <div className="flex flex-col gap-[10px] z-1 hidden">
                            <div className="flex flex-row gap-[10px] text-base text-[#ffffff] text-poppins justify-start items-center">
                                <img src={Blue_dot} alt="blue dot" width={50} height={50} />
                                <span>Natural Gas & Electricity Options Available</span>
                            </div>
                            <div className="flex flex-row gap-[10px] text-base text-[#ffffff] text-poppins justify-start items-center">
                                <img src={Green_dot} alt="green dot" width={50} height={50} />
                                <span>Natural Gas Options Available</span>
                            </div>
                            <div className="flex flex-row gap-[10px] text-base text-[#ffffff] text-poppins justify-start items-center">
                                <img src={Grey_dot} alt="grey dot" width={50} height={50} />
                                <span>Limited Availability</span>
                            </div>
                        </div>
                        {/* <Image
              alt="location"
              src={Map}
              // className="xl:w-[70%] sm:w-[90%] sm:mx-[0px] mx-[-60px] w-[100%]"
              className="lg:w-[60%] w-[100%]  sm:mx-[0px] mx-[-60px]"
            /> */}      
                        <Location_Map />
                    </div>
                    <div className="p-[20px] rounded-[24px] bg-white h-[223px] flex items-center flex-col">
                        <div className="text-poppins text-3xl text-[#549F57] font-bold mb-[35.2px]">
                            Contact Us
                        </div>
                        <div className="w-full h-[52px] location-input">
                            <input
                                placeholder="Enter Zip Code*"
                                type="text"
                                className="py-[15px] w-[280px] sm:w-[352px] bg-gray-200 text-gray-600 text-base font-normal border-0 outline-none min-h-[52px] rounded-md py-1.5 px-3 transition-colors duration-150 ease-in-out"
                                value={zipcode}
                                onChange={(e) => setZipcode(e.target.value)}
                                onKeyDown={handleKeyPress}
                            ></input>
                        </div>
                        <div className="text-base font-poppins py-[10px] bg-[#549F57] rounded-md w-[110px] mt-[24px] text-center cursor-pointer" onClick={goToAvailibility}>
                            Next
                        </div>
                    </div>
                </div>
                <div className="padding-control py-[30px] flex md:flex-row flex-col bg-[#38383b] gap-[34px]">
                    <div className="flex flex-col gap-[32px] md:w-[55%] w-full text-center md:text-start">
                        <h1 className="text-poppins text-[#ffffff] sm:text-4xl text-3xl">
                            Get started today.
                        </h1>
                        <span className="text-poppins text-base text-[#ffffff]">
                            Sign up for a no-cost, no-obligation energy assessment and one of
                            our experts will get back to you within 24 hours.
                        </span>
                    </div>
                    <div className="flex flex-col gap-[25px] w-full">
                        <div className="flex flex-col w-full gap-[20px]">
                            <div className="flex flex-row gap-[5px] items-center">
                                <span className="text-poppins text-[#ffffff] text-base">
                                    Name
                                </span>
                                <span className="text-poppins text-[#ffffff] text-sm">
                                    (required)
                                </span>
                            </div>
                            <div className="flex flex-row gap-[10px] w-full">
                                <div className="flex flex-col gap-[5px] items-start w-[50%]">
                                    <label
                                        htmlFor="firstname"
                                        className="text-poppins text-[#ffffff] text-sm"
                                    >
                                        First Name
                                    </label>
                                    <div className="w-full">
                                        <input
                                            id="firstname"
                                            type="text"
                                            className="hover:bg-[#acacae] w-full min-h-[50px] px-4 py-2 border border-[#38383b] rounded-none focus:outline-none focus:ring-2 focus:ring-[#a8a6a1] focus:ring-offset-2 focus:ring-offset-white ease-in-out bg-white text-gray-800 placeholder-gray-500"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[5px] items-start w-[50%]">
                                    <label
                                        htmlFor="lastname"
                                        className="text-poppins text-[#ffffff] text-sm"
                                    >
                                        Last Name
                                    </label>
                                    <div className="w-full">
                                        <input
                                            id="lastname"
                                            type="text"
                                            className="hover:bg-[#acacae] w-full min-h-[50px] px-4 py-2 border border-[#38383b] rounded-none focus:outline-none focus:ring-2 focus:ring-[#a8a6a1] focus:ring-offset-2 focus:ring-offset-white ease-in-out bg-white text-gray-800 placeholder-gray-500"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex flex-col gap-[5px] items-start w-full">
                                    <label
                                        htmlFor="email"
                                        className="text-poppins text-[#ffffff] text-sm"
                                    >
                                        Email (required)
                                    </label>
                                    <div className="w-full">
                                        <input
                                            id="email"
                                            type="text"
                                            className="hover:bg-[#acacae] w-full min-h-[50px] px-4 py-2 border border-[#38383b] rounded-none focus:outline-none focus:ring-2 focus:ring-[#a8a6a1] focus:ring-offset-2 focus:ring-offset-white ease-in-out bg-white text-gray-800 placeholder-gray-500"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex flex-col gap-[5px] items-start w-full">
                                    <label
                                        htmlFor="message"
                                        className="text-poppins text-[#ffffff] text-sm"
                                    >
                                        Message (required)
                                    </label>
                                    <div className="w-full">
                                        <textarea
                                            id="message"
                                            className="hover:bg-[#acacae] w-full min-h-[100px] px-4 py-2 border border-[#38383b] rounded-none focus:outline-none focus:ring-2 focus:ring-[#a8a6a1] focus:ring-offset-2 focus:ring-offset-white ease-in-out bg-white text-gray-800 placeholder-gray-500"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-base font-poppins py-[10px] bg-[#549F57] rounded-md w-[110px] text-center text-white mb-[10px]">
                                Send
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
            {/* {loading && <LoaderComponent />}   */}

        </>
    );
}
