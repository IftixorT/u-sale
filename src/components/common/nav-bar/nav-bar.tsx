import { FC, useState } from "react";
import { NavBarProps } from "./nav-bar.t";
import { Container } from "../global-style/global-style";
import { Flex } from "../global-style/global-style";

// Images
import logo from "../../../assets/images/nav-bar/logo.png";
import {
  CrimsonBtn,
  Header,
  Navbar,
  NavItem,
  NavPanel,
  ResNav,
  WhiteBtn,
} from "./nav-bar.e";
import { Link } from "react-router-dom";

const menu = [
  { text: "Промокоды", url: "#" },
  { text: "Квартиры и дом", url: "#" },
  { text: "Работы", url: "#" },
  { text: "Магазин", url: "#" },
];
const NavBar: FC<NavBarProps> = ({ isLanding }) => {
  const [visibleNav, setVisibleNav] = useState(0);
  return (
    <Header>
      <Container>
        <Flex>
          <Link to="/">
            <img src={logo} alt="U-Sale" />
          </Link>
          <ResNav style={!visibleNav ? { left: "-1000%" } : { left: "0" }}>
            <i
              onClick={() => setVisibleNav(0)}
              className="navbar-closer fal fa-times"
            ></i>
            <Flex className="flex">
              <Navbar>
                <Flex className="flex">
                  {menu.map((link, index) => (
                    <NavItem key={index}>
                      <a href={link.url}>{link.text}</a>
                    </NavItem>
                  ))}
                </Flex>
              </Navbar>
              <NavPanel>
                <Link to="/register">
                  <WhiteBtn>Регистрация</WhiteBtn>
                </Link>
                <Link to="/sign-in">
                  <CrimsonBtn>Вход</CrimsonBtn>
                </Link>
              </NavPanel>
            </Flex>
          </ResNav>
          <i
            onClick={() => setVisibleNav(1)}
            className="navbar-controller fas fa-bars"
          ></i>
        </Flex>
      </Container>
    </Header>
  );
};

export default NavBar;
