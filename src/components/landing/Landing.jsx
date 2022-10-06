import React from "react";
import {
  LandingImage,
  LandingBody,
  LandingButton,
  LandingElement,
  LandingTitle,
  LandingHeader,
  LandingText,
  LandingGrid,
  LandingGridLeft,
  LandingGridRight,
  LandingDemoButton,
  LandingButtons,
} from "./LandingElement";
import { LandingIcon } from "../../assets/landing/Landingimage";
import ForwardIcon from "../../assets/landing/ForwardIcon";

function Landing() {
  return (
    <LandingElement>
      <LandingBody>
        <LandingGrid>
          <LandingGridLeft>
            <LandingHeader>Loyalty Services</LandingHeader>
            <LandingTitle>Home of Loyalty </LandingTitle>
            <LandingText>
              GEMA helps brands in creating, issuing and managing <br />
              loyalty tokens through custom built loyalty programs.
            </LandingText>
            <LandingButtons>
              <LandingButton>
                Get started <ForwardIcon />
              </LandingButton>
              <LandingDemoButton>
                Use demo <ForwardIcon />
              </LandingDemoButton>
            </LandingButtons>
          </LandingGridLeft>
          <LandingGridRight>
            <LandingImage>
              <LandingIcon />
            </LandingImage>
          </LandingGridRight>
        </LandingGrid>
      </LandingBody>
    </LandingElement>
  );
}

export default Landing;
