import React from 'react';
import Card from '../atoms/Card';
import MessageInput from '../molecules/MessageInput';
import { Message, User } from '../../models/types';

interface ChatThreadProps {
  messages: Message[];
  users: User[];
  activeUser: User;
  onSend: (content: string) => void;
}

const ChatThread: React.FC<ChatThreadProps> = ({ messages, users, activeUser, onSend }) => {
  const [draft, setDraft] = React.useState('');

  const handleSend = () => {
    if (!draft.trim()) {
      return;
    }
    onSend(draft.trim());
    setDraft('');
  };

  return (
    <Card>
      <h3>Messages</h3>
      <div className="message-list" style={{ margin: '12px 0' }}>
        {messages.map((message) => {
          const sender = users.find((user) => user.id === message.senderId);
          const isMine = message.senderId === activeUser.id;
          return (
            <div key={message.id} className={`message-item ${isMine ? 'mine' : ''}`}>
              <strong>{sender?.name ?? 'Unknown'}</strong>
              <p style={{ margin: '4px 0' }}>{message.content}</p>
              <span className="muted">{new Date(message.createdAt).toLocaleString()}</span>
            </div>
          );
        })}
      </div>
      <MessageInput value={draft} onChange={setDraft} onSend={handleSend} />
    </Card>
  );
};

export default ChatThread;
