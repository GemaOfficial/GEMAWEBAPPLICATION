import styled from "styled-components";
import BgIcon from "../../assets/landing/BgIcon.svg";

export const ProjectsElement = styled.div``;
export const ProjectsBody = styled.div`
  padding-top: 170px;
`;
export const ProjectsTitle = styled.h1`
  font-family: "Allison", cursive;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  color: #fb7dc1;
  border: none;
`;
export const ProjectsHeader = styled.h2`
  font-family: "zwodrei";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
export const ProjectsText = styled.p`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #dddeed;
`;
export const ProjectsGrid = styled.div`
  background: #26283b url(${BgIcon}) no-repeat left center;
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
    padding: 20px;
  }
`;
export const ProjectsContainerLeft = styled.div`
  align-self: center;
  justify-self: right;
`;
export const ProjectsContainerRight = styled.div`
  align-self: center;
  justify-self: left;
`;
export const ProjectsImage = styled.img`
  width: 90%;
`;
export const ProjectsCard = styled.div`
  display: grid;
  grid-template-columns: 350px 350px;
  background-color: inherit;
  justify-content: center;
  grid-gap: 69px;
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
export const ProjectsIcon = styled.div`
  img {
    border-radius: 16px;
    width: 350px;
    height: 218px;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    img {
      width: 100%;
    }
  }
`;
export const ProjectsContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
`;
