import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../../images/logo.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../images/linkedin-icon.svg";


const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
// const Link = tw.a`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;
const Link = tw.a`border-b-2 border-transparent hocus:text-red-500 hocus:border-red-500 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
// const LogoText = tw.h5`ml-2 text-xl font-black text-primary-500`;
const LogoText = tw.h5`ml-2 text-xl font-black text-red-700`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>ReCover</LogoText>
          </LogoContainer>
          <CompanyDescription>
            ReCover is dedicated to helping addicts find the resources needed to help them live in recovery.
          </CompanyDescription>
          <SocialLinksContainer>
            <SocialLink href="https://twitter.com/ReCoverMain" target="_blank">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/recoveraddiction" target="_blank">
              <LinkedinIcon />
            </SocialLink>
          </SocialLinksContainer>
        </WideColumn>
        <Column>
          <ColumnHeading>Quick Links</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="/">Home</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/about">About</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/contact">Contact</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/forums">Community</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/privacy">Privacy Policy</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/ai">AI</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Product</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="/sponsor">Become a Sponsor</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/search">Search</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/events">Events</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/resources">Resources</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/feedback">Partnership</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/terms">Terms of Service</Link>
            </LinkListItem>
          </LinkList>
        </Column>
      </FiveColumns>
    </Container>
  );
};
