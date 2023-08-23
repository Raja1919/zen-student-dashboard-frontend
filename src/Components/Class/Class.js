import React, { useState, useEffect } from "react";
import "./Class.css";
import axios from "axios";

const Class = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [classes, setClasses] = useState([]);

  const fetchClasses = async () => {
    try {
      const response = await axios.get("https://zen-student-dashboard-backend.onrender.com/api/class/get", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      setClasses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const handleClassClick = (session) => {
    setSelectedClass(session);
  };

  return (
    <div className="class">
      <div className="row-container">
        <div className="class-content">
          <div className="join">
            {selectedClass ? (
              <>
                Play Recording
                <button>Play Recording</button>
              </>
            ) : (
              "Join the class on time!"
            )}
          </div>
          <div className="card text-black bg-white mb-3">
            <div className="card-header">
              {selectedClass ? selectedClass.title : "Current Session"}
            </div>
            <div className="card-body">
              <div>
                Content:
                <p>
                  {selectedClass
                    ? selectedClass.content
                    : "No content available"}
                </p>
              </div>
              <div>
                Pre-read:
                <p>
                  {selectedClass
                    ? selectedClass.preRead
                    : "No preread available"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="side-content">
          <div className="card text-black bg-white mb-3">
            <div className="card-header">Session Roadmap</div>
            <div className="card-body">
              Batch is not assigned yet! Hold tight until a batch is assigned to
              you.
            </div>
          </div>
          <div className="card text-black bg-white mb-3">
            <div className="card-header">Additional Sessions</div>
            <div className="card-body">
              <div className="additional-sessions">
                {classes.map((session) => (
                  <div
                    className={`card ${
                      selectedClass && selectedClass._id === session._id
                        ? "selected-session"
                        : ""
                    }`}
                    key={session._id}
                    onClick={() => handleClassClick(session)}
                  >
                    <div className="card-body">
                      <h5>{session.title}</h5>
                      <p>{session.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
