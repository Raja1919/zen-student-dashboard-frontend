import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState("");
  const [editedUserData, setEditedUserData] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://zen-student-dashboard-backend.onrender.com/api/profile/getStudent/${userId}`,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      setUserData(response.data.student);
      setEditedUserData(response.data.student);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const updateUserDetails = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      await axios.put(
        `https://zen-student-dashboard-backend.onrender.com/api/profile/updateStudent/${userId}`,
        editedUserData,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      setIsEditing(false);
      fetchUserData();
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card-body">
            <div className="mb-4">
              <h3>Profile</h3>
            </div>
            {isEditing ? (
              <>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={editedUserData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Batch</label>
                  <input
                    className="form-control"
                    type="text"
                    name="batch"
                    value={editedUserData.batch}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    className="form-control"
                    type="text"
                    name="phone"
                    value={editedUserData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={editedUserData.email}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-primary"
                    onClick={updateUserDetails}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <p>{userData.name}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label">Batch</label>
                  <p>{userData.batch}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <p>{userData.phone}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <p>{userData.email}</p>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
