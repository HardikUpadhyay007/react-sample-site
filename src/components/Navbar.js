import React from "react";
import logo2 from "../assests/logo2.png";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    return (
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            <Link to="/">
                <img src={logo2} width={70} height={32} loading="lazy"></img>
            </Link>
            <nav>
                <ul className="flex gap-x-6 text-white">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link>About</Link>
                    </li>
                    <li>
                        <Link>Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center gap-x-4 ">
                {!isLoggedIn && (
                    <Link to="/login">
                        <button className="bg-richblack-800 text-white py-3 px-4 rounded-[8px] border-2 border-gray-400 text-md ">
                            LogIn
                        </button>
                    </Link>
                )}
                {!isLoggedIn && (
                    <Link to="/signup">
                        <button className="bg-richblack-800 text-white py-3 px-4 rounded-[8px] border-2 border-gray-400 text-md ">
                            SignUp
                        </button>
                    </Link>
                )}
                {isLoggedIn && (
                    <Link to="/home">
                        <button
                            onClick={() => {
                                setIsLoggedIn(false);
                                toast.success("Logged Out!");
                            }}
                            className="bg-richblack-800 text-white py-3 px-4 rounded-[8px] border-2 border-gray-400 text-md "
                        >
                            LogOut
                        </button>
                    </Link>
                )}
                {isLoggedIn && (
                    <Link to="/dashboard">
                        <button className="bg-richblack-800 text-white py-3 px-4 rounded-[8px] border-2 border-gray-400 text-md ">
                            Dashboard
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};
export default Navbar;
