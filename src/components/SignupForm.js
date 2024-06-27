import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
export const SignupForm = ({ setIsLoggedIn }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [accountType, setAccountType] = useState("customer");
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
    });
    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }
    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmpassword) {
            toast.error("Password do not match");
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");
    }

    return (
        <div>
            <div className="flex bg-slate-800 p-1 my-6 gap-x-1 rounded-full max-w-max">
                <button
                    className={`${
                        accountType === "customer"
                            ? "bg-slate-500 text-white"
                            : " bg-transparent text-offwhite "
                    } py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("customer")}
                >
                    Customer
                </button>
                <button
                    className={`${
                        accountType === "admin"
                            ? "bg-slate-500 text-white"
                            : " bg-transparent text- "
                    } py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("admin")}
                >
                    Admin
                </button>
            </div>
            <form
                onSubmit={submitHandler}
                className="flex flex-col w-full gap-y-4 mt-6"
            >
                <div>
                    <div className="flex justify-between gap-x-2">
                        <label className="w-full">
                            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                                First Name<sup className="text-pink-200">*</sup>
                            </p>
                            <input
                                required
                                name="firstname"
                                onChange={changeHandler}
                                type="text"
                                placeholder="Enter First Name"
                                value={formData.firstname}
                                className="bg-slate-500 rounded-[0.5rem] text-white w-full p-[12px]"
                            ></input>
                        </label>
                        <label className="w-full">
                            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                                Last Name<sup className="text-pink-200">*</sup>
                            </p>
                            <input
                                required
                                name="lastname"
                                onChange={changeHandler}
                                type="text"
                                value={formData.lastname}
                                placeholder="Enter Last Name"
                                className="bg-slate-500 rounded-[0.5rem] text-white w-full p-[12px]"
                            ></input>
                        </label>
                    </div>
                    <label>
                        <p className=" text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                            Email Address<sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            name="email"
                            onChange={changeHandler}
                            type="text"
                            value={formData.email}
                            placeholder="Enter email address"
                            className="bg-slate-500 rounded-[0.5rem] text-white w-full p-[12px]"
                        ></input>
                    </label>
                    <div className="flex justify-between gap-x-2">
                        <label className="w-full relative">
                            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                                Create Password
                                <sup className="text-pink-200">*</sup>
                            </p>
                            <input
                                required
                                name="password"
                                value={formData.password}
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
                                onChange={changeHandler}
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
                        </label>
                        <label className="w-full relative">
                            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                                Confirm Password
                                <sup className="text-pink-200">*</sup>
                            </p>
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                name="confirmpassword"
                                value={formData.confirmpassword}
                                placeholder="Confirm Password"
                                onChange={changeHandler}
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
                        </label>
                    </div>
                    <button className="w-full bg-yellow-500 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6">
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
