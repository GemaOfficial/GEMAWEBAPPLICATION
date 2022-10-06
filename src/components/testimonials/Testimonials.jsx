import React from "react";
import {
  TestimonialsArea,
  TestimonialsBody,
  TestimonialsCard,
  TestimonialsElement,
  TestimonialsHeader,
  TestimonialsText,
  TestimonialsTitle,
  TestimonialsVideo,
  TestimonialsCardRight,
  TestimonialsName
} from "./TestimonialsElements";
function Testimonials() {
  return (
    <TestimonialsElement>
      <TestimonialsBody>
        <TestimonialsTitle>Testimonial</TestimonialsTitle>
        <TestimonialsHeader>
          See what our customers
          <br /> are saying
        </TestimonialsHeader>
        <TestimonialsArea>
          <TestimonialsCard>
            <TestimonialsVideo>
              <video controls="controls" preload="metadata">
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5"
                  type="video/mp4"
                />
              </video>
            </TestimonialsVideo>
            <TestimonialsText>"I love your system. Thank you for<br /> making it painless,. Really good."</TestimonialsText>
            <TestimonialsName>Floyd Miles</TestimonialsName>
            <TestimonialsText>Founder, ExtendSales</TestimonialsText>
          </TestimonialsCard>

          <TestimonialsCardRight>
            <TestimonialsVideo>
              <video width="400" controls="controls" preload="metadata">
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5"
                  type="video/mp4"
                />
              </video>
            </TestimonialsVideo>
            <TestimonialsText>"Since I invested in it I made over<br /> 100,000 dollars profits.."</TestimonialsText>
            <TestimonialsName>Albert Flores</TestimonialsName>
            <TestimonialsText>Founder, ExtendSales</TestimonialsText>
          </TestimonialsCardRight>
        </TestimonialsArea>
      </TestimonialsBody>
    </TestimonialsElement>
  );
}

export default Testimonials;
