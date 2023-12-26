import mezbah from "../../../assets/images/mezbah.jpg"
import linkedin from "../../../assets/about/linkedin.png"
import twitter from "../../../assets/about/twitter.png"
import instagram from "../../../assets/about/instagram.png"


const About = () => {

    return (
        <div id="about" className="p-5 md:p-12 lg:p-24 mt-10 lg:mt-0">
            <h1 className="text-4xl text-center font-bold text-orange-500 "> About Me </h1>
            <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                    <img className="h-auto" src={mezbah} alt="" />
                </div>
                <div className="flex-1">
                    <h1 className="text-2xl font-bold text-orange-500 mb-5 text-center lg:text-left"> Discover My Story What I Know </h1>
                    <p className="text-gray-500 lg:text-left text-justify px-3 lg:px-0">
                        Hello, My name is MUzbah uddin Rimon. I’m a dedicated professional Web Developer. I'm working as a HTML, CSS, tailwindCss, JavaScript, React.Js, Node, Express, Mongodb, Firebase and WordPress Developer. My job is to build your website so that it is functional and user-friendly but at the same time attractive. I create top-quality, user-friendly professional and modern website design responsive pages.  My goal is to provide my customers exactly what they want and guide them throughout the process. Let's get in touch and start working on your dream website!
                    </p>
                    <div className="flex items-center justify-center lg:justify-start gap-5 mt-8">
                        <a href="https://www.linkedin.com/in/mezbah-uddin-a5a368267/" target="_blank" rel="noreferrer">
                            <img className="w-[50px]" src={linkedin} alt="" />
                        </a>
                        <a href="https://twitter.com/Mezbah_uddin_88" target="_blank" rel="noreferrer">
                            <img className="w-[50px]" src={twitter} alt="" />
                        </a>
                        <a href="https://www.instagram.com/mesbah_375/" target="_blank" rel="noreferrer">
                            <img className="w-[50px]" src={instagram} alt="" />
                        </a>
                        <a href="https://github.com/Mezbah-u-Rimon" target="_blank" rel="noreferrer">
                            <img className="w-[50px]" src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png" alt="" />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;