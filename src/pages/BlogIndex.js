import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../images/svg-decorator-blob-3.svg";
import Header from "components/headers/light.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/SimpleFiveColumn";
import { ReactComponent as RadioIcon } from "feather-icons/dist/icons/radio.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { events_mock_data } from './events_mock_data.js'


const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ContentCopy = tw.div`max-w-screen-xl mx-auto`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const ColumnNotice = tw.div`flex-1`;

const UpdateNotice = tw(ColumnNotice)`w-full flex-auto mb-4 sm:mb-8 rounded px-4 py-3 sm:px-5 sm:py-4 bg-orange-100 text-orange-800 flex items-center sm:items-start md:items-center justify-center lg:justify-start border border-orange-200 text-xs sm:text-sm text-center sm:text-left md:leading-none`;
const UpdateNoticeIcon = tw(RadioIcon)`w-0 sm:w-5 sm:mr-3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded border-2 border-t rounded-t border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;
const Input = tw.input`w-full items-center text-center border-2 border-primary-500 rounded-full`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({ as: "a" })`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  heading = <>Events</>,
  description = "Some events we found that will help in your journey to recover addiction",

}) => {
  const [events, setEvents] = useState(events_mock_data)
  const [search, setSearch] = useState('');

  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <Content>
          <UpdateNotice>
            <UpdateNoticeIcon />
            Disclaimer: The data and information displayed on this website are for demonstration purposes only and are not intended to represent real-world data or information.
          </UpdateNotice>
          <HeadingInfoContainer>
            <HeadingTitle>{heading}</HeadingTitle>
            <HeadingDescription>{description}</HeadingDescription>
          </HeadingInfoContainer>
          <ThreeColumn>
            {events_mock_data.map((item, index) => (
              <Column key={index}>
                <Card>
                  <Details>
                    <MetaContainer>
                      <Meta>
                        <UserIcon />
                        <div>{item.host}</div>
                      </Meta>
                      <Meta>
                        <TagIcon />
                        <div>{item.category}</div>
                      </Meta>
                    </MetaContainer>
                    <Title>{item.title}</Title>
                    <MetaContainer>
                      <Meta>
                        <TimeIcon />
                        <div>{item.time}</div>
                      </Meta>
                    </MetaContainer>
                    <Description>{item.description}</Description>
                    <Link href={item.url} target="_blank">Read Post</Link>
                  </Details>
                </Card>
              </Column>
            ))}
          </ThreeColumn>
        </Content>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </Container>
      <ContentCopy>
        <Footer />
      </ContentCopy>
    </AnimationRevealPage>
  );
};
