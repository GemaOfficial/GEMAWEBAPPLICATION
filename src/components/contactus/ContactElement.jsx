import styled from "styled-components";
import BgIcon from "../../assets/landing/BgIcon.svg";

export const ContactElement = styled.div``;

export const ContactBody = styled.div`
  padding-top: 200px;
`;
export const ContactGrid = styled.div`
  background: #26283b url(${BgIcon}) no-repeat left center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 148px;
  padding-bottom: 120px;
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
export const ContactItem = styled(ContactGrid)`
  background: #fff;
  grid-template-columns: 50px 200px;
  grid-gap: 30px;
  align-items: center;
  padding-bottom: 0px;
  justify-self: center;
`;
export const ContactGridItem = styled.div`
  align-self: center;
  align-items: center;
  justify-self: center;
`;
export const ContactGridItem2 = styled.div`
  align-self: center;
  justify-self: left;
`;
export const ContactGridItem3 = styled.div`
  align-self: center;
  justify-self: left;
  @media (max-width: 768px) {
    justify-self: center;
    text-align: center;
  }
`;
export const ContactGridItem4 = styled(ContactGridItem)`
  justify-content: center;
`;
export const ContactGridHeader = styled(ContactGridItem)`
  justify-content: start;
`;
export const ContactIcon = styled.div``;
export const ContactText = styled.p`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #dddeed;
`;
export const ContactText2 = styled(ContactText)`
  color: #26283b;
  justify-self: left;
  @media (max-width: 768px) {
    justify-self: center;
  }
`;
export const ContactImage = styled.div`
  img {
    width: 90%;
  }
`;
export const ContactFormArea = styled(ContactGrid)`
  background: #fff;
  padding: 40px;
`;
export const ContactForm = styled.div`
  background: #ededf3;
  border-radius: 12px;
  width: 635px;
  height: 520px;
  padding: 40px;
  display: grid;
  justify-content: center;
  @media (max-width: 768px) {
    width: 260px;
    height: auto;
    justify-content: center;
    justify-items: center;
    align-items: center;
  }
`;
export const ContactFormBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 20px;
  padding-bottom: 40px;
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
export const ContactLabel = styled.textarea`
  width: 556px;
  height: 136px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  padding: 20px;
  font-family: "TTSupermolot Regular";
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    width: 240px;
  }
`;

export const ContactInput = styled.input`
  font-family: "TTSupermolot Regular", FontAwesome;
  width: 256px;
  height: 51px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
export const ContactButton = styled.button`
  width: 600px;
  height: 46px;
  background: #7ce6df;
  border-radius: 8px;
  border: none;
  margin-top: 20px;
  font-family: "zwodrei";
  font-size: 18px;
  font-weight: 700;
  @media (max-width: 768px) {
    width: 89%;
  }
`;
export const ContactTitle = styled.h1`
  font-family: "Allison", cursive;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  color: #fb7dc1;
  border: none;
`;
export const ContactHeader = styled.h2`
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
export const ContactHeader2 = styled(ContactHeader)`
  color: #26283b;
  font-size: 30px;
  line-height: 40px;
`;
export const ContactHeader3 = styled(ContactHeader2)`
  font-size: 18px;
  line-height: 26px;
  @media (max-width: 768px) {
    text-align: center;
    justify-content: center;
    display: flex;
  }
`;
export const ContactHeader4 = styled(ContactHeader2)`
  @media (max-width: 768px) {
    text-align: center;
    justify-content: center;
  }
`;

/**
 * Google Maps from Maps.jsx
 */

export const MapContainer = styled.div``;
export const MapBody = styled.div`
  height: 366px;
  background: #fff;
`;
export const MapDiv = styled.div``;
