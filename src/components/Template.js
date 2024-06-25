import React from "react";
import wallImg from "../assests/wall.jpg";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
export const Template = ({
    title,
    desc1,
    desc2,
    image,
    formtype,
    setIsLoggedIn,
}) => {
    return (
        <div>
            <div>
                <div>
                    <h1>{title}</h1>
                    <p>
                        <span>{desc1}</span>
                        <span>{desc2}</span>
                    </p>
                    {formtype === "signup" ? (
                        <SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>
                    ) : (
                        <LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>
                    )}
                </div>
                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                <button>
                    <p>Sign Up with Google</p>
                </button>
            </div>
            <div>
                <img
                    src={wallImg}
                    width={558}
                    height={504}
                    loading="lazy"
                ></img>
            </div>
        </div>
    );
};
export default Template;
