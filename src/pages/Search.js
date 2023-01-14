import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import SearchForm from "./SearchForm";
import "./card.css";
import tw from "twin.macro";
const Content = tw.div`max-w-screen-xl mx-auto`;

export default () => {
  return (
    <div className="App">

      <AnimationRevealPage>
        <Header />
        <div className="container">
          <SearchForm />
        </div>
        <Content>
          <Footer />
        </Content>
      </AnimationRevealPage>

    </div>
  );
};
