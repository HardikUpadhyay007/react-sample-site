import React from "react";
import WallImg from "../assests/wall.jpg";
import Template from "../components/Template";
const Signup = ({ setisLoggedIn }) => {
    return (
        <Template
            title="Welcome Back"
            desc1="Best place for your car"
            desc2="Look into what's best for you and your car"
            image={WallImg}
            formtype="signup"
            setisLoggedIn={setisLoggedIn}
        ></Template>
    );
};
export default Signup;
