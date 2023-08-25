import React from 'react';
import Modal from 'react-modal';
// import './WebcodeModal.css';

const WebcodeModal = ({ selectedTask, closeModal }) => {
  if (!selectedTask) return null;

  const name = localStorage.getItem('userName');

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      className="custom-modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <h2>{name}</h2>
        <h2>{selectedTask.title}</h2>
        <p>Submitted on: {selectedTask.submittedOn}</p>
        <p>Mark: {selectedTask.mark}</p>
        <div>
          <div className="code-section">
            <h3>
              Front-end Source Code:
              <a href={selectedTask.frontendCode}>{selectedTask.frontendCode}</a>
            </h3>
            <h3>
            Back-end Source code :
              <a href={selectedTask.backendCode}>{selectedTask.backendCode}</a>
            </h3>
            <h3>
            Front-end Deployed URL:
              <a href={selectedTask.frontendUrl}>{selectedTask.frontendUrl}</a>
            </h3>
            <h3>
            Back-end Deployed URL:
              <a href={selectedTask.backendUrl}>{selectedTask.backendUrl}</a>
            </h3>
          </div>

          <div>
            <p className="warning">
              Warning: 1 mark will be deducted from your total score if you fail
              to submit the task within the deadline.
            </p>
          </div>
        </div>
        <button onClick={closeModal}>Close</button>
      </div>
    </Modal>
  );
};

export default WebcodeModal;
