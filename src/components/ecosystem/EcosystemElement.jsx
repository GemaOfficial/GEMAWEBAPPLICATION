import styled from "styled-components";

export const EcosystemElement = styled.div`
  background: linear-gradient(180deg, #f7fbfc 0%, #eaf8fc 100%);
  padding-top: 5em;
  padding-bottom: 5em;
`;
export const EcosystemTitle = styled.div`
  font-family: "Allison";
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  color: #fb7dc1;
`;
export const EcosystemText = styled.div`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  padding-bottom: 28px;
`;
export const EcosystemImage = styled.div`
  @media (max-width: 768px) {
    justify-content: center;
    justify-items: center;
    justify-self: center;
    align-items: center;
    align-self: center;
    width: 100%;
    svg {
      width: 90%;
    }
  }
`;
export const EcosystemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 54px;
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
export const EcosystemGrid = styled.div`
  justify-self: center;
  align-self: center;
`;
export const EcosystemButton = styled.button`
  width: 192px;
  height: 51px;
  left: 975px;
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
  margin-top: 30px;
  cursor: pointer;
  svg {
    padding-left: 10px;
  }
  &:hover {
    background: #ffffff;
  }
`;
export const EcosystemHeader = styled(EcosystemTitle)`
  font-family: "zwodrei";
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  color: #26283b;
  padding-top: 30px;
  padding-bottom: 30px;
`;
