import React from "react";
import WhoweAre from "../../assets/aboutus/WhoweAre";
import {
  AboutBody,
  AboutTitle,
  AboutHeader,
  AboutText,
  AboutContainer2,
  AboutElement,
  AboutGrid,
  AboutImage,
} from "../aboutus/AboutUsElement";

function Whoweare() {
  return (
    <AboutElement>
      <AboutBody>
        <AboutContainer2>
          <AboutTitle>Who we are</AboutTitle>
          <AboutHeader>What is gema?</AboutHeader>
          <AboutText>
            For more than a decade, it has been known that acquiring new
            <br />
            customers is significantly more expensive than retaining existing
            <br />
            customers. Plus, increasing your customer retention rate can
            <br />
            increase your profits up to 95%.
            <br />
            <br />
            In Gema we belive that loyal customers play a crucial role in the
            <br /> success of your business. Therefore, an effective loyalty
            program
            <br /> should become the focus of your company as you can build a
            bond
            <br /> with your customers by providing them with special deals,
            discounts,
            <br /> and other benefits to reward their loyalty.
          </AboutText>
        </AboutContainer2>
        <AboutGrid>
          <AboutImage>
            <WhoweAre />
          </AboutImage>
        </AboutGrid>
      </AboutBody>
    </AboutElement>
  );
}

export default Whoweare;
