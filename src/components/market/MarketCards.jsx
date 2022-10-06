import React from "react";
import Bitcon from "../../assets/icon/Bitcon";
import BrandG from "../../assets/icon/BrandG";
import BrandH from "../../assets/icon/BrandH";
import Fowardicon from "../../assets/icon/Fowardicon";
import {
  CardBody,
  CardBody2,
  CardBody3,
  CardContainer,
  CardGrid,
  CardHeader,
  CardList,
  CardListItem,
  CardMore,
  CardTable,
  CardTitle,
} from "./BrandsElement";

function MarketCards() {
  return (
    <CardContainer>
      <CardListItem>
        <CardGrid>
          <CardBody>
            <CardList>
              <CardTitle>Highlighted brands </CardTitle>
              <CardHeader>1 <Bitcon />Brand Y</CardHeader>
              <CardHeader>2 <BrandH />Brand A</CardHeader>
              <CardHeader>3 <BrandG />Brand Z</CardHeader>
            </CardList>
            <CardList>
              <CardMore>
                More <Fowardicon />
              </CardMore>
              <CardTable>1USD = 11X Tokens</CardTable>
              <CardTable>1USD = 11X Tokens</CardTable>
              <CardTable>1USD = 11X Tokens</CardTable>
            </CardList>
          </CardBody>

          <CardBody2>
            <CardList>
              <CardTitle>Highlighted brands</CardTitle>
              <CardHeader>1 <Bitcon />Brand Y</CardHeader>
              <CardHeader>2 <BrandH />Brand A</CardHeader>
              <CardHeader>3 <BrandG />Brand Z</CardHeader>
            </CardList>
            <CardList>
              <CardMore>
                More <Fowardicon />
              </CardMore>
              <CardTable>1USD = 11X Tokens</CardTable>
              <CardTable>1USD = 11X Tokens</CardTable>
              <CardTable>1USD = 11X Tokens</CardTable>
            </CardList>
          </CardBody2>

          <CardBody3>
            <CardList>
              <CardTitle>Highlighted brands</CardTitle>
              <CardHeader>1 <Bitcon />Brand Y</CardHeader>
              <CardHeader>2 <BrandH />Brand A</CardHeader>
              <CardHeader>3 <BrandG />Brand Z</CardHeader>
            </CardList>
            <CardList>
              <CardMore>
                More <Fowardicon />
              </CardMore>
              <CardTable>1USD = 11X Tokens</CardTable>
              <CardTable>1USD = 11X Tokens</CardTable>
              <CardTable>1USD = 11X Tokens</CardTable>
            </CardList>
          </CardBody3>
        </CardGrid>
      </CardListItem>
    </CardContainer>
  );
}

export default MarketCards;
