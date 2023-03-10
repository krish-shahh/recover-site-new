import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";

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
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose `;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
// const Title = tw.div`mt-1 font-black text-4xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Title = tw.div`mt-1 font-black text-4xl text-gray-900 group-hover:text-red-700 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({
    headingText = "Resources",
    posts = [
        {
            imageSrc:
                "https://www.arkbh.com/wp-content/uploads/2021/08/aaaaa_logo-1024x575.jpg",
            // category: "Travel Tips",
            // date: "April 21, 2020",
            title: "Alcoholics Anonymous",
            description:
                "Alcoholics Anonymous is an international fellowship of men and women who have had a drinking problem. It is nonprofessional, self-supporting, multiracial, apolitical, and available almost everywhere. There are no age or education requirements. Membership is open to anyone who wants to do something about his or her drinking problem.",
            url: "https://www.aa.org/",
            featured: true
        },
        {
            imageSrc:
                "https://studentlife.tamu.edu/wp-content/uploads/2022/08/SMART-Recovery-Vertical-Logo.png",
            // category: "Travel Tips",
            // date: "April 21, 2020",
            title: "SMART Recovery",
            description:
                "SMART Recovery aims to support individuals who have chosen to abstain, or are considering abstinence from any type of addictive behaviors (substances or activities), by teaching how to change self-defeating thinking, emotions, and actions; and to work towards long-term satisfactions and quality of life.",
            url: "https://www.smartrecovery.org/",
            featured: true
        },
        {
            imageSrc:
                "https://bearchurch.org/wp-content/uploads/2019/12/celebraterecovery_960x540.jpg",
            // category: "Travel Tips",
            // date: "April 21, 2020",
            title: "Celebrate Recovery",
            description:
                "Celebrate Recovery is a Christ-centered, 12 step recovery program for anyone struggling with hurt, pain or addiction of any kind. Celebrate Recovery is a safe place to find community and freedom from the issues that are controlling our life.",
            url: "https://www.celebraterecovery.com/",
            featured: true
        },
        {
            imageSrc:
                "https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/6uigqinhlp68hvthhs0e472kah.jpg",
            // category: "Travel Tips",
            // date: "April 21, 2020",
            title: "Al‑Anon",
            description:
                "Al‑Anon is a mutual support program for people whose lives have been affected by someone else’s drinking. By sharing common experiences and applying the Al-Anon principles, families and friends of alcoholics can bring positive changes to their individual situations, whether or not the alcoholic admits the existence of a drinking problem or seeks help.",
            url: "https://al-anon.org/",
            featured: true
        },
        {
            imageSrc:
                "https://lifering.org/wp-content/uploads/2022/04/LifeRing-Dubloon.jpg",
            // category: "Travel Tips",
            // date: "April 21, 2020",
            title: "LifeRing Secular Recovery",
            description:
                "LifeRing Secular Recovery is an abstinence-based, worldwide network of individuals seeking to live in recovery from addiction to alcohol or to other non-medically indicated drugs. In LifeRing, we offer each other peer-to-peer support in ways that encourage personal growth and continued learning through personal empowerment.",
            url: "https://lifering.org/",
            featured: true
        },
        {
            imageSrc:
                "https://www.hipaajournal.com/wp-content/uploads/2022/11/hhs-samhsa.jpg",
            // category: "Travel Tips",
            // date: "April 21, 2020",
            title: "SAMHSA’s National Helpline",
            description:
                "SAMHSA’s National Helpline, 1-800-662-HELP (4357), (also known as the Treatment Referral Routing Service) or TTY: 1-800-487-4889 is a confidential, free, 24-hour-a-day, 365-day-a-year, information service, in English and Spanish, for individuals and family members facing mental and/or substance use disorders. This service provides referrals to local treatment facilities, support groups, and community-based organizations.",
            url: "https://www.samhsa.gov/find-help/national-helpline",
            featured: true
        },
    ]
}) => {
    const [visible, setVisible] = useState(7);
    const onLoadMoreClick = () => {
        setVisible(v => v + 6);
    };
    return (
        <AnimationRevealPage>
            <Header />
            <Container>
                <ContentWithPaddingXl>
                    <HeadingRow>
                        <Heading>{headingText}</Heading>
                    </HeadingRow>
                    <Posts>
                        <PostContainer featured={true}>
                            <Post className="group" as="a" href="/resourceshome">
                                <Image imageSrc={"https://www.logodesignlove.com/wp-content/uploads/2011/10/red-cross-logo.jpg"} />
                                <Info>
                                    <Category></Category>
                                    <CreationDate></CreationDate>
                                    <Title>{"ReCover's List of Trusted Rehab Centers"}</Title>
                                    <Description>{"Click here for a list of trusted clinics and rehab centers filtered by location. You can browse through a comprehensive list of reputable rehab centers near you."}</Description>
                                </Info>
                            </Post>
                        </PostContainer>
                        {posts.slice(0, visible).map((post, index) => (
                            <PostContainer key={index} featured={post.featured}>
                                <Post className="group" as="a" href={post.url} target="_blank">
                                    <Image imageSrc={post.imageSrc} />
                                    <Info>
                                        <Category>{post.category}</Category>
                                        <CreationDate>{post.date}</CreationDate>
                                        <Title>{post.title}</Title>
                                        {post.featured && post.description && <Description>{post.description}</Description>}
                                    </Info>
                                </Post>
                            </PostContainer>
                        ))}
                    </Posts>
                    {visible < posts.length && (
                        <ButtonContainer>
                            <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
                        </ButtonContainer>
                    )}
                </ContentWithPaddingXl>
            </Container>
            <Content>
                <Footer />
            </Content>
        </AnimationRevealPage>
    );
};
