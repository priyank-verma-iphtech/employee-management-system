import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import image from "./Employee.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    let isValid = true;

    // Basic validation
    if (!formData.name.trim()) {
      isValid = false;
      validationErrors.name = "Name is required";
      toast.error("Name is required");
    }
    if (!formData.email.trim()) {
      isValid = false;
      validationErrors.email = "Email is required";
      toast.error("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      toast.error("Invalid email format");
    }
    if (!/^\d{10}$/.test(formData.number)) {
      isValid = false;
      toast.error("Enter valid 10-digit number");
    }
    if (formData.password.length < 6) {
      isValid = false;
      toast.error("Password must be at least 6 characters");
    }
    if (formData.password !== formData.confirmPassword) {
      isValid = false;
      toast.error("Passwords do not match");
    }

    setErrors(validationErrors);
    if (!isValid) return;

    // Dispatch Redux signup action
    dispatch(
      signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
    );

    toast.success("Signup Successful!");
    navigate("/login");
  };

  return (
    <div className="signup">
      <div className="signup-form-wrapper">
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <h2>USER SIGNUP</h2>
            <h3>Create an Account</h3>

            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Contact Number:</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />

            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <button type="submit">SIGN UP</button>

            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
        <img src={image} alt="Employee" className="img" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
