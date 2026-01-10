import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppShell from './components/templates/AppShell';
import MatchDetailPage from './pages/MatchDetailPage';
import MatchesPage from './pages/MatchesPage';
import NewTopicPage from './pages/NewTopicPage';
import TopicDetailPage from './pages/TopicDetailPage';
import TopicsPage from './pages/TopicsPage';
import { AppStateProvider, useAppState } from './state/AppStateContext';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/topics" replace />} />
      <Route path="/topics" element={<TopicsPage />} />
      <Route path="/topics/new" element={<NewTopicPage />} />
      <Route path="/topics/:id" element={<TopicDetailPage />} />
      <Route path="/matches" element={<MatchesPage />} />
      <Route path="/matches/:id" element={<MatchDetailPage />} />
    </Routes>
  );
};

const AppContent: React.FC = () => {
  const { state, setActiveUser, resetDemo } = useAppState();

  return (
    <AppShell
      users={state.users}
      activeUserId={state.activeUserId}
      onUserChange={setActiveUser}
      onReset={resetDemo}
    >
      <AppRoutes />
    </AppShell>
  );
};

const App: React.FC = () => {
  return (
    <AppStateProvider>
      <AppContent />
    </AppStateProvider>
  );
};

export default App;
