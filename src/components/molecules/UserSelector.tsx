import React from 'react';
import Select from '../atoms/Select';
import { User } from '../../models/types';

interface UserSelectorProps {
  users: User[];
  activeUserId: string;
  onChange: (userId: string) => void;
}

const UserSelector: React.FC<UserSelectorProps> = ({ users, activeUserId, onChange }) => {
  return (
    <div>
      <label className="muted" style={{ display: 'block', marginBottom: 4 }}>
        Active user
      </label>
      <Select value={activeUserId} onChange={(event) => onChange(event.target.value)}>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name} ({user.role})
          </option>
        ))}
      </Select>
    </div>
  );
};

export default UserSelector;
