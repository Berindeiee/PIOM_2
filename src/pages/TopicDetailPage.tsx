import React from 'react';
import { useParams } from 'react-router-dom';
import TopicDetails from '../components/organisms/TopicDetails';
import EmptyState from '../components/organisms/EmptyState';
import PageHeaderLayout from '../components/templates/PageHeaderLayout';
import { useAppState } from '../state/AppStateContext';

const TopicDetailPage: React.FC = () => {
  const { id } = useParams();
  const { state, acceptTopic } = useAppState();
  const topic = state.topics.find((item) => item.id === id);
  const activeUser = state.users.find((user) => user.id === state.activeUserId)!;

  if (!topic) {
    return (
      <PageHeaderLayout title="Topic details">
        <EmptyState title="Topic not found" description="Return to the topics list." />
      </PageHeaderLayout>
    );
  }

  return (
    <PageHeaderLayout title="Topic details" subtitle="Review and accept topics.">
      <TopicDetails
        topic={topic}
        creator={state.users.find((user) => user.id === topic.createdByUserId)}
        activeUser={activeUser}
        matches={state.matches}
        onAccept={() => acceptTopic(topic.id, activeUser.id)}
      />
    </PageHeaderLayout>
  );
};

export default TopicDetailPage;
