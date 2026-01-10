import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', ...props }) => {
  const variantClass =
    variant === 'secondary' ? 'secondary' : variant === 'ghost' ? 'ghost' : '';

  return <button className={`button ${variantClass} ${className}`} {...props} />;
};

export default Button;
