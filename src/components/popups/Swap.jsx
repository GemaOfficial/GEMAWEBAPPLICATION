import React from "react";
import { useContext } from "react";
import Popup from "reactjs-popup";
import Bitcon from "../../assets/icon/Bitcon";
import ArrowDown from "../../assets/market/ArrowDown";
import { GlobalContext } from "../../globals/GlobalContext";
import {
  SendButton,
  SendCardBody,
  SendFooter,
  SendTitle,
  SwapBody,
  SwapContainer,
  TokenCard,
  TokenCardItem,
  TokenDropdown,
  TokenGrid,
  TokenGridHeader,
  TokenGridItem,
  TokenItem,
} from "./PopupElement";
import Tokens from "./Tokens";

function Swap() {
  const {
    isShow,
    setShow,
    token,
    brand,
    showSwap,
    showConfirm,
    setShowConfirm,
  } = useContext(GlobalContext);

  return (
    <SwapContainer>
      <Popup open={showSwap}>
        <SwapBody>
          <SendTitle>Swap</SendTitle>
          <TokenDropdown>
            <TokenCardItem>
              <TokenItem>
                <TokenGridItem>From</TokenGridItem>
                <TokenGridHeader>
                  4560<SendCardBody>$67.89</SendCardBody>
                </TokenGridHeader>
              </TokenItem>
              <TokenCard>
                <TokenGridItem>Use Max</TokenGridItem>
                <TokenGrid onClick={() => setShow(true)}>
                  <Bitcon />
                  {token || "Token X"}
                  <ArrowDown />
                </TokenGrid>
                {isShow === true ? <Tokens /> : null}
              </TokenCard>
            </TokenCardItem>
          </TokenDropdown>

          <TokenDropdown>
            <TokenCardItem>
              <TokenItem>
                <TokenGridItem>From</TokenGridItem>
                <TokenGridHeader>
                  4560<SendCardBody>$67.89</SendCardBody>
                </TokenGridHeader>
              </TokenItem>
              <TokenCard>
                <TokenGridItem>Use Max</TokenGridItem>
                <TokenGrid onClick={() => setShow(true)}>
                  <Bitcon />
                  {brand || "Token X"}
                  <ArrowDown />
                </TokenGrid>
                {isShow === true ? <Tokens /> : null}
              </TokenCard>
            </TokenCardItem>
          </TokenDropdown>
          <SendFooter>
            <SendButton onClick={() => setShowConfirm(true)}>Swap</SendButton>
          </SendFooter>
        </SwapBody>
      </Popup>
    </SwapContainer>
  );
}

export default Swap;
