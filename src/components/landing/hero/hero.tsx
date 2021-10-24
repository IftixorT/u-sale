import { FC } from 'react';
import { HeroProps } from './hero.t';
import { Wrapper } from './hero.e';

const Hero: FC<HeroProps> = () => {
  return (
    <Wrapper isNone={false}>
      <h1>Hero Component</h1>
    </Wrapper>
  );
};

export default Hero;
