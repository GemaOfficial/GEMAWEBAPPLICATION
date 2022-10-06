import React from "react";
import {
  MarketHeader,
  MarketTitle,
  MarketBody,
  MarketContainer,
  MarketElement,
  MarketGrid,
  MarketList,
  BrandsListItemImage,
} from "./BrandsElement";
import MarketImage from "../../assets/market/MarketImage.svg";

function Market() {
  return (
    <MarketElement>
      <MarketContainer>
        <MarketGrid>
          <MarketBody>
            <MarketTitle>Market</MarketTitle>
            <MarketHeader>
              Checkout regular market
              <br /> updates by GEMA
            </MarketHeader>
            <MarketList>
              um dolor sit amet, consectetur adipiscing elit. Viverra gravi
              <br />
              integer id tellus pharetra vestib
            </MarketList>
          </MarketBody>
          <BrandsListItemImage src={MarketImage} alt="market-icon" />
        </MarketGrid>
      </MarketContainer>
    </MarketElement>
  );
}

export default Market;
