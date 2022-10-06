import styled from "styled-components";

export const SendElement = styled.div`
  width: fit-content;
  height: 100%;
  filter: none;
  -webkit-filter: none;
  z-index: 999;
`;
export const SendContainer = styled.div`
  width: min(310px, 423px);
  background: #1b1d32;
  border-radius: 16px;
  padding: 20px;
`;
export const SendBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 8px;
  }
`;
export const SendFooter = styled.div`
  justify-content: center;
  display: flex;
  padding-top: 20px;
`;
export const SendTitle = styled.h1`
  font-family: "zwodrei";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  text-align: center;
`;
export const SendHeader = styled(SendTitle)`
  font-size: 14px;
  line-height: 15px;
  text-align: center;
`;
export const SendCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  grid-gap: 45px;
  padding: 20px 0px 49px 0px;
`;
export const SendCardHeader = styled.div``;
export const SendCardBody = styled.div`
  width: 136px;
  height: 38px;
  background: rgba(124, 230, 223, 0.1);
  border-radius: 160px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #7ce6df;
  font-family: "TTSupermolot Regular";
  letter-spacing: 0.1em;
  svg {
    padding-left: 10px;
  }
`;
export const SendCardButton = styled.button`
  width: 135px;
  height: 37px;
  background: #7ce6df;
  border-radius: 8px;
  font-family: "zwodrei";
  font-style: normal;
  font-size: 14px;
  line-height: 15px;
  justify-self: right;
  border: none;
  transition: all 0.52s ease-in-out;
`;
export const SendAmount = styled.input`
  font-size: 42px;
  line-height: 52px;
  text-align: center;
  font-family: "zwodrei";
  font-style: normal;
  font-weight: 700;
  border: none;
  background: transparent;
  padding-bottom: 20px;
  width: 350px;
  color: #ffffff;
  &:focus {
    outline: none;
    background: transparent;
  }
`;
export const SendSubTitle = styled.h2`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #a3a7c5;
  text-align: center;
  display: flex;
  justify-content: center;
`;
export const SendButton = styled.button`
  width: 343px;
  height: 46px;
  background: #7ce6df;
  border-radius: 8px;
  border: none;
  font-family: "zwodrei";
  font-size: 16px;
  line-height: 16px;
  &:hover {
    border: none;
  }
`;
export const LinkHeader = styled(SendSubTitle)`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-wrap: break-word;
  font-size: 12px;
`;
export const TokenGridHeader = styled.div`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
  align-items: center;
  display: flex;
  svg {
    padding-right: 10px;
  }
`;
export const TokenGrid = styled(TokenGridHeader)`
  text-align: end;
  justify-content: end;
`;
export const TokenGridBody = styled.div`
  height: 280px;
  overflow-y: scroll;
`;

export const FavoriteUsersGrid = styled(TokenGridBody)`
  height: 190px;
`;
export const TokenGridFooter = styled.div``;
export const TokenCard = styled.div`
  display: grid;
  justify-content: right;
`;
export const TokenCardItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 20px;
  margin: 10px;
  background: linear-gradient(180deg, #25273a 0%, rgba(46, 49, 77, 0) 100%);
  border-radius: 8px;
`;
export const TokenItem = styled.div`
  align-items: center;
`;
export const TokenGridItem = styled(TokenGridHeader)`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #a3a7c5;
`;

export const TokenDropdown = styled.div``;

export const TokenDropdownItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
export const SendTokenCard = styled.div`
  background: #23253b;
  border-radius: 8px;
  padding: 20px;
  margin: 0px 0px 30px 0px;
`;
export const SendTokenInput = styled.input`
  background: #3e405e;
  border: none;
  outline-width: 0;
  font-family: "TTSupermolot Regular";
  color: #dddeed;
  font-size: 18px;
  &:focus {
    outline: none;
    background: #3e405e;
  }
`;

export const SendGroupWithIcon = styled.div`
  border-radius: 8px;
  background: #3e405e;
  height: 51px;
  margin: 20px 0px 0px 0px;
  padding: 0px 20px 0px 20px;
  align-items: center;
  display: flex;
`;

export const TransferLink = styled(TokenGridHeader)`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #7ce6df;
  text-align: center;
  justify-content: center;
  display: flex;
  padding: 20px 0px 0px 0px;
`;
export const CopyButton = styled(SendButton)`
  width: 166px;
  height: 37px;
  background: rgba(124, 230, 223, 0.1);
  border-radius: 8px;
  font-size: 14px;
  line-height: 15px;
  color: #7ce6df;
  align-items: center;
  display: flex;
  justify-content: center;
  svg {
    padding-right: 10px;
  }
`;

export const CopyGroup = styled(SendSubTitle)`
  color: #7ce6df;
  background: rgba(124, 230, 223, 0.1);
  border-radius: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    padding-right: 10px;
  }
`;

export const SwapContainer = styled.div`
  justify-content: center;
  height: 70vh;
`;
export const SwapBody = styled.div`
  width: clamp(310px, 423px, 423px);
  background: #1b1d32;
  border-radius: 16px;
  padding: 20px;
`;
