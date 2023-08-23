import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const credentials = { email, password };

    try {
      const response = await axios.post(
        "https://zen-student-dashboard-backend.onrender.com/api/student/login",
        credentials
      );

      const { token, user } = response.data;
      const userId = user._id;
      const userName = user.name;

      localStorage.setItem("token", token);
      localStorage.setItem("userName", userName);
      localStorage.setItem("userId", userId);

      navigate("/class");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleForget = () => {
    navigate("/forgetpassword");
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="loginPage">
      <div className="loginForm">
        <h4 className="text-center">Login</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className="form-control rounded-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Log in
          </button>

          <div className="forget">
            <div className="reset-password">
              <p>
                Forgot Password?
                <button onClick={handleForget}>Click Me</button>
              </p>
            </div>
          </div>

          <button
            onClick={handleSignup}
            className="btn btn-default border w-100 bg-light text-decoration-none rounded-0"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
