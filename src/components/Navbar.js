import React from "react";
import logo2 from "../assests/logo2.png";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setisLoggedIn = props.setisLoggedIn;
    return (
        <div className="flex justify-evenly">
            <Link to="/">
                <img src={logo2} width={160} height={32} loading="lazy"></img>
            </Link>
            <nav>
                <ul className="flex gap-3">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="login">About</Link>
                    </li>
                    <li>
                        <Link to="signup">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex ml-5 mr-3 gap-3">
                {!isLoggedIn && (
                    <Link to="/login">
                        <button>LogIn</button>
                    </Link>
                )}
                {!isLoggedIn && (
                    <Link to="/signup">
                        <button>SignUp</button>
                    </Link>
                )}
                {isLoggedIn && (
                    <Link to="/home">
                        <button
                            onClick={() => {
                                setisLoggedIn(false);
                                toast.success("Logged Out!");
                            }}
                        >
                            LogOut
                        </button>
                    </Link>
                )}
                {isLoggedIn && (
                    <Link to="/dashboard">
                        <button>Dashboard</button>
                    </Link>
                )}
            </div>
        </div>
    );
};
export default Navbar;
