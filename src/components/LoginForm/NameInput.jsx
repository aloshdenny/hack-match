import React from 'react';
import './NameInput.css';
const NameInput = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label>Name:</label>
      <input type="text" value={value} onChange={onChange} required />
    </div>
  );
};

export default NameInput;
