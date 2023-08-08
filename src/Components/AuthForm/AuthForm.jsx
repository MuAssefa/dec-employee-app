import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm'; 

const AuthForm = () => {
  const [formType, setFormType] = useState('login');

  const handleFormSwitch = (type) => {
    setFormType(type);
  };

  return (
    <div className="auth-container">
      {formType === 'login' ? (
        <LoginForm onFormSwitch={handleFormSwitch} />
      ) : (
        <RegisterForm onFormSwitch={handleFormSwitch} />
      )}
    </div>
  );
};

export default AuthForm;
