import styled from "styled-components";
import Servicebg from "../../assets/service/Servicebg.svg";

export const ServiceElement = styled.div`
  padding-top: 5em;
  background: #fff url(${Servicebg}) no-repeat left;
  padding-bottom: 7em;
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
export const ServiceBody = styled.div`
  width: 100%;
`;
export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: 255px 255px 255px 255px;
  grid-gap: 30px;
  padding-top: 50px;
  align-items: center;
  justify-items: center;
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
  }
`;
export const ServiceIcon = styled.div`
  img {
    border-radius: 13px;
  }
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
  background: linear-gradient(180deg, #f1f2f5 0%, rgba(241, 242, 245, 0) 100%);
  border-radius: 12px;
  border: none;
  width: 255px;
  height: 239px;
`;
export const ServiceCardTitle = styled(ServiceHeader)`
  font-size: 18px;
  line-height: 26px;
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
`;
