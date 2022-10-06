import React from "react";
import { useState } from "react";
import Copy from "../../assets/icon/Copy";
import QrCode from "../../assets/icon/QrCode.svg";
import Share from "../../assets/icon/Share";
import {
  CopyButton,
  CopyGroup,
  LinkHeader,
  SendBody,
  SendButton,
  SendCard,
  SendContainer,
  SendElement,
  SendFooter,
  SendSubTitle,
  SendTitle,
  SendTokenCard,
  TokenDropdown,
} from "./PopupElement";
import { RWebShare } from "react-web-share";

import useCopyClipboard from "react-use-clipboard";

function ReceiveToken() {
  const [copy, setCopied] = useCopyClipboard("something to copy");
  const handleClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 9000);
  };
  return (
    <SendElement>
      <SendContainer>
        <SendTitle>Receive Brand Tokens</SendTitle>
        {copy ? (
          <TokenDropdown>
            <CopyGroup>
              <Copy />
              Copied to clipboard
            </CopyGroup>
            <SendTokenCard>
              <LinkHeader>
                https://www.figma.com/file/Pp0imDldcm1nVfHWWTwO3S/Gema---Blockchain-Website-Design-1.2?node-id=0%3A1
              </LinkHeader>
            </SendTokenCard>
          </TokenDropdown>
        ) : (
          <TokenDropdown>
            <SendBody>
              <img src={QrCode} alt="qrcodeicon" />
            </SendBody>
            <SendSubTitle>Scan address to recieve payment</SendSubTitle>
          </TokenDropdown>
        )}

        <SendCard>
          <CopyButton onClick={() => handleClick()}>
            <Copy />
            Copy
          </CopyButton>
          <RWebShare
            data={{
              text: "Like humans, flamingos make friends for life",
              url: "https://on.natgeo.com/2zHaNup",
              title: "Flamingos",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <CopyButton>
              <Share />
              Share
            </CopyButton>
          </RWebShare>
        </SendCard>
        <SendFooter>
          <SendButton>Send</SendButton>
        </SendFooter>
      </SendContainer>
    </SendElement>
  );
}

export default ReceiveToken;
