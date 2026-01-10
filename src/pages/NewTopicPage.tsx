import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopicForm from '../components/organisms/TopicForm';
import PageHeaderLayout from '../components/templates/PageHeaderLayout';
import { useAppState } from '../state/AppStateContext';

const NewTopicPage: React.FC = () => {
  const { state, addTopic } = useAppState();
  const navigate = useNavigate();
  const activeUser = state.users.find((user) => user.id === state.activeUserId)!;

  return (
    <PageHeaderLayout
      title="Propose topic"
      subtitle="Anyone can propose a topic. Tags are optional."
    >
      <TopicForm
        activeUser={activeUser}
        onSubmit={(input) => {
          addTopic({
            ...input,
            createdByUserId: activeUser.id,
            createdByRole: activeUser.role,
          });
          navigate('/topics');
        }}
      />
    </PageHeaderLayout>
  );
};

export default NewTopicPage;
