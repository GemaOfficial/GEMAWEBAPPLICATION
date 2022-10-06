import React, { useEffect, useState } from "react";
import { Bounce, Fade } from "react-reveal";
import WalletSetup from "../../assets/service/WalletSetup";
import Arrow from "../../assets/work/Arrow";
import Dashboard from "../../assets/work/Dashboard";
import Wallet from "../../assets/work/Wallet";
import {
  WorkElement,
  WorkBody,
  WorkButton,
  WorkContainer,
  WorkGrid,
  WorkGridItem,
  WorkIcon,
  WorkImage,
  WorkText,
  WorkTitle,
  WorkHeader,
  WorkGridCenter,
  WorkText2,
  WorkGridRight,
  WorkSubHeader,
  WorkGridLeft,
  WorkButton2,
  WorkButton3,
  WorkImage3,
  WorkGrid2,
} from "./WorkElement";

function Work() {
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addEventListener("change", setMQuery);

    return () => mediaQuery.removeEventListener("change", setMQuery);
  }, []);
  return (
    <WorkElement>
      <WorkBody>
        <Fade up>
          <WorkTitle>How It works</WorkTitle>
        </Fade>
        <Fade up>
          <WorkHeader>How Gema Works?</WorkHeader>
        </Fade>
        <Fade up>
          <WorkText>
            Start with setting up an account with you phone number
            <br /> your brand tokens will be automatically synced.
          </WorkText>
        </Fade>
      </WorkBody>
      {mQuery.matches ? (
        <WorkContainer>
          <WorkGrid>
            <Bounce left opposite>
              <WorkImage>
                <WalletSetup />
              </WorkImage>
            </Bounce>
            <WorkGridLeft>
              <Fade up>
                <WorkSubHeader>
                  Send your currency anytime
                  <br /> from gema app
                </WorkSubHeader>
              </Fade>
              <Fade up>
                <WorkText2>
                  Using our application, you can send your tokens
                  <br /> to another Gema user where you can experience
                  <br /> massive discounts purchasing the products.
                </WorkText2>
              </Fade>
              <Fade up>
                <WorkText2>
                  bus turpis egestas dignissim purus,
                  <br /> suspendisse suscipit. Est mag
                </WorkText2>
              </Fade>
            </WorkGridLeft>
            <Bounce left opposite>
              <WorkImage3>
                <Dashboard />
              </WorkImage3>
            </Bounce>
          </WorkGrid>

          <WorkGridCenter>
            <Fade up>
              <WorkGridItem>
                <WorkButton>1</WorkButton>
              </WorkGridItem>
            </Fade>
            <Fade up>
              <WorkGridItem>
                <Arrow />
              </WorkGridItem>
            </Fade>
            <Fade up>
              <WorkGridItem>
                <WorkButton2>2</WorkButton2>
              </WorkGridItem>
            </Fade>
            <Fade up>
              <WorkGridItem>
                <Arrow />
              </WorkGridItem>
            </Fade>
            <Fade up>
              <WorkGridItem>
                <WorkButton3>3</WorkButton3>
              </WorkGridItem>
            </Fade>
          </WorkGridCenter>

          <WorkGrid2>
            <WorkGridRight>
              <Fade up>
                <WorkSubHeader>
                  Setup your own wallet
                  <br /> by signing up
                </WorkSubHeader>
              </Fade>
              <Fade up>
                <WorkText2>
                  We use your mobile number to ensure your
                  <br /> convenience while shopping or paying for
                  <br /> services.
                </WorkText2>
              </Fade>
            </WorkGridRight>
            <Bounce right opposite>
              <WorkIcon>
                <Wallet />
              </WorkIcon>
            </Bounce>

            <WorkGridRight>
              <Fade up>
                <WorkSubHeader>
                  User friendly dashboard for <br /> conrtrol all of your data
                </WorkSubHeader>
              </Fade>
              <Fade up>
                <WorkText2>
                  On the dashboards, brands will have a view of the
                  <br /> stores with most redemption,
                </WorkText2>
              </Fade>
              <Fade up>
                <WorkText2>
                  amount of points rewarded and also their users activity.
                </WorkText2>
              </Fade>
            </WorkGridRight>
          </WorkGrid2>
        </WorkContainer>
      ) : (
        <WorkContainer>
          <WorkGrid>
            <Fade up>
              <WorkGridItem>
                <WorkButton>1</WorkButton>
              </WorkGridItem>
            </Fade>
            <Fade up>
              <WorkImage>
                <WalletSetup />
              </WorkImage>
            </Fade>
            <WorkGridRight>
              <Fade up>
                <WorkSubHeader>
                  Setup your own wallet
                  <br /> by signing up
                </WorkSubHeader>
              </Fade>
              <Fade up>
                <WorkText2>
                  Lorem ipsum dolor sit amet, consectetur
                  <br /> adipiscing elit. Fauci
                </WorkText2>
              </Fade>
              <Fade up>
                <WorkText2>
                  bus turpis egestas dignissim purus,
                  <br /> suspendisse suscipit. Est mag
                </WorkText2>
              </Fade>
            </WorkGridRight>
            <Fade up>
              <WorkGridItem>
                <Arrow />
              </WorkGridItem>
            </Fade>
            <Fade up>
              <WorkGridItem>
                <WorkButton2>2</WorkButton2>
              </WorkGridItem>
            </Fade>

            <WorkGridRight>
              <Fade up>
                <WorkSubHeader>
                  Setup your own wallet
                  <br /> by signing up
                </WorkSubHeader>
              </Fade>
              <Fade up>
                <WorkText2>
                  Lorem ipsum dolor sit amet, consectetur
                  <br /> adipiscing elit. Fauci
                </WorkText2>
              </Fade>
              <Fade up>
                <WorkText2>
                  bus turpis egestas dignissim purus,
                  <br /> suspendisse suscipit. Est mag
                </WorkText2>
              </Fade>
            </WorkGridRight>
            <WorkIcon>
              <Wallet />
            </WorkIcon>
            <Fade up>
              <WorkGridItem>
                <Arrow />
              </WorkGridItem>
            </Fade>
            <Fade up>
              <WorkGridItem>
                <WorkButton3>3</WorkButton3>
              </WorkGridItem>
            </Fade>
            <Fade up>
              <WorkGridRight>
                <Fade up>
                  <WorkSubHeader>
                    User friendly dashboard for <br /> conrtrol all of your data
                  </WorkSubHeader>
                </Fade>
                <Fade up>
                  <WorkText2>
                    Orem ipsum dolor sit amet, consectetur adipiscing elit.
                  </WorkText2>
                </Fade>
                <Fade up>
                  <WorkText2>
                    Fauci bus turpis egestas dignissim purus,
                    <br /> nibh suspendisse suscipit. Est magna duis dis nulla
                    <br /> sed. Ultricies tincidunt
                  </WorkText2>
                </Fade>
              </WorkGridRight>
            </Fade>
            <Fade up>
              <WorkImage3>
                <Dashboard />
              </WorkImage3>
            </Fade>
          </WorkGrid>
        </WorkContainer>
      )}
    </WorkElement>
  );
}

export default Work;
