import React from 'react';
import { NavLink } from 'react-router-dom';
import UserSelector from '../molecules/UserSelector';
import Button from '../atoms/Button';
import { User } from '../../models/types';

interface AppShellProps {
  users: User[];
  activeUserId: string;
  onUserChange: (userId: string) => void;
  onReset: () => void;
  children: React.ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({
  users,
  activeUserId,
  onUserChange,
  onReset,
  children,
}) => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="container app-header-inner">
          <div>
            <h1 style={{ margin: 0 }}>MyThesis</h1>
            <p className="muted" style={{ margin: 0, color: '#d1d5db' }}>
              Desktop prototype
            </p>
          </div>
          <nav className="nav-links">
            <NavLink to="/topics">Topics</NavLink>
            <NavLink to="/matches">Matches</NavLink>
          </nav>
          <UserSelector users={users} activeUserId={activeUserId} onChange={onUserChange} />
        </div>
      </header>
      <main className="main-content">
        <div className="container">{children}</div>
      </main>
      <footer className="footer">
        <div className="container app-header-inner">
          <span>Demo data persists in localStorage.</span>
          <Button variant="secondary" onClick={onReset}>
            Reset demo data
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default AppShell;
