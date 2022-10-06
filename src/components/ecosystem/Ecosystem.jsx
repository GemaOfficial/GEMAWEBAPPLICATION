import React from "react";
import EcoImg from "../../assets/service/EcoImg";
import ForwardIcon from "../../assets/landing/ForwardIcon";
import {
  EcosystemButton,
  EcosystemContainer,
  EcosystemElement,
  EcosystemGrid,
  EcosystemHeader,
  EcosystemImage,
  EcosystemText,
  EcosystemTitle,
} from "./EcosystemElement";
import { Fade } from "react-reveal";
function Ecosystem() {
  return (
    <EcosystemElement>
      <EcosystemContainer>
        <EcosystemGrid>
          <Fade up>
            <EcosystemTitle>Ecosystem</EcosystemTitle>
          </Fade>
          <Fade up>
            <EcosystemHeader>
              The GEMA Ecosystem
              <br /> constitutes
            </EcosystemHeader>
          </Fade>
          <Fade up>
            <EcosystemText>
              Brand Stablecoins that are built with the same standard to allow
              <br />
              exchangeability and safety. A customer wallet to list and store
              <br />
              the brand tokens that the consumer has interacted with.
              <br />
              Admin pages that enable brands to view analytics and control the
              <br />
              discounts.
            </EcosystemText>
          </Fade>

          <Fade up>
            <EcosystemButton>
              Learn More <ForwardIcon />
            </EcosystemButton>
          </Fade>
        </EcosystemGrid>
        <Fade up>
          <EcosystemImage>
            <EcoImg />
          </EcosystemImage>
        </Fade>
      </EcosystemContainer>
    </EcosystemElement>
  );
}

export default Ecosystem;
