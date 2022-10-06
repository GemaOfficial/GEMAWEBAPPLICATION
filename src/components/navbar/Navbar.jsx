import React, { useEffect, useState } from "react";
import Facebook from "../../assets/navbar/Facebook";
import Linkedin from "../../assets/navbar/Linkedin";
import Logo from "../../assets/navbar/Logo";
import Twitter from "../../assets/navbar/Twitter";
import { useNavigate } from "react-router-dom";
import {
  NavbarBody,
  NavbarElement,
  NavbarGrid,
  NavbarGridItem,
  NavbarItem,
  NavbarLink,
  NavbarLogo,
  NavbarIcon,
  NavbarButton,
  NavbarMobile,
  NavbarMenuIcon,
  NavbarDesktop,
  NavbarMenuGrid,
  NavbarMenuItem,
  NavbarMenuItemLink,
  NavbarContainer,
  NavbarDetails,
  NavbarSubTitle,
  NavbarTitle,
  NavbarHeader,
  NavbarAvartar,
  NavbarLogout,
} from "./NavbarElement";
import { Spin as Hamburger } from "hamburger-react";
import { useContext } from "react";
import { GlobalContext } from "../../globals/GlobalContext";
import Avatar from "react-avatar";
import ForwardIcon from "../../assets/landing/ForwardIcon";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { isLoggedin, globalUser, setShowSwap } = useContext(GlobalContext);
  const { Logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addEventListener("change", setMQuery);

    return () => mediaQuery.removeEventListener("change", setMQuery);
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about-us");
  };
  const handleClick2 = () => {
    navigate("/our-service");
  };
  const handleClick3 = () => {
    navigate("/");
  };
  const handleClick4 = () => {
    navigate("/our-projects");
  };
  const handleClick5 = () => {
    navigate("/client-page");
  };
  const handleLogin = () => {
    navigate("/login");
  };

  const handleSettings = () => {
    navigate("/profile-settings");
  };
  const handleMarket = () => {
    navigate("/market-place");
  };
  const handleSwap = () => {
    setShowSwap(true);
    navigate("/swap-tokens");
  };
  const handleDashboard = () => {
    navigate("/user-dashboard");
  };
  const handleLogout = () => {
    Logout();
  };
  return (
    <NavbarElement>
      {mQuery.matches ? (
        <NavbarBody>
          <NavbarIcon>
            <NavbarGridItem>
              <Facebook />
            </NavbarGridItem>
            <NavbarGridItem>
              <Linkedin />
            </NavbarGridItem>
            <NavbarGridItem>
              <Twitter />
            </NavbarGridItem>
          </NavbarIcon>
          {isLoggedin && globalUser ? (
            <>
              <NavbarGrid>
                <NavbarLink onClick={() => handleMarket()}>Overview</NavbarLink>
                <NavbarLink onClick={() => handleSwap()}>Swap</NavbarLink>
                <NavbarLogo onClick={() => handleClick3()}>
                  <Logo />
                </NavbarLogo>
                <NavbarLink onClick={() => handleDashboard()}>
                  My Wallet
                </NavbarLink>
                <NavbarLink onClick={() => handleSettings()}>
                  Settings
                </NavbarLink>
              </NavbarGrid>
              <NavbarDetails>
                <NavbarHeader>
                  <NavbarTitle>{globalUser?.username || "User"}</NavbarTitle>
                  <NavbarSubTitle>Customer</NavbarSubTitle>
                </NavbarHeader>
                <NavbarAvartar>
                  <Avatar
                    name={globalUser?.username || "User"}
                    size="40"
                    round={true}
                    color="#000"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                  />
                </NavbarAvartar>
                <NavbarLogout onClick={() => handleLogout()}>
                  Logout
                  <ForwardIcon />
                </NavbarLogout>
              </NavbarDetails>
            </>
          ) : (
            <>
              <NavbarGrid>
                <NavbarLink onClick={() => handleClick()}>About us</NavbarLink>
                <NavbarLink onClick={() => handleClick4()}>Projects</NavbarLink>
                <NavbarLogo onClick={() => handleClick3()}>
                  <Logo />
                </NavbarLogo>
                <NavbarLink onClick={() => handleClick5()}>Client</NavbarLink>
                <NavbarLink onClick={() => handleClick2()}>
                  Our Services
                </NavbarLink>
              </NavbarGrid>
              <NavbarItem>
                <NavbarButton onClick={() => handleLogin()}>Login</NavbarButton>
              </NavbarItem>
            </>
          )}
        </NavbarBody>
      ) : (
        <NavbarDesktop>
          {isOpen ? (
            <NavbarContainer>
              <NavbarMenuGrid>
                <NavbarMenuIcon>
                  <Hamburger
                    toggled={isOpen}
                    toggle={setIsOpen}
                    color="#4FD1C5"
                  />
                </NavbarMenuIcon>
                <NavbarLogo onClick={() => handleClick3()}>
                  <Logo />
                </NavbarLogo>
                <NavbarIcon>
                  <NavbarGridItem>
                    <Facebook />
                  </NavbarGridItem>
                  <NavbarGridItem>
                    <Linkedin />
                  </NavbarGridItem>
                  <NavbarGridItem>
                    <Twitter />
                  </NavbarGridItem>
                </NavbarIcon>
              </NavbarMenuGrid>
              {isLoggedin && globalUser ? (
                <NavbarMenuItemLink>
                  <NavbarMenuItem
                    onClick={() => handleMarket(setIsOpen(!isOpen))}
                  >
                    Overview
                  </NavbarMenuItem>
                  <NavbarMenuItem
                    onClick={() => handleSwap(setIsOpen(!isOpen))}
                  >
                    Swap
                  </NavbarMenuItem>
                  <NavbarMenuItem
                    onClick={() => handleDashboard(setIsOpen(!isOpen))}
                  >
                    My Wallet
                  </NavbarMenuItem>
                  <NavbarMenuItem
                    onClick={() => handleSettings(setIsOpen(!isOpen))}
                  >
                    Settings
                  </NavbarMenuItem>
                </NavbarMenuItemLink>
              ) : (
                <NavbarMenuItemLink>
                  <NavbarMenuItem
                    onClick={() => handleClick(setIsOpen(!isOpen))}
                  >
                    About us
                  </NavbarMenuItem>
                  <NavbarMenuItem
                    onClick={() => handleClick4(setIsOpen(!isOpen))}
                  >
                    Projects
                  </NavbarMenuItem>
                  <NavbarMenuItem
                    onClick={() => handleClick5(setIsOpen(!isOpen))}
                  >
                    Clients
                  </NavbarMenuItem>
                  <NavbarMenuItem
                    onClick={() => handleClick2(setIsOpen(!isOpen))}
                  >
                    Our services
                  </NavbarMenuItem>
                </NavbarMenuItemLink>
              )}
            </NavbarContainer>
          ) : (
            <NavbarMobile>
              <NavbarMenuIcon>
                <Hamburger
                  toggled={isOpen}
                  toggle={setIsOpen}
                  color="#4FD1C5"
                />
              </NavbarMenuIcon>
              {isLoggedin && globalUser ? (
                <>
                  <NavbarDetails>
                    <NavbarHeader>
                      <NavbarTitle>
                        {globalUser?.username || "User"}
                      </NavbarTitle>
                      <NavbarSubTitle>User</NavbarSubTitle>
                    </NavbarHeader>
                    <NavbarAvartar>
                      <Avatar
                        name={globalUser?.username || "User"}
                        size="40"
                        round={true}
                        color="#000"
                        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                      />
                    </NavbarAvartar>
                  </NavbarDetails>
                  <NavbarLogout onClick={() => handleLogout()}>
                    Logout
                    <ForwardIcon />
                  </NavbarLogout>
                </>
              ) : (
                <>
                  <NavbarLogo onClick={() => handleClick3()}>
                    <Logo />
                  </NavbarLogo>
                  <NavbarItem>
                    <NavbarButton onClick={() => handleLogin()}>
                      Login
                    </NavbarButton>
                  </NavbarItem>
                </>
              )}
            </NavbarMobile>
          )}
        </NavbarDesktop>
      )}
    </NavbarElement>
  );
}

export default Navbar;
