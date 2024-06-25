import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
export const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);

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
    return (
        <div>
            <div>
                <button>Customer</button>
                <button>Admin</button>
            </div>
            <form>
                <div>
                    <div>
                        <label>
                            <p>
                                First Name<sup>*</sup>
                            </p>
                            <input
                                required
                                name="firstname"
                                onChange={changeHandler}
                                type="text"
                                placeholder="Enter First Name"
                                value={formData.firstname}
                            ></input>
                        </label>
                        <label>
                            <p>
                                Last Name<sup>*</sup>
                            </p>
                            <input
                                required
                                name="lastname"
                                onChange={changeHandler}
                                type="text"
                                value={formData.lastname}
                                placeholder="Enter Last Name"
                            ></input>
                        </label>
                    </div>
                    <label>
                        <p>
                            Email Address<sup>*</sup>
                        </p>
                        <input
                            required
                            name="email"
                            onChange={changeHandler}
                            type="text"
                            value={formData.email}
                            placeholder="Enter email address"
                        ></input>
                    </label>
                    <div>
                        <label>
                            <p>
                                Create Password<sup>*</sup>
                            </p>
                            <input
                                required
                                name="password"
                                value={formData.password}
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
                                onChange={changeHandler}
                            ></input>
                            <span
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? (
                                    <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                                ) : (
                                    <AiOutlineEye></AiOutlineEye>
                                )}
                            </span>
                        </label>
                        <label>
                            <p>
                                Confirm Password<sup>*</sup>
                            </p>
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                name="password"
                                value={formData.confirmpassword}
                                placeholder="Confirm Password"
                                onChange={changeHandler}
                            ></input>
                            <span
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? (
                                    <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                                ) : (
                                    <AiOutlineEye></AiOutlineEye>
                                )}
                            </span>
                        </label>
                    </div>
                    <button>Create Account</button>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
