import { FC } from 'react';
import { LandingProps } from './landing.t';
import { Wrapper } from './landing.e';

const Landing: FC<LandingProps> = () => {
  return (
    <Wrapper>
      <h1>Landing Page</h1>
    </Wrapper>
  );
};

export default Landing;
