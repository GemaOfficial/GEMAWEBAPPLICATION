import Manu from "../../assets/profile/manu.jpg";
import Lincon from "../../assets/profile/lincon.jpg";
import Linkedin from "../../assets/navbar/Linkedin";
import Twitter from "../../assets/navbar/Twitter";

export const TeamData = [
  {
    name: "Lincoln Gakuya",
    title: "Founder, ExtendSales",
    image: <img src={Lincon} alt="Lincoln Gakuya" />,
    description:"A blockchain enthusiast and enterpreneur with a recent Certificate in Digital Currencies and Blockchain from UNIC. Also, the founder of Licky N’ Nice and ecommerce milkshake stop and a partner of BlackAffair Africa.",
    linkedin: <Linkedin />,
    twitter: <Twitter />,
  },
  {
    name: "Immanuel Maina",
    title: "Co-Founder",
    image: <img src={Manu} alt="Immanuel Maina" />,
    description: "Crypto Trader/Investor and Web 3 dev. enthusiast Software Developer certified by Holberton School, Computer Software Engineering Pursuing BBIT at Strathmore Uni.",
    linkedin: <Linkedin />,
    twitter: <Twitter />,
  },
];
