import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Main = () => {

    useEffect(() => {
        AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,

            offset: 120,
            delay: 0,
            duration: 1000,
            easing: 'ease',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom',

        });
    }, [])

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;