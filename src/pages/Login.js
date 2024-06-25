import React from "react";
import Template from "../components/Template";
import LogoImg from "../assests/logo2.png";
const Login = ({ setIsLoggedIn }) => {
    return (
        <Template
            title="Welcome Back"
            desc1="Best place for your car"
            desc2="Look into what's best for you and your car"
            image={LogoImg}
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}
        ></Template>
    );
};
export default Login;
