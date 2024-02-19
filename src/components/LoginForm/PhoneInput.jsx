import React from 'react';
import './PhoneInput.css';
const PhoneInput = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label>Phone Number:</label>
      <input type="tel" value={value} onChange={onChange} required />
    </div>
  );
};

export default PhoneInput;
