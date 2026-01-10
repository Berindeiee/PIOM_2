import React from 'react';
import SearchBar from '../molecules/SearchBar';
import FilterRow from '../molecules/FilterRow';
import TopicCard from '../molecules/TopicCard';
import { Topic, User } from '../../models/types';

interface TopicsListProps {
  topics: Topic[];
  users: User[];
}

const TopicsList: React.FC<TopicsListProps> = ({ topics, users }) => {
  const [query, setQuery] = React.useState('');
  const [level, setLevel] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [role, setRole] = React.useState('');

  const filtered = topics.filter((topic) => {
    const matchesQuery =
      topic.title.toLowerCase().includes(query.toLowerCase()) ||
      topic.description.toLowerCase().includes(query.toLowerCase());
    const matchesLevel = level ? topic.level === level : true;
    const matchesStatus = status ? topic.status === status : true;
    const matchesRole = role ? topic.createdByRole === role : true;
    return matchesQuery && matchesLevel && matchesStatus && matchesRole;
  });

  return (
    <div className="list-gap">
      <SearchBar value={query} onChange={setQuery} placeholder="Search topics" />
      <FilterRow
        level={level}
        status={status}
        role={role}
        onLevelChange={setLevel}
        onStatusChange={setStatus}
        onRoleChange={setRole}
      />
      <div className="grid">
        {filtered.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            creator={users.find((user) => user.id === topic.createdByUserId)}
          />
        ))}
      </div>
    </div>
  );
};

export default TopicsList;
