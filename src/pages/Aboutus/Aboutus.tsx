import ImgLogo from "../../assets/images/logo-white.png";
import ImgMiddle from "../../assets/images/provider.jpg";
import ImgBenefit1 from "../../assets/images/benefit-img-1.png";
import ImgBenefit2 from "../../assets/images/benefit-img-2.png";
import ImgBenefit3 from "../../assets/images/benefit-img-3.png";
import ImgSection4Bg from "../../assets/images/section4bg.jpg";
import ImgSection5Bg from "../../assets/images/aboutus-section5bg.png";
import ImgSection6Bg from "../../assets/images/aboutus-section6bg.jpg";

import ImgSection1 from "../../assets/images/home-background.jpg";
import ImgFooterBg from "../../assets/images/aboutus/aboutus-footer.png";

import Button from "./components/Button";
import RedirectBox from "./components/RedirectBox";
import BenefitCard from "./components/BenefitCard";
import HowitworksCard from "./components/HowtiworksCard";
import LinkingStep from "./components/LinkingStep";
import FaqCard from "./components/FaqCard";

const Aboutus: React.FC = () => {
  return (
    <>
      <div className="bg-white flex flex-col">
        <section
          style={{ backgroundImage: `url(${ImgSection1})` }}
          className="flex flex-col items-center gap-6 pb-8 pt-[120px] pb-[50%] md:pb-[20%]"
        >
          <div>
            <img src={ImgLogo} alt="Logo" className="w-[80px] md:w-[100px]" />
          </div>
          <div className="text-white flex flex-col gap-6">
            <h2 className="font-semibold text-4xl md:text-5xl text-center">
              Powering Seamless Savings
            </h2>
            <p className="text-center">
              Click, connect, and start earning $10 a month in bill credits.
              Available in Texas only.
            </p>
          </div>
          <div className="flex w-full justify-center flex-col md:flex-row items-center px-8 flex-wrap">
            <RedirectBox
              title="Already a Think Customer?"
              buttonText="Go to My Account"
              redirectTo="/"
            />
            <RedirectBox
              title="New to Think Energy?"
              buttonText="Select a Plan"
              redirectTo="/"
            />
          </div>
        </section>

        <section className="relative mt-[-50%] md:mt-[-20%] pt-10">
          <div className="absolute h-[50%] w-full"></div>
          <div className="px-4 md:px-[28%]">
            <img
              src={ImgMiddle}
              className="rounded-xl overflow-hidden relative z-[10]"
            />
          </div>
        </section>

        <section className="flex flex-col gap-4 md:gap-10 justify-center items-center py-10 md:py-28">
          <p className="text-center text-lg text-primary">THE BENEFITS</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-center">
            Effortless Energy Optimization
          </h2>
          <div className="flex justify-center max-w-[1250px] flex-wrap mt-6 px-4 md:px-10">
            <BenefitCard
              imgUrl={ImgBenefit1}
              title="Easy Enrollment"
              description="Quickly connect your smart thermostat through your Think Energy account with a few simple steps, unlocking instant savings."
            />
            <BenefitCard
              imgUrl={ImgBenefit2}
              title="Save Comfortably"
              description="Think Smart will never adjust your thermostat by more than a few degrees, maintaining your comfort while optimizing energy usage."
            />
            <BenefitCard
              imgUrl={ImgBenefit3}
              title="Earn Monthly Bill Credits"
              description="Enjoy $10 in monthly bill credits just for participating, with no penalties for opting out of occasional events."
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
              <div className="flex flex-col w-full md:w-[80%] gap-6 item-center md:items-start">
                <p className="text-secondary text-xl text-center md:text-start">
                  POWER MEETS PRECISION
                </p>
                <h2 className="text-4xl md:text-5xl text-white font-semibold text-center md:text-start">
                  How it Works
                </h2>
                <p className="text-white text-lg">
                  Maximizing the value of our energy usage isn’t just about how
                  much power we use, but how we use it. It’s about using energy
                  when it’s cleaner, cheaper, and smarter. Think Smart makes
                  real-time adjustments that unlock efficiency for us and
                  savings for you. Here’s how:
                </p>
                <div className="flex justify-center py-4 md:py-14">
                  <Button onClick={() => {}} type="filled" title="Enroll Now" />
                </div>
              </div>

              <div className="flex flex-col gap-3 px-0 md:px-8 py-6 grow">
                <HowitworksCard
                  num={1}
                  title="Smarter Decisions"
                  desc="Think Smart optimizes your thermostat to prioritize air conditioning when energy is cleaner and less expensive for the grid so that you can use a bit less energy whenever it’s not, without sacrificing comfort."
                />
                <HowitworksCard
                  num={2}
                  title="Comfort Optimization"
                  desc="Savings are optimized for comfort, so your home is always ready when you need it, without you lifting a finger."
                />
                <HowitworksCard
                  num={3}
                  title="Savings for You"
                  desc="By using energy more efficiently, we save money on supply costs –  and we share those savings with you through a $10 monthly bill credit.  "
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
                Linking Your Devices
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-24 px-4 md:px-10">
              <div className="flex flex-1 flex-col items-start justify-center gap-9">
                <div>
                  <LinkingStep
                    num={1}
                    title="Log In"
                    desc="Access your Think Energy My Account."
                  />
                  <LinkingStep
                    num={2}
                    title="Navigate to Devices"
                    desc='Click the "Devices" section in the menu.'
                  />
                  <LinkingStep
                    num={3}
                    title="Select Your Thermostat Brand"
                    desc="Find your Think Smart-compatible thermostat brand."
                  />
                  <LinkingStep
                    num={4}
                    title="Follow the Prompts"
                    desc="Enter your thermostat app credentials and confirm the connection."
                  />
                  <LinkingStep
                    num={5}
                    title="Start Saving!"
                    desc="Receive confirmation and enjoy effortless savings with $10 monthly credits."
                  />
                </div>
                <div className="flex flex-col md:flex-row w-full gap-6 justify-center">
                  <Button type="filled" title="My Account" onClick={() => {}} />
                  <Button
                    type="bordered"
                    title="Enroll Now"
                    onClick={() => {}}
                  />
                </div>
              </div>
              <div className="flex-1">
                <img src={ImgSection5Bg} className="w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center py-10 md:py-32 bg-indigo-50">
          <div className="max-w-[1250px] flex flex-col lg:flex-row px-4 md:px-10 gap-10 md:gap-44">
            <div className="flex-1 flex flex-col gap-12">
              <div className="flex flex-col gap-8">
                <p className="text-lg font-semibold text-primary text-center md:text-start">
                  ALL YOU'LL NEED
                </p>
                <h2 className="text-4xl md:text-5xl font-semibold text-center md:text-start">
                  Where to Get a Smart Thermostat
                </h2>
                <p className="text-xl text-gray-600">
                  To take full advantage of Think Smart, you’ll need a
                  Wi-Fi-enabled device from Ecobee, Honeywell, or Resideo. You
                  should be able to find these at your local home center or
                  appliance store, online, or at discounted costs through
                  Centerpoint and Oncor if you’re located in their service
                  areas.
                </p>
                <div className="flex flex-col gap-5">
                  <h4 className="text-xl font-semibold">
                    A few things to keep in mind while shopping:
                  </h4>
                  <div className="pl-2 flex flex-col gap-4">
                    <div className="flex text-lg text-gray-600 gap-4">
                      <span>-</span>
                      <p>
                        Make sure your thermostat is a Wi-Fi-enabled Ecobee,
                        Honeywell, or Resideo model.
                      </p>
                    </div>
                    <div className="flex text-lg text-gray-600 gap-4">
                      <span>-</span>
                      <p>
                        Ecobee, Honeywell, and Resideo all have helpful
                        installation guides.
                      </p>
                    </div>
                    <div className="flex text-lg text-gray-600 gap-4">
                      <span>-</span>
                      <p>
                        If you need a hand, any electrician or HVAC professional
                        should be able to complete your installation for you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 flex-col md:flex-row">
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
                  title="How does the Think Smart program work?"
                  desc="Think Smart automatically pre-conditions your home so you are already comfortable before Think Smart adjusts your thermostat during peak demand times. Think Smart keeps Texas-based customers comfortable while crediting you $10 a month. See the Think Smart Thermostat addendum for additional information."
                />
                <FaqCard
                  title="Who is eligible to enroll?"
                  desc="Texas-based Think Energy customers with a Wi-Fi-connected Ecobee, Honeywell, or Resideo thermostat."
                />
                <FaqCard
                  title="How do I enroll?"
                  desc="Log into your Think Energy My Account, go to the Devices section, and follow the instructions to connect your thermostat."
                />
              </div>
              <div className="flex flex-col gap-6">
                <FaqCard
                  title="Can I connect more than one thermostat?"
                  desc="Yes, it’s important that you add each of your connected smart thermostats in order to receive $10 per month per account."
                />
                <FaqCard
                  title="Will Think Smart turn off my AC or heat?"
                  desc="No, we’ll only ever adjust your setpoint by a few degrees. In some cases, we’ll even pre-cool or pre-heat your home to ensure your comfort."
                />
                <FaqCard
                  title="How long do events last?"
                  desc="Most events typically last between 5-30 minutes, though some may extend for a few hours. For longer events, we may cycle between your normal and adjusted setpoints in order to keep you comfortable."
                />
              </div>
              <div className="flex flex-col gap-6">
                <FaqCard
                  title="How will I know when there’s an event?"
                  desc="Your My Account page and/or thermostat app will track event statuses. Plus, most Wi-Fi-connected thermostats will display the current temperature setting."
                />
                <FaqCard
                  title="How do I override an event?"
                  desc="Simply adjust your thermostat, and you’ll opt out of the event for the rest of the day."
                />
                <FaqCard
                  title="Are there penalties?"
                  desc="You won’t be subject to any penalties, but won’t be eligible for a month’s credit if you opt out of more than two events in that particular month. See the Think Smart Thermostat addendum for additional information."
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <div
        style={{
          backgroundImage: `url(${ImgFooterBg})`,
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
      </div> */}

			<div>
				<img src={ImgFooterBg} />
			</div>
    </>
  );
};

export default Aboutus;
