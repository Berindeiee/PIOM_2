import React from 'react';

const Badge: React.FC<{ label: string }> = ({ label }) => {
  return <span className="badge">{label}</span>;
};

export default Badge;
