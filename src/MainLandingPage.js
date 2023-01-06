import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import { components } from "ComponentRenderer.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl, ContentWithVerticalPadding } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as RadioIcon } from "feather-icons/dist/icons/radio.svg";
import { ReactComponent as HandleIcon } from "images/handle-icon.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg";

import heroScreenshotImageSrc from "images/demo/MainLandingPageHero.png";
import logo from "images/logo.svg";
import useInView from "helpers/useInView";
import MiniCenteredFooter from ".//components/footers/SimpleFiveColumn"
import Navigation from ".//components/headers/light.js"
import Features from "components/features/ThreeColSimple.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-700 border-gray-400 hocus:border-gray-700`;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline mt-6 md:mt-4 lg:mt-0`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;

const Column = tw.div`flex-1`;

const TextColumn = tw(Column)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Heading = tw(HeadingBase)`text-center lg:text-left text-primary-900 leading-snug`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
const Actions = tw.div`flex flex-col sm:flex-row justify-center lg:justify-start`;
const ActionButton = tw(
  AnchorLink
)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const PrimaryButton = tw(ActionButton)``;
const SecondaryButton = tw(
  ActionButton
)`mt-6 sm:mt-12 sm:ml-8 bg-gray-300 text-gray-800 hocus:bg-gray-400 hocus:text-gray-900`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full rounded-t sm:rounded`;

const SectionContainer = tw(ContentWithVerticalPadding)``;
const SectionHeading = tw(HeadingBase)`text-primary-900`;
const SectionDescription = tw(DescriptionBase)`text-center mx-auto text-gray-600 max-w-4xl`;

const PreviewCards = tw.div`flex flex-wrap -mr-12`;
const PreviewCardContainer = tw.div`mt-24 mx-auto md:mx-0 max-w-lg w-full md:w-1/2 lg:w-1/3 pr-12`;
const PreviewCard = tw(motion.a)`block rounded-lg shadow-raised`;
const PreviewCardImageContainer = tw.div`rounded-t-lg border-0 border-b-0`;
const PreviewCardImage = styled(motion.div)`
  ${props => css`background-image: url("${props.$imageSrc}");`}
  ${tw`h-128 md:h-144 bg-cover bg-left-top`}
`;
const PreviewButton = tw(PrimaryButtonBase)`w-full rounded-b-lg rounded-t-none py-5 font-semibold`;

const ComponentsContainer = tw.div`mt-24`;
const ComponentsType = tw.h3`text-4xl font-black text-primary-500 border-b-4 border-primary-500 inline-block`;
const Components = tw.div``;
const Component = tw.div`mt-12 border rounded-lg bg-white`;
const ComponentHeading = tw.div`px-8 py-5 border-b flex flex-col sm:flex-row justify-between items-center`;
const ComponentName = tw.h6`text-lg`;
const ComponentPreviewLink = tw.a`mt-4 sm:mt-0 text-primary-500 hocus:text-primary-900 transition duration-300 font-semibold flex items-center`;
const ComponentContent = tw.div`flex justify-between overflow-hidden rounded-b-lg bg-gray-600 relative`;
const ResizableBox = styled(Rnd)`
  ${tw`relative! bg-white pr-4`}
  .resizeHandleWrapper > div {
    ${tw`w-4! right-0!`}
  }
