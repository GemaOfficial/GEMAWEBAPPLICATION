import styled from "styled-components";
import ReadyBg from "../../assets/GetStarted/ReadyBg.svg";
export const GetStartedElement = styled.div`
  background: url(${ReadyBg}) no-repeat center center;
  padding-top: 100px;
`;
export const GetStartedBody = styled.div``;
export const GetStartedTitle = styled.div`
  font-family: "zwodrei";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  text-align: center;
  color: #ffffff;
`;
export const GetStartedButton = styled.button`
  width: 248px;
  height: 51px;
  background: #7ce6df;
  border-radius: 8px;
  border: none;
  font-family: "zwodrei";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #26283b;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #fff;
  }
  svg {
    padding-left: 10px;
  }
`;
export const GetStartedArea = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 80px;
`;
export const GetStartedText = styled.div`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: #dddeed;
  mix-blend-mode: normal;
  padding-top: 20px;
`;
