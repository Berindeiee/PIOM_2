import React from 'react';
import Badge from '../atoms/Badge';
import Button from '../atoms/Button';
import Card from '../atoms/Card';
import Input from '../atoms/Input';
import Modal from '../atoms/Modal';
import Select from '../atoms/Select';
import { Document, DocumentType, DocumentVisibility, User } from '../../models/types';

interface DocumentsPanelProps {
  documents: Document[];
  activeUser: User;
  onAdd: (input: { title: string; type: DocumentType; visibility: DocumentVisibility }) => void;
}

const DocumentsPanel: React.FC<DocumentsPanelProps> = ({ documents, activeUser, onAdd }) => {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [type, setType] = React.useState<DocumentType>('request');
  const [visibility, setVisibility] = React.useState<DocumentVisibility>('SHARED');

  const visibleDocs = documents.filter(
    (doc) => doc.visibility === 'SHARED' || doc.uploadedById === activeUser.id
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!title.trim()) {
      return;
    }
    onAdd({ title, type, visibility });
    setTitle('');
    setType('request');
    setVisibility('SHARED');
    setOpen(false);
  };

  return (
    <Card>
      <div className="page-header" style={{ marginBottom: 12 }}>
        <div>
          <h3 className="page-title">Documents</h3>
          <p className="muted">Metadata only. Visibility rules apply.</p>
        </div>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Add document
        </Button>
      </div>
      <div className="list-gap">
        {visibleDocs.map((doc) => (
          <div key={doc.id} className="card" style={{ padding: 12 }}>
            <div className="page-header" style={{ marginBottom: 8 }}>
              <div>
                <strong>{doc.title}</strong>
                <p className="muted">{new Date(doc.createdAt).toLocaleDateString()}</p>
              </div>
              <Badge label={doc.visibility} />
            </div>
            <div className="topic-meta">
              <Badge label={doc.type} />
              {doc.uploadedById === activeUser.id ? (
                <Badge label="Uploaded by you" />
              ) : (
                <Badge label="Shared" />
              )}
            </div>
          </div>
        ))}
        {visibleDocs.length === 0 && <p className="muted">No documents yet.</p>}
      </div>

      <Modal title="Add document" open={open} onClose={() => setOpen(false)}>
        <form className="list-gap" onSubmit={handleSubmit}>
          <div>
            <label className="muted">Title</label>
            <Input value={title} onChange={(event) => setTitle(event.target.value)} required />
          </div>
          <div>
            <label className="muted">Type</label>
            <Select value={type} onChange={(event) => setType(event.target.value as DocumentType)}>
              <option value="request">Request</option>
              <option value="similarity_report">Similarity report</option>
              <option value="other">Other</option>
            </Select>
          </div>
          <div>
            <label className="muted">Visibility</label>
            <Select
              value={visibility}
              onChange={(event) => setVisibility(event.target.value as DocumentVisibility)}
            >
              <option value="SHARED">Shared</option>
              <option value="PRIVATE">Private</option>
            </Select>
          </div>
          <Button type="submit">Save metadata</Button>
        </form>
      </Modal>
    </Card>
  );
};

export default DocumentsPanel;
