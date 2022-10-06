import React from "react";
import ArrowDown from "../../assets/icon/ArrowDown";
import ArrowUp from "../../assets/icon/ArrowUp";

import {
  DashboardContainer,
  BtnWrap,
  Column1,
  Column2,
  DashboardElement,
  DashboardRow,
  DashboardWrapper,
  Heading,
  ImgWrap,
  Subtitle,
  TextWrapper,
  TopLine,
  DashboardCard,
  SendButton,
  DashHeader,
  DashGrid,
  DashboardBody,
  DashbordCardGrid,
  DashboardToken,
  DashboardTableItem,
  DashboardTable,
  DashboardMarket,
  DashboardCardRight,
  DashbordDiv,
  WalletGrid,
  WalletItems,
  Title,
  TopLineText,
  DashWrapper,
  DashLeft,
  DashRight,
  TokenHeader,
} from "./DashboardElement";
import { DashboardData, TokensData } from "./DashData";
import { useState } from "react";
import { useEffect } from "react";
import ForwardIcon from "../../assets/landing/ForwardIcon";
import SendIcon from "../../assets/icon/SendIcon";
import Lock from "../../assets/icon/Lock";
import Receive from "../../assets/icon/Receive";
import Popup from "reactjs-popup";
import Send from "../popups/Send";
import { useContext } from "react";
import { GlobalContext } from "../../globals/GlobalContext";
import ReceiveToken from "../popups/Receive";
import Swap from "../popups/Swap";
import BrandG from "../../assets/icon/BrandG";

function Dashboard() {
  const { isOpen, setOpen } = useContext(GlobalContext);
  const [open, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const { marketData, setBalance } = useContext(GlobalContext);
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addEventListener("change", setMQuery);

    return () => mediaQuery.removeEventListener("change", setMQuery);
  }, []);


  const tokenValue = marketData.map((item) => {
    return item.value;
  });
  useEffect(() => {
    setBalance(tokenValue);
  }, []);

  return (
    <DashboardContainer>
      <DashbordDiv>
        <DashboardElement>
          <DashboardCard>
            <Heading>My Wallet</Heading>
            <DashboardRow>
              <WalletGrid>
                <SendButton onClick={() => setOpen(true)}>
                  <SendIcon />
                  <Popup
                    open={isOpen}
                    closeOnDocumentClick
                    onClose={() => setOpen(false)}
                  >
                    <Send />
                  </Popup>
                </SendButton>
                <WalletItems>Send</WalletItems>
              </WalletGrid>

              <WalletGrid>
                <SendButton onClick={() => setModal(true)}>
                  <Lock />
                  <Popup
                    open={modal}
                    closeOnDocumentClick
                    onClose={() => setModal(false)}
                  >
                    <Swap />
                  </Popup>
                </SendButton>
                <WalletItems>Buy</WalletItems>
              </WalletGrid>

              <WalletGrid>
                <SendButton onClick={() => setIsOpen(true)}>
                  <Receive />
                  <Popup
                    open={open}
                    closeOnDocumentClick
                    onClose={() => setIsOpen(false)}
                  >
                    <ReceiveToken />
                  </Popup>
                </SendButton>
                <WalletItems>Receive</WalletItems>
              </WalletGrid>
            </DashboardRow>
            <Title>{tokenValue}GEM</Title>
            <TopLine>
              <TopLineText>${tokenValue * 1}</TopLineText>
              <DashboardMarket value={tokenValue}>
                {tokenValue > 3 ? <ArrowUp /> : <ArrowDown />}
                1%
              </DashboardMarket>
            </TopLine>
          </DashboardCard>
          {mQuery.matches ? (
            <DashboardWrapper>
              <DashHeader>
                <Subtitle>Latest news & updates</Subtitle>
                <TextWrapper>
                  See More <ForwardIcon />
                </TextWrapper>
              </DashHeader>
              <DashGrid>
                {DashboardData.map((item, index) => (
                  <Column2 key={index}>
                    <ImgWrap>{item.image}</ImgWrap>
                    <Column1>{item.title}</Column1>
                  </Column2>
                ))}
              </DashGrid>
            </DashboardWrapper>
          ) : (
            <></>
          )}
        </DashboardElement>

        <DashboardBody>
          {mQuery.matches ? (
            <DashbordCardGrid>
              <DashHeader>
                <Subtitle>My Tokens</Subtitle>
                <TextWrapper>+ Add New</TextWrapper>
              </DashHeader>
              {marketData.map((item, index) => (
                <BtnWrap key={index}>
                  <DashboardToken>{item.token}</DashboardToken>
                  <DashboardTableItem>{item.name}</DashboardTableItem>
                  <DashboardTable>{item.value}</DashboardTable>
                  <DashboardMarket value={item.value}>
                    {item.value > 3.0 ? <ArrowUp /> : <ArrowDown />}
                    {item.value}%
                  </DashboardMarket>
                </BtnWrap>
              ))}
            </DashbordCardGrid>
          ) : (
            <DashbordCardGrid>
              <TokenHeader>
                <Subtitle>My Tokens</Subtitle>
                <TextWrapper>Add Token +</TextWrapper>
              </TokenHeader>
              {TokensData.map((item, index) => (
                <DashWrapper key={index}>
                  <DashLeft>
                    <DashboardToken>
                      <BrandG />
                      {item.token}
                    </DashboardToken>
                    <DashboardTableItem>{item.price}</DashboardTableItem>
                  </DashLeft>

                  <DashRight>
                    <DashboardTable>{item.value}</DashboardTable>
                    {index > 0 ? (
                      <DashboardMarket value={item.market}>
                        {item.market > 3.0 ? <ArrowUp /> : <ArrowDown />}
                        {item.market}%
                      </DashboardMarket>
                    ) : (
                      <>
                        <DashboardMarket style={{ color: "#fff" }}>
                          {item.market}
                        </DashboardMarket>
                      </>
                    )}
                  </DashRight>
                </DashWrapper>
              ))}
            </DashbordCardGrid>
          )}
          <DashboardCardRight>
            <DashHeader>
              <Subtitle>Transaction List</Subtitle>
              <TextWrapper>
                See More
                <ForwardIcon />
              </TextWrapper>
            </DashHeader>
            {TokensData.map((item, index) => (
              <BtnWrap key={index}>
                <DashboardToken>{item.token}</DashboardToken>
                <DashboardTableItem>{item.price}</DashboardTableItem>
                <DashboardTable>{item.Address}</DashboardTable>
                {index > 0 ? (
                  <DashboardMarket value={item.status}>
                    {item.status === "Completed" ? <ArrowUp /> : <ArrowDown />}
                    {item.status}
                  </DashboardMarket>
                ) : (
                  <>
                    <DashboardMarket style={{ color: "#fff" }}>
                      {item.market}
                    </DashboardMarket>
                  </>
                )}
              </BtnWrap>
            ))}
          </DashboardCardRight>
        </DashboardBody>
      </DashbordDiv>
    </DashboardContainer>
  );
}

export default Dashboard;
