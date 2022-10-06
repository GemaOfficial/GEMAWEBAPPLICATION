import styled from "styled-components";
import BgIcon from "../../assets/landing/BgIcon.svg";
export const LandingElement = styled.div`
  padding-top: 5em;
  background: #26283b url(${BgIcon}) no-repeat left center;
`;
export const LandingTitle = styled.h1`
  font-family: "zwodrei";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 74px;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 38px;
    line-height: 56px;
  }
`;
export const LandingHeader = styled.div`
  font-family: "Allison", cursive;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  color: #fb7dc1;
`;
export const LandingBody = styled.div`
  padding-left: 50px;
  padding-top: 150px;
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 130px;
  }
`;
export const LandingButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: start;
  padding-top: 50px;
  grid-gap: 20px;
`;
export const LandingButton = styled.button`
  width: 189px;
  height: 51px;
  background: #7ce6df;
  border-radius: 8px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: "zwodrei";
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  color: #26283b;
  border: none;
  cursor: pointer;
  &:hover {
    background: #ffffff;
  }
  svg {
    padding-left: 10px;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const LandingDemoButton = styled(LandingButton)`
  background: #ffffff;
  &:hover {
    background: #7ce6df;
    color: #fff;
    path {
      stroke: #fff;
    }
  }
`;

export const LandingText = styled.div`
  font-family: "TTSupermolot Regular";
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #dddeed;
`;
export const LandingImage = styled.div`
  @media (max-width: 768px) {
    svg {
      width: 90%;
    }
  }
`;
export const LandingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    place-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: left;
    -webkit-box-pack: center;
  }
`;
export const LandingGridLeft = styled.div`
  justify-self: center;
  align-content: center;
  align-self: center;
`;
export const LandingGridRight = styled.div`
  display: flex;
  justify-content: start;
`;
