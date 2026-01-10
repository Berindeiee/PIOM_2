import React from 'react';
import Button from '../atoms/Button';
import Card from '../atoms/Card';
import Input from '../atoms/Input';
import Textarea from '../atoms/Textarea';
import { Evaluation, User } from '../../models/types';

interface EvaluationPanelProps {
  evaluation: Evaluation | undefined;
  activeUser: User;
  canEdit: boolean;
  onSave: (input: { grade: string; feedback: string }) => void;
}

const EvaluationPanel: React.FC<EvaluationPanelProps> = ({
  evaluation,
  activeUser,
  canEdit,
  onSave,
}) => {
  const [grade, setGrade] = React.useState(evaluation?.grade ?? '');
  const [feedback, setFeedback] = React.useState(evaluation?.feedback ?? '');

  React.useEffect(() => {
    setGrade(evaluation?.grade ?? '');
    setFeedback(evaluation?.feedback ?? '');
  }, [evaluation]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave({ grade, feedback });
  };

  return (
    <Card>
      <div className="page-header" style={{ marginBottom: 12 }}>
        <div>
          <h3 className="page-title">Evaluation</h3>
          <p className="muted">Only faculty can edit; students can view.</p>
        </div>
        <span className="muted">Active: {activeUser.name}</span>
      </div>
      {canEdit ? (
        <form className="list-gap" onSubmit={handleSubmit}>
          <div>
            <label className="muted">Grade</label>
            <Input value={grade} onChange={(event) => setGrade(event.target.value)} required />
          </div>
          <div>
            <label className="muted">Feedback</label>
            <Textarea
              value={feedback}
              onChange={(event) => setFeedback(event.target.value)}
              required
            />
          </div>
          <Button type="submit">Save evaluation</Button>
        </form>
      ) : evaluation ? (
        <div className="list-gap">
          <div>
            <strong>Grade:</strong> {evaluation.grade}
          </div>
          <div>
            <strong>Feedback:</strong>
            <p>{evaluation.feedback}</p>
          </div>
          <p className="muted">Last updated {new Date(evaluation.updatedAt).toLocaleString()}</p>
        </div>
      ) : (
        <p className="muted">No evaluation submitted yet.</p>
      )}
    </Card>
  );
};

export default EvaluationPanel;
