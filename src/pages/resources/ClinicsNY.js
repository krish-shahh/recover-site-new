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

export default ({
  headingText2 = "New York City Clinics and Rehab Centers",
}) => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingLg>
          <HeadingRow>
            <Heading>{headingText2}</Heading>
          </HeadingRow>
          <Posts>
            <PostContainer featured={true}>
              <Post className="group" as="a" href="https://oasas.ny.gov/location/south-beach-addiction-treatment-center" target="_blank">
                <Image2 imageSrc={"https://oasas.ny.gov/sites/g/files/oee1061/files/styles/results/public/media/2022/08/south-beach-addiction-treatment-center1.jpg?h=c91c126d&itok=XuGcCdl3"} />
                <Info>
                  <Category></Category>
                  <CreationDate></CreationDate>
                  <Title>{"South Beach Addiction Treatment Center"}</Title>
                  <Description>{"South Beach Addiction Treatment Center is a 30-bed facility which provides short-term rehabilitation to adult men and women suffering with addiction. All treatment plans are catered to the individual strengths, needs, and issues of the person in treatment."}</Description>
                </Info>
              </Post>
            </PostContainer>
            <PostContainer featured={true}>
              <Post className="group" as="a" href="https://oasas.ny.gov/location/kingsboro-addiction-treatment-center" target="_blank">
                <Image2 imageSrc={"https://oasas.ny.gov/sites/g/files/oee1061/files/styles/results/public/media/2022/08/kingsboro-4.jpg?h=e6109acc&itok=B0MUSaf2"} />
                <Info>
                  <Category></Category>
                  <CreationDate></CreationDate>
                  <Title>{"Kingsboro Addiction Treatment Center"}</Title>
                  <Description>{"Kingsboro is a 70-bed inpatient addiction treatment facility serving adult males and females. Cheerfully decorated patient rooms, recreation areas/outdoor patio, and shared dining room, all play a key role in establishing a positive environment for the recovery process to begin."}</Description>
                </Info>
              </Post>
            </PostContainer>
            <PostContainer featured={true}>
              <Post className="group" as="a" href="https://oasas.ny.gov/location/bronx-addiction-treatment-center" target="_blank">
                <Image2 imageSrc={"https://www.detoxrehabs.net/wp-content/uploads/2023/02/Bronx-Addiction-Treatment-Center-Bronx-New-York.jpg"} />
                <Info>
                  <Category></Category>
                  <CreationDate></CreationDate>
                  <Title>{"Bronx Addiction Treatment Center"}</Title>
                  <Description>{"The Bronx Addiction Treatment Center is a 38-bed facility for adult men, women, LGBT, and Spanish monolingual persons. The services provided are designed to address the basic health care needs of each patient while addressing specific physical, psychological and social symptoms associated with psychoactive substance abuse."}</Description>
                </Info>
              </Post>
            </PostContainer>
            <PostContainer featured={true}>
              <Post className="group" as="a" href="https://anchorhouseinc.com/" target="_blank">
                <Image2 imageSrc={"https://norix.com/wp-content/uploads/2020/12/anchor_house1.jpg"} />
                <Info>
                  <Category></Category>
                  <CreationDate></CreationDate>
                  <Title>{"Anchor House - Brooklyn"}</Title>
                  <Description>{"Anchor House is a Faith-based Intensive Residential Treatment program Licensed by OASAS (Office of Alcohol and Substance Abuse Services)."}</Description>
                </Info>
              </Post>
            </PostContainer>

          </Posts>
        </ContentWithPaddingLg>
      </Container>
      <Content>
        <Footer />
      </Content>
    </AnimationRevealPage>
  );
};