`;
const ResizeHandleButton = tw.button`cursor-col-resize focus:outline-none w-4 border-l bg-gray-100 absolute right-0 inset-y-0`;

export default ({
  features = null,
  landingPages = components.landingPages,
  innerPages = components.innerPages,
  blocks = components.blocks,
  heading = "Free Modern React Templates for every need.",
  description = "Easily customizable modern React UI Templates and Components built using TailwindCSS which are also lightweight and simple to setup. All components are modular and fully responsive for great mobile experience as well as big desktop screens.  Brand Colors are also fully customizable. Free for personal as well as commercial use."
}) => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  useEffect(() => {
    window.gtag("js", new Date());
    window.gtag("config", "UA-45799926-9");
  }, [])

  const previewImageAnimationVariants = {
    rest: {
      backgroundPositionY: "0%"
    },
    hover: {
      backgroundPositionY: "100%",
      transition: { type: "tween", ease: "linear", duration: 5 }
    }
  };

  const noOfLandingPages = Object.keys(landingPages).length;
  const noOfInnerPages = Object.keys(innerPages).length;
  const noOfComponentBlocks = Object.values(blocks).reduce((acc, block) => acc + Object.keys(block.elements).length, 0);

  features = features || [
    `${noOfLandingPages} Landing Page Demos`,
    `${noOfInnerPages} Inner Pages`,
    `${noOfComponentBlocks} Components`,
    "Uses TailwindCSS",
    "Fully Responsive",
    "Fully Customizable"
  ];

  return (
    <AnimationRevealPage disabled>
      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
          <Navigation />
          <HeroRow>
            <TextColumn>
              <Heading as="h1">
                ReCover...
              </Heading>
              <Description>
              is dedicated to helping addicts find the resources needed to help them live in recovery. It connects people struggling with addiction to people who are willing to help support them. Our main goal is to make Sponsors easily available, provide resources needed to assist people with addiction, and promote sober events in our communities.
              </Description>
              <Actions>
                <PrimaryButton href="#" css="">
                  Start Searching
                </PrimaryButton>
                <SecondaryButton href="/about">
                  Learn More
                </SecondaryButton>
              </Actions>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={heroScreenshotImageSrc} />
              </ImageContainer>
            </ImageColumn>
          </HeroRow>

          <Features
            heading="Who We Support"
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

          <MiniCenteredFooter />

        </Content2Xl>
      </Container>
    </AnimationRevealPage>
  );
};

const BlocksRenderer = ({ blocks }) => {
  const [lastVisibleBlockIndex, setLastVisibleBlockIndex] = useState(0);

  const updateLastVisibleBlockIndex = index => {
    console.log("LAST WAS ", lastVisibleBlockIndex);
    if (index > lastVisibleBlockIndex) setLastVisibleBlockIndex(index);
  };

  return (
    <ComponentsContainer>
      {blocks.map(
        (block, index) =>
          lastVisibleBlockIndex + 1 >= index && (
            <Block key={index} components={block} notifyIsVisible={() => updateLastVisibleBlockIndex(index)} />
          )
      )}
    </ComponentsContainer>
  );
};

const Block = ({ notifyIsVisible, components }) => {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) notifyIsVisible();
  }, [inView, notifyIsVisible]);

  const ResizeHandle = (
    <ResizeHandleButton>
      <HandleIcon tw="w-4 h-4 text-gray-600" />
    </ResizeHandleButton>
  );

  const componentBlockRefs = {};

  const updateComponentBlockIframeHeight = iframe => {
    iframe.style.height = "auto";
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
  };

  return (
    <div ref={ref} tw="mt-32">
      <ComponentsType>{components.type}</ComponentsType>
      <Components>
        {Object.values(components.elements).map((component, componentIndex) => (
          <Component key={componentIndex}>
            <ComponentHeading>
              <ComponentName>{component.name}</ComponentName>
              <ComponentPreviewLink className="group" href={component.url} target="_blank">
                View Live Demo{" "}
                <ArrowRightIcon tw="transition duration-300 transform group-hover:translate-x-px ml-2 w-4 h-4" />
              </ComponentPreviewLink>
            </ComponentHeading>
            <ComponentContent>
              <ResizableBox
                minWidth={310}
                default={{
                  width: "100%",
                  height: "100%"
                }}
                bounds="parent"
                disableDragging={true}
                enableResizing={{ right: true }}
                resizeHandleComponent={{ right: ResizeHandle }}
                resizeHandleWrapperClass={`resizeHandleWrapper`}
                onResize={() => updateComponentBlockIframeHeight(componentBlockRefs[component.url])}
              >
                <iframe
                  src={component.url}
                  title="Hero"
                  width="100%"
                  ref={ref => (componentBlockRefs[component.url] = ref)}
                  onLoad={e => updateComponentBlockIframeHeight(e.target)}
                />
              </ResizableBox>
            </ComponentContent>
          </Component>
        ))}
      </Components>
    </div>
  );
};
