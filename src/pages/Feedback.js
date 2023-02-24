import Header from "../components/headers/light.js";
import Footer from "../components/footers/SimpleFiveColumn.js";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import tw from "twin.macro";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import styled from "styled-components";

const Content = tw.div`max-w-screen-xl mx-auto`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;


export default () => {
    return (
        <AnimationRevealPage>
            <Header />
            <div style={{ height: "800px" }}>
                <iframe
                src="https://calendly.com/recoverapp/collaboration"
                width="100%"
                height="100%"
                frameborder="0"
                >Loading...</iframe>
            </div>
            <Content>
                <Footer />
            </Content>
        </AnimationRevealPage>
    );

};