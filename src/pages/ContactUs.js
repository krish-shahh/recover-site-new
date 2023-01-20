import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import tw from "twin.macro";
const Content = tw.div`max-w-screen-xl mx-auto`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeFvRyTyokBHI8OJzUKxXx6qlvbzapZgivY97kOdCqSprMeew/viewform?embedded=true" width="100%" height="809" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      <Content>
        <Footer />
      </Content>
    </AnimationRevealPage>
  );
};
