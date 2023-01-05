import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
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

const Subheading = tw.span`tracking-wider text-6xl`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About ReCover</Subheading>}
        heading="We help people on the path to recovery."
        description='ReCover is dedicated to helping addicts find the resources needed to help them live in recovery. It connects people struggling with addiction to Sponsors who are willing to help support them. Our main goal is to make Sponsors easily available, provide resources needed to assist people with addiction, and promote sober events in our communities.'
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc="https://www.newliferecoverycenter.net/wp-content/uploads/2022/10/addiction-recovery-program.jpeg"
      />
      <SingleColAbout />

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
        imageSrc="https://mail.google.com/mail/u/0?ui=2&ik=ca0c8bafcf&attid=0.1.1&permmsgid=msg-f:1754155247645808412&th=185802e760d0d71c&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-nt375Ccyzvl3dbNV8oX2AXYh6MSGVwC6d6I_dVWJz9wbDt69T1Fibj2i1BL1bZ8FMQpDaHZ3mVqh5sxyNNNmcfeigpbHMCSOc6NM4ZxZS_0Sgx0OM1ngWMBE&disp=emb"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
        ]}
        linkText=""
      />
      {/* <TeamCardGrid
        subheading={<Subheading>Our Team</Subheading>}
      /> */}
      <Footer />
    </AnimationRevealPage>
  );
};
