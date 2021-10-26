import { FC } from 'react';
import InfoLayout from './info-layout';
import { Wrapper } from './information.e';

const list = [
  {
    title: 'Лучшие промокоды',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor',
    imgURL: '1-info-image.png',
    isReverse: false,
  },
  {
    title: 'Квартиры и дом',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor',
    imgURL: '2-info-image.png',
    isReverse: true,
  },
  {
    title: 'Интернет-магазин',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor',
    imgURL: '3-info-image.png',
    isReverse: false,
  },
  {
    title: 'Вакансии и Работа',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor',
    imgURL: '4-info-image.png',
    isReverse: true,
  },
];

const Information: FC = () => {
  return (
    <Wrapper>
      {list.map((info, idx) => (
        <InfoLayout key={idx} {...info} />
      ))}
    </Wrapper>
  );
};
export default Information;
