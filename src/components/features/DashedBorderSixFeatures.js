import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { mock_data } from "./mock_data.js"

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as PillIcon } from "images/pill.svg";
import { ReactComponent as RadioIcon } from "feather-icons/dist/icons/radio.svg";


const Input = tw.input`w-full items-center text-center border-2 border-primary-500 rounded-full`;
const Container = tw.div`relative`;

const ColumnNotice = tw.div`flex-1`;

const UpdateNotice = tw(ColumnNotice)`w-full flex-auto mb-4 sm:mb-8 rounded px-4 py-3 sm:px-5 sm:py-4 bg-orange-100 text-orange-800 flex items-center sm:items-start md:items-center justify-center lg:justify-start border border-orange-200 text-xs sm:text-sm text-center sm:text-left md:leading-none`;
const UpdateNoticeIcon = tw(RadioIcon)`w-0 sm:w-5 sm:mr-3`;


const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full items-center text-center`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardCompany = tw.div`text-primary-500 font-bold text-lg`;
const CardType = tw.div`font-semibold text-sm text-gray-600`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;

export default () => {
  const [contacts, setContacts] = useState(mock_data);
  const [search, setSearch] = useState('');
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Ads Management",
      description: "We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou. We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou."
    },
    { imageSrc: SupportIconImage, title: "Video Marketing" },
    { imageSrc: CustomizeIconImage, title: "Customer Relation" },
    { imageSrc: ReliableIconImage, title: "Product Outreach" },
    { imageSrc: FastIconImage, title: "PR Campaign" },
    { imageSrc: SimpleIconImage, title: "Product Expansion" },
    { imageSrc: SimpleIconImage, title: "Product Expansion" },
    { imageSrc: SimpleIconImage, title: "Product Expansion" },
    { imageSrc: SimpleIconImage, title: "Product Expansion" }
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <UpdateNotice>
          <UpdateNoticeIcon />
            Disclaimer: The data and information displayed on this website are for demonstration purposes only and are not intended to represent real-world data or information. 
        </UpdateNotice>
        <Heading>
            <Input 
                type={"text"}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search by State'
            />
        </Heading>
        {mock_data.filter((item) => {
                    return search.toLowerCase() === ''
                    ? item
                    : item.location.toLowerCase().includes(search.toLowerCase());
                })
                .map((item, index) => (
          <Column key={index}>
            <Card>
              <span className="imageContainer">
                <img src={item.profile} alt={item.name} />
              </span>
              <span className="textContainer">
              <CardHeader>
                  <CardCompany>{item.name}</CardCompany>
                  <CardType>{item.location}</CardType>
              </CardHeader>
              <CardMeta>
                <CardMetaFeature>
                  <PillIcon /> {item.history}
                </CardMetaFeature>
              </CardMeta>
              <CardMeta>
                <CardMetaFeature>
                  <TimeIcon /> {item.years} Years Clean
                </CardMetaFeature>
              </CardMeta>
                <p className="description">
                  {item.bio}
                </p>
                <a href={`mailto:${item.email}?body=the_body_of_my_email&subject=the_subject_of_my_email`}>
                  <CardAction>
                    Contact Me
                  </CardAction>
                </a>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
