import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Popup from "reactjs-popup";
import Arrows from "../../assets/icon/Arrows";
import { GlobalContext } from "../../globals/GlobalContext";
import {
  SendAmount,
  SendBody,
  SendButton,
  SendCard,
  SendCardBody,
  SendCardButton,
  SendContainer,
  SendElement,
  SendFooter,
  SendHeader,
  SendSubTitle,
  SendTitle,
} from "./PopupElement";
import SendToken from "./sendToken";
import Tokens from "./Tokens";

function Send() {
  const { isShow, setShow, token, balance, amount, setAmount, receiver, setReceiver } = useContext(GlobalContext);
  const [open, setIsOpen] = useState(false);
  
  return (
    <SendElement>
      <SendContainer>
        <SendTitle>Enter your amount here</SendTitle>
        <SendCard>
          <SendCardButton onClick={() => setShow(true)}>
            {token || "Token X"} ▽
          </SendCardButton>
          {isShow === true ? <Tokens /> : null}
          <SendHeader>USE MAX</SendHeader>
        </SendCard>
        <SendFooter>
          <SendAmount
            placeholder="119.7912"
            type="number"
            value={amount}
            pattern="[0-9]*"
            inputmode="numeric"
            onChange={(e) => setAmount(e.target.value)}
          />
        </SendFooter>
        <SendBody>
          <SendCardBody>
            $1,178
            <Arrows />
          </SendCardBody>
        </SendBody>
        <SendSubTitle>Balance {balance}</SendSubTitle>
        <SendFooter>
          <SendButton onClick={() => setIsOpen(true)}>Next</SendButton>
          <Popup open={open}>
            <SendToken />
          </Popup>
        </SendFooter>
      </SendContainer>
    </SendElement>
  );
}

export default Send;
