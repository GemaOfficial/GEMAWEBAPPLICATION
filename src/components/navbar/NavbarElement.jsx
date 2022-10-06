import styled from "styled-components";

export const NavbarElement = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  z-index: 5;
  height: 2em;
`;
export const NavbarBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;
  padding-top: 2em;
  padding-left: 60px;
  padding-right: 1em;
  align-items: center;
`;
export const NavbarLink = styled.a`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #7ce6df;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
export const NavbarSubTitle = styled.div`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: #dddeed;
`;
export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    path {
      fill: #000000;
      stroke: #fff;
    }
  }
  @media (max-width: 768px) {
    svg {
      width: 50%;
    }
  }
`;
export const NavbarGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-self: center;
  grid-gap: 50px;
`;
export const NavbarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavbarGridItem = styled.div`
  &:hover {
    cursor: pointer;
    circle {
      fill: #7ce6df;
      opacity: 1;
      stroke: #7ce6df;
    }
    path {
      fill: #23253b;
    }
  }
`;
export const NavbarIcon = styled.div`
  display: grid;
  grid-template-columns: 20px 20px 20px;
  grid-gap: 20px;
  justify-content: start;
  @media (max-width: 768px) {
    align-self: center;
    align-items: center;
  }
`;
export const NavbarButton = styled.button`
  width: 97px;
  height: 36px;
  background: #7ce6df;
  border-radius: 8px;
  font-family: "zwodrei";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background: #fff;
  }
`;

export const NavbarMobile = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 10px;
  padding: 20px;
`;
export const NavbarDesktop = styled.div``;
export const NavbarMenu = styled.div``;
export const NavbarMenuItem = styled.div`
  font-family: "zwodrei";
  font-weight: 700;
  font-size: 38px;
  line-height: 54px;
  color: #7ce6df;
`;
export const NavbarTitle = styled(NavbarMenuItem)`
  font-size: 18px;
  line-height: 28px;
  color: #fff;
  text-align: right;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const NavbarHeader = styled.div``;
export const NavbarAvartar = styled.div`
  justify-self: left;
`;
export const NavbarMenuItemLink = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
  background: #26283b;
`;
export const NavbarContainer = styled.div`
  transition: all 1s ease-in-out;
`;
export const NavbarMenuIcon = styled.div`
  align-self: center;
  align-items: center;
`;
export const NavbarMenuGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 20px;
`;

export const NavbarDetails = styled(NavbarMenuGrid)`
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;
export const NavbarLogout = styled(NavbarTitle)`
  align-self: center;
  text-align: left;
  cursor: pointer;
  color: #7ce6df;
  svg {
    fill: #7ce6df;
  }
`;
