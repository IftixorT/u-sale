import React, { FC } from 'react';
import { Element } from 'react-scroll';
import { InformationsProps } from './informations.t';
import { Container } from '../..';
import { Flex, FlexItem50 } from '../../common/global-style/global-style';
import { InformationsSection, InformationTitle } from './information.e';

// Images
import img1 from '../../../assets/images/informations/info1.png';
import img2 from '../../../assets/images/informations/info2.png';
import img3 from '../../../assets/images/informations/info3.png';
import img4 from '../../../assets/images/informations/info4.png';
import Additional from './additional/additional';

const sections = [
  {
    key: 1,
    title: 'Лучшие промокоды',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor',
    imgURL: img1,
    isReverse: false,
  },
  {
    key: 1,
    title: 'Квартиры и дом',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor',
    imgURL: img2,
    isReverse: true,
  },
  {
    key: 1,
    title: 'Интернет-магазин',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor',
    imgURL: img3,
    isReverse: false,
  },
  {
    key: 1,
    title: 'Вакансии и Работа',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor',
    imgURL: img4,
    isReverse: true,
  },
];

const Informations: FC<InformationsProps> = () => {
  return (
    <React.Fragment>
      <InformationsSection>
        <Container>
          {sections.map((section) => (
            <Element name={section.title} key={section.key}>
              <Flex className={!section.isReverse ? 'flex reverse' : 'flex'}>
                <FlexItem50>
                  <img src={section.imgURL} alt='info' />
                </FlexItem50>
                <FlexItem50 className='padding'>
                  <InformationTitle>{section.title}</InformationTitle>
                  <p>{section.description}</p>
                </FlexItem50>
              </Flex>
            </Element>
          ))}
        </Container>
      </InformationsSection>
      <Additional />
    </React.Fragment>
  );
};

export default Informations;
