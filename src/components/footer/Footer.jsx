import React from "react";
import Call from "../../assets/footer/call";
import Email from "../../assets/footer/Email";
import Location from "../../assets/footer/Location";
import Logo from "../../assets/navbar/Logo";
import { useNavigate } from "react-router-dom";
import {
  FooterBody,
  FooterElement,
  FooterGrid,
  FooterHeader,
  FooterLogo,
  FooterSubHeader,
  FooterText,
  FooterTitle,
  FooterContainer,
  FooterTemplate,
  FooterItems,
  FooterTemplate2,
  FooterList,
  FooterInput,
  FooterForm,
} from "./FooterElement";

function Footer() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact-us");
  };
  const handleClick2 = () => {
    navigate("/our-projects");
  };
  const handleClick5 = () => {
    navigate("/client-page");
  };
  const handleClick6 = () => {
    navigate("/about-us");
  };
  const handleClick7 = () => {
    navigate("/our-service");
  };
  return (
    <FooterElement>
      <FooterBody>
        <FooterTemplate>
          <FooterContainer>
            <FooterGrid>
              <FooterLogo>
                <Logo />
              </FooterLogo>
              <FooterTitle>Best Leading Brand Loyalty Solution</FooterTitle>
            </FooterGrid>
            <FooterHeader>
              Be the first to know our <span> new partners and brands </span> into our platform
            </FooterHeader>
            <FooterForm>
              <FooterText>Enter Email:</FooterText>
              <FooterInput  />
            </FooterForm>
          </FooterContainer>
          <FooterList>
            <FooterText>
              <Call />
              (239) 555-0108
            </FooterText>
            <FooterText>
              <Location />
              2972 Westheimer Rd. Santa Ana,
              <br /> Illinois 85486
            </FooterText>
            <FooterText>
              <Email />
              debra.holt@example.com
            </FooterText>
          </FooterList>
        </FooterTemplate>

        <FooterTemplate2>
          <FooterItems>
            <FooterSubHeader onClick={() => handleClick5()}>
              Clients
            </FooterSubHeader>
            <FooterSubHeader onClick={() => handleClick7()}>
              Our Services
            </FooterSubHeader>
            <FooterSubHeader onClick={() => handleClick6()}>
              About Us
            </FooterSubHeader>
            <FooterSubHeader onClick={() => handleClick2()}>
              Projects
            </FooterSubHeader>
            <FooterSubHeader onClick={() => handleClick()}>
              Contact Us
            </FooterSubHeader>
          </FooterItems>
          <FooterSubHeader>© Copyright 2022 by Gema Solutions</FooterSubHeader>
        </FooterTemplate2>
      </FooterBody>
    </FooterElement>
  );
}

export default Footer;
