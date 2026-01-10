import React from 'react';

const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <select className={`select ${className}`} {...props}>
      {children}
    </select>
  );
};

export default Select;
