import React from 'react';
import './StickyTitle.css'; // Ensure your styles are in this file

interface StickyTitleProps {
  title: string;
}

const StickyTitle: React.FC<StickyTitleProps> = ({ title }) => {
  return (
    <div className="sticky-title">
      <h2>{title}</h2>
    </div>
  );
};

export default StickyTitle;
