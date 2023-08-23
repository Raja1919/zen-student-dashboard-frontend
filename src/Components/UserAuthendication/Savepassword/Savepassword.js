import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Savepassword = () => {
  const { resetToken } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://zen-student-dashboard-backend.onrender.com/api/student/savepassword",
        { newPassword, resetToken }
      );
      setSuccessMessage(response.data.successMessage);
      setErrorMessage("");
      window.location.href = "/";
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  };

  return (
    <div className="loginPage">
      <div className="loginForm">
        <h2 className="text-center">Save Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              placeholder="Enter New Password"
              name="newPassword"
              className="form-control rounded-0"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Submit
          </button>
        </form>
        {successMessage && (
          <p className="text-success mt-3">{successMessage}</p>
        )}
        {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Savepassword;
