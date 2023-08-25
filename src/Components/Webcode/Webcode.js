import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WebcodeModal from './WebcodeModal';

const Webcode = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const name = localStorage.getItem('userName');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://zen-student-dashboard-backend.onrender.com/api/webcode/get', {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      });
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = (task) => {
    setSelectedTask(task);
  };

  const closeModal = () => {
    setSelectedTask(null);
  };

  return (
    <div className="Task">
      {tasks.map((task) => (
        <div key={task._id} className="task-item" onClick={() => openModal(task)}>
          <div className="leftside">
            <h2> {name}</h2>
            <p>
              ({task.batch}-First Webcode) {task.title}
            </p>
          </div>
          <div className="rightside">
            <p>submitted date: {task.submittedOn}</p>
            <div className="d-flex flex-row align-items-center justify-content-end">
              <p className="mark">{task.mark}</p>
              <p className="task">Task</p>
            </div>
          </div>
        </div>
      ))}
       <WebcodeModal selectedTask={selectedTask} closeModal={closeModal} />
    </div>
  );
};

export default Webcode;
