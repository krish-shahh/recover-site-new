import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

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
import { States } from "./states.js";

const Input = tw.input`p-4 w-full text-xl items-center text-center border-2 border-red-700 rounded-md font-black`;
const Select = tw.select`text-center border-2 border-red-700 text-lg`;
const Container = tw.div`relative`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;

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

export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-red-500 hocus:text-red-500
`;

// const PrimaryNavLink = tw(
//   NavLink
// )`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline mt-6 md:mt-4 lg:mt-0`;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-red-700 px-6 py-3 border-none rounded hocus:bg-red-900 focus:shadow-outline mt-6 md:mt-4 lg:mt-0`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-red-700 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-red-700 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-red-700`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardCompany = tw.div`text-red-700 font-bold text-lg`;
const CardType = tw.div`font-semibold text-sm text-gray-600`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-black uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;

export default () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["history"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  const [paginate, setpaginate] = useState(6);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/krish-shahh/data_example/main/sponsors_mock_data%20(4).json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const data = Object.values(items);

  function search(items) {
    return items.filter((item) => {
      if (item.location == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  const load_more = (event) => {
    setpaginate((prevValue) => prevValue + 6);
  };

  if (error) {
    return (
      <p>
        {error.message}, if you get this error, please go to the bottom of this page and click the contact link. Fill out the error and we will fix it as soon as we can. Thank you!
      </p>
    );
  } else if (!isLoaded) {
    return <>Loading...</>;
  } else {
    return (
      <Container>
        <ThreeColumnContainer>
          <UpdateNotice>
            <UpdateNoticeIcon />
            Disclaimer: The data and information displayed on this website are for demonstration purposes only and are not intended to represent real-world data or information.
          </UpdateNotice>
          <Heading>
            <Input
              type="search"
              name="search-form"
              id="search-form"
              placeholder='Search by Addiction...'
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <Select
              onChange={(e) => {
                setFilterParam(e.target.value);
              }}
              aria-label="Filter By State"
            >
              <option value="" disabled selected>Filter by State</option>
              <option value="All">All States</option>
              {States.map((element) => (
                <option value={element.abbreviation}>{element.name}</option>
              ))}
            </Select>
          </Heading>
          {search(data).slice(0, paginate).map((item) => (
            <Column key={item.id}>
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
                  <a href={`mailto:${item.email}`}>
                    <CardAction>
                      Contact Me
                    </CardAction>
                  </a>
                </span>
              </Card>
            </Column>
          ))}
          <PrimaryButton onClick={load_more}>Load More Sponsors</PrimaryButton>
        </ThreeColumnContainer>
        <DecoratorBlob />
      </Container>
    );
  }
};
