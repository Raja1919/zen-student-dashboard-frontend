import React, { useState } from "react";
import axios from "axios";

const Resetpassword = () => {
  const [email, setEmail] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://zen-student-dashboard-backend.onrender.com/api/student/resetpassword",
        { email }
      );
      setResetToken(response.data.resetToken);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="loginPage">
      <div className="loginForm">
        <h2 className="text-center">Reset Password</h2>
        {resetToken ? (
          <div>
            <p>
              Reset token has been sent to your email. Please use it to reset
              your password.
            </p>
            <a href={`/save-new-password/${resetToken}`}>
              Click here to reset password
            </a>
          </div>
        ) : (
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

            {errorMessage && <p className="text-danger">{errorMessage}</p>}

            <button type="submit" className="btn btn-success w-100 rounded-0">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Resetpassword;
