import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import SponsorForm from "components/forms/SimpleContactUs.js";
import tw from "twin.macro";
const Content = tw.div`max-w-screen-xl mx-auto`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <SponsorForm />
      <Content>
        <Footer />
      </Content>
    </AnimationRevealPage>
  );
};
