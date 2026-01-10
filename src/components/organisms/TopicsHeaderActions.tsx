import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';

const TopicsHeaderActions: React.FC = () => {
  return (
    <Link to="/topics/new">
      <Button>Propose topic</Button>
    </Link>
  );
};

export default TopicsHeaderActions;
