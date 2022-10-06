import styled from "styled-components";
import BgIcon from "../../assets/landing/BgIcon.svg";

export const OurServiceElement = styled.div``;
export const OurServiceBody = styled.div`
  background: #26283b url(${BgIcon}) no-repeat left center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 164px;
  padding-bottom: 153px;
  justify-content: center;
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
export const OurServiceBody2 = styled(OurServiceBody)`
  background: #fff;
  grid-gap: 64px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const OurHeaderContainer = styled.div`
  align-self: center;
  justify-self: right;
  padding-top: 200px;
`;
export const OurServiceTitle = styled.div`
  font-family: "Allison", cursive;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  color: #fb7dc1;
  display: flex;
  text-align: start;
  justify-content: start;
  padding-bottom: 28px;
`;
export const OurServiceHeader = styled(OurServiceTitle)`
  font-family: "zwodrei";
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  color: #ffffff;
  text-align: left;
  padding-bottom: 14px;
`;
export const OurServiceHeader2 = styled(OurServiceHeader)`
  color: #26283b;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
export const OurServiceHeader3 = styled(OurServiceHeader)`
  color: #26283b;
  justify-content: center;
  display: flex;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
export const OurServiceHeader4 = styled(OurServiceHeader3)`
  font-size: 26px;
  text-align: start;
  justify-content: start;
  align-items: center;
  svg {
    padding-left: 10px;
  }
`;
export const OurServiceText = styled.div`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #dddeed;
  display: flex;
  justify-content: left;
  text-align: left;
  align-items: center;
  padding-bottom: 20px;
`;
export const OurServiceText2 = styled(OurServiceText)`
  color: #26283b;
`;
export const OurServiceText3 = styled(OurServiceText)`
  color: #26283b;
  justify-content: center;
  display: flex;
`;

export const OurServiceImage = styled.div`
  display: flex;
  align-items: center;
  padding-top: 177px;
  @media (max-width: 768px) {
    padding-top: 20px;
    img {
      width: 90%;
    }
  }
`;
export const OurServiceContainer = styled.div`
  padding-top: 200px;
  display: grid;
  justify-content: right;
  align-items: center;
`;
export const OurServiceContainer2 = styled(OurServiceContainer)`
  justify-content: center;
  align-items: center;
  padding-top: 10px;
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
export const OurServiceContainer3 = styled(OurServiceContainer)`
  justify-content: start;
  align-items: center;
  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;
export const OurServiceGrid = styled.div`
  display: flex;
  justify-content: start;
`;
export const OurServiceGrid2 = styled(OurServiceGrid)`
  justify-content: right;
  display: grid;
`;
export const OurServiceGrid3 = styled(OurServiceGrid)`
  justify-content: left;
`;
export const OurServiceTeam = styled.div`
  background: #fff;
  padding-top: 120px;
  padding-bottom: 120px;
  background: #26283b;
`;
export const OurServiceTeamBody = styled.div`
  display: grid;
  grid-template-columns: 40px 40px 40px;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const OurServiceTeamTitle = styled(OurServiceTitle)`
  text-align: center;
  justify-content: center;
`;
export const OurServiceTeamHeader = styled(OurServiceHeader)`
  text-align: center;
  justify-content: center;
  color: #fff;
`;
export const OurServiceTeamName = styled(OurServiceHeader)`
  font-size: 30px;
  color: #23253b;
  display: flex;
  text-align: center;
  justify-content: center;
`;
export const OurServiceTeamText = styled(OurServiceText)`
  text-align: center;
  justify-content: center;
  display: flex;
  color: #dddeed;
`;
export const OurServiceTeam2 = styled(OurServiceTeam)`
  background: #fff;
`;
export const ServiceTitle = styled.h1`
  font-family: "Allison", cursive;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  color: #fb7dc1;
  display: flex;
  justify-content: center;
`;
export const ServiceHeader = styled(ServiceTitle)`
  font-family: "zwodrei";
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  color: #23253b;
`;

export const ServiceIcon = styled.div`
  svg {
    background: linear-gradient(
      180deg,
      #f1f2f5 0%,
      rgba(241, 242, 245, 0) 100%
    );
    border: none;
  }
`;
export const ServiceCard = styled.button`
  background: linear-gradient(
    180deg,
    rgba(241, 242, 245, 0.07) 0%,
    rgba(241, 242, 245, 0) 100%
  );
  border-radius: 12px;
  border: none;
  width: 255px;
  height: 239px;
`;
export const ServiceCard2 = styled.div`
  background: #defffc;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;
export const ServiceCardTitle = styled(ServiceHeader)`
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
`;
export const ServiceText = styled(ServiceTitle)`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #23253b;
  text-align: center;
`;
export const ServiceCardText = styled(ServiceText)`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #dddeed;
`;
