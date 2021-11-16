import { FC } from "react";
import { NavBar } from "../../components";
import Footer from "../../components/common/footer/footer";
import Support from "../../components/support/support";
import { SupportPageProps } from "./support.t";

const SupportPage: FC<SupportPageProps> = () => {
  return (
    <>
      <NavBar userExist={false} bg="#fafafa" isLanding={true} />
      <Support />
      <Footer />
    </>
  );
};

export default SupportPage;
