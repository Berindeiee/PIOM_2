import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../atoms/Badge';
import Button from '../atoms/Button';
import Card from '../atoms/Card';
import { Match, Topic, User } from '../../models/types';

interface TopicDetailsProps {
  topic: Topic;
  creator: User | undefined;
  activeUser: User;
  matches: Match[];
  onAccept: () => void;
}

const canAcceptTopic = (topic: Topic, activeUser: User): boolean => {
  if (topic.status !== 'OPEN') {
    return false;
  }
  const createdByFaculty = topic.createdByRole === 'FACULTY';
  if (createdByFaculty) {
    return activeUser.role !== 'FACULTY';
  }
  return activeUser.role === 'FACULTY';
};

const TopicDetails: React.FC<TopicDetailsProps> = ({
  topic,
  creator,
  activeUser,
  matches,
  onAccept,
}) => {
  const eligible = canAcceptTopic(topic, activeUser);
  const match = matches.find((item) => item.topicId === topic.id);

  return (
    <Card>
      <div className="page-header">
        <div>
          <h2 className="page-title">{topic.title}</h2>
          <p className="muted">{creator ? `${creator.name} · ${creator.role}` : 'Unknown'}</p>
        </div>
        <Badge label={topic.status} />
      </div>
      <p>{topic.description}</p>
      <div className="topic-meta" style={{ margin: '12px 0' }}>
        <Badge label={`Level: ${topic.level}`} />
        <Badge label={`Creator role: ${topic.createdByRole}`} />
      </div>
      <div className="topic-tags" style={{ marginBottom: 16 }}>
        {topic.tags.map((tag) => (
          <Badge key={tag} label={tag} />
        ))}
      </div>
      {topic.status === 'OPEN' && (
        <Button onClick={onAccept} disabled={!eligible}>
          Accept topic
        </Button>
      )}
      {topic.status === 'OPEN' && !eligible && (
        <p className="muted" style={{ marginTop: 8 }}>
          Only eligible roles can accept this topic.
        </p>
      )}
      {topic.status === 'MATCHED' && match && (
        <div style={{ marginTop: 16 }}>
          <p className="muted">This topic is matched. View the workspace:</p>
          <Link to={`/matches/${match.id}`}>
            <Button variant="ghost">Go to match</Button>
          </Link>
        </div>
      )}
    </Card>
  );
};

export default TopicDetails;
