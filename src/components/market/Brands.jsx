import React from "react";
import {
  BrandsContainer,
  BrandsElement,
  BrandsHeader,
  BrandsListItemButton,
  BrandsListItemDescription,
  BrandsListItemPrice,
  BrandsListItemTitle,
  BrandsTable,
  BrandsTitle,
  BrandsList,
  MarketFavourite,
  MarketSearchButton,
  MarketSearchGrid,
  SearchInput,
} from "./BrandsElement";
import { MarketData } from "./BrandsData";
import ArrowUp from "../../assets/market/ArrowUp";
import ArrowDown from "../../assets/market/ArrowDown";
import Search from "../../assets/icon/Search";
import Star from "../../assets/icon/Star";
import { useNavigate } from "react-router-dom";

function Brands() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/market-place");
  };
  return (
    <BrandsElement>
      <BrandsContainer>
        <BrandsTitle>Analytics</BrandsTitle>
        <BrandsHeader>Markets Status</BrandsHeader>
        <MarketSearchGrid>
          <MarketFavourite onClick={() => handleClick()}>
            <Star />
            favorite
          </MarketFavourite>
          <MarketSearchButton>
            <Search />
            <SearchInput placeholder="Search Token" />
          </MarketSearchButton>
        </MarketSearchGrid>
        {MarketData.map((item, index) => (
          <BrandsTable key={index}>
            <BrandsListItemTitle>{item.id}</BrandsListItemTitle>
            <BrandsListItemDescription>{item.name}</BrandsListItemDescription>
            <BrandsList>{item.LastPrice}</BrandsList>
            <BrandsListItemPrice value={item.DayChange}>
              {item.DayChange > 3.0 ? <ArrowUp /> : <ArrowDown />}
              {item.DayChange}%
            </BrandsListItemPrice>
            <BrandsList>{item.MarketCap}</BrandsList>
          </BrandsTable>
        ))}
        <BrandsListItemTitle>
          Sign up now to start tracking your loyalty portfolio today
        </BrandsListItemTitle>
        <BrandsListItemButton>Sign up</BrandsListItemButton>
      </BrandsContainer>
    </BrandsElement>
  );
}

export default Brands;
