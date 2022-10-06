import styled from "styled-components";
import BgIcon from "../../assets/landing/BgIcon.svg";

export const AuthContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 120px;
  padding: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    place-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: left;
    -webkit-box-pack: center;
    margin: 0.25rem;
    padding: 2px;
  }
`;
export const AuthGrid = styled.div`
  align-self: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const AuthGridLeft = styled.div`
  justify-self: right;
  align-self: center;
  @media (max-width: 768px) {
    justify-self: center;
    img {
      width: 90%;
    }
    svg {
      width: 90%;
    }
  }
`;
export const AuthElement = styled.div`
  background: #1b1d32 url(${BgIcon}) no-repeat left top;
  padding-bottom: 104px;
  padding-top: 121px;
`;
export const AuthForm = styled.form`
  display: grid;
  padding-top: 10px;
  justify-self: center;
  justify-content: center;
  align-self: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const AuthInput = styled.div`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: right;
  color: #dddeed;
`;

export const InputGroupWithIcon = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  border-radius: 8px;
  background: #3e405e;
  height: 51px;
  padding: 0px 10px;
`;
export const AuthIcon = styled.div`
  justify-content: center;
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
    svg {
      width: 90%;
    }
  }
`;
export const AuthGroup = styled.div`
  display: grid;
  grid-template-columns: 50px 50px 50px;
  grid-gap: 20px;
  justify-self: center;
  padding: 20px 0px 20px 0px;
`;
export const InputGroupIcon = styled.div`
  align-self: center;
  justify-self: center;
  border-radius: 8px 0px 0px 8px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    width: 300px;
    justify-self: center;
  }
`;
export const InputSpecial = styled.input`
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

export const RememberGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #fff;
`;
export const RememberItem = styled(AuthInput)`
  display: flex;
  align-items: center;
  justify-self: center;
  gap: 10px;
  padding-right: 10px;
`;
export const RememberLabel = styled.div`
  margin-block-start: 1em;
  margin-block-end: 1em;
  text-align: start;
`;
export const RememberCheckBox = styled.input``;
export const AuthButton = styled.button`
  font-family: "zwodrei";
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  background: #7ce6df;
  border-radius: 8px;
  width: 370px;
  height: 46px;
  border: none;
  margin: 10px 0px 20px 0px;
  cursor: pointer;
  &:hover {
    background: #fff;
  }
  @media (max-width: 768px) {
    width: 300px;
    justify-self: center;
  }
`;
export const AuthLabel = styled.label`
  font-family: "TTSupermolot Regular";
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #dddeed;
  padding-bottom: 10px;
  svg {
    padding-right: 10px;
  }
`;
export const AuthTitle = styled.h1`
  font-family: "zwodrei";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
`;
export const AuthHeader = styled(AuthLabel)`
  cursor: pointer;
  text-align: center;
  padding-top: 10px;
  color: #7ce6df;
  &:hover {
    color: #fff;
  }
`;
export const AuthBody = styled.div`
  width: 450px;
  background: linear-gradient(180deg, #272942 0%, rgba(39, 41, 66, 0) 100%);
  border-radius: 16px;
  padding: 5px 40px 40px 20px;
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    justify-content: center;
    padding: 20px 0 0 0;
  }
`;
export const AuthImage = styled.img`
  justify-self: center;
  align-self: center;
`;
export const SignupTerms = styled.div`
  display: flex;
`;

export const AuthError = styled(AuthLabel)`
  color: red;
`;

export const AuthChecks = styled(AuthLabel)`
  font-size: 12px;
`;
