import React, { FC } from "react";
import { Container } from "../..";
import { Flex, FlexItem25 } from "../../common/global-style/global-style";
import { DiscountProps } from "./discount.t";
import { DiscountLink, DiscountSection, DiscountTitle } from "./doscount.e";
import discountSvg from "../../../assets/images/discount/discount.png";
import { idText } from "typescript";

const sections = [
  [
    {
      text: "FARFETCH",
      url: "#",
    },
    {
      text: "Дочки-Сыночки",
      url: "#",
    },
    {
      text: "Фарфор",
      url: "#",
    },
    {
      text: "М.Видео",
      url: "#",
    },
  ],
  [
    {
      text: "FARFETCH",
      url: "#",
    },
    {
      text: "Дочки-Сыночки",
      url: "#",
    },
    {
      text: "Фарфор",
      url: "#",
    },
    {
      text: "М.Видео",
      url: "#",
    },
  ],
  [
    {
      text: "FARFETCH",
      url: "#",
    },
    {
      text: "Дочки-Сыночки",
      url: "#",
    },
    {
      text: "Фарфор",
      url: "#",
    },
    {
      text: "М.Видео",
      url: "#",
    },
  ],
  [
    {
      text: "FARFETCH",
      url: "#",
    },
    {
      text: "Дочки-Сыночки",
      url: "#",
    },
    {
      text: "Фарфор",
      url: "#",
    },
    {
      text: "М.Видео",
      url: "#",
    },
  ],
];

const Discount: FC<DiscountProps> = () => {
  return (
    <React.Fragment>
      <DiscountSection>
        <Container>
          <DiscountTitle>
            <Flex className="flex">
              <img src={discountSvg} alt="" /> Магазины со скидками
            </Flex>
          </DiscountTitle>
          <Flex>
            <FlexItem25>
              <DiscountLink href="#">Эльдорадо</DiscountLink>
              <DiscountLink href="#">FARFETCH</DiscountLink>
              <DiscountLink href="#">Дочки-Сыночки</DiscountLink>
              <DiscountLink href="#">Фарфор</DiscountLink>
              <DiscountLink href="#">М.Видео</DiscountLink>
            </FlexItem25>
            <FlexItem25>
              <DiscountLink href="#">Эльдорадо</DiscountLink>
              <DiscountLink href="#">FARFETCH</DiscountLink>
              <DiscountLink href="#">Дочки-Сыночки</DiscountLink>
              <DiscountLink href="#">Фарфор</DiscountLink>
              <DiscountLink href="#">М.Видео</DiscountLink>
            </FlexItem25>
            <FlexItem25>
              <DiscountLink href="#">Эльдорадо</DiscountLink>
              <DiscountLink href="#">FARFETCH</DiscountLink>
              <DiscountLink href="#">Дочки-Сыночки</DiscountLink>
              <DiscountLink href="#">Фарфор</DiscountLink>
              <DiscountLink href="#">М.Видео</DiscountLink>
            </FlexItem25>
            <FlexItem25>
              <DiscountLink href="#">Эльдорадо</DiscountLink>
              <DiscountLink href="#">FARFETCH</DiscountLink>
              <DiscountLink href="#">Дочки-Сыночки</DiscountLink>
              <DiscountLink href="#">Фарфор</DiscountLink>
              <DiscountLink href="#">М.Видео</DiscountLink>
            </FlexItem25>
          </Flex>
        </Container>
      </DiscountSection>
    </React.Fragment>
  );
};

export default Discount;
