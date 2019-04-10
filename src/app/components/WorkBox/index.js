import React from 'react';
import { Link } from 'react-router-dom';

function WorkBox({ children, title, to }) {
  return (
    <Link to={to}>
      <div className="workBox">
        <span>{title}</span>
        {children}
      </div>
    </Link>
  );
}

export default WorkBox;
