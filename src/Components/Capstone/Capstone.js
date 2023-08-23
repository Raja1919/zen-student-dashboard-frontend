import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Capstone.css"

const Capstone = () => {
  const [project, setProject] = useState([]);
  const name = localStorage.getItem('userName');
  
  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    try {
      const response = await axios.get('https://zen-student-dashboard-backend.onrender.com/api/capstone/get', {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      });
      setProject(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="project">
      {project.map((task) => (
        <div key={task._id} className="project-item">
          <div className="leftside">
            <h2> {name}</h2>
            <p>
              ({task.batch}-Capstone project) {task.title}
            </p>
          </div>
          <div className="rightside">
            <div className="d-flex flex-row align-items-center justify-content-end">
              <p className="mark">{task.mark}</p>
              <p className="task">Capstone</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Capstone;
