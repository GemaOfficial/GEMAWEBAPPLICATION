import React from "react";
import { Fade } from "react-reveal";
import AboutImg from "../../assets/about/AboutImg";
import Tick from "../../assets/about/Tick";
import ForwardIcon from "../../assets/landing/ForwardIcon";
import {
  AboutBody,
  AboutButton,
  AboutContainer,
  AboutElement,
  AboutGrid,
  AboutGridItem,
  AboutImage,
  AboutText,
  AboutTitle,
  AboutItem,
} from "./AboutElement";

function About() {
  return (
    <AboutElement>
      <AboutContainer>
        <AboutGrid>
          <Fade up>
            <AboutTitle>About Gema</AboutTitle>
          </Fade>
          <Fade up>
            <AboutBody>
              How we manage?
              <br /> The gema blockchain
            </AboutBody>
          </Fade>
          <Fade up>
            <AboutText>
              GEMA Mobile App/Web App where users be able to send, receive,
              <br />
              view and redeem their loyalty tokens.
            </AboutText>
          </Fade>
          <AboutGridItem>
            <Fade up>
              <AboutItem>
                <Tick />
                The GEM token.
              </AboutItem>
            </Fade>
            <Fade up>
              <AboutItem>
                <Tick />
                Smart contracts.
              </AboutItem>
            </Fade>
            <Fade up>
              <AboutItem>
                <Tick />
                Different brand blockchains .
              </AboutItem>
            </Fade>
          </AboutGridItem>
          <Fade up>
            <AboutButton>
              Learn More <ForwardIcon />
            </AboutButton>
          </Fade>
        </AboutGrid>
        <Fade up>
          <AboutImage>
            <AboutImg />
          </AboutImage>
        </Fade>
      </AboutContainer>
    </AboutElement>
  );
}

export default About;
