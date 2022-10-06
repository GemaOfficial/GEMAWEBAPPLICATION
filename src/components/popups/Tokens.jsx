import React from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { useState } from "react";
import ArrowLeft from "../../assets/icon/ArrowLeft";
import Bitcon from "../../assets/icon/Bitcon";
import { GlobalContext } from "../../globals/GlobalContext";
import {
  DashboardTableHeader,
  Heading,
  Subtitle,
} from "../dashboard/DashboardElement";
import { TokensData } from "../dashboard/DashData";
import {
  SendContainer,
  TokenCard,
  TokenCardItem,
  TokenDropdownItem,
  TokenGrid,
  TokenGridBody,
  TokenGridHeader,
  TokenGridItem,
  TokenItem,
} from "./PopupElement";

function Tokens() {
  const { setShow, setToken, setBrand, marketData } = useContext(GlobalContext);
  const handleClick = () => {
    setShow(false);
  };

  const handleSelectBrand = useCallback((token) => {
    setToken(token);
    setShow(false);
  });
  return (
    <TokenDropdownItem>
      <SendContainer>
        <DashboardTableHeader>
          <Subtitle onClick={() => handleClick()}>
            <ArrowLeft />
          </Subtitle>
          <Heading>Tokens</Heading>
        </DashboardTableHeader>

        <TokenGridBody>
          {marketData.map((item, index) => (
            <TokenCardItem key={index}>
              <TokenItem>
                <TokenGridHeader
                  onClick={() => {
                    handleSelectBrand(item.token);
                  }}
                >
                  <Bitcon />
                  {item.symbol}
                </TokenGridHeader>
              </TokenItem>
              <TokenCard>
                <TokenGrid>{item.name}</TokenGrid>
                <TokenGridItem>{item.value}</TokenGridItem>
              </TokenCard>
            </TokenCardItem>
          ))}
        </TokenGridBody>
      </SendContainer>
    </TokenDropdownItem>
  );
}

export default Tokens;
