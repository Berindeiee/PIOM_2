import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ value, onChange, onSend }) => {
  return (
    <div className="inline-actions">
      <Input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Type a message" />
      <Button onClick={onSend} disabled={!value.trim()}>
        Send
      </Button>
    </div>
  );
};

export default MessageInput;
