import React from "react";
import { lightning } from "assets/images";
import { mockData } from "constants/mockData";
import PricingItem from "./PricingItem/PricingItem";
import "./Pricing.scss";

const Pricing = () => {
  const { pricing } = mockData;
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section__title">
          <h4 className="text__uppercase text__center">
            <img src={lightning} alt="demo" />
            Pricing
          </h4>
        </div>
        <div className="pricing__wrap">
          {pricing.map((data, index) => (
            <PricingItem key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
