import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../atoms/Badge';
import Button from '../atoms/Button';
import Card from '../atoms/Card';
import { Match, Topic, User } from '../../models/types';

interface MatchesListProps {
  matches: Match[];
  topics: Topic[];
  users: User[];
  activeUserId: string;
}

const MatchesList: React.FC<MatchesListProps> = ({ matches, topics, users, activeUserId }) => {
  const relevant = matches.filter(
    (match) => match.proposerId === activeUserId || match.accepterId === activeUserId
  );

  if (relevant.length === 0) {
    return <p className="muted">No matches yet for the selected user.</p>;
  }

  return (
    <div className="list-gap">
      {relevant.map((match) => {
        const topic = topics.find((item) => item.id === match.topicId);
        const proposer = users.find((user) => user.id === match.proposerId);
        const accepter = users.find((user) => user.id === match.accepterId);

        return (
          <Card key={match.id}>
            <div className="page-header" style={{ marginBottom: 8 }}>
              <div>
                <h3 className="page-title">{topic?.title ?? 'Topic'}</h3>
                <p className="muted">
                  {proposer?.name ?? 'Unknown'} ↔ {accepter?.name ?? 'Unknown'}
                </p>
              </div>
              <Badge label={topic?.level ?? 'Level'} />
            </div>
            <p>{topic?.description}</p>
            <Link to={`/matches/${match.id}`}>
              <Button variant="ghost">Open workspace</Button>
            </Link>
          </Card>
        );
      })}
    </div>
  );
};

export default MatchesList;
