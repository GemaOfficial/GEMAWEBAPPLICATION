import React from "react";
import ServiceImg from "../../assets/service/ServiceImg.svg";
import Laptop from "../../assets/service/Laptop.svg";
import {
  OurHeaderContainer,
  OurServiceBody,
  OurServiceBody2,
  OurServiceContainer2,
  OurServiceContainer3,
  OurServiceElement,
  OurServiceGrid2,
  OurServiceGrid3,
  OurServiceHeader,
  OurServiceHeader2,
  OurServiceHeader3,
  OurServiceHeader4,
  OurServiceImage,
  OurServiceTeam,
  OurServiceTeam2,
  OurServiceTeamHeader,
  OurServiceTeamText,
  OurServiceTeamTitle,
  OurServiceText,
  OurServiceText2,
  OurServiceText3,
  OurServiceTitle,
  ServiceCard,
  ServiceCard2,
  ServiceCardText,
  ServiceCardTitle,
  ServiceIcon,
} from "./OurServiceElement";

import { ServiceGrid } from "../services/ServiceElement";
import RightArrow from "../../assets/service/RightArrow";
import { ServiceData } from "./Data";

function OurService() {
  return (
    <OurServiceElement>
      <OurServiceBody>
        <OurHeaderContainer>
          <OurServiceTitle>Our Services</OurServiceTitle>
          <OurServiceHeader>
            How we provide services
            <br /> to our clients
          </OurServiceHeader>
          <OurServiceText>
            You can reach out to us to have us work with your brand.
          </OurServiceText>
        </OurHeaderContainer>
        <OurServiceGrid3>
          <OurServiceImage>
            <img src={ServiceImg} alt="service" />
          </OurServiceImage>
        </OurServiceGrid3>
      </OurServiceBody>

      <OurServiceBody2>
        <OurServiceGrid2>
          <OurServiceImage>
            <img src={Laptop} alt="laptop" />
          </OurServiceImage>
        </OurServiceGrid2>

        <OurServiceContainer3>
          <OurServiceTitle>Service details</OurServiceTitle>
          <OurServiceHeader2>
            GEMA aims to define a<br /> product-market loyalty
            <br /> solution according to same needs
          </OurServiceHeader2>
          <OurServiceText2>
            To define a minimum viable customers needed to make a business
            <br />
            sustainable. Gema provides a confidential report of brand
            <br />
            interactions wth customers.
          </OurServiceText2>
        </OurServiceContainer3>
      </OurServiceBody2>

      <OurServiceTeam>
        <OurServiceTeamTitle>How GEMA WORKS</OurServiceTeamTitle>
        <OurServiceTeamHeader>Service features</OurServiceTeamHeader>
        <OurServiceTeamText>
          In GEMA, we focus on automation in loyalty to improve brand <br />
          and customer satisfaction.
        </OurServiceTeamText>

        <ServiceGrid>
          {ServiceData.map((item, index) => (
            <ServiceCard key={index}>
              <ServiceIcon className="puff-in-center">{item.icon}</ServiceIcon>
              <ServiceCardTitle>{item.title}</ServiceCardTitle>
              <ServiceCardText>{item.text}</ServiceCardText>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </OurServiceTeam>

      <OurServiceTeam2>
        <OurServiceTeamTitle>Service</OurServiceTeamTitle>
        <OurServiceHeader3>Customer problems & solutions</OurServiceHeader3>
        <OurServiceText3 style={{ textAlign: "center" }}>
          After a survey of 20 of the top 100 companies in Kenya, we
          <br /> saw a 70% need in incorporating loyalty systems in these
          <br /> brands and other upcoming ones. These are some of the
          <br /> problems these brands experienced.
        </OurServiceText3>

        <OurServiceContainer2>
          <OurServiceGrid2>
            <OurServiceHeader4>
              Low customer retention by brands
            </OurServiceHeader4>
            <OurServiceText2>
              We provide analytical data to brands where they can know what
              makes them sustainable and who are their most loyal
              <br /> customers.
            </OurServiceText2>

            <ServiceCard2>
              <OurServiceHeader4>
                Hard to value the loyalty points <RightArrow />
              </OurServiceHeader4>
              <OurServiceText2>
                We offer a deep level of technology in valuing multi-brand
                stablecoins and come up with a working
                <br /> model.
              </OurServiceText2>
            </ServiceCard2>

            <OurServiceHeader4>
              Time delays and expiry of loyalty points
            </OurServiceHeader4>
            <OurServiceText2>
              Just imagine if your favourite brand was to collapse and you as a
              loyal customer had not redeemed even a single token.
            </OurServiceText2>
          </OurServiceGrid2>
        </OurServiceContainer2>
      </OurServiceTeam2>
    </OurServiceElement>
  );
}

export default OurService;
