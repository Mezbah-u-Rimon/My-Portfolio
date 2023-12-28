import logo from "../../assets/images/logo1.png"
import linkedin from "../../assets/about/linkedin.png"
import twitter from "../../assets/about/twitter.png"
import instagram from "../../assets/about/instagram.png"


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div style={{ backgroundImage: `url(https://i.ibb.co/HpmkfSt/abstract.jpg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className="w-full">
            <div className="w-full h-full bg-[#cdcdcd80]  px-5 ">
                <footer className="footer p-10">
                    <div className="flex flex-col gap-5 items-center">
                        <img className="w-[200px]" src={logo} alt="" />
                        <p className="w-[300px] text-justify text-black">
                            Web Development is my passion. I enjoy it a lot.My mission is happening.I will be a full stack web developer and Senior Web Developer within the next 2 years.
                        </p>
                    </div>
                    <nav>
                        <header className="text-2xl font-bold text-orange-500 border-l-4 rounded-full border-orange-400 p-2 mb-3">Company</header>
                        <a className="link link-hover pl-4">Home </a>
                        <a className="link link-hover pl-4">About Me</a>
                        <a className="link link-hover pl-4">My Expertise </a>
                        <a className="link link-hover pl-4">Portfolio</a>
                        <a className="link link-hover pl-4"> Contact </a>
                    </nav>
                    <nav>
                        <header className="text-2xl font-bold text-orange-500 border-l-4 rounded-full border-orange-400 p-2 ">Social</header>
                        <div className="flex items-center gap-5 mt-8">
                            <a href="https://www.linkedin.com/in/muzbah-uddin/" target="_blank" rel="noreferrer">
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
                    </nav>
                </footer>
                <footer className="footer footer-center p-4">
                    <aside>
                        <p>© {currentYear} Created & Developed by <span className="text-orange-600">
                            Muzbah Uddin Rimon
                        </span> </p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Footer;