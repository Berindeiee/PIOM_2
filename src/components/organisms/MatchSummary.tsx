import React from 'react';
import Badge from '../atoms/Badge';
import Card from '../atoms/Card';
import { Match, Topic, User } from '../../models/types';

interface MatchSummaryProps {
  match: Match;
  topic: Topic | undefined;
  proposer: User | undefined;
  accepter: User | undefined;
}

const MatchSummary: React.FC<MatchSummaryProps> = ({ match, topic, proposer, accepter }) => {
  return (
    <Card>
      <h3>Topic summary</h3>
      <p className="muted">Matched on {new Date(match.createdAt).toLocaleDateString()}</p>
      <h4 style={{ marginBottom: 4 }}>{topic?.title ?? 'Topic'}</h4>
      <p>{topic?.description}</p>
      <div className="topic-meta" style={{ marginTop: 12 }}>
        <Badge label={`Level: ${topic?.level ?? 'N/A'}`} />
        <Badge label={`Proposer: ${proposer?.name ?? 'Unknown'}`} />
        <Badge label={`Accepter: ${accepter?.name ?? 'Unknown'}`} />
      </div>
    </Card>
  );
};

export default MatchSummary;
