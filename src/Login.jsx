// Login.js
import React, { useState } from 'react';
import NameInput from './components/LoginForm/NameInput';
import EmailInput from './components/LoginForm/EmailInput';
import PhoneInput from './components/LoginForm/PhoneInput';
import SubmitButton from './components/LoginForm/SubmitButton';
import WelcomeMessage from './components/LoginForm/WelcomeMessage';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as sending data to backend or performing validation
    console.log('Form submitted:', { email, phone, name });
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <NameInput value={name} onChange={handleNameChange} />
          <EmailInput value={email} onChange={handleEmailChange} />
          <PhoneInput value={phone} onChange={handlePhoneChange} />
          <SubmitButton onClick={handleSubmit} />
        </form>
      </div>
      <div className="right-section">
        <WelcomeMessage />
      </div>
    </div>
  );
};

export default Login;
