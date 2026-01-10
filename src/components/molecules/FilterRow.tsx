import React from 'react';
import Select from '../atoms/Select';

interface FilterRowProps {
  level: string;
  status: string;
  role: string;
  onLevelChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onRoleChange: (value: string) => void;
}

const FilterRow: React.FC<FilterRowProps> = ({
  level,
  status,
  role,
  onLevelChange,
  onStatusChange,
  onRoleChange,
}) => {
  return (
    <div className="filter-row">
      <div>
        <Select value={level} onChange={(event) => onLevelChange(event.target.value)}>
          <option value="">All levels</option>
          <option value="BSc">BSc</option>
          <option value="MSc">MSc</option>
          <option value="PhD">PhD</option>
        </Select>
      </div>
      <div>
        <Select value={status} onChange={(event) => onStatusChange(event.target.value)}>
          <option value="">All status</option>
          <option value="OPEN">Open</option>
          <option value="MATCHED">Matched</option>
        </Select>
      </div>
      <div>
        <Select value={role} onChange={(event) => onRoleChange(event.target.value)}>
          <option value="">All creators</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
          <option value="OTHER">Other</option>
        </Select>
      </div>
    </div>
  );
};

export default FilterRow;
