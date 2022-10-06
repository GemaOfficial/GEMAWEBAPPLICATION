import Automation from "../../assets/ourservice/Automation.svg";
import Loyalty from "../../assets/ourservice/Loyalty.svg";
import Tokens from "../../assets/ourservice/Tokens.svg";
import Customer from "../../assets/ourservice/Customer.svg";

export const ServiceData = [
    {
        icon: <img src={Customer} alt="customer" />,
        title: "Customer Engagement",
        text: "More customer engagement through rewards.",
    },
    {
        icon: <img src={Loyalty} alt="loyality" />,
        title: "Loyalty Tokens",
        text: "Wallets to view, redeem, send/receive loyalty tokens",
    },
    {
        icon: <img src={Automation} alt="Automation" />,
        title: "Automation",
        text: "Automation in issuing and managing loyalty tokens",
    },
    {
        icon: <img src={Tokens} alt="tokens" />,
        title: "Use of stablecoins",
        text: "Fiat backed loyalty tokens",
    }
]