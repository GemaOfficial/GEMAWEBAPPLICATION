import styled from "styled-components";
import BgIcon from "../../assets/landing/BgIcon.svg";

export const AboutElement = styled.div``;
export const AboutBody = styled.div`
  background: #26283b url(${BgIcon}) no-repeat left center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 164px;
  padding-bottom: 104px;
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
    grid-gap: 10px;
  }
`;
export const AboutBody2 = styled(AboutBody)`
  background: #fff;
  grid-gap: 164px;
  @media (max-width: 768px) {
    grid-gap: 20px;
    flex-direction: column-reverse;
  }
`;
export const AboutBody3 = styled(AboutBody)`
  grid-template-columns: 450px 450px;
  justify-content: center;
  grid-gap: 64px;
  background: #fff;
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
export const AboutTitle = styled.div`
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
export const AboutHeader = styled(AboutTitle)`
  font-family: "zwodrei";
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  color: #ffffff;
  text-align: left;
  padding-bottom: 14px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
export const AboutHeader2 = styled(AboutHeader)`
  color: #26283b;
`;
export const AboutText = styled.div`
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
export const AboutText2 = styled(AboutText)`
  color: #26283b;
`;
export const AboutImage = styled.div`
  display: flex;
  align-items: center;
  padding-top: 177px;
  @media (max-width: 768px) {
    justify-content: center;
    padding-top: 20px;
    svg {
      width: 90%;
    }
  }
`;
export const AboutTeamImage = styled(AboutImage)`
  padding-top: 10px;
  justify-content: center;
  display: flex;
  width: 340px;
  height: 350px;
  overflow: hidden;
  img {
    border-radius: 5%;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    transition: all 0.2s ease;
  }
  @media (max-width: 768px) {
    img {
      width: 290px;
    }
  }
`;
export const AboutContainer = styled.div`
  padding-top: 200px;
  align-self: center;
  justify-self: right;
  @media (max-width: 768px) {
    padding-top: 200px;
  }
`;
export const AboutContainer2 = styled(AboutContainer)`
  align-self: center;
  justify-self: right;
  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;
export const AboutContainer3 = styled(AboutContainer)`
  justify-self: left;
`;
export const AboutGrid = styled.div`
  display: flex;
  justify-content: left;
`;
export const AboutGrid2 = styled(AboutGrid)`
  justify-content: right;
`;
export const AboutTeam = styled.div`
  background: #fff;
  padding-top: 120px;
`;
export const AboutTeamBody = styled.div`
  display: grid;
  grid-template-columns: 40px 40px;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
`;
export const AboutTeamIcon = styled.div`
  svg {
    fill: #fff;
  }
  path {
    fill: #26283b;
  }
  circle {
    stroke: #26283b;
  }
  &:hover {
    cursor: pointer;
    circle {
      fill: #7ce6df;
      opacity: 1;
      stroke: #7ce6df;
    }
    path {
      fill: #23253b;
    }
  }
`;
export const AboutTeamTitle = styled(AboutTitle)`
  text-align: center;
  justify-content: center;
`;
export const AboutTeamHeader = styled(AboutHeader)`
  text-align: center;
  justify-content: center;
  color: #23253b;
`;
export const AboutTeamName = styled(AboutHeader)`
  font-size: 30px;
  color: #23253b;
  display: flex;
  text-align: center;
  justify-content: center;
`;
export const AboutTeamText = styled(AboutText)`
  text-align: center;
  justify-content: center;
  display: flex;
  color: #23253b;
`;
export const AboutTeamGrid = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
`;
