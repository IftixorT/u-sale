import { FC } from 'react';
import { LandingProps } from './landing.t';
import { Wrapper } from './landing.e';
// import NavBar from '../../components/common/nav-bar/nav-bar';
// import NotFound from '../../components/common/not-found/not-found';
import { NotFound } from '../../components';

const Landing: FC<LandingProps> = ({ title }) => {
  return (
    <Wrapper>
      <NotFound />
      <h1>Landing Page {title}</h1>
    </Wrapper>
  );
};

export default Landing;
