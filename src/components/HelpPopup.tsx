// HelpPopup.tsx
import React from 'react';
import './HelpPopup.css'; // Add a CSS file for styling

const HelpPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="help-popup-overlay">
      <div className="help-popup">
        <h2>Help & Documentation</h2>
        <p>To navigate the website:</p>
        <ul>
          <li>Click on the navigation links to jump to different sections.</li>
          <li>Use the download button to save your resume.</li>
          <li>If you encounter errors, follow the messages to resolve them.</li>
          <li>Feel free to reach out via the contact section for any inquiries!</li>
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default HelpPopup;
