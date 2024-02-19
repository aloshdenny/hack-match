import React from 'react';
import './SubmitButton.css';
const SubmitButton = ({ onClick }) => {
  return (
    <button type="submit" onClick={onClick}>
      Login
    </button>
  );
};

export default SubmitButton;
