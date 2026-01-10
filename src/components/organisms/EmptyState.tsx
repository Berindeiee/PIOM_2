import React from 'react';
import Card from '../atoms/Card';

const EmptyState: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <Card>
      <h3>{title}</h3>
      <p className="muted">{description}</p>
    </Card>
  );
};

export default EmptyState;
