import React from "react";
import { useContext } from "react";
import Popup from "reactjs-popup";
import ArrowLeft from "../../assets/icon/ArrowLeft";
import { GlobalContext } from "../../globals/GlobalContext";
import {
  DashboardTableHeader,
  Heading,
  Subtitle,
} from "../dashboard/DashboardElement";
import {
  SendButton,
  SendCardBody,
  SendFooter,
  SendTitle,
  SwapBody,
  SwapContainer,
  TokenCardItem,
  TokenGrid,
  TokenGridHeader,
  TokenItem,
} from "./PopupElement";

function Confirm() {
  const { showConfirm, setShowConfirm } = useContext(GlobalContext);
  const handleClick = () => {
    setShowConfirm(false);
  };
  return (
    <SwapContainer>
      <Popup open={showConfirm}>
        <SwapBody>
          <DashboardTableHeader>
            <Subtitle onClick={() => handleClick()}>
              <ArrowLeft />
            </Subtitle>
            <Heading>Confirm</Heading>
          </DashboardTableHeader>
          <TokenCardItem>
            <TokenGridHeader>Rate</TokenGridHeader>
            <TokenGrid>12Gem</TokenGrid>
          </TokenCardItem>

          <TokenCardItem>
            <TokenGridHeader>Inverse Rate</TokenGridHeader>
            <TokenGrid>12Gem</TokenGrid>
          </TokenCardItem>
          <TokenCardItem>
            <TokenGridHeader></TokenGridHeader>
            <TokenGrid>12Gem</TokenGrid>
          </TokenCardItem>
          <TokenCardItem>
            <TokenGridHeader>Estimated Fee</TokenGridHeader>
            <TokenGrid>1.2Gem</TokenGrid>
          </TokenCardItem>

          <SendFooter>
            <SendButton>Send</SendButton>
          </SendFooter>
        </SwapBody>
      </Popup>
    </SwapContainer>
  );
}

export default Confirm;
