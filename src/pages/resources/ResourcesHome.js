import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl, ContentWithPaddingLg } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import SearchForm from "../../components/features/DashedBorderSixFeatures";
import { clinic_data } from "./clinic_data.js"

const HeadingRow = tw.div`flex`;
const Content = tw.div`max-w-screen-xl mx-auto`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-1/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Image2} {
        ${tw`sm:h-64 sm:min-h-full sm:w-1/2 lg:w-1/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-lg mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Image2 = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose `;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
// const Title = tw.div`mt-1 font-black text-4xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Title = tw.div`mt-1 font-black text-4xl text-gray-900 group-hover:text-red-700 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;
const Input = tw.input`p-4 w-full text-xl items-center text-center border-2 border-red-700 rounded-md font-black`;


export default ({
  headingText = "Web Resources",
  headingText2 = "Lists of Centers/Clinics By Location",
}) => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };
  const [contacts, setContacts] = useState(clinic_data);
  const [search, setSearch] = useState('');
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingLg>
          <HeadingRow>
            <Heading>
              {headingText2}
              <Input
                type={"text"}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search by City or State'
              />
            </Heading>
          </HeadingRow>
          {clinic_data.filter((item) => {
            return search.toLowerCase() === ''
              ? item
              : item.city.toLowerCase().includes(search.toLowerCase());
          })
            .map((item, index) => (
              <Posts>
                <PostContainer featured={true} key={index}>
                  <Post className="group" as="a" href={item.href}>
                    <Image2 imageSrc={item.image} />
                    <Info>
                      <Category></Category>
                      <CreationDate></CreationDate>
                      <Title>{item.city}</Title>
                      <Description>{item.description}</Description>
                    </Info>
                  </Post>
                </PostContainer>
              </Posts>
            ))}
        </ContentWithPaddingLg>
      </Container>
      <Content>
        <Footer />
      </Content>
    </AnimationRevealPage>
  );
};
