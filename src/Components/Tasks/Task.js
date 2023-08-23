import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Task.css";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const username = localStorage.getItem("userName");

  const fetchTasks = async () => {
    try {
      const response = await axios.get("https://zen-student-dashboard-backend.onrender.com/api/task/get", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="Task">
      {tasks.map((task) => (
        <div key={task._id} className="task-item">
          <div className="leftside">
            <h2> {username}</h2>
            <p>
              {task.day} {task.title}
            </p>
          </div>
          <div className="rightside">
            <p>submitted on {new Date(task.submittedOn).toLocaleDateString()}</p>
            <div className="d-flex flex-row align-items-center justify-content-end">
              <p className="mark">{task.mark}</p>
              <p className="task">Task</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
