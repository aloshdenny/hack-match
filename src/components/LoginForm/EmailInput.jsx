import React from 'react';
import './EmailInput.css';
const EmailInput = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label>Email:</label>
      <input type="email" value={value} onChange={onChange} required />
    </div>
  );
};

export default EmailInput;
