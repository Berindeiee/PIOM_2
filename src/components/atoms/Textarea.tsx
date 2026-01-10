import React from 'react';

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  className = '',
  ...props
}) => {
  return <textarea className={`textarea ${className}`} {...props} />;
};

export default Textarea;
