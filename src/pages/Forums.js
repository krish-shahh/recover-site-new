import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

export default () => {
    return (
    <>
        <AnimationRevealPage>
            <Header />
            <Footer />
        </AnimationRevealPage>
        </>
    );
}