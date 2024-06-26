import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
export const LoginForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }
    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In!");
        navigate("/dashboard");
    }
    return (
        <form
            onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-4 mt-6"
        >
            <label className="w-full">
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                    Email Address<sup className="text-pink-200">*</sup>
                </p>
                <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={changeHandler}
                    name="email"
                    placeholder="Enter your Email"
                    className="bg-slate-500 rounded-[0.5rem] text-white w-full p-[12px]"
                ></input>
            </label>
            <label className="w-full relative">
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                    Password<sup className="text-pink-200">*</sup>
                </p>
                <input
                    required
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={changeHandler}
                    name="password"
                    placeholder="Enter Password"
                    className="bg-slate-500 rounded-[0.5rem] text-white w-full p-[12px]"
                ></input>
                <span
                    className="absolute right-3 top-[38px] cursor-pointer "
                    onClick={() => setShowPassword((prev) => !prev)}
                >
                    {showPassword ? (
                        <AiOutlineEyeInvisible
                            fontSize={24}
                            fill="#AFB2BF"
                        ></AiOutlineEyeInvisible>
                    ) : (
                        <AiOutlineEye
                            fontSize={24}
                            fill="#AFB2BF"
                        ></AiOutlineEye>
                    )}
                </span>
                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-auto ml-auto">
                        Forgot Password?
                    </p>
                </Link>
            </label>
            <button className="bg-yellow-500 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6">
                Sign In
            </button>
        </form>
    );
};

export default LoginForm;
