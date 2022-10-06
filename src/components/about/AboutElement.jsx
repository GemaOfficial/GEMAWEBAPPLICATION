import styled from "styled-components";

export const AboutElement = styled.div`
  background: #26283b;
`;
export const AboutBody = styled.div`
  font-family: "zwodrei";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  color: #ffffff;
  padding-bottom: 22px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
export const AboutTitle = styled.div`
  font-family: "Allison";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  color: #fb7dc1;
  padding-bottom: 20px;
`;
export const AboutText = styled.div`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #ffffff;
  padding-bottom: 28px;
`;
export const AboutImage = styled.div`
  display: flex;
  justify-content: left;
  @media (max-width: 768px) {
    svg {
      width: 90%;
    }
    justify-content: center;
  }
`;
export const AboutContainer = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
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
export const AboutGrid = styled.div`
  justify-self: right;
`;
export const AboutButton = styled.button`
  width: 192px;
  height: 51px;
  background: #7ce6df;
  border-radius: 8px;
  font-family: "zwodrei";
  font-weight: 700;
  font-size: 16px;
  color: #26283b;
  border: none;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  svg {
    padding-left: 10px;
  }
  &:hover {
    background: #ffffff;
  }
`;
export const AboutGridItem = styled.div`
  display: grid;
  svg {
    padding-right: 22px;
  }
`;
export const AboutItem = styled(AboutText)``;
