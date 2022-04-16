import React from "react";
import { lightning } from "assets/images";
import { mockData } from "utils/constants/mockData";
import PricingItem from "./PricingItem/PricingItem";
import "./Pricing.scss";
import { SectionTitle } from "components";

const Pricing = () => {
  const { pricing } = mockData;
  return (
    <section id="pricing" className="section animated">
      <div className="container">
        <SectionTitle title="Pricing" icon={lightning} />
        <div className="pricing__wrap">
          {pricing &&
            !!pricing.length &&
            pricing.map((data, index) => (
              <PricingItem key={index} data={data} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
