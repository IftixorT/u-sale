import { FC } from 'react';
import { NavBarProps } from './nav-bar.t';
import { Wrapper } from './nav-bar.e';
const NavBar: FC<NavBarProps> = ({ onPress }) => {
  return (
    <Wrapper>
      <h1 onClick={onPress}>NavBar Component</h1>
    </Wrapper>
  );
};

export default NavBar;
