import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CapstoneModal from './CapstoneModal';
import './Capstone.css';

const Capstone = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const name = localStorage.getItem('userName');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('https://zen-student-dashboard-backend.onrender.com/api/capstone/get', {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      });
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="project">
      {projects.map((project) => (
        <div key={project._id} className="project-item" onClick={() => openModal(project)}>
          <div className="leftside">
            <h2>{name}</h2>
            <p>
              ({project.batch}-Capstone project) {project.title}
            </p>
          </div>
          <div className="rightside">
            <div className="d-flex flex-row align-items-center justify-content-end">
              <p className="mark">{project.mark}</p>
              <p className="task">Capstone</p>
            </div>
          </div>
        </div>
      ))}
      <CapstoneModal selectedProject={selectedProject} closeModal={closeModal} />
    </div>
  );
};

export default Capstone;
