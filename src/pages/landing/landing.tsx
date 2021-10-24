import { FC } from 'react';
import { LandingProps } from './landing.t';
import { Wrapper } from './landing.e';
import Hero from '../../components/landing/hero/hero';

const Landing: FC<LandingProps> = () => {
  return (
    <Wrapper>
      Landing Page
      <Hero />
    </Wrapper>
  );
};

export default Landing;
