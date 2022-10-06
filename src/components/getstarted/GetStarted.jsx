import React from "react";
import { Fade } from "react-reveal";
import ForwardIcon from "../../assets/landing/ForwardIcon";
import {
  GetStartedBody,
  GetStartedElement,
  GetStartedButton,
  GetStartedText,
  GetStartedTitle,
  GetStartedArea,
} from "./GetstartedElement";
function GetStarted() {
  return (
    <GetStartedElement>
      <GetStartedBody>
        <Fade up>
          <GetStartedTitle>Ready to get started?</GetStartedTitle>
        </Fade>
        <Fade up>
          <GetStartedText>
            You can register to find more interesting features on <br />
            the app.
          </GetStartedText>
        </Fade>
        <GetStartedArea>
          <Fade up>
            <GetStartedButton>
              Want to try a demo <ForwardIcon />
            </GetStartedButton>
          </Fade>
        </GetStartedArea>
      </GetStartedBody>
    </GetStartedElement>
  );
}

export default GetStarted;
