import React from 'react';

interface PageHeaderLayoutProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

const PageHeaderLayout: React.FC<PageHeaderLayoutProps> = ({
  title,
  subtitle,
  actions,
  children,
}) => {
  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">{title}</h2>
          {subtitle && <p className="muted">{subtitle}</p>}
        </div>
        {actions}
      </div>
      {children}
    </div>
  );
};

export default PageHeaderLayout;
