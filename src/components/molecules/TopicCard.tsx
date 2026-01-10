import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../atoms/Badge';
import Button from '../atoms/Button';
import Card from '../atoms/Card';
import { Topic, User } from '../../models/types';

interface TopicCardProps {
  topic: Topic;
  creator: User | undefined;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, creator }) => {
  return (
    <Card>
      <div className="page-header" style={{ marginBottom: 12 }}>
        <div>
          <h3 className="page-title">{topic.title}</h3>
          <p className="muted">{creator ? `${creator.name} · ${creator.role}` : 'Unknown'}</p>
        </div>
        <Badge label={topic.status} />
      </div>
      <p>{topic.description}</p>
      <div className="topic-meta" style={{ margin: '12px 0' }}>
        <Badge label={`Level: ${topic.level}`} />
        <Badge label={`Creator: ${topic.createdByRole}`} />
      </div>
      <div className="topic-tags">
        {topic.tags.map((tag) => (
          <Badge key={tag} label={tag} />
        ))}
      </div>
      <div style={{ marginTop: 12 }}>
        <Link to={`/topics/${topic.id}`}>
          <Button variant="ghost">View details</Button>
        </Link>
      </div>
    </Card>
  );
};

export default TopicCard;
