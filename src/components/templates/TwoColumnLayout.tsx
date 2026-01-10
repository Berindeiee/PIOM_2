import React from 'react';

interface TwoColumnLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({ left, right }) => {
  return (
    <div className="two-column">
      <div>{left}</div>
      <div className="list-gap">{right}</div>
    </div>
  );
};

export default TwoColumnLayout;
