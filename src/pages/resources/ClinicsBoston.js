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
  headingText2 = "Boston Clinics and Rehab Centers",
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
              <Post className="group" as="a" href="https://recoverycentersofamerica.com/locations/danvers/" target="_blank">
                <Image2 imageSrc={"https://recoverycentersofamerica.com/wp-content/uploads/2022/01/danvers-B-1-768x480.jpg.webp"} />
                <Info>
                  <Category></Category>
                  <CreationDate></CreationDate>
                  <Title>{"Recovery Centers of America at Danvers"}</Title>
                  <Description>{"Less than 20 miles outside of Boston, in Danvers, Massachusetts, Recovery Centers of America at Danvers is ranked by Newsweek as the second top addiction treatment program in Massachusetts."}</Description>
                </Info>
              </Post>
            </PostContainer>
            <PostContainer featured={true}>
              <Post className="group" as="a" href="https://dimock.org/" target="_blank">
                <Image2 imageSrc={"https://www.timberlineconstruction.com/wp-content/uploads/construction_management_mass_healthcare_DimockATC1-1280x853.jpg"} />
                <Info>
                  <Category></Category>
                  <CreationDate></CreationDate>
                  <Title>{"The Dimock Center"}</Title>
                  <Description>{"Dimock provides outpatient services for adults recovering from substance use disorders. Masters Level Clinicians, Licensed Social Workers, and Psychiatrists from the programs’ clinical team which helps clients fully regain their lives and their well-being."}</Description>
                </Info>
              </Post>
            </PostContainer>
            <PostContainer featured={true}>
              <Post className="group" as="a" href="https://www.greaterbostonaddictioncenters.com/" target="_blank">
                <Image2 imageSrc={"https://chambermaster.blob.core.windows.net/images/customers/2080/members/255412/photos/GALLERY_MAIN/GBAC_Move_Forward_logo.jpg"} />
                <Info>
                  <Category></Category>
                  <CreationDate></CreationDate>
                  <Title>{"Greater Boston Addiction Center"}</Title>
                  <Description>{"Greater Boston Addiction Centers is a progressive new drug rehab program located in Needham, MA. About 30 minutes west of downtown Boston, its drug treatment programs offer hope, resources, and mental health counseling to people who are struggling with addiction."}</Description>
                </Info>
              </Post>
            </PostContainer>
            <PostContainer featured={true}>
              <Post className="group" as="a" href="https://www.newenglandrecoverycenter.org/" target="_blank">
                <Image2 imageSrc={"https://www.newenglandrecoverycenter.org/blog/day-life-new-england-recovery-center/giblinhouse-396-2/"} />
                <Info>
                  <Category></Category>
                  <CreationDate></CreationDate>
                  <Title>{"New England Recovery Center"}</Title>
                  <Description>{"NERC / Spectrum has grown to offer the largest and most comprehensive continuum of care in the region including inpatient detoxification, residential treatment, an array of outpatient services, medication-assisted treatment and peer recovery support. Today, Spectrum serves more than 5,000 individuals across the state each day."}</Description>
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
