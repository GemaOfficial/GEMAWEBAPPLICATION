import styled from "styled-components";
import BgIcon from "../../assets/landing/BgIcon.svg";

export const MarketElement = styled.div`
  background: #26283b url(${BgIcon}) no-repeat left top;
  padding-top: 221px;
  @media (max-width: 768px) {
    padding-top: 130px;
  }
`;
export const MarketContainer = styled.div`
  padding-bottom: 134px;
`;
export const MarketTable = styled.div``;
export const MarketBody = styled.div`
  justify-self: center;
`;
export const MarketGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 120px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    place-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: left;
    -webkit-box-pack: center;
    margin: 0.25rem;
    padding: 20px;
  }
`;
export const MarketListItem = styled.div``;
export const BrandsElement = styled.div`
  background-color: #fff;
`;
export const BrandsContainer = styled.div`
  width: 100%;
  display: grid;
  justify-self: center;
  justify-self: center;
  justify-items: center;
  justify-content: center;
  padding-bottom: 30px;
  padding-top: 150px;
`;
export const BrandsTitle = styled.h1`
  font-family: "Allison";
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  text-align: center;
  color: #fb7dc1;
`;
export const MarketTitle = styled(BrandsTitle)`
  text-align: left;
`;
export const BrandsHeader = styled.h2`
  font-family: "zwodrei";
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  align-items: center;
  text-align: center;
  color: #23253b;
`;
export const MarketHeader = styled.div`
  font-family: "zwodrei";
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: center;
`;
export const BrandsListItem = styled.div``;
export const BrandsTable = styled.div`
  width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid #ddd;
  padding: 20px;
  @media (max-width: 768px) {
    width: 80%;
    display: grid;
    grid-template-columns: 0.2fr 0.4fr 0.4fr 0.4fr 0.4fr;
    grid-gap: 5px;
    padding: 2px;
    font-size: 12px;
  }
`;

export const BrandsListItemImage = styled.img`
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const BrandsListItemTitle = styled.div`
  font-family: "TTSupermolot Regular";
  margin-block-start: 1em;
  margin-block-end: 1em;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #23253b;
  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 20px;
  }
`;
export const BrandsList = styled(BrandsListItemTitle)``;
export const MarketList = styled(BrandsListItemTitle)`
  color: #dddeed;
  align-items: center;
`;
export const BrandsListItemDescription = styled(BrandsListItemTitle)`
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const BrandsListItemPrice = styled(BrandsListItemTitle)`
  color: ${(props) => (props.value > 3.0 ? "green" : "red")};
  display: flex;
  align-items: center;
`;
export const BrandsListItemButton = styled.button`
  font-family: "zwodrei";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  width: 370px;
  height: 46px;
  background: #7ce6df;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  &:hover {
    background: #fff;
    border: 1px solid #7ce6df;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const CardContainer = styled.div``;
export const CardBody = styled.div`
  height: 189px;
  background: #1b1d32;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  border-radius: 8px;
  padding: 20px;
  grid-gap: 20px;
`;
export const CardBody2 = styled(CardBody)``;
export const CardBody3 = styled(CardBody)``;
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 350px 350px 350px;
  grid-gap: 30px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    place-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: left;
  }
`;
export const CardListItem = styled.div`
  position: absolute;
  top: 632px;
  left: 450px;
  border-radius: 8px;
  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
  }
`;
export const CardTable = styled.div`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #29ce44;
`;
export const CardMore = styled(CardTable)`
  padding-bottom: 50px;
`;
export const CardTitle = styled(MarketHeader)`
  font-size: 18px;
  line-height: 26px;
`;
export const CardHeader = styled(BrandsListItemTitle)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  display: flex;
  justify-content: space-evenly;
`;
export const CardList = styled.div``;

export const MarketSearchGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media (max-width: 768px) {
    padding: 10px;
    grid-gap: 10px;
  }
`;
export const MarketFavourite = styled.button`
  font-family: "TTSupermolot Regular";
  width: 130px;
  height: 46px;
  background: #7ce6df;
  border-radius: 4px;
  border: none;
  justify-self: left;
  display: flex;
  align-items: center;
  svg {
    padding-right: 10px;
  }
`;
export const MarketSearchButton = styled.button`
  font-family: "TTSupermolot Regular";
  width: 350px;
  height: 44px;
  background: #f4f5f9;
  border-radius: 12px;
  border: none;
  align-self: center;
  align-items: center;
  display: flex;
  justify-self: right;
  justify-content: start;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  text-align: right;
  color: #23253b;
  &:focus {
    border: 1px solid #7ce6df;
  }
  svg {
    margin-right: 10px;
  }
  @media (max-width: 768px) {
    width: 100%;
    justify-self: right;
  }
`;

export const SearchInput = styled.input`
  width: 350px;
  height: 40px;
  border: none;
  background: #f4f5f9;
  &:focus {
    outline: none;
  }
  &:hover {
    border: none;
  }
  &:target {
    border: none;
  }
  @media (max-width: 768px) {
    width: 40%;
  }
`;
