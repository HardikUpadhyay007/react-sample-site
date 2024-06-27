import React from "react";
import wallImg from "../assests/wall.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
export const Template = ({
    title,
    desc1,
    desc2,
    image,
    formtype,
    setIsLoggedIn,
}) => {
    return (
        <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
            <div className="w-11/12 max-w-[450px]">
                <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">
                    {title}
                </h1>
                <p className="text-[1.125rem] leading[1.625rem] mt-4">
                    <span className="text-white">{desc1}</span>
                    <br></br>
                    <span className="text-blue-100 italic">{desc2}</span>
                </p>
                {formtype === "signup" ? (
                    <SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>
                ) : (
                    <LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>
                )}
                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="w-full h-[1px] bg-slate-400"></div>
                    <p className="text-slate-500 font-medium leading[1.375rem]">
                        OR
                    </p>
                    <div className="w-full h-[1px] bg-slate-400"></div>
                </div>
                <button
                    className="w-full flex justify-center items-center rounded-[8px] font-medium
                text-white border border-slate-500 px-[12px] py-[8px] gap-x-2 mt-6"
                >
                    <FcGoogle></FcGoogle>
                    <p>Sign Up with Google</p>
                </button>
            </div>
            <div className="w-11/12 max-w-[450px]">
                <img
                    className=" -top-4 right-4"
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
