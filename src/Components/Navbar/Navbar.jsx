import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navbar = <>

        <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-l-4 border-red-600 px-5 py-2 rounded-full mx-3 text-lg font-medium text-red-600" : " bg-white px-5 py-2 text-lg font-medium"}> Home
        </NavLink>

        <NavLink to="/about" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-l-4 border-red-600 px-5 py-2 rounded-full mx-3 text-lg font-medium text-red-600" : " bg-white px-5 py-2 text-lg font-medium"}> About
        </NavLink>
    </>


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navbar}
                        </ul>
                    </div>
                    <h1 style={{ fontFamily: "'Pattaya', sans-serif", }} className="btn btn-ghost text-xl "> MUZBAH </h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;