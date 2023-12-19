import logo from "../../assets/images/logo1.png"
import cv from "../../../public/cv.pdf"



const Navbar = () => {

    const navbar = <>
        <li>
            <a className="border-l-4 border-orange-400  rounded-full mx-3 text-black px-5 py-2 text-lg font-medium" href="#home"> Home </a>
        </li>
        <li>
            <a className="border-l-4 border-orange-400  rounded-full mx-3 text-black px-5 py-2 text-lg font-medium" href="#about"> About </a>
        </li>
        <li>
            <a className="border-l-4 border-orange-400  rounded-full mx-3 text-black px-5 py-2 text-lg font-medium" href="#skill"> Skill </a>
        </li>
        <li>
            <a className="border-l-4 border-orange-400  rounded-full mx-3 text-black px-5 py-2 text-lg font-medium" href="#portfolio"> Portfolio </a>
        </li>
        <li>
            <a className="border-l-4 border-orange-400  rounded-full mx-3 text-black px-5 py-2 text-lg font-medium" href="#contact"> Contact </a>
        </li>
    </>


    return (
        <div>
            <div className="navbar fixed max-w-screen-xl z-10 bg-opacity-30 bg-slate-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navbar}
                        </ul>
                    </div>
                    <img src={logo} alt="" className="w-28" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn bg-white rounded-full font-bold text-black shadow-lg shadow-orange-300 border-2 border-orange-200 lg:mr-5"> <a href={cv} download="cv.pdf"> MY Resume </a></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;