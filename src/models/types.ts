export type UserRole = 'STUDENT' | 'FACULTY' | 'OTHER';

export interface User {
  id: string;
  name: string;
  role: UserRole;
}

export type TopicLevel = 'BSc' | 'MSc' | 'PhD';

export type TopicStatus = 'OPEN' | 'MATCHED';

export interface Topic {
  id: string;
  title: string;
  description: string;
  level: TopicLevel;
  tags: string[];
  createdByUserId: string;
  createdByRole: UserRole;
  status: TopicStatus;
  matchedByUserId?: string;
}

export interface Match {
  id: string;
  topicId: string;
  proposerId: string;
  accepterId: string;
  createdAt: string;
}

export interface Message {
  id: string;
  matchId: string;
  senderId: string;
  content: string;
  createdAt: string;
}

export type DocumentType = 'request' | 'similarity_report' | 'other';
export type DocumentVisibility = 'PRIVATE' | 'SHARED';

export interface Document {
  id: string;
  matchId: string;
  uploadedById: string;
  title: string;
  type: DocumentType;
  visibility: DocumentVisibility;
  createdAt: string;
}

export interface Evaluation {
  id: string;
  matchId: string;
  grade: string;
  feedback: string;
  updatedAt: string;
}

export interface AppState {
  users: User[];
  topics: Topic[];
  matches: Match[];
  messages: Message[];
  documents: Document[];
  evaluations: Evaluation[];
  activeUserId: string;
}
