import React from 'react';
import Button from '../atoms/Button';
import Card from '../atoms/Card';
import Input from '../atoms/Input';
import Select from '../atoms/Select';
import Textarea from '../atoms/Textarea';
import { TopicLevel, User } from '../../models/types';

interface TopicFormProps {
  activeUser: User;
  onSubmit: (input: {
    title: string;
    description: string;
    level: TopicLevel;
    tags: string[];
  }) => void;
}

const TopicForm: React.FC<TopicFormProps> = ({ activeUser, onSubmit }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [level, setLevel] = React.useState<TopicLevel>('BSc');
  const [tags, setTags] = React.useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const tagList = tags
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);
    onSubmit({ title, description, level, tags: tagList });
    setTitle('');
    setDescription('');
    setLevel('BSc');
    setTags('');
  };

  return (
    <Card>
      <form className="list-gap" onSubmit={handleSubmit}>
        <div>
          <label className="muted">Title</label>
          <Input value={title} onChange={(event) => setTitle(event.target.value)} required />
        </div>
        <div>
          <label className="muted">Description</label>
          <Textarea value={description} onChange={(event) => setDescription(event.target.value)} required />
        </div>
        <div>
          <label className="muted">Level</label>
          <Select value={level} onChange={(event) => setLevel(event.target.value as TopicLevel)}>
            <option value="BSc">BSc</option>
            <option value="MSc">MSc</option>
            <option value="PhD">PhD</option>
          </Select>
        </div>
        <div>
          <label className="muted">Tags (comma separated)</label>
          <Input value={tags} onChange={(event) => setTags(event.target.value)} />
        </div>
        <div className="inline-actions">
          <Button type="submit" disabled={!title.trim() || !description.trim()}>
            Propose as {activeUser.name}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default TopicForm;
