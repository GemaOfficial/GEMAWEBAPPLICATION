import React from "react";
import AboutUsImg from "../../assets/aboutus/AboutUsImg";
import Mission from "../../assets/aboutus/Mission";
import AboutPage from "../../pages/AboutPage";
import TestimonialsPage from "../../pages/TestimonialsPage";
import {
  AboutBody,
  AboutContainer,
  AboutElement,
  AboutTitle,
  AboutHeader,
  AboutText,
  AboutGrid,
  AboutImage,
  AboutBody2,
  AboutGrid2,
  AboutHeader2,
  AboutText2,
  AboutContainer3,
} from "./AboutUsElement";

function AboutUs() {
  return (
    <AboutElement>
      <AboutBody>
        <AboutContainer>
          <AboutTitle>About US</AboutTitle>
          <AboutHeader>
            Get To know how we
            <br /> work & who we are
          </AboutHeader>
          <AboutText>
            GEMA helps brands know their customers, interact and offer
            <br /> a range of benefits to them who in return improve the
            <br /> brands.
          </AboutText>
        </AboutContainer>
        <AboutGrid>
          <AboutImage>
            <AboutUsImg />
          </AboutImage>
        </AboutGrid>
      </AboutBody>

      <AboutBody2>
        <AboutGrid2>
          <AboutImage>
            <Mission />
          </AboutImage>
        </AboutGrid2>

        <AboutContainer3>
          <AboutTitle>Our Mission</AboutTitle>
          <AboutHeader2>
            What is our mission
            <br />& Vission
          </AboutHeader2>
          <AboutText2>
            Vision - Home of Loyalty
            <br />
            <br />
            Mission - We help brands achieve customer engagement by
            <br /> offering loyalty token programs of which the consumers will
            use
            <br /> the tokens diversely within our ecosystem.
          </AboutText2>
        </AboutContainer3>
      </AboutBody2>
      <AboutPage />
      <TestimonialsPage />
    </AboutElement>
  );
}

export default AboutUs;
