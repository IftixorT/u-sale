import React, { FC } from "react";
import { LandingProps } from "./landing.t";
import { NavBar } from "../../components";
import Hero from "../../components/landing/hero/hero";
import Informations from "../../components/landing/informations/informations";
import Discount from "../../components/landing/discount/discount";
import Footer from "../../components/common/footer/footer";

const Landing: FC<LandingProps> = () => {
  return (
    <React.Fragment>
      <NavBar isLanding={true} userExist={false} />
      <Hero />
      <Informations />
      <Discount />
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
