import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings.js";
const Content = tw.div`max-w-screen-xl mx-auto`;
const Heading = tw(SectionHeading)`w-full items-center text-center`;

export default () => {
    return (
    <>
        <AnimationRevealPage>
            <Header />
            <Content>
                <Heading>Currently in Development</Heading>
                <Footer />
            </Content>
        </AnimationRevealPage>
        </>
    );
}