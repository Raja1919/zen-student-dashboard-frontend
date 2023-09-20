import React, { useState } from "react";
import axios from "axios"; 

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
      phone,
    };

    try {
      const response = await axios.post(
        "https://zen-student-dashboard-backend.onrender.com/api/student/register",
        newUser
      );
      console.log(response.data);
      window.location.href = "/";
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="loginPage">
      <div className="loginForm">
        <h4 className="text-center">Signup</h4>
        <form onSubmit={handleSubmit}>
          <div class="row g-3">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div class="row g-3">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
