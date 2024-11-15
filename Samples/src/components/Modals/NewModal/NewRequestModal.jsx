import React, { useState } from 'react';
import './NewRequestModal.css';

const NewRequestModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className='modalTitle'>What do you do today?</h2>
          <button className="close-btn" onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="request">Request</label>
            <button 
            className="btn">START</button>
          </div>
          <div className="form-group">
            <label htmlFor="client">Client</label>
            <button className="btn">START</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRequestModal;