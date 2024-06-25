import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
export const LoginForm = () => {
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
    return (
        <form>
            <label>
                <p>
                    Email Address<sup>*</sup>
                </p>
                <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={changeHandler}
                    name="email"
                    placeholder="Enter your Email"
                ></input>
            </label>
            <label>
                <p>
                    Password<sup>*</sup>
                </p>
                <input
                    required
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={changeHandler}
                    name="password"
                    placeholder="Enter Password"
                ></input>
                <span onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (
                        <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                    ) : (
                        <AiOutlineEye></AiOutlineEye>
                    )}
                </span>
                <Link to="#">
                    <p>Forgot Password?</p>
                </Link>
            </label>
            <button>Sign In</button>
        </form>
    );
};

export default LoginForm;
