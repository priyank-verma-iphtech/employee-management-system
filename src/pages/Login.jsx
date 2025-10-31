import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/Employee Management System.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const currentUser = useSelector((state) => state.auth.currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    let isValid = true;

    if (!email.trim()) {
      isValid = false;
      validationErrors.email = "Email is required";
    }
    if (!password.trim()) {
      isValid = false;
      validationErrors.password = "Password is required";
    }

    setErrors(validationErrors);
    if (!isValid) return;

    dispatch(login({ email, password }));

    // Check login result
    setTimeout(() => {
      const updatedUser = currentUser;
      if (updatedUser) {
        toast.success("Login Successful!");
        navigate("/dashboard");
      } else {
        toast.error("Invalid email or password");
      }
    }, 100);
  };

  return (
    <div className="login">
      <div className="login-form-wrapper">
      <img src={image} alt="Employee" className="img" />
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <h2>USER LOGIN</h2>
            <h3>Welcome back</h3>

            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">LOGIN</button>
            <p>
              Don’t have an account? <Link to="/signup">SignUp</Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
