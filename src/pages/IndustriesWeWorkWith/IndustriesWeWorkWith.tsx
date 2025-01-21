import IndustryCard from "./components/IndustryCard";

import ImgCommercialAndRetail from '../../assets/images/industries/Commercial and Retail.webp'
import ImgEducation from '../../assets/images/industries/Education.webp';
import ImgEnergyIntensive from '../../assets/images/industries/Energy-Intensive Businesses.webp'
import ImgIndustrialAndManfacturing from '../../assets/images/industries/For Industrial and Manufacturing.webp';
import ImgGovermentAndPublic from '../../assets/images/industries/Government and Public Sector.webp';
import ImgHealthcare from '../../assets/images/industries/Healthcare.webp'
import ImgResidentialCommunities from '../../assets/images/industries/Residential Communities.webp';
import ImgTechnologyAndDatacenter from '../../assets/images/industries/Technology and Data Centers.webp';
import ImgTransportationAndLogistics from '../../assets/images/industries/Transportation and Logistics.webp';
import ImgEntertainment from '../../assets/images/industries/Entertainment.webp';
import ImgAgriculture from '../../assets/images/industries/Agriculture.webp';
import ImgNonprofitAndCommunity from '../../assets/images/industries/Nonprofit and Community Organizations.webp'

const IndustriesWeWorkWith: React.FC = () => {
  return (
    <>
      <div className="flex justify-center py-6 md:py-16 lg:py-28 mt-28">
        <div className="max-w-[1250px] flex flex-col gap-10 md:gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl text-center font-bold px-10">
              Industries We Work With
            </h2>
          </div>
          <div>
            <div className="flex flex-wrap gap-6 justify-center">
              <IndustryCard
                image={ImgTechnologyAndDatacenter}
                title="For Technology and Data Centers"
                desc="24/7 operations demand reliable, efficient power solutions that keep your servers running and your costs down. Our advanced energy management systems help you maintain optimal performance while significantly reducing your cooling and infrastructure expenses."
              />
              <IndustryCard
                image={ImgIndustrialAndManfacturing}
                title="For Industrial and Manufacturing"
                desc="High-volume production demands reliable, cost-effective energy solutions that keep your operations running smoothly. Our optimization systems help maximize your machinery's efficiency while keeping your energy costs down and productivity up."
              />
              <IndustryCard
                image={ImgHealthcare}
                title="For Healthcare"
                desc="Round-the-clock patient care requires unwavering energy reliability and precision climate control. Our solutions ensure your facility maintains optimal conditions while reducing operational costs, letting you focus more resources on what matters most - patient care."
              />
              <IndustryCard
                image={ImgEducation}
                title="For Education"
                desc="Creating an optimal learning environment means having efficient, reliable energy systems across your entire campus. Our solutions help reduce your facility costs and redirect valuable resources back to where they belong - in the classroom."
              />
              <IndustryCard
                image={ImgCommercialAndRetail}
                title="For Commercial and Retail"
                desc="Every customer that walks through your door expects a comfortable shopping experience, regardless of the season. Our energy solutions help maintain the perfect environment while significantly reducing your monthly utility expenses."
              />
              <IndustryCard
                image={ImgGovermentAndPublic}
                title="For Government and Public Sector"
                desc="Public facilities need smart solutions that maximize every taxpayer dollar. Our energy management systems help reduce your operational costs and increase efficiency, letting you deliver more value to your community."
              />
              <IndustryCard
                image={ImgResidentialCommunities}
                title="For Residential Communities"
                desc="Your residents expect comfort and value in their living spaces every day of the year. Our energy solutions help reduce utility costs across your property while maintaining the perfect environment that keeps residents happy and long-term."
              />
              <IndustryCard
                image={ImgTransportationAndLogistics}
                title="For Transportation and Logistics"
                desc="Keeping your facilities running 24/7 requires energy solutions that never stop delivering. Our systems help optimize your operations and reduce costs across terminals, warehouses, and loading zones while maintaining peak efficiency."
              />
              <IndustryCard
                image={ImgEnergyIntensive}
                title="For Entertainment and Recreation"
                desc="Creating memorable experiences means maintaining perfect comfort for thousands of guests. Our energy solutions help reduce your operational costs while ensuring your venues deliver the ideal environment for every show, game, or attraction."
              />
              <IndustryCard
                image={ImgAgriculture}
                title="For Agriculture"
                desc="Your growing operations require precise climate control and reliable power that works as hard as you do. Our solutions help optimize your energy use across irrigation, climate systems, and equipment while keeping your operational costs down."
              />
              <IndustryCard
                image={ImgNonprofitAndCommunity}
                title="For Nonprofit and Community Organizations"
                desc="Every dollar saved on energy is another dollar toward your mission. Our solutions help reduce your facility costs and maintain comfortable spaces for your community, letting you focus more resources on the work that matters."
              />
              <IndustryCard
                image={ImgEntertainment}
                title="For Energy-Intensive Businesses"
                desc="Continuous operations demand energy solutions that deliver reliability and efficiency at scale. Our systems help optimize your processes and reduce costs across your entire operation while maintaining the consistent power you need."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustriesWeWorkWith;
