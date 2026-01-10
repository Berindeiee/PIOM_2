import React from 'react';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className = '', ...props }) => {
  return <input className={`input ${className}`} {...props} />;
};

export default Input;
