import styled from "styled-components";
import Frame2 from "../../assets/footer/Frame2.svg";
import Frame from "../../assets/footer/Framebg.svg";
export const FooterElement = styled.div`
  background: #26283b url(${Frame2}) no-repeat left center;
  padding-top: 5em;
  padding-bottom: 1em;
`;
export const FooterBody = styled.div`
  background: url(${Frame}) no-repeat right center;
  padding: 20px;
`;
export const FooterTitle = styled.div`
  font-family: "zwodrei";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: #ffffff;
  align-items: center;
  display: flex;
`;
export const FooterHeader = styled(FooterTitle)`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #dddeed;
  justify-content: right;
  display: inline-table;
  span {
    color: #7ce6df;
    padding: 0px 5px 0px 5px;
  }
`;
export const FooterSubHeader = styled(FooterHeader)`
  display: flex;
  justify-self: start;
  color: #7ce6df;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
export const FooterText = styled(FooterHeader)`
  font-size: 18px;
  line-height: 30px;
  color: #dddeed;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-bottom: 20px;
  svg {
    padding-right: 10px;
  }
`;
export const FooterLogo = styled.div`
  display: flex;
  justify-content: left;
`;
export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  grid-gap: 20px;
  padding-bottom: 30px;
`;
export const FooterContainer = styled.div`
  justify-self: center;
`;
export const FooterList = styled.div`
  justify-self: left;
`;
export const FooterTemplate = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 64px;
  padding-bottom: 60px;
  border-bottom: 1px solid #ffffff;
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
export const FooterTemplate2 = styled(FooterTemplate)`
  padding-bottom: 10px;
  padding-top: 30px;
  border-bottom: none;
  align-items: center;
`;
export const FooterItems = styled(FooterTemplate)`
  grid-template-columns: 150px 150px 150px 100px 100px;
  border-bottom: none;
  grid-gap: 20px;
  align-items: center;
  padding-bottom: 0;
  justify-self: center;
`;

export const FooterForm = styled.div`
display: flex;
justify-content: space-evenly;
padding-top: 20px;
@media (max-width: 768px) { flex-direction: column; }
}
`;
export const FooterInput = styled.input`
  width: 426px;
  height: 51px;
  background: #effcff;
  border-radius: 9px;
  font-size: 18px;
  border: none;
  &:focus {
    outline: none;
  }
  padding-left: 20px;
  margin-left: 20px;
  @media (max-width: 768px) {
    width: 300px;
    padding: 0px;
    margin: 0;
  }
`;
