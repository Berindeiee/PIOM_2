import React from 'react';
import { useParams } from 'react-router-dom';
import ChatThread from '../components/organisms/ChatThread';
import DocumentsPanel from '../components/organisms/DocumentsPanel';
import EmptyState from '../components/organisms/EmptyState';
import EvaluationPanel from '../components/organisms/EvaluationPanel';
import MatchSummary from '../components/organisms/MatchSummary';
import PageHeaderLayout from '../components/templates/PageHeaderLayout';
import TwoColumnLayout from '../components/templates/TwoColumnLayout';
import { useAppState } from '../state/AppStateContext';

const MatchDetailPage: React.FC = () => {
  const { id } = useParams();
  const { state, addMessage, addDocument, upsertEvaluation } = useAppState();
  const match = state.matches.find((item) => item.id === id);
  const activeUser = state.users.find((user) => user.id === state.activeUserId)!;

  if (!match) {
    return (
      <PageHeaderLayout title="Match workspace">
        <EmptyState title="Match not found" description="Return to the matches list." />
      </PageHeaderLayout>
    );
  }

  const isParticipant = match.proposerId === activeUser.id || match.accepterId === activeUser.id;

  if (!isParticipant) {
    return (
      <PageHeaderLayout title="Match workspace">
        <EmptyState
          title="Access restricted"
          description="Only match participants can view this workspace."
        />
      </PageHeaderLayout>
    );
  }

  const topic = state.topics.find((item) => item.id === match.topicId);
  const proposer = state.users.find((user) => user.id === match.proposerId);
  const accepter = state.users.find((user) => user.id === match.accepterId);
  const messages = state.messages.filter((message) => message.matchId === match.id);
  const documents = state.documents.filter((doc) => doc.matchId === match.id);
  const evaluation = state.evaluations.find((item) => item.matchId === match.id);
  const isFacultyParticipant = activeUser.role === 'FACULTY';

  return (
    <PageHeaderLayout title="Match workspace" subtitle={topic?.title}>
      <TwoColumnLayout
        left={
          <div className="list-gap">
            <MatchSummary match={match} topic={topic} proposer={proposer} accepter={accepter} />
            <ChatThread
              messages={messages}
              users={state.users}
              activeUser={activeUser}
              onSend={(content) => addMessage(match.id, activeUser.id, content)}
            />
          </div>
        }
        right={
          <>
            <DocumentsPanel
              documents={documents}
              activeUser={activeUser}
              onAdd={(input) =>
                addDocument({
                  ...input,
                  matchId: match.id,
                  uploadedById: activeUser.id,
                })
              }
            />
            <EvaluationPanel
              evaluation={evaluation}
              activeUser={activeUser}
              canEdit={isFacultyParticipant}
              onSave={(input) =>
                upsertEvaluation({
                  matchId: match.id,
                  grade: input.grade,
                  feedback: input.feedback,
                })
              }
            />
          </>
        }
      />
    </PageHeaderLayout>
  );
};

export default MatchDetailPage;
