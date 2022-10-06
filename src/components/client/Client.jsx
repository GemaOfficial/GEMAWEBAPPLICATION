import React from "react";
import {
  ClientBody,
  ClientCard,
  ClientCardBody,
  ClientCardContainer,
  ClientCardGrid,
  ClientCardHeader,
  ClientCardName,
  ClientCardText,
  ClientCardTitle,
  ClientContainerLeft,
  ClientContainerRight,
  ClientElement,
  ClientGrid,
  ClientHeader,
  ClientHeader2,
  ClientImage,
  ClientRightImage,
  ClientSubContainer,
  ClientSubTitle,
  ClientText,
  ClientTitle,
  ClientBody2,
} from "./ClientElement";
import Clientbg from "../../assets/client/Clientbg.svg";
import Logos from "../../assets/client/Logos.svg";
import { ClientData } from "./Data";

function Client() {
  return (
    <ClientElement>
      <ClientBody>
        <ClientGrid>
          <ClientContainerLeft>
            <ClientTitle>Clients</ClientTitle>
            <ClientHeader>
              Our client satisfactions
              <br /> is our first priority
            </ClientHeader>
            <ClientText>
              As one of the world’s leading loyalty companies, what sets GEMA
              <br />
              apart from our competitors is our absolute dedication to providing
              <br />
              customer satisfaction entirely.
            </ClientText>
          </ClientContainerLeft>
          <ClientContainerRight>
            <ClientRightImage src={Clientbg} alt="iconimage" />
          </ClientContainerRight>
        </ClientGrid>
      </ClientBody>

      <ClientCardGrid>
        <ClientCardTitle>Details</ClientCardTitle>
        <ClientCardHeader>
          Our blessed clients said
          <br /> about their experience
        </ClientCardHeader>
        <ClientCardContainer>
          {ClientData.map((item, index) => (
            <ClientSubContainer key={index}>
              <ClientCard>
                <ClientImage>{item.image}</ClientImage>
                <ClientCardBody>
                  <ClientCardName>{item.name}</ClientCardName>
                  <ClientSubTitle>{item.title}</ClientSubTitle>
                </ClientCardBody>
              </ClientCard>
              <ClientCardText>{item.description}</ClientCardText>
            </ClientSubContainer>
          ))}
        </ClientCardContainer>
      </ClientCardGrid>

      <ClientBody2>
        <ClientGrid>
          <ClientContainerLeft>
            <ClientHeader2>
              Trusted by many top <br />
              companies
            </ClientHeader2>
            <ClientText>
              We provide the most modern and efficient loyalty program <br />
              services.
            </ClientText>
          </ClientContainerLeft>
          <ClientContainerRight>
            <ClientRightImage
              src={Logos}
              alt="iconimage"
              className="heartbeat"
            />
          </ClientContainerRight>
        </ClientGrid>
      </ClientBody2>
    </ClientElement>
  );
}

export default Client;
