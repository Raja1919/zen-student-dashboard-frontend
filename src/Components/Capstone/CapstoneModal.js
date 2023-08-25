import React from 'react';
import Modal from 'react-modal';

const CapstoneModal = ({ selectedProject, closeModal }) => {
  if (!selectedProject) return null;

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
        <h2>{selectedProject.batch}</h2>
        <h2>{selectedProject.title}</h2>
        <div>
          <div className="code-section">
            <h3>
              Front-end Source Code:
              <a href={selectedProject.frontendCode}>{selectedProject.frontendCode}</a>
            </h3>
            <h3>
              Back-end Source code :
              <a href={selectedProject.backendCode}>{selectedProject.backendCode}</a>
            </h3>
            <h3>
              Front-end Deployed URL:
              <a href={selectedProject.frontendUrl}>{selectedProject.frontendUrl}</a>
            </h3>
            <h3>
              Back-end Deployed URL:
              <a href={selectedProject.backendUrl}>{selectedProject.backendUrl}</a>
            </h3>
          </div>
        </div>
        <div>
          <p className="warning">
            Warning: 1 mark will be deducted from your total score if you fail
            to submit the project within the deadline.
          </p>
        </div>
        <button onClick={closeModal}>Close</button>
      </div>
    </Modal>
  );
};

export default CapstoneModal;
