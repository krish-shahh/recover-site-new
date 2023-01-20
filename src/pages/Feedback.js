import Header from "../components/headers/light.js";
import Footer from "../components/footers/SimpleFiveColumn.js";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import tw from "twin.macro";
const Content = tw.div`max-w-screen-xl mx-auto`;


export default () => {
    return (
        <AnimationRevealPage>
            <Header />
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdNWTewYYpmcWolRMOqXumtXlqQdQHVa4Lknv9mXmuXvGwmkA/viewform?embedded=true" width="100%" height="1617" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            <Content>
                <Footer />
            </Content>
        </AnimationRevealPage>
    );

};