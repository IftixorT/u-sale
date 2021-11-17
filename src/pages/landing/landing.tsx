import React, { FC } from "react";
import { LandingProps } from "./landing.t";
import { NavBar } from "../../components";
import Hero from "../../components/landing/hero/hero";
import Informations from "../../components/landing/informations/informations";
import Discount from "../../components/landing/discount/discount";
import Footer from "../../components/common/footer/footer";
import TopButton from "../../components/common/top-button/top-button";

const Landing: FC<LandingProps> = () => {
  return (
    <React.Fragment>
      <NavBar isLanding={true} userExist={false} />
      <Hero />
      <Informations />
      <Discount />
      <TopButton />
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
