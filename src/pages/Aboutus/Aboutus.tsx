import ImgLogo from "../../assets/images/aboutus/logo-white.png";
import ImgMiddle from "../../assets/images/aboutus/aboutus-section2.webp";
import ImgBenefit1 from "../../assets/images/benefit-img-1.png";
import ImgBenefit2 from "../../assets/images/benefit-img-2.png";
import ImgBenefit3 from "../../assets/images/benefit-img-3.png";
import ImgSection4Bg from "../../assets/images/section4bg.jpg";
import ImgSection5Bg from "../../assets/images/aboutus/use-step.webp";
import ImgSection6Bg from "../../assets/images/aboutus/utility-bill.png";

import ImgSection1 from "../../assets/images/home-background.jpg";
import ImgFooterBg from "../../assets/images/aboutus/aboutus-footer.png";

import Button from "./components/Button";
import RedirectBox from "./components/RedirectBox";
import BenefitCard from "./components/BenefitCard";
import HowitworksCard from "./components/HowtiworksCard";
import LinkingStep from "./components/LinkingStep";
import FaqCard from "./components/FaqCard";
import { useNavigate } from "react-router-dom";

const Aboutus: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white flex flex-col">
        <section
          style={{ backgroundImage: `url(${ImgSection1})` }}
          className="flex flex-col items-center gap-6 pb-8 pt-[120px] pb-[20%] md:pb-[12%]"
        >
          <div>
            <img src={ImgLogo} alt="Logo" className="w-[60px] md:w-[80px]" />
          </div>
          <div className="text-white flex flex-col gap-6">
            <h2 className="font-semibold text-4xl md:text-5xl text-center">
              Let's Change How Our World Is Powered
            </h2>
            <p className="text-center">
              Click, connect with us, and discover just how simple savings can
              be.
            </p>
          </div>
          <div className="flex w-full justify-center flex-col md:flex-row items-center px-8 flex-wrap">
            <RedirectBox
              title="Already a Mill Street Energy Client?"
              buttonText="Go to My Account"
              redirectTo="/register"
            />
            <RedirectBox
              title="New to Mill Street Energy?"
              buttonText="Select a Plan"
              redirectTo="https://calendar.app.google/zkQmsRiCvuaRiM8Z7"
            />
          </div>
        </section>

        <section className="relative mt-[-20%] md:mt-[-12%] pt-10">
          <div className="absolute h-[50%] w-full"></div>
          <div className="px-4 md:px-[10%] flex justify-center">
            <img
              src={ImgMiddle}
              className="rounded-xl overflow-hidden relative z-[10] shadow-lg"
            />
          </div>
        </section>

        <section className="flex flex-col gap-4 md:gap-10 justify-center items-center py-10 md:py-28">
          <p className="text-center text-lg text-primary">
            BENEFITS TO USING US
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-center">
            Energy Simplified
          </h2>
          <div className="flex justify-center max-w-[1250px] flex-wrap mt-6 px-4 md:px-10">
            <BenefitCard
              imgUrl={ImgBenefit1}
              title="Simple Setup, Instant Results"
              description="Take control of your energy costs in minutes. Just upload your bills through our secure form below, and unlock a personalized analysis of your annual energy usage - your first step towards real savings."
            />
            <BenefitCard
              imgUrl={ImgBenefit2}
              title="Peace of Mind Savings"
              description="Rest easy knowing Mill Street Energy always puts you first. We keep you informed every step of the way, sending advance notifications before any adjustments while maximizing your energy savings."
            />
            <BenefitCard
              imgUrl={ImgBenefit3}
              title="Track Your Success"
              description="Watch your savings grow month after month with detailed performance updates. See exactly how much you're saving and where your energy dollars are going - all in clear, easy-to-understand reports."
            />
          </div>
          <div className="flex justify-center py-4 md:py-12">
            <Button title="Enroll Now" type="bordered" onClick={() => {}} />
          </div>
        </section>

        <section className="flex flex justify-center items-center relative overflow-hidden pt-[5vw] pb-[4vw]">
          <img
            src={ImgSection4Bg}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="max-w-[1250px] relative z-[10] px-4 md:px-10">
            <div className="flex flex-col lg:flex-row justify-center gap-4">
              <div className="flex flex-col w-full gap-6 item-center md:items-start">
                <p className="text-secondary text-xl text-center md:text-start">
                  NEXT STEPS
                </p>
                <h2 className="text-4xl md:text-5xl text-white font-semibold text-center md:text-start">
                  How It Works
                </h2>
                <p className="text-white text-lg">
                  Getting the most out of your energy isn’t just about how much
                  you use—it’s about how and when you use it. By focusing on
                  cleaner, cheaper, and more efficient energy, MSE makes
                  real-time adjustments that save you money and boost
                  efficiency.
                </p>
                <div className="flex justify-center py-4 md:py-14">
                  <Button onClick={() => {}} type="filled" title="Enroll Now" />
                </div>
              </div>

              <div className="flex flex-col gap-3 px-0 md:px-8 py-6 grow">
                <HowitworksCard
                  num={1}
                  title="Smarter Decisions"
                  desc="We keep a close eye on the energy market to make sure you’re always getting the best rates. By letting suppliers compete for your business, we help lower your costs while maximizing efficiency—all without adding extra work to your day."
                />
                <HowitworksCard
                  num={2}
                  title="In-Person Assessments"
                  desc="We visit your facility to check out your equipment and make sure everything is running smoothly. If we spot inefficiencies, we’ll recommend fixes or upgrades to help you save energy and cut costs in the long run."
                />
                <HowitworksCard
                  num={3}
                  title="Comfort Optimization"
                  desc="Your comfort comes first. We tweak your energy use to keep your space perfectly cozy without you having to lift a finger. It’s all about savings that don’t disrupt your routine."
                />
                <HowitworksCard
                  num={4}
                  title="Savings for You"
                  desc="We focus on the big picture, from locking in great energy rates to keeping your HVAC and other equipment running longer. By cutting supply costs and finding special savings programs, we help you save more. Plus, we’ll keep you in the loop with clear reports so you know exactly how much you’re saving and how you’re helping the planet."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center py-10 md:py-28 bg-orange-50">
          <div className="max-w-[1250px] flex flex-col justify-center items-center gap-[80px]">
            <div className="flex flex-col gap-8">
              <p className="text-lg font-semibold text-primary text-center">
                HOW TO
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold text-center">
                HOW TO CONNECT YOUR ENERGY USE
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 md:gap-24 px-4 md:px-10">
              <div className="flex flex-1 flex-col items-start justify-center gap-9">
                <div>
                  <LinkingStep
                    num={1}
                    title="Get Started"
                    desc='Click the "Enroll Now" button to access the form and connect with our team.'
                  />
                  <LinkingStep
                    num={2}
                    title="Share Your Info"
                    desc="Fill out the quick form with your contact details or schedule a call using our business calendar."
                  />
                  <LinkingStep
                    num={3}
                    title="Review Your Setup"
                    desc="We’ll reach out to discuss your current energy setup and needs, ensuring a smooth connection process."
                  />
                  <LinkingStep
                    num={4}
                    title="Link Your System"
                    desc="Follow our easy instructions to link your energy account or devices directly with our platform."
                  />
                  <LinkingStep
                    num={5}
                    title="Enjoy the Benefits"
                    desc="Start saving immediately with optimized energy use, lower costs, and seamless service!"
                  />
                </div>
                <div className="flex flex-col md:flex-row w-full gap-6 justify-center">
                  <Button type="filled" title="My Account" noToSchedule onClick={() => {navigate('/register')}} />
                  <Button
                    type="bordered"
                    title="Enroll Now"
                    onClick={() => {}}
                  />
                </div>
              </div>
              <div className="flex-1 flex items-center">
                <img src={ImgSection5Bg} className="w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center py-10 md:py-32 bg-indigo-50">
          <div className="max-w-[1250px] flex flex-col lg:flex-row px-4 md:px-10 gap-4 md:gap-10">
            <div className="flex-1 flex flex-col gap-12">
              <div className="flex flex-col gap-8">
                <p className="text-lg font-semibold text-primary text-center md:text-start">
                  ALL YOU NEED TO GET STARTED IS AN
                </p>
                <h2 className="text-4xl md:text-5xl font-semibold text-center md:text-start">
                  Energy Bill
                </h2>
                <p className="text-xl text-gray-600">
                  To take full advantage of our energy-saving solutions, you’ll
                  need a copy of your most recent electricity bill. This
                  document provides essential insights into your energy usage,
                  enabling us to create a customized plan to help you save on
                  costs and reduce your environmental impact.
                </p>
                <div className="flex flex-col gap-5">
                  <h4 className="text-xl font-semibold">
                    A few things to keep in mind when reviewing your bill:
                  </h4>
                  <div className="pl-2 flex flex-col gap-4">
                    <div className="flex text-lg text-gray-600 gap-4">
                      <span>-</span>
                      <p>
                        Make sure the bill includes detailed usage information,
                        such as monthly consumption, demand charges, and rates.
                      </p>
                    </div>
                    <div className="flex text-lg text-gray-600 gap-4">
                      <span>-</span>
                      <p>
                        The more data we can analyze, the more accurate and
                        effective your energy plan will be.
                      </p>
                    </div>
                    <div className="flex text-lg text-gray-600 gap-4">
                      <span>-</span>
                      <p>
                        If you’re having trouble accessing or understanding your
                        utility bill, our team is available to assist you in
                        gathering and interpreting the necessary information.
                      </p>
                    </div>
                    <div className="flex text-lg text-gray-600 gap-4">
                      <span>-</span>
                      <p>
                        By using your electricity bill, we can better identify
                        ways to lower your energy costs, increase efficiency,
                        and achieve long-term savings. Let’s take the first step
                        toward smarter energy management!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 flex-col md:flex-row hidden">
                <Button title="Oncor Shop" type="filled" onClick={() => {}} />
                <Button
                  title="CenterPoint Shop"
                  type="filled"
                  onClick={() => {}}
                />
              </div>
            </div>
            <div className="flex-1 flex items-center">
              <img src={ImgSection6Bg} className="rounded-xl" />
            </div>
          </div>
        </section>

        <section className="bg-primary py-10 md:py-20">
          <div className="flex flex-col justify-center items-center gap-12">
            <img src={ImgLogo} className="w-[80px] md:w-[100px]" alt="Logo" />
            <h2 className="text-white text-4xl md:text-5xl font-semibold text-center md:text-start">
              Enroll today to start saving!
            </h2>
            <div className="pb-16 pt-4">
              <Button title="Enroll Now" type="filled" onClick={() => {}} />
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center py-10 md:py-32">
          <div className="max-w-[1250px] flex flex-col gap-12 px-4 md:px-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-center">
                FAQs
              </h2>
            </div>
            <div className="md:grid grid-cols-3 flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <FaqCard
                  title="Who Is Mill Street Energy?"
                  desc="Mill Street Energy is an energy management company focused on optimizing energy efficiency. From comprehensive energy assessments to ensuring you’re paying the lowest possible rates for electricity, we conduct a thorough walkthrough to ensure you’re using energy as efficiently as possible."
                />
                <FaqCard
                  title="What's the benefit of energy assessments for my property if everything seems to be working fine?"
                  desc="All equipment has a lifespan, and as it ages, it becomes less efficient, using more electricity to achieve the same results. This increases your energy costs, and delaying replacement could lead to equipment failure, disrupting your operations. Our goal is to help you manage both your energy costs and the condition of your equipment, ensuring efficiency and preventing unexpected downtime."
                />
              </div>
              <div className="flex flex-col gap-6">
                <FaqCard
                  title="How Does MSE Make Money?"
                  desc="At Mill Street Energy, we generate revenue by helping our clients save energy and reduce costs. We do this by providing services like installing EV charging stations, setting up commercial solar solutions, energy procurement, and upgrading old equipment with more efficient models. By making energy efficiency simple, we help our customers save money while growing our business."
                />
                <FaqCard
                  title="Can I go back to my old supply rate after switching?"
                  desc="Of course! If you decide for any reason that you would like to switch back, yes you can do so, However we make it our goal to ensure you have the lowest available rates through us."
                />
              </div>
              <div className="flex flex-col gap-6">
                <FaqCard
                  title="What Happens When I Get A New rate?"
                  desc="Once your new supply rate is submitted, you’ll receive a confirmation email with the details of your rate (price, plan duration, and supplier). The new rate will appear on your bill within 1-2 billing cycles, depending on your utility company’s processing time. Your utility provider remains the same, and there will be no interruption in service. You’ll continue to receive your bill from your utility, with the new supplier rate listed in the supply section."
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        style={{
          backgroundImage: `url(${ImgSection1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-white/10 pt-10 md:pt-16 lg:pt-24">
          <h2 className="text-xl md:text-4xl lg:text-6xl text-center font-semibold text-white px-10">
            WE BELIEVE IN GIVING BACK
          </h2>
          <div>
            <div className="p-4 md:p-10 lg:p-20 flex">
              <div className="grow bg-white/20 rounded-xl md:rounded-[20px] lg:rounded-[60px] shadow-lg p-4 md:p-10 lg:p-24">
                <p className="text-white text-base md:text-xl lg:text-3xl text-center">
                  At Mill Street Energy, we believe that sustainability extends
                  beyond energy savings—it’s about creating positive, lasting
                  impacts on communities. That’s why we’re committed to donating
                  for every project we complete to support Give Power’s mission
                  of providing clean drinking water to underserved communities.
                  Access to clean water is a fundamental human right, and by
                  contributing to this cause, we’re helping create a healthier
                  and more equitable world for all. It’s a small step we can
                  take to power meaningful change beyond energy efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={ImgFooterBg} className="w-full" />
      </div>
    </>
  );
};

export default Aboutus;
