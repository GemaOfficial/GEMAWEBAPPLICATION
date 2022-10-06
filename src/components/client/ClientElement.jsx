import styled from "styled-components";
import BgIcon from "../../assets/landing/BgIcon.svg";
import Frame from "../../assets/client/Frame.svg";

export const ClientElement = styled.div``;
export const ClientBody = styled.div`
  background: #26283b url(${BgIcon}) no-repeat left center;
  padding-top: 170px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const ClientBody2 = styled(ClientBody)`
  background: #26283b url(${Frame}) no-repeat left top;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const ClientRightImage = styled.img`
  width: 90%;
`;
export const ClientTitle = styled.h1`
  font-family: "Allison", cursive;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  color: #fb7dc1;
  border: none;
`;
export const ClientHeader = styled.h2`
  font-family: "zwodrei";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  display: flex;
  align-items: center;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
export const ClientHeader2 = styled(ClientHeader)`
  font-size: 58px;
  line-height: 72px;
  @media (max-width: 768px) {
    font-size: 38px;
  }
`;
export const ClientText = styled.p`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #dddeed;
`;
export const ClientGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 148px;
  padding-bottom: 170px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    place-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: left;
    -webkit-box-pack: center;
    margin: 0.25rem;
  }
`;
export const ClientContainerLeft = styled.div`
  align-self: center;
  justify-self: right;
`;
export const ClientContainerRight = styled.div`
  align-self: center;
  justify-self: left;
`;
export const ClientCardContainer = styled(ClientGrid)`
  grid-template-columns: 350px 350px 350px;
  grid-height: 259px;
  grid-gap: 20px;
  justify-content: center;
`;
export const ClientCard = styled(ClientGrid)`
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 10px;
  padding-bottom: 10px;
  align-items: center;
`;
export const ClientCardBody = styled.div``;
export const ClientImage = styled.div`
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;
export const ClientIcon = styled.div``;
export const ClientCardTitle = styled(ClientTitle)`
  text-align: center;
`;
export const ClientCardName = styled(ClientHeader)`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #23253b;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;
export const ClientCardHeader = styled(ClientHeader)`
  color: #23253b;
  justify-content: center;
  padding-bottom: 60px;
  margin-block-end: 0;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
export const ClientCardText = styled(ClientText)`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #313451;
`;
export const ClientSubTitle = styled(ClientText)`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #313451;
  opaicty: 0.5;
`;
export const ClientCardGrid = styled.div`
  background-color: #ffffff;
  padding-top: 130px;
`;
export const ClientSubContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(13, 14, 45, 0.05);
  border-radius: 12px;
  padding: 30px;
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
