import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"
import { States } from "../features/states.js"

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea,select {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-red-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const Select = tw.select``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;
const ContentCopy = tw.div`max-w-screen-xl mx-auto`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

export default () => {

  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Become a Sponsor</h2>
            <form id="sponsorForm">
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Your Name</Label>
                    <Input id="name" type="text" name="name" placeholder="John Doe" required/>
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Your Email Address</Label>
                    <Input id="email" type="email" name="email" placeholder="john@mail.com" required/>
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="history-input">Addiction History</Label>
                    <Input id="history" type="text" name="history" placeholder="Alcohol" required/>
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer>
                    <Label htmlFor="location-input">Location</Label>
                    <Select id="location" type="text" name="location" required>
                      <option value="" disabled selected>Select your State</option>
                      {States.map((element) => (
                        <option value={element.abbreviation}>{element.name}</option>
                    ))}
                    </Select>
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="years-input">Years Sober</Label>
                    <Input id="years" type="number" name="years" placeholder="1" min="1" required/>
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="profile-input">Profile Picture</Label>
                    <Input id="profile" type="file" accept="image/*" name="profile" required/>
                  </InputContainer>
                </Column>
              </TwoColumn>
              <InputContainer tw="flex-1">
                    <Label htmlFor="message-input">Brief Biography</Label>
                    <TextArea id="message" maxLength={140} name="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." required/>
              </InputContainer>

              <SubmitButton type="submit">Submit</SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};