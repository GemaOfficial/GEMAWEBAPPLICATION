import React from "react";
import {
  ServiceBody,
  ServiceCard,
  ServiceCardText,
  ServiceCardTitle,
  ServiceElement,
  ServiceGrid,
  ServiceIcon,
  ServiceText,
  ServiceTitle,
  ServiceHeader,
} from "./ServiceElement";
import { ServiceData } from "../ourservices/Data";
import { Fade } from "react-reveal";
function Service() {
  return (
    <ServiceElement>
      <ServiceBody>
        <Fade up>
          <ServiceTitle>Our Services</ServiceTitle>
        </Fade>
        <Fade up>
          <ServiceHeader>What we Provide</ServiceHeader>
        </Fade>
        <Fade up>
          <ServiceText>
            Our technology offers you the future
            <br />
            of loyalty.
            <br />
            Easy. Fast. Secure.
          </ServiceText>
        </Fade>
        <ServiceGrid>
          {ServiceData.map((item, index) => (
            <Fade up key={index}>
              <ServiceCard>
                <ServiceIcon className="heartbeat">{item.icon}</ServiceIcon>
                <ServiceCardTitle>{item.title}</ServiceCardTitle>
                <ServiceCardText>{item.text}</ServiceCardText>
              </ServiceCard>
            </Fade>
          ))}
        </ServiceGrid>
      </ServiceBody>
    </ServiceElement>
  );
}

export default Service;
