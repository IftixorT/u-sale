import { FC } from 'react';
import { LandingProps } from './landing.t';
import { Wrapper } from './landing.e';
import Information from '../../components/landing/information/information';

const Landing: FC<LandingProps> = () => {
  return (
    <Wrapper>
      <Information />
    </Wrapper>
  );
};

export default Landing;
