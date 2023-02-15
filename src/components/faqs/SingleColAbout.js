import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl, ContentWithPaddingLg } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;

const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;



export default ({
  subheading = "FAQS",
  heading = "Frequently Asked Questions",
  faqs = [
    {
      question: "What is ReCover?",
      answer:
        "ReCover is dedicated to helping addicts find the resources needed to help them live in recovery. It connects people struggling with addiction to people who are willing to help support them. Our main goal is to make Sponsors easily available, provide resources needed to assist people with addiction, and promote sober events in our communities. This website is a public bulletin. We encourage everyone to share their journey and help evolve the platform into a service that helps all."
    },
    {
      question: "Why was this website made?",
      answer:
        "ReCover was made to empower individuals struggling with addiction by connecting them with dedicated sponsors, providing access to essential resources, and fostering a community of support through promoting sober events. It was created with the belief that access to support and resources for addiction recovery should be available to all, regardless of financial means, and that the power of community and the strength of human connection can bring about lasting change. The website is user-oriented and it aims to create a platform that is accessible, personalized, and responsive to the unique needs and challenges of each individual in recovery."
    },
    {
      question: "What information do we need to provide?",
      answer:
        "For addicts, ReCover asks for your addiction to display only the sponsors that are relevant to you. Sponsors are only required to provide minimal information: name, state, picture, addiction history, years clean, email, and small personal biography."
    },
    {
      question: "How does ReCover connect me to a sponsor?",
      answer:
        "When you sign up for ReCover, you will be prompted to fill out a profile with information about your specific needs and preferences. Our search feature will then match you with potential sponsors who best align with your profile. You can then contact and connect with these sponsors directly through our platform."
    },
    {
      question: "Are the resources on ReCover only for people struggling with alcohol addiction?",
      answer:
        "No, our resources are designed to support individuals struggling with any type of addiction, including but not limited to alcohol, drugs, gambling, and more."
    },
    {
      question: "Are the events listed on ReCover only for people in recovery?",
      answer:
        "The events listed on ReCover are primarily sober events, which means they do not involve the use of drugs or alcohol. They are open to people in recovery, as well as anyone who is interested in a substance-free lifestyle."
    },
    {
      question: "Is ReCover a substitute for professional help?",
      answer:
        "While ReCover can provide helpful resources, connections, and support, it is not a substitute for professional help. We strongly encourage anyone struggling with addiction to seek professional treatment and support."
    },
    {
      question: "Is ReCover a free service?",
      answer:
        "Yes, ReCover is completely free of charge."
    },
    {
      question: "Is addiction really a huge issue in the United States?",
      answer:
        "Yes, According to a January 4, 2023 press release by Substance Abuse and Mental Health Services Administration, 46.3 million people aged 12 or older (or 16.5 percent of the population) met the applicable DSM-5 criteria for having a substance use disorder in the past year. In 2021, 94% of people aged 12 or older with a substance use disorder did not receive any treatment."
    }
  ]
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <Column>
        <HeaderContent>
          {/* {subheading && <Subheading>{subheading}</Subheading>} */}
          <Heading>{heading}</Heading>
          {/* {description && <Description>{description}</Description>} */}
        </HeaderContent>
        <FAQSContainer>
          {faqs.map((faq, index) => (
            <FAQ
              key={index}
              onClick={() => {
                toggleQuestion(index);
              }}
              className="group"
            >
              <Question>
                <QuestionText>{faq.question}</QuestionText>
                <QuestionToggleIcon
                  variants={{
                    collapsed: { rotate: 0 },
                    open: { rotate: -180 }
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <ChevronDownIcon />
                </QuestionToggleIcon>
              </Question>
              <Answer
                variants={{
                  open: { opacity: 1, height: "auto", marginTop: "16px" },
                  collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                }}
                initial="collapsed"
                animate={activeQuestionIndex === index ? "open" : "collapsed"}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                {faq.answer}
              </Answer>
            </FAQ>
          ))}
        </FAQSContainer>
      </Column>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
