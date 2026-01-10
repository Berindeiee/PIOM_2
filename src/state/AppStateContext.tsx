import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { AppState, Document, Evaluation, Match, Message, Topic } from '../models/types';
import { loadState, resetState, saveState } from '../services/storage';

interface AppStateContextValue {
  state: AppState;
  setActiveUser: (userId: string) => void;
  addTopic: (topic: Omit<Topic, 'id' | 'status' | 'matchedByUserId'>) => void;
  acceptTopic: (topicId: string, accepterId: string) => void;
  addMessage: (matchId: string, senderId: string, content: string) => void;
  addDocument: (document: Omit<Document, 'id' | 'createdAt'>) => void;
  upsertEvaluation: (evaluation: Omit<Evaluation, 'id' | 'updatedAt'>) => void;
  resetDemo: () => void;
}

const AppStateContext = createContext<AppStateContextValue | undefined>(undefined);

type Action =
  | { type: 'SET_ACTIVE_USER'; payload: string }
  | { type: 'ADD_TOPIC'; payload: Topic }
  | { type: 'ACCEPT_TOPIC'; payload: { topicId: string; accepterId: string; match: Match } }
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'ADD_DOCUMENT'; payload: Document }
  | { type: 'UPSERT_EVALUATION'; payload: Evaluation }
  | { type: 'RESET_DEMO'; payload: AppState };

const generateId = (prefix: string) => `${prefix}_${crypto.randomUUID()}`;

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_ACTIVE_USER':
      return { ...state, activeUserId: action.payload };
    case 'ADD_TOPIC':
      return { ...state, topics: [action.payload, ...state.topics] };
    case 'ACCEPT_TOPIC': {
      const { topicId, accepterId, match } = action.payload;
      return {
        ...state,
        topics: state.topics.map((topic) =>
          topic.id === topicId
            ? { ...topic, status: 'MATCHED', matchedByUserId: accepterId }
            : topic
        ),
        matches: [match, ...state.matches],
      };
    }
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    case 'ADD_DOCUMENT':
      return { ...state, documents: [...state.documents, action.payload] };
    case 'UPSERT_EVALUATION': {
      const exists = state.evaluations.find((evaluation) => evaluation.matchId === action.payload.matchId);
      if (exists) {
        return {
          ...state,
          evaluations: state.evaluations.map((evaluation) =>
            evaluation.matchId === action.payload.matchId ? action.payload : evaluation
          ),
        };
      }
      return { ...state, evaluations: [...state.evaluations, action.payload] };
    }
    case 'RESET_DEMO':
      return action.payload;
    default:
      return state;
  }
};

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, loadState());

  React.useEffect(() => {
    saveState(state);
  }, [state]);

  const value = useMemo<AppStateContextValue>(() => {
    return {
      state,
      setActiveUser: (userId) => dispatch({ type: 'SET_ACTIVE_USER', payload: userId }),
      addTopic: (topicInput) => {
        const newTopic: Topic = {
          ...topicInput,
          id: generateId('topic'),
          status: 'OPEN',
        };
        dispatch({ type: 'ADD_TOPIC', payload: newTopic });
      },
      acceptTopic: (topicId, accepterId) => {
        const topic = state.topics.find((item) => item.id === topicId);
        if (!topic || topic.status === 'MATCHED') {
          return;
        }
        const match: Match = {
          id: generateId('match'),
          topicId,
          proposerId: topic.createdByUserId,
          accepterId,
          createdAt: new Date().toISOString(),
        };
        dispatch({ type: 'ACCEPT_TOPIC', payload: { topicId, accepterId, match } });
      },
      addMessage: (matchId, senderId, content) => {
        const message: Message = {
          id: generateId('msg'),
          matchId,
          senderId,
          content,
          createdAt: new Date().toISOString(),
        };
        dispatch({ type: 'ADD_MESSAGE', payload: message });
      },
      addDocument: (documentInput) => {
        const document: Document = {
          ...documentInput,
          id: generateId('doc'),
          createdAt: new Date().toISOString(),
        };
        dispatch({ type: 'ADD_DOCUMENT', payload: document });
      },
      upsertEvaluation: (evaluationInput) => {
        const evaluation: Evaluation = {
          ...evaluationInput,
          id: evaluationInput.matchId,
          updatedAt: new Date().toISOString(),
        };
        dispatch({ type: 'UPSERT_EVALUATION', payload: evaluation });
      },
      resetDemo: () => {
        const reset = resetState();
        dispatch({ type: 'RESET_DEMO', payload: reset });
      },
    };
  }, [state]);

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

export const useAppState = (): AppStateContextValue => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within AppStateProvider');
  }
  return context;
};
