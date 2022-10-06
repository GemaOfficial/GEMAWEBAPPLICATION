import React from "react";
import {
  ContactBody,
  ContactButton,
  ContactElement,
  ContactForm,
  ContactFormArea,
  ContactGrid,
  ContactGridItem,
  ContactGridItem2,
  ContactHeader,
  ContactHeader2,
  ContactIcon,
  ContactImage,
  ContactInput,
  ContactItem,
  ContactText,
  ContactTitle,
  ContactGridItem3,
  ContactHeader3,
  ContactGridItem4,
  ContactHeader4,
  ContactText2,
  ContactGridHeader,
  ContactFormBody,
  ContactLabel,
  MapDiv,
} from "./ContactElement";
import ContactImg from "../../assets/contact/Contactus.svg";
import Locateus from "../../assets/contact/Locate";
import Phone from "../../assets/contact/Phone";
import Emailus from "../../assets/contact/Emailus";
import Map from "./Map";

function Contact() {
  return (
    <ContactElement>
      <ContactBody>
        <ContactGrid id="first">
          <ContactGridItem>
            <ContactTitle>Contact Us</ContactTitle>
            <ContactHeader>
              24 hour’s customer
              <br /> support and services
            </ContactHeader>
            <ContactText>
              um dolor sit amet, consectetur adipiscing elit. Viverra gravi
              <br />
              integer id tellus pharetra vestib
            </ContactText>
          </ContactGridItem>

          <ContactGridItem2>
            <ContactImage>
              <img src={ContactImg} alt="contactimg" />
            </ContactImage>
          </ContactGridItem2>
        </ContactGrid>

        <ContactFormArea>
          <ContactGridItem4>
            <ContactGridHeader>
              <ContactTitle>Contact Us</ContactTitle>
              <ContactHeader2>
                Get a GEMA
                <br /> with expert help
              </ContactHeader2>
            </ContactGridHeader>

            <ContactItem>
              <ContactIcon>
                <Locateus />
              </ContactIcon>
              <ContactGridItem3>
                <ContactHeader3>Head office</ContactHeader3>
                <ContactText2>
                  Office 601 – Floor 6<br /> Al Habtoor Business Tower
                  <br /> P.O.Box : 215162, Dubai, UAE
                </ContactText2>
              </ContactGridItem3>
            </ContactItem>

            <ContactItem>
              <ContactIcon>
                <Phone />
              </ContactIcon>
              <ContactGridItem3>
                <ContactHeader3>Phone</ContactHeader3>
                <ContactText2>
                  +971 4 398 8688
                  <br /> +971 52 422 2220
                </ContactText2>
              </ContactGridItem3>
            </ContactItem>

            <ContactItem>
              <ContactIcon>
                <Emailus />
              </ContactIcon>
              <ContactGridItem3>
                <ContactHeader3>Email</ContactHeader3>
                <ContactText2>info@secondpassport.ae</ContactText2>
              </ContactGridItem3>
            </ContactItem>
          </ContactGridItem4>

          <ContactGridItem2>
            <ContactForm>
              <ContactHeader4>Get in touch</ContactHeader4>
              <ContactText2>
                Get in touch to help us
                <br /> facilitate your Gema journey.
              </ContactText2>
              <ContactFormBody>
                <ContactInput placeholder="&#61447;   Full name here"></ContactInput>
                <ContactInput placeholder="&#xf0e0;   Enter Email"></ContactInput>
              </ContactFormBody>
              <ContactLabel placeholder="Message"></ContactLabel>
              <ContactButton>Send Message</ContactButton>
            </ContactForm>
          </ContactGridItem2>
        </ContactFormArea>

        <MapDiv>
          <Map />
        </MapDiv>
      </ContactBody>
    </ContactElement>
  );
}

export default Contact;
