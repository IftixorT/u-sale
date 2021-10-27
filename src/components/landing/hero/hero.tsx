import React, { FC } from 'react';
import { Container } from '../..';
import { HeroProps } from './hero.t';
import Search from './search/search';
import Sliders from './sliders/sliders';

const Hero: FC<HeroProps> = () => {
  return (
    <React.Fragment>
      <Container>
        <Search />
        <Sliders />
      </Container>
    </React.Fragment>
  );
};

export default Hero;
