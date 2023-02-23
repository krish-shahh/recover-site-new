import Header from "../components/headers/light.js";
import Footer from "../components/footers/SimpleFiveColumn.js";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import tw from "twin.macro";
const Content = tw.div`max-w-screen-xl mx-auto`;


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