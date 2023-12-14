import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;