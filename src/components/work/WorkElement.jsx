import styled from "styled-components";
import Cloud from "../../assets/work/Cloud.svg";
export const WorkElement = styled.div`
  background: #fff url(${Cloud}) no-repeat top right;
  padding-top: 120px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const WorkBody = styled.div`
  display: grid;
  text-align: center;
  justify-content: center;
  padding-bottom: 20px;
`;
export const WorkTitle = styled.div`
  font-family: "Allison";
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  color: #fb7dc1;
  padding-bottom: 20px;
`;
export const WorkHeader = styled(WorkTitle)`
  font-family: "zwodrei";
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  color: #23253b;
`;
export const WorkSubHeader = styled(WorkHeader)`
  font-size: 24px;
  line-height: 34px;
`;
export const WorkText = styled.div`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #313451;
  text-transform: lowercase;
  padding-bottom: 120px;
`;
export const WorkText2 = styled(WorkText)`
  padding-bottom: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  text-align: start;
`;

export const WorkImage = styled.div`
  justify-content: right;
  display: flex;
  transition: all 1s ease-in-out;
  @media (max-width: 768px) {
    justify-content: center;
    svg {
      width: 90%;
    }
  }
`;
export const WorkImage3 = styled.div`
  justify-content: right;
  display: flex;
  padding-top: 200px;
  @media (max-width: 768px) {
    justify-content: center;
    padding-top: 0px;
    svg {
      width: 90%;
      height: 90%;
    }
  }
`;
export const WorkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr 1fr;
  grid-gap: 20px;
  padding-bottom: 120px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    place-content: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    margin: 0.25rem;
  }
`;
export const WorkGrid = styled.div`
  display: grid;
  justify-content: right;
  transition: all 1s ease-in-out;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
export const WorkGrid2 = styled.div`
  display: grid;
  justify-content: left;
  transition: all 0.5s ease-in-out;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const WorkGridRight = styled.div`
  justify-content: right;
  transition: all 0.5s ease-in-out;
  @media (max-width: 768px) {
    justify-self: center;
    padding-top: 20px;
  }
`;
export const WorkGridLeft = styled.div`
  justify-content: right;
  display: grid;
  padding-top: 200px;
  grid-template-rows: 80px 80px 80px;
`;
export const WorkButton = styled.button`
  background: conic-gradient(
    from 132.16deg at 50% 50%,
    #7ce6df 0deg,
    #abede9 360deg
  );
  border-radius: 12px;
  width: 86px;
  height: 86px;
  border: none;
`;
export const WorkButton2 = styled(WorkButton)`
  background: conic-gradient(
    from 132.16deg at 50% 50%,
    #ffb7eb 0deg,
    #fac6f4 360deg
  );
`;
export const WorkButton3 = styled(WorkButton)`
  background: conic-gradient(
    from 132.16deg at 50% 50%,
    #babeea 0deg,
    #d0d3f2 360deg
  );
`;
export const WorkIcon = styled.div`
  display: flex;
  justify-content: start;
  padding-top: 220px;
  @media (max-width: 768px) {
    justify-content: center;
    padding-top: 20px;
    svg {
      width: 90%;
      height: 90%;
    }
  }
`;
export const WorkGridItem = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px 30px 0px;
`;
export const WorkGridCenter = styled.div`
  transition: all 0.5s ease-in-out;
  padding-top: 201px;
`;
