import banner from "../../../assets/images/BG-IMG-1.gif"
import { TypeAnimation } from 'react-type-animation';
import cv from "../../../../public/Muzbah Uddin.pdf"
import rimon from "../../../assets/images/rimon-2.png"


const Banner = () => {

    return (
        <div id="home" style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className="w-full lg:h-screen">
            <div className="w-full h-full  bg-[#c9ffed52] pt-24  flex justify-center items-center flex-col lg:flex-row px-5 md:px-24 gap-5">

                <div className="flex-1">
                    <h5 className="text-xl font-bold text-orange-400"> Hello I'm Muzbah Uddin </h5>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'I am a Junior Web Developer',
                            1500, // wait 1s before replacing "Mice" with "Hamsters"
                            'I am a Front-End Developer',
                            1500,
                            'I am a MERN Stack Developer',
                            1500,

                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2.5em', display: 'inline-block', fontWeight: 'bold' }}
                        repeat={Infinity}
                    />
                    <h6 className="font-bold mt-5">Creative and Modern Website Developer </h6>
                    <p className="text-gray-500">
                        I'm creative Front-End Developer based in MERN Stack, and I'm very passionate and dedicated to my work
                    </p>
                    <button className="btn bg-white rounded-full font-bold text-black mt-5  hover:bg-[#c9ffed8a] shadow-orange-300 shadow-lg border-2 border-orange-200"> <a href={cv} download="Muzbah Uddin Resume.pdf">DOWNLOAD MY CV </a></button>
                </div>

                <div className="flex-1" data-aos="fade-left">
                    <img className="rounded-full bg-[#c9ffed52] shadow-lg shadow-orange-300 border border-orange-200" src={rimon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;