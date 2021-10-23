import { FC } from 'react';
import { NavBarProps } from './nav-bar.t';
import { Wrapper } from './nav-bar.e';

const menu = ['Промокоды', 'Квартиры и дом', 'Работы', 'Магазин'];

const NavBar: FC<NavBarProps> = ({ isLanding }) => {
  return (
    <Wrapper>
      <h1>NavBar component</h1>
    </Wrapper>
  );
};

export default NavBar;
