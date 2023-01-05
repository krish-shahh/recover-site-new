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

const q2answer = "ReCover was developed by Founder Krish Shah and Lead Full-Stack Developer Anish Sinha. Personal profiles are listed in the About section."

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
  description = "And we have got answers to all of them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  faqs = [
    {
      question: "What is ReCover?",
      answer:
        "ReCover is dedicated to helping addicts find the resources needed to help them live in recovery. It connects people struggling with addiction to people who are willing to help support them. Our main goal is to make Sponsors easily available, provide resources needed to assist people with addiction, and promote sober events in our communities. This website is a public bulletin. We encourage everyone to share their journey and help evolve the platform into a service that helps all."
    },
    {
      question: "Who developed this website?",
      answer:
        q2answer
    },
    {
      question: "Why did we make this website?",
      answer:
        "We made ReCover so that addicts could get in contact with potential sponsors as fast as possible."
    },
    {
      question: "What information do you need to provide?",
      answer:
        "For addicts, ReCover asks for your state to display the closest sponsor. We do not track your precise location. Sponsors are only required to provide minimal information, such as their state and contact information."
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
