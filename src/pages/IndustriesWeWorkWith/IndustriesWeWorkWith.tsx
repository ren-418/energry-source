import IndustryCard from "./components/IndustryCard";

import ImgCommercialOffice from "../../assets/images/industies-work-with/commercial-office.jpeg";
import ImgIndustrialWarehouse from "../../assets/images/industies-work-with/industrial-warehouse.jpg";
import ImgMunicipalState from "../../assets/images/industies-work-with/municipal-state.jpg";
import ImgEducation from "../../assets/images/industies-work-with/education.jpg";
import ImgHosptalityRetail from "../../assets/images/industies-work-with/hopitiality-retail.jpg";
import ImgHealthcare from "../../assets/images/industies-work-with/healthcare.jpg";
import ImgSportsRecreaction from "../../assets/images/industies-work-with/sports-recreation.jpg";
import ImgSmallBusiness from "../../assets/images/industies-work-with/small-business.jpg";

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
            <div className="flex flex-wrap gap-8 justify-center">
              <IndustryCard
                image={ImgCommercialOffice}
                title="COMMERCIAL OFFICE"
                desc="We design the best solution to exceed each site’s unique energy needs to maximize savings, while improving work environments for your employees and customers."
              />
              <IndustryCard
                image={ImgIndustrialWarehouse}
                title="INDUSTRIAL &amp; WAREHOUSE"
                desc="The industrial and warehousing sectors are driven by energy use. We have the expertise that identifies comprehensive solutions to afford you lower operating costs and create a safer and more productive facility."
              />
              <IndustryCard
                image={ImgMunicipalState}
                title="MUNICIPAL & STATE"
                desc="We provide tailored solutions that meet your community’s needs, offering budgetary savings on energy bills and a wide range of environmental and socioeconomic benefits."
              />
              <IndustryCard
                image={ImgEducation}
                title="EDUCATION"
                desc="We are committed to creating superior learning environments for your students and faculty.  We work to minimize the costs to upgrade your facilities and support your carbon reduction and sustainability goals."
              />
              <IndustryCard
                image={ImgHosptalityRetail}
                title="HOSPITALITY & RETAIL"
                desc="A comfortable, well lit, inviting space translates to more customers and more business for you. Our solutions help bring more customers into your space, and keep your operating costs low.  "
              />
              <IndustryCard
                image={ImgHealthcare}
                title="HEALTHCARE"
                desc="A comfortable, well lit, inviting space translates to more customers and more business for you. Our solutions help bring more customers into your space, and keep your operating costs low.  "
              />
              <IndustryCard
                image={ImgSportsRecreaction}
                title="SPORTS & RECREATION"
                desc="Energy costs of sporting and recreational facilities can be extensive. Our comprehensive solutions can transform sports arena, gym, or athletic event space, enhancing the athlete and patron experiences, while impacting your bottom line."
              />
              <IndustryCard
                image={ImgSmallBusiness}
                title="SMALL BUSINESS"
                desc="We have the deep experience working with small business owners, providing the time, resources and knowledge necessary to significantly reduce your energy use. "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustriesWeWorkWith;
