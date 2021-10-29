import React, { FC } from "react";
import { Container } from "../../..";
import { Flex, FlexItem30 } from "../../../common/global-style/global-style";
import { AdditionalSection, AdditionTitle } from "./additional.e";
import { AdditionalProps } from "./additional.t";

const sections = [
  {
    id: 1,
    title: "Что такое промокод?",
    info: 'Каждый, кто хоть раз совершал покупку онлайн, наверняка заметил поле "ввести промокод" перед оплатой покупки. Перейдя по ссылке вы узнаете все о промокодах.',
    urlText: "Подробнее о промокодах и кодах купонов",
    url: "#",
  },
  {
    id: 2,
    title: "Шоппинг советы",
    info: 'Каждый, кто хоть раз совершал покупку онлайн, наверняка заметил поле "ввести промокод" перед оплатой покупки. Перейдя по ссылке вы узнаете все о промокодах.',
    urlText: "Подробнее о промокодах и кодах купонов",
    url: "#",
  },
  {
    id: 3,
    title: "Подарочные сертификаты",
    info: 'Каждый, кто хоть раз совершал покупку онлайн, наверняка заметил поле "ввести промокод" перед оплатой покупки. Перейдя по ссылке вы узнаете все о промокодах.',
    urlText: "Подробнее о промокодах и кодах купонов",
    url: "#",
  },
];

const Additional: FC<AdditionalProps> = () => {
  return (
    <React.Fragment>
      <AdditionalSection>
        <Container>
          <Flex>
            {sections.map((section) => {
              return (
                <FlexItem30 key={section.id}>
                  <AdditionTitle>{section.title}</AdditionTitle>
                  <p>{section.info}</p>
                  <a href={section.url}>{section.urlText}</a>
                </FlexItem30>
              );
            })}
          </Flex>
        </Container>
      </AdditionalSection>
    </React.Fragment>
  );
};

export default Additional;
