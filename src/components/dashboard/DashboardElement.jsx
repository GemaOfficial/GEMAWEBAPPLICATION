import styled from "styled-components";

export const DashboardElement = styled.div`
  display: grid;
  grid-template-columns: 30% 68.3%;
  grid-gap: 20px;
  padding: 140px 0px 20px 0px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const DashbordDiv = styled.div`
  padding: 60px;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;
export const DashboardBody = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 0.5fr;
  grid-gap: 20px;
  background: #1b1d32;
  @media screen and (max-width: 768px) {
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
`;
export const DashbordCardGrid = styled.div`
  background: #23253b;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    background: #1b1d32;
    padding: 10px 0px 10px 0px;
  }
`;
export const WalletGrid = styled.div``;
export const WalletItems = styled.div`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 12px;
  text-align: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;
export const DashboardCardRight = styled(DashbordCardGrid)`
  justify-self: center;
`;
export const DashboardCard = styled.div`
  width: 100%;
  height: 316px;
  background: linear-gradient(
    115.81deg,
    #118c85 14.96%,
    #3b3565 49.55%,
    #940047 94.97%
  );
  justify-self: right;
  border-radius: 12px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const DashboardContainer = styled.div`
  background: #1b1d32;
`;
export const DashboardWrapper = styled.div`
  background: #23253b;
  border-radius: 8px;
  justify-self: center;
  width: 100%;
`;
export const DashCard = styled.div``;
export const DashGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 20px;
`;
export const DashHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 6px;
  margin: 0px 30px 0px 30px;
`;
export const DashboardRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  paddingg: 20px;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;
export const Column1 = styled.h2`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
  display: flex;
  text-align: center;
  margin: 0px 30px 0px 30px;
`;
export const Column2 = styled.div`
  justify-items: center;
  display: grid;
  width: 100%;
`;
export const TextWrapper = styled.button`
  width: 111px;
  height: 32px;
  border: 1px solid #7ce6df;
  border-radius: 4px;
  background: transparent;
  color: #7ce6df;
  font-family: "zwodrei";
  font-weight: 700;
  justify-self: right;
  text-align: center;
  align-items: center;
  display: flex;
  svg {
    padding-left: 10px;
  }
  path {
    stroke: #7ce6df;
  }
`;
export const TopLineText = styled.div`
  height: 34px;
  font-family: "TTSupermolot Regular";
  color: #ffffff;
  align-items: center;
  display: flex;
`;
export const Heading = styled.h1`
  font-family: "zwodrei";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
`;
export const Title = styled(Heading)`
  font-size: 38px;
`;
export const Subtitle = styled(Heading)`
  text-align: left;
`;
export const BtnWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  border-bottom: 1px solid #313451;
  padding: 10px;
  @media screen and (max-width: 768px) {
    background: linear-gradient(180deg, #25273a 0%, rgba(46, 49, 77, 0) 100%);
    border-radius: 8px;
    grid-gap: 10px;
    margin: 0px 0px 15px 0px;
    border-bottom: none;
  }
`;
export const ImgWrap = styled.div``;
export const SendButton = styled.button`
  border-radius: 50%;
  border: none;
  padding: 20px;
  width: 62px;
  height: 62px;
  background: #6c6666;
`;
export const DashboardToken = styled.div`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
`;
export const DashboardTableItem = styled(DashboardToken)``;
export const DashboardTable = styled(DashboardToken)``;
export const DashboardMarket = styled(DashboardToken)`
  color: ${(props) => (props.value > 3.0 ? "green" : "red")};
  svg {
    padding-right: 10px;
  }
`;

export const TopLine = styled(DashHeader)`
  justify-content: center;
  justify-self: center;
  align-items: center;
  text-align: center;
  background: rgba(21, 29, 44, 0.3);
  border-radius: 150px;
  display: flex;
  grid-gap: 10px;
  margin: 0px 80px 0px 80px;
`;
export const TokenHeader = styled(DashHeader)`
  margin: 0px;
`;
export const DashboardTableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;
`;

export const DashWrapper = styled(BtnWrap)`
  grid-template-columns: 1fr 1fr;
`;

export const DashLeft = styled.div`
  justify-self: left;
`;
export const DashRight = styled.div`
  justify-self: right;
`;
