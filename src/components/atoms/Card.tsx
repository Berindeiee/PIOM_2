import React from 'react';

const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
