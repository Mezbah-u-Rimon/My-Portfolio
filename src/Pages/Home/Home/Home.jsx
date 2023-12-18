import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
// import Frontend from "../Frontend/Frontend";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            {/* <Frontend></Frontend> */}
            <Portfolio></Portfolio>
            <Contact></Contact>

        </div>
    );
};

export default Home;