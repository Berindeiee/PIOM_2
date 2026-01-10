import React from 'react';
import TopicsList from '../components/organisms/TopicsList';
import TopicsHeaderActions from '../components/organisms/TopicsHeaderActions';
import PageHeaderLayout from '../components/templates/PageHeaderLayout';
import { useAppState } from '../state/AppStateContext';

const TopicsPage: React.FC = () => {
  const { state } = useAppState();

  return (
    <PageHeaderLayout
      title="Topics"
      subtitle="Browse and accept open thesis topics."
      actions={<TopicsHeaderActions />}
    >
      <TopicsList topics={state.topics} users={state.users} />
    </PageHeaderLayout>
  );
};

export default TopicsPage;
