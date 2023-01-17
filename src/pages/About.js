import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

import SingleColAbout from 'components/faqs/SingleColAbout.js';
import Profile from 'components/features/ProfileTwoColWithButton';
import Profile2 from 'components/features/Profile2TwoColWithButton';
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";

const Content = tw.div`max-w-screen-xl mx-auto`;
const Subheading = tw.span`tracking-wider text-6xl`;
const Heading2 = tw(
  SectionHeading
)`mt-4 font-black text-center text-3xl sm:text-6xl lg:text-6xl text-center md:text-center leading-tight`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Content>
        <MainFeature1
          subheading={<Subheading>Our Mission</Subheading>}
          description='We are committed to providing a safe and non-judgmental platform for individuals to seek help, connect with peers, and overcome addiction. We believe in the power of community and the strength of human connection to bring about lasting change. By creating a network of support and resources, we hope to empower individuals to take control of their lives and achieve lasting recovery. Together, we strive to break the cycle of addiction and pave the way for a fulfilling, substance-free life.'
          buttonRounded={false}
          primaryButtonText="See Portfolio"
          imageSrc="https://www.newliferecoverycenter.net/wp-content/uploads/2022/10/addiction-recovery-program.jpeg"
        />
        <SingleColAbout />
        <br></br><br></br><br></br><br></br><br></br>
        <Heading2>Team</Heading2>
        <br></br><br></br>
        <Profile
          subheading={<Subheading>Krish Shah</Subheading>}
          heading="Founder and Lead Manager"
          buttonRounded={false}
          primaryButtonText="Contact Us"
          imageSrc="https://github.com/krish-shahh.png"
          textOnLeft={false}
        />
        <Profile2
          subheading={<Subheading>Anish Sinha</Subheading>}
          heading="Lead Full-Stack Developer"
          buttonRounded={false}
          primaryButtonText="Contact Us"
          imageSrc="https://github.com/Anish701.png"
          textOnLeft={false}
        />


        <Footer />
      </Content>
    </AnimationRevealPage>
  );
};
