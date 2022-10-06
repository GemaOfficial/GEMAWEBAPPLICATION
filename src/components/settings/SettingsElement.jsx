import styled from "styled-components";

export const SettingsContainer = styled.div`
  background: #1b1d32;
  display: grid;
  width: 100%;
  padding-top: 132px;
`;
export const SettingsWrapper = styled.div``;
export const SettingsHeader = styled.div`
  font-family: "zwodrei";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  color: #ffffff;
  text-align: center;
  padding-bottom: 30px;
`;
export const SettingsImg = styled.div`
  display: flex;
  justify-content: center;
`;
export const SettingsTitle = styled.h1`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  text-align: center;
  padding-top: 15px;
`;
export const SettingsButton = styled.button`
  width: 100%;
  height: 46px;
  background: #7ce6df;
  border-radius: 8px;
  font-family: "zwodrei";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin: 30px 0px 20px 0px;
`;
export const SettingsBody = styled.div`
  width: 661px;
  background: linear-gradient(180deg, #272942 0%, rgba(39, 41, 66, 0) 100%);
  border-radius: 16px;
  justify-self: center;
  padding: 32px;
`;
export const SettingsForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
export const SettingsGroupIcon = styled.div`
  width: 285px;
  height: 51px;
  background: #313451;
  border-radius: 12px;
  border: none;
  align-self: center;
  align-items: center;
  display: flex;
  justify-self: right;
  justify-content: start;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  text-align: right;
  color: #23253b;
  padding: 0px 10px 0px 10px;
  &:focus {
    border: 1px solid #7ce6df;
  }
  svg {
    margin-right: 10px;
  }
`;
export const SettingsIcon = styled.div`
  align-self: center;
  justify-self: center;
  border-radius: 8px 0px 0px 8px;
`;
export const SettingsFormLabel = styled(SettingsTitle)`
  text-align: left;
`;
export const SettingsCard = styled.div`
  display: grid;
  justify-self: center;
`;
export const SettingsTextInput = styled.input`
  width: 235px;
  height: 40px;
  border: none;
  background: #313451;
  font-size: 16px;
  color: #ffffff;
  &:focus {
    outline: none;
  }
`;
