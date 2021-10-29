import { FC, useState } from "react";
import { FooterProps } from "./footer.t";

// Images
import logo from "../../../assets/images/nav-bar/logo.png";
import { FooterLink, FooterSection } from "./footer.e";
import {
  Flex,
  FlexItem50,
  Container,
  FlexItem25,
} from "../global-style/global-style";

const menu = [
  [
    {
      text: "Services",
      url: "#",
    },
    {
      text: "Главная",
      url: "#",
    },
    {
      text: "Лучшие промокоды",
      url: "#",
    },
    {
      text: "Квартиры и дом",
      url: "#",
    },
    {
      text: "Работы",
      url: "#",
    },
  ],
  [
    {
      text: "About",
      url: "#",
    },
    {
      text: "Our Story",
      url: "#",
    },
    {
      text: "Benefits",
      url: "#",
    },
    {
      text: "Team",
      url: "#",
    },
    {
      text: "Careers",
      url: "#",
    },
  ],
];

const Footer: FC<FooterProps> = (props) => {
  return (
    <FooterSection>
      <Container>
        <Flex>
          <FlexItem50>
            <a href="#">
              <img src={logo} alt="U-sale" />
            </a>
            <p>Copyright © 2020. LogoIpsum. All rights reserved.</p>
          </FlexItem50>
          <FlexItem50>
            <Flex>
              {menu.map((menu_property) => (
                <FlexItem50 className="flex-item-50">
                  {menu_property.map((item) => (
                    <FooterLink href={item.url}>{item.text}</FooterLink>
                  ))}
                </FlexItem50>
              ))}
            </Flex>
          </FlexItem50>
        </Flex>
        <h3>Subscribe to our newsletter</h3>
        <Flex>
          <FlexItem25 className="flex-item-25 d-sm-flex">
            <input placeholder="Email address" type="text" />
            <button>
              <i className="fas fa-arrow-right"></i>
            </button>
          </FlexItem25>
          <FlexItem25 className="social flex-item-25">
            <a href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="">
              <i className="fab fa-instagram"></i>
            </a>
          </FlexItem25>
        </Flex>
      </Container>
    </FooterSection>
  );
};

export default Footer;
