import React from 'react';
import MatchesList from '../components/organisms/MatchesList';
import PageHeaderLayout from '../components/templates/PageHeaderLayout';
import { useAppState } from '../state/AppStateContext';

const MatchesPage: React.FC = () => {
  const { state } = useAppState();

  return (
    <PageHeaderLayout
      title="Matches"
      subtitle="Workspaces available for the active user."
    >
      <MatchesList
        matches={state.matches}
        topics={state.topics}
        users={state.users}
        activeUserId={state.activeUserId}
      />
    </PageHeaderLayout>
  );
};

export default MatchesPage;
