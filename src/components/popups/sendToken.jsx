import React from "react";
import { AuthLabel } from "../auth/AuthElement";
import {
  FavoriteUsersGrid,
  SendButton,
  SendContainer,
  SendElement,
  SendFooter,
  SendGroupWithIcon,
  SendTitle,
  SendTokenCard,
  SendTokenInput,
  TokenCard,
  TokenCardItem,
  TokenDropdown,
  TokenGrid,
  TokenGridHeader,
  TokenGridItem,
  TokenItem,
  TransferLink,
} from "./PopupElement";
import Avatar from "react-avatar";
import { useContext } from "react";
import { GlobalContext } from "../../globals/GlobalContext";

function SendToken() {
  const { receiver, setReceiver } = useContext(GlobalContext);

  const FavouriteData = [
    // {
    //   name: "Njeri",
    //   address: "0x083y9732y298y",
    // },
    // {
    //   name: "Mwangi",
    //   address: "0x7308y2h082hy0",
    // },
  ];
  return (
    <SendElement>
      <SendContainer>
        <SendTitle>Send Tokens</SendTitle>
        <SendTokenCard>
          <AuthLabel>Enter Address</AuthLabel>
          <SendGroupWithIcon>
            <SendTokenInput
              type="text"
              value={receiver}
              placeholder="Enter Adress"
              onChange={(e) => setReceiver(e.target.value)}
            />
          </SendGroupWithIcon>
          <TransferLink>Transfer between my accounts</TransferLink>
        </SendTokenCard>
        {FavouriteData.length > 0 ? (
          <>
            <AuthLabel>Favorite/Frequents</AuthLabel>
            <FavoriteUsersGrid>
              {FavouriteData.map((item, index) => (
                <TokenCardItem key={index}>
                  <TokenItem>
                    <Avatar
                      name={item.name}
                      size="50px"
                      round={true}
                      colors={["red", "green", "blue"]}
                    />
                  </TokenItem>
                  <TokenCard>
                    <TokenGrid>{item.address}</TokenGrid>
                  </TokenCard>
                </TokenCardItem>
              ))}
            </FavoriteUsersGrid>
          </>
        ) : null}
        <TokenDropdown>
          <TokenCardItem>
            <TokenItem>
              <TokenGridHeader>Amount</TokenGridHeader>
              <TokenGridItem>NetWork Fee</TokenGridItem>
            </TokenItem>
            <TokenCard>
              <TokenGrid>131.52 GEM</TokenGrid>
              <TokenGridItem>15.23</TokenGridItem>
            </TokenCard>
          </TokenCardItem>
        </TokenDropdown>

        <TokenDropdown>
          <TokenCardItem>
            <TokenItem>
              <TokenGridHeader>Total Amount</TokenGridHeader>
            </TokenItem>
            <TokenCard>
              <TokenGrid>131.52 GEM</TokenGrid>
              <TokenGridItem>15.23</TokenGridItem>
            </TokenCard>
          </TokenCardItem>
        </TokenDropdown>
        <SendFooter>
          <SendButton>Send</SendButton>
        </SendFooter>
      </SendContainer>
    </SendElement>
  );
}

export default SendToken;
