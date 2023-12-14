import image from "../../../assets/logoIcon.gif"
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <img src={image} alt="" />
        </div>
    );
};

export default Home;