import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from './actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './form.css'; 

const SignUpForm = ({ signUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const errors = {};


    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      
      signUp({ email, password });

      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
           <h1 className='head'>Sign Up</h1>
      <div className='container'>
        <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="password-container">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FontAwesomeIcon
          icon={showPassword ?  faEye : faEyeSlash}
          className="password-icon"
          onClick={togglePasswordVisibility}
        />
        {errors.password && <span className="error-message1">{errors.password}</span>}
      </div>
      <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
