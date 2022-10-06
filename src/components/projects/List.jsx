import Near from "../../assets/projects/Bitcoin.svg";
import Sankore from "../../assets/projects/Sankore.svg";
import Client from "../../assets/projects/Client";
import ProIcon from "../../assets/projects/ProIcon";
import UserIcon from "../../assets/projects/UserIcon";
import Download from "../../assets/projects/Download";

export const ProjectList = [
  {
    img: <img src={Near} alt="bitcoinicon" />,
  },
  {
    img: <img src={Sankore} alt="webicon" />,
  }, 
];


export const OverviewList = [
  {
    icon: <Client />,
    title: "300+ Clients Satisfied",
    text: "More customer engagement through  rewards.",
  },
  {
    icon: <ProIcon />,
    title: "700+ Projects",
    text: "Wallets to view, redeem, send/receive  loyalty tokens",
  },
  {
    icon: <UserIcon />,
    title: "82k Users",
    text: "Automation in issuing and managing  loyalty tokens",
  },
  {
    icon: <Download />,
    title: "50k Downloads",
    text: "Fiat backed loyalty tokens",
  }
]
