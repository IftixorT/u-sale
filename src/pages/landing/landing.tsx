import React, { FC } from 'react';
import { LandingProps } from './landing.t';
import { NavBar } from '../../components';
import Hero from '../../components/landing/hero/hero';
import Informations from '../../components/landing/informations/informations';

const Landing: FC<LandingProps> = () => {
  return (
    <React.Fragment>
      <NavBar isLanding={true} />
      <Hero />
      <Informations />
    </React.Fragment>
  );
};

export default Landing;
