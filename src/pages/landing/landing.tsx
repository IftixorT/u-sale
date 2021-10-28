import React, { FC } from "react";
import { LandingProps } from "./landing.t";
import { NavBar } from "../../components";
import Hero from "../../components/landing/hero/hero";
import Informations from "../../components/landing/informations/informations";
import Discount from "../../components/landing/discount/discount";

const Landing: FC<LandingProps> = () => {
  return (
    <React.Fragment>
      <NavBar isLanding={true} />
      <Hero />
      <Informations />
      <Discount />
    </React.Fragment>
  );
};

export default Landing;
